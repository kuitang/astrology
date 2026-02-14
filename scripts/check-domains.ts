#!/usr/bin/env node
/**
 * Domain availability checker for astrology project
 * Uses WhoisXML API (100 free queries) and API Ninjas (free tier)
 */

interface DomainResult {
  domain: string;
  available: boolean;
  price?: number;
  quality: number; // 1-10 subjective score
  reason: string;
}

// Domain name candidates - ranked by subjective quality
const DOMAIN_IDEAS = [
  // Top tier - short, memorable, exact match
  { name: 'cosmic-orrery', tlds: ['com', 'io', 'app'], quality: 10, reason: 'Perfect match, unique, memorable' },
  { name: 'astrology3d', tlds: ['com', 'io', 'app'], quality: 9, reason: 'Clear 3D focus, short' },
  { name: 'celestial-sphere', tlds: ['com', 'io', 'app'], quality: 9, reason: 'Evocative, astronomical' },

  // High tier - descriptive and brandable
  { name: 'live-planetarium', tlds: ['com', 'io', 'app'], quality: 8, reason: 'Interactive feel, clear purpose' },
  { name: 'star-chart-3d', tlds: ['com', 'io'], quality: 8, reason: 'Descriptive, SEO-friendly' },
  { name: 'orbital-astrology', tlds: ['com', 'io', 'app'], quality: 8, reason: 'Technical + mystical' },
  { name: 'astral-view', tlds: ['com', 'io', 'app'], quality: 7, reason: 'Short, visual' },

  // Good tier - clear but longer
  { name: 'interactive-cosmos', tlds: ['com', 'io'], quality: 7, reason: 'Clear interactive focus' },
  { name: 'planetary-dance', tlds: ['com', 'io'], quality: 7, reason: 'Poetic, movement-focused' },
  { name: 'zodiac-sphere', tlds: ['com', 'io'], quality: 7, reason: 'Zodiac focus, 3D implied' },

  // Solid tier - specific niche
  { name: 'natal-chart-3d', tlds: ['com', 'app'], quality: 6, reason: 'Very specific, niche' },
  { name: 'cosmic-transit', tlds: ['com', 'io'], quality: 6, reason: 'Transit focus' },
  { name: 'hellenistic-sky', tlds: ['com'], quality: 6, reason: 'Traditional astrology angle' },
];

async function checkDomainNinjas(domain: string): Promise<boolean | null> {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${domain}`, {
      headers: { 'X-Api-Key': process.env.API_NINJAS_KEY || '' }
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.error('API Ninjas: Missing or invalid API key. Get one at https://api-ninjas.com/');
        return null;
      }
      return null;
    }

    const data = await response.json();
    // If DNS lookup returns empty or error, domain might be available
    return !data || data.length === 0;
  } catch (error) {
    return null;
  }
}

async function checkDomainWhoisXML(domain: string): Promise<{ available: boolean; price?: number } | null> {
  const apiKey = process.env.WHOISXML_API_KEY;

  if (!apiKey) {
    console.error('WhoisXML API: Set WHOISXML_API_KEY environment variable');
    console.error('Get free API key (100 queries) at https://domain-availability.whoisxmlapi.com/');
    return null;
  }

  try {
    const url = `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${apiKey}&domainName=${domain}`;
    const response = await fetch(url);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return {
      available: data.DomainInfo?.domainAvailability === 'AVAILABLE',
      price: data.DomainInfo?.price
    };
  } catch (error) {
    return null;
  }
}

async function checkDomainBasic(domain: string): Promise<boolean | null> {
  // Basic DNS lookup - if it resolves, domain is taken
  try {
    const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
    const data = await response.json();
    // If we get answers, domain is registered
    return !data.Answer || data.Answer.length === 0;
  } catch {
    return null;
  }
}

async function checkDomain(name: string, tld: string, quality: number, reason: string): Promise<DomainResult> {
  const domain = `${name}.${tld}`;

  // Try WhoisXML first (has pricing info)
  if (process.env.WHOISXML_API_KEY) {
    const whoisResult = await checkDomainWhoisXML(domain);
    if (whoisResult !== null) {
      return {
        domain,
        available: whoisResult.available,
        price: whoisResult.price,
        quality,
        reason
      };
    }
  }

  // Fallback to API Ninjas
  if (process.env.API_NINJAS_KEY) {
    const ninjasResult = await checkDomainNinjas(domain);
    if (ninjasResult !== null) {
      return {
        domain,
        available: ninjasResult,
        quality,
        reason
      };
    }
  }

  // Final fallback: basic DNS check (free, no API key needed)
  const basicResult = await checkDomainBasic(domain);
  if (basicResult !== null) {
    return {
      domain,
      available: basicResult,
      quality,
      reason: `${reason} (basic check)`
    };
  }

  // No API available - return unknown
  return {
    domain,
    available: false,
    quality,
    reason: `${reason} (could not verify)`
  };
}

async function main() {
  console.log('🔍 Checking domain availability for astrology project...\n');

  if (!process.env.WHOISXML_API_KEY && !process.env.API_NINJAS_KEY) {
    console.log('⚠️  No API keys found - using basic DNS checks (less accurate)');
    console.log('   For better results with pricing, set WHOISXML_API_KEY');
    console.log('   Get free key: https://domain-availability.whoisxmlapi.com/\n');
  }

  const results: DomainResult[] = [];

  for (const idea of DOMAIN_IDEAS) {
    for (const tld of idea.tlds) {
      const result = await checkDomain(idea.name, tld, idea.quality, idea.reason);
      results.push(result);

      // Rate limiting - wait 100ms between requests
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  // Sort by: available first, then quality, then price
  results.sort((a, b) => {
    if (a.available !== b.available) return a.available ? -1 : 1;
    if (a.quality !== b.quality) return b.quality - a.quality;
    if (a.price && b.price) return a.price - b.price;
    return 0;
  });

  // Display results
  console.log('\n📊 RESULTS (sorted by availability, quality, price)\n');
  console.log('=' .repeat(80));

  const available = results.filter(r => r.available);
  const unavailable = results.filter(r => !r.available);

  if (available.length > 0) {
    console.log('\n✅ AVAILABLE DOMAINS:\n');
    available.forEach(r => {
      const priceStr = r.price ? `$${r.price}/yr` : 'price unknown';
      console.log(`  ${r.domain.padEnd(30)} | Quality: ${r.quality}/10 | ${priceStr}`);
      console.log(`    → ${r.reason}`);
    });
  }

  if (unavailable.length > 0) {
    console.log('\n❌ UNAVAILABLE DOMAINS:\n');
    unavailable.forEach(r => {
      console.log(`  ${r.domain.padEnd(30)} | Quality: ${r.quality}/10`);
    });
  }

  // Summary
  console.log('\n' + '='.repeat(80));
  console.log(`\n📈 Summary: ${available.length} available, ${unavailable.length} unavailable`);

  if (available.length > 0) {
    console.log(`\n🏆 Top recommendation: ${available[0].domain}`);
    console.log(`   Quality: ${available[0].quality}/10 - ${available[0].reason}`);
    if (available[0].price) {
      console.log(`   Price: $${available[0].price}/year`);
    }
  }

  console.log('\n💡 Next steps:');
  console.log('   1. Register your favorite domain at Namecheap or GoDaddy');
  console.log('   2. Configure GitHub Pages with custom domain in repo settings');
  console.log('   3. Add CNAME file to project root with your domain name\n');
}

// Run
main().catch(console.error);
