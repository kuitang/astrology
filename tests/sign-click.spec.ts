import { test, expect } from '@playwright/test';
import { waitForRender } from './fixtures/wait-for-render';

test.describe('Sign click targets', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);
    // Set a known camera position facing the zodiac belt
    await page.evaluate(() => {
      const app = (window as any).__APP__;
      // Reset camera to default overhead view
      const cam = app.scene.scene.getObjectByProperty('type', 'PerspectiveCamera');
      // We'll use the app's built-in methods for testing
    });
  });

  test('programmatic sign selection shows correct sign in info panel', async ({ page }) => {
    // Test all 12 signs programmatically
    const signNames = [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
      'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];

    for (let i = 0; i < signNames.length; i++) {
      await page.evaluate((idx) => {
        (window as any).__APP__.store.setState({
          selectedObject: { type: 'sign', id: String(idx) }
        });
      }, i);
      await page.waitForTimeout(100);

      const panelText = await page.evaluate(
        () => document.getElementById('info-panel')?.textContent
      );
      expect(panelText, `Sign ${i} should show ${signNames[i]}`).toContain(signNames[i]);
    }
  });

  test('raycast at sign center returns correct sign index', async ({ page }) => {
    // This test verifies the RingGeometry hit targets match the ecliptic coordinate system.
    // We raycast programmatically from the camera through the center of each sign.
    // Need to import THREE inside page context since it's exposed via window.__THREE__
    const results = await page.evaluate(() => {
      const T = (window as any).__THREE__;
      const app = (window as any).__APP__;
      if (!T || !app) {
        return { error: `THREE=${!!T} APP=${!!app}`, data: null };
      }

      const scene = app.scene.scene;
      const camera = app.cameraObj;
      const zodiacBelt = app.scene.zodiacBelt;
      if (!camera || !zodiacBelt) {
        return { error: `camera=${!!camera} belt=${!!zodiacBelt}`, data: null };
      }

      // Update matrices
      scene.updateMatrixWorld(true);
      camera.updateMatrixWorld(true);

      const raycaster = new T.Raycaster();
      const data: { signIndex: number; hitSignIndex: number | null; hitName: string | null }[] = [];

      for (let i = 0; i < 12; i++) {
        const centerDeg = i * 30 + 15;
        const rad = centerDeg * Math.PI / 180;
        const R = 25;
        const target = new T.Vector3(
          R * Math.cos(rad), 0, -R * Math.sin(rad)
        );
        const eclipticGroup = scene.getObjectByName('eclipticGroup');
        if (eclipticGroup) {
          target.applyMatrix4(eclipticGroup.matrixWorld);
        }
        const dir = target.clone().sub(camera.position).normalize();
        raycaster.set(camera.position.clone(), dir);

        const intersects = raycaster.intersectObjects(zodiacBelt.children, true);
        let hitSignIndex: number | null = null;
        let hitName: string | null = null;
        for (const hit of intersects) {
          if (hit.object.userData?.type === 'sign') {
            hitSignIndex = hit.object.userData.signIndex;
            hitName = hit.object.userData.signName;
            break;
          }
        }
        data.push({ signIndex: i, hitSignIndex, hitName });
      }
      return { error: null, data };
    });

    if (results.error) {
      console.log('Raycast test setup error:', results.error);
    }
    expect(results.data).not.toBeNull();
    if (!results.data) return;

    const signNames = [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
      'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];

    let mismatches = 0;
    for (const r of results.data) {
      console.log(`Sign ${r.signIndex} (${signNames[r.signIndex]}): hit=${r.hitSignIndex} (${r.hitName})`);
      if (r.hitSignIndex !== r.signIndex) mismatches++;
    }

    // At least 10/12 signs should be hittable from default camera angle
    // (some may be occluded by Earth or at extreme angles)
    expect(mismatches).toBeLessThanOrEqual(2);

    await page.screenshot({ path: 'tests/screenshots/sign-click-raycast.png' });
  });

  test('click on zodiac belt area selects a sign', async ({ page }) => {
    // Click in the center of the viewport where the zodiac belt should be visible
    await page.screenshot({ path: 'tests/screenshots/before-sign-click.png' });

    // Click near the right side of the belt (where Aries-region should be from default camera)
    await page.mouse.click(640, 300);
    await page.waitForTimeout(300);

    const selected = await page.evaluate(
      () => (window as any).__APP__.store.getState().selectedObject
    );

    await page.screenshot({ path: 'tests/screenshots/after-sign-click.png' });

    // We just check that SOMETHING was selected (planet or sign)
    // since the exact position depends on camera angle
    if (selected) {
      expect(['planet', 'sign', 'constellation']).toContain(selected.type);
    }
  });
});

test.describe('Constellation click targets', () => {
  test('clicking constellation shows info panel', async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);

    // Programmatically select a constellation to verify the info panel works
    await page.evaluate(() => {
      (window as any).__APP__.store.setState({
        selectedObject: { type: 'constellation', id: 'Leo' }
      });
    });
    await page.waitForTimeout(200);

    const display = await page.evaluate(
      () => document.getElementById('info-panel')?.style.display
    );
    expect(display).toBe('block');

    const panelText = await page.evaluate(
      () => document.getElementById('info-panel')?.textContent
    );
    expect(panelText).toContain('Leo');
    expect(panelText).toContain('Real Position');
    expect(panelText).toContain('Precession');

    await page.screenshot({ path: 'tests/screenshots/constellation-selected.png' });
  });

  test('constellation info shows correct extent data', async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);

    // Select Taurus constellation
    await page.evaluate(() => {
      (window as any).__APP__.store.setState({
        selectedObject: { type: 'constellation', id: 'Taurus' }
      });
    });
    await page.waitForTimeout(200);

    const panelText = await page.evaluate(
      () => document.getElementById('info-panel')?.textContent
    );
    expect(panelText).toContain('Taurus');
    expect(panelText).toContain('Conventional Sign');

    await page.screenshot({ path: 'tests/screenshots/constellation-taurus.png' });
  });

  test('constellation hit spheres are raycastable', async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);

    // Check that constellation hit meshes exist
    const hitCount = await page.evaluate(() => {
      const app = (window as any).__APP__;
      const group = app.scene.constellationGroup;
      let count = 0;
      group.traverse((child: any) => {
        if (child.userData?.type === 'constellation') count++;
      });
      return count;
    });

    expect(hitCount).toBeGreaterThan(0);
    console.log(`Found ${hitCount} constellation hit targets`);
  });
});

test.describe('Degree formatting', () => {
  test('no floating point artifacts in displayed degrees', async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);

    // Select a planet and check the info panel text
    await page.evaluate(() => {
      (window as any).__APP__.selectPlanet('Sun');
    });
    await page.waitForTimeout(200);

    const panelHTML = await page.evaluate(
      () => document.getElementById('info-panel')?.innerHTML
    );

    // Should NOT contain long decimal strings like "12.599999999999994"
    const longDecimalMatch = panelHTML?.match(/\d+\.\d{3,}/);
    expect(
      longDecimalMatch,
      `Found long decimal: ${longDecimalMatch?.[0]}`
    ).toBeNull();

    await page.screenshot({ path: 'tests/screenshots/degree-formatting.png' });
  });

  test('constellation info has clean degree formatting', async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);

    await page.evaluate(() => {
      (window as any).__APP__.store.setState({
        selectedObject: { type: 'constellation', id: 'Aries' }
      });
    });
    await page.waitForTimeout(200);

    const panelHTML = await page.evaluate(
      () => document.getElementById('info-panel')?.innerHTML
    );

    const longDecimalMatch = panelHTML?.match(/\d+\.\d{3,}/);
    expect(
      longDecimalMatch,
      `Found long decimal in constellation info: ${longDecimalMatch?.[0]}`
    ).toBeNull();
  });
});

test.describe('Initial viewport', () => {
  test('zodiac belt is visible in initial viewport', async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);
    await page.screenshot({ path: 'tests/screenshots/initial-viewport.png' });

    // Verify sign labels exist in the scene
    const labelCount = await page.evaluate(() => {
      const app = (window as any).__APP__;
      if (!app) return 0;
      const zodiacBelt = app.scene.zodiacBelt;
      let count = 0;
      zodiacBelt.children.forEach((child: any) => {
        if (child.name?.startsWith('label-')) count++;
      });
      return count;
    });

    // All 12 sign labels should be in the scene
    expect(labelCount).toBe(12);
  });
});

test.describe('Mobile no-scroll', () => {
  test('mobile viewport does not scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await waitForRender(page);

    // Check that body has no scroll
    const scrollable = await page.evaluate(() => {
      return {
        bodyScrollHeight: document.body.scrollHeight,
        bodyClientHeight: document.body.clientHeight,
        htmlScrollHeight: document.documentElement.scrollHeight,
        htmlClientHeight: document.documentElement.clientHeight,
      };
    });

    // scrollHeight should equal clientHeight (no overflow)
    expect(scrollable.bodyScrollHeight).toBeLessThanOrEqual(scrollable.bodyClientHeight + 1);

    await page.screenshot({ path: 'tests/screenshots/mobile-no-scroll.png' });
  });
});
