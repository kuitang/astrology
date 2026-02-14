/**
 * Transit interpretations from a traditional Hellenistic perspective.
 * Key: "Planet-Sign" (e.g. "Sun-Leo")
 * Each entry: 1-2 sentence brief + keywords.
 */

export interface TransitInterpretation {
  brief: string;
  keywords: string[];
}

export interface PlanetaryPeriod {
  siderealPeriod: string;
  signDuration: string;
}

export const PLANETARY_PERIODS: Record<string, PlanetaryPeriod> = {
  Sun:     { siderealPeriod: '1 year',       signDuration: '~30 days' },
  Moon:    { siderealPeriod: '27.3 days',    signDuration: '~2.5 days' },
  Mercury: { siderealPeriod: '88 days',      signDuration: '~14–30 days' },
  Venus:   { siderealPeriod: '225 days',     signDuration: '~23–60 days' },
  Mars:    { siderealPeriod: '1.88 years',   signDuration: '~6 weeks' },
  Jupiter: { siderealPeriod: '11.86 years',  signDuration: '~1 year' },
  Saturn:  { siderealPeriod: '29.46 years',  signDuration: '~2.5 years' },
  Uranus:  { siderealPeriod: '84 years',     signDuration: '~7 years' },
  Neptune: { siderealPeriod: '164.8 years',  signDuration: '~14 years' },
  Pluto:   { siderealPeriod: '248 years',    signDuration: '~12–31 years' },
};

// prettier-ignore
export const TRANSIT_INTERPRETATIONS: Record<string, TransitInterpretation> = {
  // ─── SUN ─────────────────────────────────────────
  'Sun-Aries':       { brief: 'The Sun is exalted in Aries, radiating cardinal fire with maximum vigor. Initiative and self-assertion reach their peak.', keywords: ['exaltation', 'initiative', 'vigor', 'leadership'] },
  'Sun-Taurus':      { brief: 'The Sun in fixed earth steadies the vital force, favoring material growth and sensory enjoyment.', keywords: ['stability', 'material', 'endurance', 'pleasure'] },
  'Sun-Gemini':      { brief: 'The Sun in mutable air quickens the mind. Communication, curiosity, and social exchange are highlighted.', keywords: ['intellect', 'communication', 'duality', 'curiosity'] },
  'Sun-Cancer':      { brief: 'The Sun in Cancer illuminates matters of home, lineage, and emotional security. Nurturing instincts are strong.', keywords: ['home', 'family', 'nurturing', 'roots'] },
  'Sun-Leo':         { brief: 'The Sun in domicile rules with full dignity—creative vitality, authority, and self-expression flow freely.', keywords: ['domicile', 'creativity', 'authority', 'radiance'] },
  'Sun-Virgo':       { brief: 'The Sun in mutable earth sharpens discernment. Service, craft, and attention to health are emphasized.', keywords: ['craft', 'discernment', 'health', 'service'] },
  'Sun-Libra':       { brief: 'The Sun is in fall in Libra, diminishing self-assertion in favor of partnership and compromise.', keywords: ['fall', 'partnership', 'balance', 'diplomacy'] },
  'Sun-Scorpio':     { brief: 'The Sun in fixed water probes hidden depths. Transformation, intensity, and confrontation with mortality arise.', keywords: ['depth', 'transformation', 'intensity', 'power'] },
  'Sun-Sagittarius': { brief: 'The Sun in mutable fire kindles philosophical vision. Travel, teaching, and expansion of horizons are favored.', keywords: ['philosophy', 'travel', 'expansion', 'truth'] },
  'Sun-Capricorn':   { brief: 'The Sun enters its winter exile—ambition, discipline, and long-term structure take precedence over spontaneity.', keywords: ['ambition', 'discipline', 'structure', 'patience'] },
  'Sun-Aquarius':    { brief: 'The Sun in detriment yields individual will to collective ideals. Innovation and reform arise but ego struggles.', keywords: ['detriment', 'collective', 'innovation', 'reform'] },
  'Sun-Pisces':      { brief: 'The Sun dissolves in mutable water—spirituality, compassion, and imagination thrive, though clarity may wane.', keywords: ['spirituality', 'compassion', 'imagination', 'dissolution'] },

  // ─── MOON ────────────────────────────────────────
  'Moon-Aries':       { brief: 'The Moon in Aries is restless and reactive. Emotional impulses are swift but fleeting.', keywords: ['impulse', 'courage', 'impatience', 'action'] },
  'Moon-Taurus':      { brief: 'The Moon is exalted in Taurus—emotional steadiness, comfort, and sensory contentment are at their finest.', keywords: ['exaltation', 'comfort', 'steadiness', 'contentment'] },
  'Moon-Gemini':      { brief: 'The Moon in Gemini makes feelings articulate but changeable. Emotional processing through conversation.', keywords: ['articulate', 'changeable', 'curious', 'restless'] },
  'Moon-Cancer':      { brief: 'The Moon in domicile is deeply attuned to emotional tides—nurturing, protective, and intuitively perceptive.', keywords: ['domicile', 'nurturing', 'intuition', 'protection'] },
  'Moon-Leo':         { brief: 'The Moon in Leo craves emotional recognition and warmth. Generosity of heart and dramatic feeling.', keywords: ['warmth', 'recognition', 'generosity', 'pride'] },
  'Moon-Virgo':       { brief: 'The Moon in Virgo channels emotion into practical care. Feelings are processed analytically.', keywords: ['practical', 'analytical', 'service', 'modesty'] },
  'Moon-Libra':       { brief: 'The Moon seeks emotional harmony through relationship. Aesthetic sensitivity and social grace.', keywords: ['harmony', 'relationship', 'grace', 'beauty'] },
  'Moon-Scorpio':     { brief: 'The Moon in fall in Scorpio experiences emotions with piercing intensity. Depth and possessiveness in feeling.', keywords: ['fall', 'intensity', 'depth', 'possessiveness'] },
  'Moon-Sagittarius': { brief: 'The Moon in Sagittarius needs emotional freedom and meaning. Feelings are expansive and philosophical.', keywords: ['freedom', 'optimism', 'wanderlust', 'meaning'] },
  'Moon-Capricorn':   { brief: 'The Moon in detriment suppresses emotional display. Duty and responsibility govern the inner life.', keywords: ['detriment', 'duty', 'restraint', 'endurance'] },
  'Moon-Aquarius':    { brief: 'The Moon in Aquarius detaches from personal feeling in favor of ideals. Emotional independence and humanitarianism.', keywords: ['detachment', 'idealism', 'independence', 'reform'] },
  'Moon-Pisces':      { brief: 'The Moon in Pisces absorbs all feeling like a sponge—empathy, imagination, and spiritual sensitivity are heightened.', keywords: ['empathy', 'imagination', 'sensitivity', 'dreams'] },

  // ─── MERCURY ─────────────────────────────────────
  'Mercury-Aries':       { brief: 'Mercury in Aries thinks and speaks quickly—bold assertions, sharp debate, but impatience with nuance.', keywords: ['quick', 'bold', 'debate', 'impatience'] },
  'Mercury-Taurus':      { brief: 'Mercury in Taurus deliberates slowly but thoroughly. Practical thinking and a talent for financial matters.', keywords: ['deliberate', 'practical', 'thorough', 'financial'] },
  'Mercury-Gemini':      { brief: 'Mercury in domicile is brilliant and versatile—the mind is agile, eloquent, and endlessly curious.', keywords: ['domicile', 'agile', 'eloquent', 'versatile'] },
  'Mercury-Cancer':      { brief: 'Mercury in Cancer thinks with feeling. Memory is strong, communication is protective and indirect.', keywords: ['memory', 'feeling', 'protective', 'indirect'] },
  'Mercury-Leo':         { brief: 'Mercury in Leo speaks with authority and dramatic flair. Ideas are grand but may resist criticism.', keywords: ['authority', 'dramatic', 'grand', 'proud'] },
  'Mercury-Virgo':       { brief: 'Mercury in domicile and exaltation—analytical precision, methodical reasoning, and mastery of detail.', keywords: ['domicile', 'exaltation', 'precision', 'analysis'] },
  'Mercury-Libra':       { brief: 'Mercury in Libra weighs all sides with diplomatic eloquence. Indecision may accompany fairness.', keywords: ['diplomatic', 'balanced', 'eloquent', 'indecisive'] },
  'Mercury-Scorpio':     { brief: 'Mercury in Scorpio probes beneath surfaces. Investigative mind, strategic speech, secretive tendencies.', keywords: ['investigative', 'strategic', 'probing', 'secretive'] },
  'Mercury-Sagittarius': { brief: 'Mercury in detriment speaks broadly but loosely. Philosophical vision may outpace precision.', keywords: ['detriment', 'philosophical', 'broad', 'exaggeration'] },
  'Mercury-Capricorn':   { brief: 'Mercury in Capricorn is structured and cautious. Communication serves practical ambition.', keywords: ['structured', 'cautious', 'ambitious', 'practical'] },
  'Mercury-Aquarius':    { brief: 'Mercury in Aquarius thinks innovatively and abstractly. Original ideas, unconventional communication.', keywords: ['innovative', 'abstract', 'original', 'unconventional'] },
  'Mercury-Pisces':      { brief: 'Mercury in detriment and fall struggles with clarity. Intuitive understanding replaces logical precision.', keywords: ['detriment', 'fall', 'intuitive', 'poetic'] },

  // ─── VENUS ───────────────────────────────────────
  'Venus-Aries':       { brief: 'Venus in detriment pursues desire impulsively. Passion is bold but may lack staying power.', keywords: ['detriment', 'impulsive', 'passionate', 'bold'] },
  'Venus-Taurus':      { brief: 'Venus in domicile savors earthly beauty—love is sensual, loyal, and deeply rooted in pleasure.', keywords: ['domicile', 'sensual', 'loyal', 'pleasure'] },
  'Venus-Gemini':      { brief: 'Venus in Gemini flirts with ideas and variety. Charm through wit and social versatility.', keywords: ['witty', 'versatile', 'flirtatious', 'social'] },
  'Venus-Cancer':      { brief: 'Venus in Cancer loves protectively and nostalgically. Emotional bonds and domestic beauty are prized.', keywords: ['protective', 'nostalgic', 'domestic', 'tender'] },
  'Venus-Leo':         { brief: 'Venus in Leo loves grandly and generously. Romance is dramatic, loyal, and craves admiration.', keywords: ['generous', 'dramatic', 'loyal', 'admiration'] },
  'Venus-Virgo':       { brief: 'Venus in fall expresses love through service and practical care. Modesty may inhibit romantic expression.', keywords: ['fall', 'service', 'modest', 'practical'] },
  'Venus-Libra':       { brief: 'Venus in domicile creates harmony through relationship—beauty, grace, and social refinement at their height.', keywords: ['domicile', 'harmony', 'grace', 'refinement'] },
  'Venus-Scorpio':     { brief: 'Venus in detriment loves with consuming intensity. Desire is deep, jealous, and transformative.', keywords: ['detriment', 'intense', 'jealous', 'transformative'] },
  'Venus-Sagittarius': { brief: 'Venus in Sagittarius loves freedom and adventure. Attraction to foreign cultures and philosophical minds.', keywords: ['freedom', 'adventure', 'philosophical', 'expansive'] },
  'Venus-Capricorn':   { brief: 'Venus in Capricorn values loyalty and tradition. Love is expressed through commitment and material security.', keywords: ['tradition', 'commitment', 'reserved', 'enduring'] },
  'Venus-Aquarius':    { brief: 'Venus in Aquarius values friendship and intellectual connection over romance. Unconventional relationships.', keywords: ['friendship', 'intellectual', 'unconventional', 'detached'] },
  'Venus-Pisces':      { brief: 'Venus is exalted in Pisces—love is transcendent, compassionate, and boundlessly devoted.', keywords: ['exaltation', 'transcendent', 'compassion', 'devotion'] },

  // ─── MARS ────────────────────────────────────────
  'Mars-Aries':       { brief: 'Mars in domicile is the warrior fully armed—decisive action, courage, and competitive drive at their peak.', keywords: ['domicile', 'courage', 'decisive', 'competitive'] },
  'Mars-Taurus':      { brief: 'Mars in Taurus fights slowly but immovably. Persistence in effort, resistance to change.', keywords: ['persistent', 'stubborn', 'steady', 'enduring'] },
  'Mars-Gemini':      { brief: 'Mars in Gemini wields words as weapons. Mental agility in conflict, scattered energy in action.', keywords: ['verbal', 'agile', 'scattered', 'argumentative'] },
  'Mars-Cancer':      { brief: 'Mars in fall fights defensively and emotionally. Protective aggression, passive-aggressive tendencies.', keywords: ['fall', 'defensive', 'emotional', 'protective'] },
  'Mars-Leo':         { brief: 'Mars in Leo acts with heroic boldness and pride. Ambition for recognition, generous in victory.', keywords: ['heroic', 'proud', 'ambitious', 'generous'] },
  'Mars-Virgo':       { brief: 'Mars in Virgo applies force with surgical precision. Critical action, methodical in conflict.', keywords: ['precise', 'methodical', 'critical', 'efficient'] },
  'Mars-Libra':       { brief: 'Mars in detriment struggles to act decisively. Conflict is sublimated into negotiation and strategy.', keywords: ['detriment', 'indecisive', 'strategic', 'diplomatic'] },
  'Mars-Scorpio':     { brief: 'Mars in domicile operates with calculated intensity. Strategic power, relentless willpower.', keywords: ['domicile', 'strategic', 'intense', 'relentless'] },
  'Mars-Sagittarius': { brief: 'Mars in Sagittarius fights for beliefs and principles. Crusading energy, righteous action.', keywords: ['crusading', 'righteous', 'expansive', 'restless'] },
  'Mars-Capricorn':   { brief: 'Mars is exalted in Capricorn—disciplined, strategic, and relentless in pursuing long-term goals.', keywords: ['exaltation', 'disciplined', 'strategic', 'ambitious'] },
  'Mars-Aquarius':    { brief: 'Mars in Aquarius fights for reform and collective causes. Unconventional tactics, ideological drive.', keywords: ['reform', 'unconventional', 'ideological', 'rebellious'] },
  'Mars-Pisces':      { brief: 'Mars in Pisces acts on intuition and compassion. Spiritual warfare, but diffuse energy.', keywords: ['intuitive', 'compassionate', 'diffuse', 'spiritual'] },

  // ─── JUPITER ─────────────────────────────────────
  'Jupiter-Aries':       { brief: 'Jupiter in Aries expands through bold initiative. Enthusiasm for new ventures, optimistic leadership.', keywords: ['initiative', 'enthusiasm', 'leadership', 'bold'] },
  'Jupiter-Taurus':      { brief: 'Jupiter in Taurus grows wealth and material abundance. Expansion through patient accumulation.', keywords: ['wealth', 'abundance', 'patient', 'material'] },
  'Jupiter-Gemini':      { brief: 'Jupiter in detriment scatters beneficence too widely. Many interests, difficulty with focus.', keywords: ['detriment', 'scattered', 'curious', 'versatile'] },
  'Jupiter-Cancer':      { brief: 'Jupiter is exalted in Cancer—generosity, emotional wisdom, and protective abundance overflow.', keywords: ['exaltation', 'generosity', 'wisdom', 'abundance'] },
  'Jupiter-Leo':         { brief: 'Jupiter in Leo magnifies creative expression and generosity. Confidence borders on excess.', keywords: ['magnanimous', 'creative', 'confident', 'excess'] },
  'Jupiter-Virgo':       { brief: 'Jupiter in detriment finds expansion through service and detail. Growth through humility and skill.', keywords: ['detriment', 'service', 'humility', 'skill'] },
  'Jupiter-Libra':       { brief: 'Jupiter in Libra grows through partnership and justice. Social expansion, legal beneficence.', keywords: ['partnership', 'justice', 'social', 'diplomatic'] },
  'Jupiter-Scorpio':     { brief: 'Jupiter in Scorpio expands into hidden depths. Growth through transformation and shared resources.', keywords: ['transformation', 'depth', 'shared resources', 'occult'] },
  'Jupiter-Sagittarius': { brief: 'Jupiter in domicile bestows its fullest blessings—wisdom, faith, travel, and philosophical truth abound.', keywords: ['domicile', 'wisdom', 'faith', 'truth'] },
  'Jupiter-Capricorn':   { brief: 'Jupiter in fall constrains expansion. Growth requires patience, structure, and hard-won authority.', keywords: ['fall', 'constrained', 'patience', 'authority'] },
  'Jupiter-Aquarius':    { brief: 'Jupiter in Aquarius expands through innovation and social ideals. Humanitarian vision, collective growth.', keywords: ['innovation', 'humanitarian', 'collective', 'visionary'] },
  'Jupiter-Pisces':      { brief: 'Jupiter in domicile dissolves boundaries—spiritual abundance, compassion, and imaginative faith flourish.', keywords: ['domicile', 'spiritual', 'compassion', 'faith'] },

  // ─── SATURN ──────────────────────────────────────
  'Saturn-Aries':       { brief: 'Saturn in fall restrains initiative with caution. Frustration with authority, hard lessons in self-assertion.', keywords: ['fall', 'caution', 'frustration', 'discipline'] },
  'Saturn-Taurus':      { brief: 'Saturn in Taurus tests material security. Slow accumulation, lessons in patience and self-worth.', keywords: ['material', 'patience', 'austerity', 'endurance'] },
  'Saturn-Gemini':      { brief: 'Saturn in Gemini disciplines the mind. Communication becomes more careful, learning more structured.', keywords: ['discipline', 'careful', 'structured', 'mental'] },
  'Saturn-Cancer':      { brief: 'Saturn in detriment burdens emotional life. Family obligations, lessons in emotional boundaries.', keywords: ['detriment', 'burden', 'boundaries', 'family'] },
  'Saturn-Leo':         { brief: 'Saturn in detriment tests creative confidence. Authority must be earned, ego refined through hardship.', keywords: ['detriment', 'test', 'authority', 'humility'] },
  'Saturn-Virgo':       { brief: 'Saturn in Virgo perfects through discipline. Health regimens, work ethics, and mastery of craft.', keywords: ['perfection', 'discipline', 'craft', 'health'] },
  'Saturn-Libra':       { brief: 'Saturn is exalted in Libra—justice, fairness, and relational commitments are tested and strengthened.', keywords: ['exaltation', 'justice', 'commitment', 'fairness'] },
  'Saturn-Scorpio':     { brief: 'Saturn in Scorpio confronts mortality and shared power. Transformation through endurance and control.', keywords: ['mortality', 'endurance', 'control', 'transformation'] },
  'Saturn-Sagittarius': { brief: 'Saturn in Sagittarius tests beliefs and faith. Philosophical maturity through doubt and discipline.', keywords: ['faith', 'doubt', 'maturity', 'philosophical'] },
  'Saturn-Capricorn':   { brief: 'Saturn in domicile governs with full authority—structure, ambition, and mastery of worldly achievement.', keywords: ['domicile', 'authority', 'mastery', 'achievement'] },
  'Saturn-Aquarius':    { brief: 'Saturn in domicile builds lasting social structures. Reform through discipline, visionary pragmatism.', keywords: ['domicile', 'reform', 'structure', 'visionary'] },
  'Saturn-Pisces':      { brief: 'Saturn in Pisces dissolves old structures. Spiritual discipline, confrontation with formlessness.', keywords: ['dissolution', 'spiritual', 'surrender', 'formlessness'] },

  // ─── OUTER PLANETS (generic, slow-moving) ───────
  'Uranus-generic':  { brief: 'Uranus disrupts and innovates wherever it transits. Sudden changes, liberation from old patterns.', keywords: ['disruption', 'innovation', 'liberation', 'sudden'] },
  'Neptune-generic': { brief: 'Neptune dissolves boundaries and inspires transcendence. Idealism, confusion, and spiritual longing.', keywords: ['dissolution', 'transcendence', 'idealism', 'confusion'] },
  'Pluto-generic':   { brief: 'Pluto transforms through destruction and regeneration. Power, obsession, and evolutionary pressure.', keywords: ['transformation', 'power', 'regeneration', 'obsession'] },

  // ─── RISING (ASCENDANT) ─────────────────────────
  'Rising-Aries':       { brief: 'Aries rising presents a bold, direct first impression. The native leads with courage and initiative — life is approached as a conquest.', keywords: ['Mars-ruled', 'bold', 'initiative', 'direct'] },
  'Rising-Taurus':      { brief: 'Taurus rising gives a calm, steady presence. The native moves through life with patience and sensual awareness, ruled by Venus.', keywords: ['Venus-ruled', 'steady', 'sensual', 'patient'] },
  'Rising-Gemini':      { brief: 'Gemini rising presents a curious, talkative personality. Mercury rules the chart — the native engages the world through language and connection.', keywords: ['Mercury-ruled', 'curious', 'versatile', 'communicative'] },
  'Rising-Cancer':      { brief: 'Cancer rising gives a nurturing, protective demeanor. The Moon rules the chart — the native is deeply shaped by emotional tides and family bonds.', keywords: ['Moon-ruled', 'nurturing', 'sensitive', 'protective'] },
  'Rising-Leo':         { brief: 'Leo rising radiates warmth and presence. The Sun rules the chart — the native is called to shine, create, and lead with generous spirit.', keywords: ['Sun-ruled', 'radiant', 'generous', 'dramatic'] },
  'Rising-Virgo':       { brief: 'Virgo rising presents a modest, analytical exterior. Mercury rules the chart — the native refines the world through discernment and service.', keywords: ['Mercury-ruled', 'analytical', 'modest', 'discerning'] },
  'Rising-Libra':       { brief: 'Libra rising creates a graceful, diplomatic first impression. Venus rules the chart — relationships and aesthetics shape the life path.', keywords: ['Venus-ruled', 'graceful', 'diplomatic', 'relational'] },
  'Rising-Scorpio':     { brief: 'Scorpio rising gives an intense, magnetic presence. Mars rules the chart traditionally — the native confronts life with penetrating depth.', keywords: ['Mars-ruled', 'intense', 'magnetic', 'penetrating'] },
  'Rising-Sagittarius': { brief: 'Sagittarius rising presents an optimistic, expansive personality. Jupiter rules the chart — the native seeks meaning through adventure and philosophy.', keywords: ['Jupiter-ruled', 'optimistic', 'expansive', 'philosophical'] },
  'Rising-Capricorn':   { brief: 'Capricorn rising gives a serious, composed exterior. Saturn rules the chart — the native builds life through discipline, patience, and authority.', keywords: ['Saturn-ruled', 'serious', 'disciplined', 'authoritative'] },
  'Rising-Aquarius':    { brief: 'Aquarius rising presents an unconventional, independent persona. Saturn rules traditionally — the native stands apart as a reformer and thinker.', keywords: ['Saturn-ruled', 'independent', 'unconventional', 'visionary'] },
  'Rising-Pisces':      { brief: 'Pisces rising gives a gentle, ethereal presence. Jupiter rules traditionally — the native navigates life through intuition, imagination, and faith.', keywords: ['Jupiter-ruled', 'ethereal', 'intuitive', 'compassionate'] },
};

/** Look up interpretation for a planet-sign combination */
export function getInterpretation(planet: string, sign: string): TransitInterpretation | null {
  // Try specific key first
  const key = `${planet}-${sign}`;
  if (TRANSIT_INTERPRETATIONS[key]) return TRANSIT_INTERPRETATIONS[key];
  // Fall back to generic for outer planets
  const genericKey = `${planet}-generic`;
  if (TRANSIT_INTERPRETATIONS[genericKey]) return TRANSIT_INTERPRETATIONS[genericKey];
  return null;
}

/** Look up interpretation for the Rising (Ascendant) sign */
export function getRisingInterpretation(sign: string): TransitInterpretation | null {
  const key = `Rising-${sign}`;
  return TRANSIT_INTERPRETATIONS[key] ?? null;
}
