import type { Interpretation } from './interpretations.js';

// prettier-ignore
export const TRANSIT_INTERPRETATIONS: Record<string, Interpretation> = {

  // ─── SUN ───────────────────────────────────────────────────────────────────────

  'Sun-Aries': {
    brief:
      'The Sun enters its exaltation here, and the effect is unmistakable — a surge of raw initiative floods the atmosphere. New ventures launch with startling confidence, and hesitation feels almost impossible. This is the season of bold firsts and unapologetic ambition.',
    keywords: ['initiative', 'courage', 'new beginnings', 'vitality'],
  },
  'Sun-Taurus': {
    brief:
      'The pace downshifts from Aries urgency into something steadier and more deliberate. Pleasure takes center stage — good food, beautiful surroundings, the tangible rewards of patient effort. The collective mood favors building things meant to last.',
    keywords: ['stability', 'sensuality', 'persistence', 'comfort'],
  },
  'Sun-Gemini': {
    brief:
      'Conversations multiply. Curiosity runs hot and attention spans run short, as the atmosphere buzzes with information, gossip, and clever ideas. This transit rewards versatility and punishes rigidity — adaptability is the currency of the moment.',
    keywords: ['curiosity', 'communication', 'versatility', 'wit'],
  },
  'Sun-Cancer': {
    brief:
      'The spotlight turns inward, toward home, family, and emotional roots. Nostalgia intensifies and protective instincts sharpen. The energy favors nurturing what already exists over chasing what glitters in the distance.',
    keywords: ['nurturing', 'home', 'emotional depth', 'protection'],
  },
  'Sun-Leo': {
    brief:
      'The Sun is in its own sign — domicile — and radiates at full strength. Generosity, creative self-expression, and sheer magnetism define this transit. The mood is warm, dramatic, and unapologetically theatrical. Leadership comes naturally to those who step forward.',
    keywords: ['creativity', 'confidence', 'generosity', 'self-expression'],
  },
  'Sun-Virgo': {
    brief:
      'The grand gestures of Leo season give way to precision and quiet competence. Details matter enormously now, and the collective appetite turns toward improvement, health, and getting systems right. Craft outshines spectacle.',
    keywords: ['precision', 'service', 'improvement', 'discernment'],
  },
  'Sun-Libra': {
    brief:
      'The Sun is in its fall here, meaning individual ego takes a back seat to partnership and compromise. Diplomacy dominates, aesthetics sharpen, and fairness becomes a collective preoccupation. The tension lies in seeking harmony without losing authenticity.',
    keywords: ['balance', 'diplomacy', 'partnership', 'aesthetics'],
  },
  'Sun-Scorpio': {
    brief:
      'Surface-level interactions lose their appeal as the atmosphere deepens into something more intense. Hidden truths surface, power dynamics demand attention, and emotional honesty — even when uncomfortable — becomes the path forward.',
    keywords: ['intensity', 'transformation', 'depth', 'power'],
  },
  'Sun-Sagittarius': {
    brief:
      'Restlessness and optimism surge in equal measure. The mood expands outward — toward travel, philosophy, big-picture thinking, and anything that promises meaning beyond the mundane. Dogma and open-mindedness compete for dominance.',
    keywords: ['exploration', 'optimism', 'philosophy', 'expansion'],
  },
  'Sun-Capricorn': {
    brief:
      'Ambition crystallizes. The energy turns serious, strategic, and deeply pragmatic — this is a transit that rewards discipline and punishes shortcuts. Structures get tested, and only the well-built survive.',
    keywords: ['ambition', 'discipline', 'structure', 'pragmatism'],
  },
  'Sun-Aquarius': {
    brief:
      'The Sun is in its detriment here, uncomfortable with Aquarian detachment from personal glory. Yet this tension sparks innovation — the focus shifts from individual achievement to collective progress, unconventional ideas, and the desire to reimagine what is possible.',
    keywords: ['innovation', 'independence', 'idealism', 'disruption'],
  },
  'Sun-Pisces': {
    brief:
      'Boundaries dissolve as the final sign of the zodiac draws the solar year toward its close. Empathy deepens, imagination flourishes, and the rational mind yields to intuition. The mood is dreamy, compassionate, and sometimes bewilderingly formless.',
    keywords: ['intuition', 'compassion', 'imagination', 'surrender'],
  },

  // ─── MOON ──────────────────────────────────────────────────────────────────────

  'Moon-Aries': {
    brief:
      'Emotions run hot and impatient. The collective mood craves action over reflection — feelings want to be acted on immediately, not analyzed. Conflicts spark quickly but burn out just as fast.',
    keywords: ['impulsiveness', 'boldness', 'restlessness', 'directness'],
  },
  'Moon-Taurus': {
    brief:
      'The Moon is exalted in Taurus, and emotional life stabilizes beautifully. Comfort-seeking intensifies, patience deepens, and there is a powerful pull toward simple, sensory pleasures. The mood is calm, grounded, and quietly content.',
    keywords: ['contentment', 'steadiness', 'comfort', 'sensory pleasure'],
  },
  'Moon-Gemini': {
    brief:
      'Feelings become chatty. The emotional atmosphere is light, curious, and changeable — moods shift rapidly and the need to talk things through overrides the need to sit with them. Emotional multitasking is the norm.',
    keywords: ['adaptability', 'restlessness', 'talkativeness', 'mental agility'],
  },
  'Moon-Cancer': {
    brief:
      'The Moon is in its own sign — domicile — and emotional sensitivity reaches its peak. Instincts are razor-sharp, empathy flows freely, and the pull toward home and family becomes almost magnetic. Vulnerability is not weakness here; it is power.',
    keywords: ['sensitivity', 'nurturing', 'intuition', 'emotional security'],
  },
  'Moon-Leo': {
    brief:
      'Emotions want an audience. The mood turns warm, generous, and slightly theatrical — feelings are big, dramatic, and meant to be expressed, not hidden. Pride and emotional warmth walk hand in hand.',
    keywords: ['warmth', 'drama', 'pride', 'expressiveness'],
  },
  'Moon-Virgo': {
    brief:
      'Feelings get organized. The emotional tone becomes analytical and service-oriented, with a strong need to fix, improve, and make things right. The risk is overthinking emotions instead of simply feeling them.',
    keywords: ['analysis', 'helpfulness', 'worry', 'refinement'],
  },
  'Moon-Libra': {
    brief:
      'The need for emotional harmony intensifies. Relationships become the primary emotional arena, and the mood favors graciousness, tact, and the avoidance of conflict. The challenge is distinguishing genuine peace from people-pleasing.',
    keywords: ['harmony', 'diplomacy', 'indecision', 'grace'],
  },
  'Moon-Scorpio': {
    brief:
      'The Moon is in its fall here, and emotions plunge deep. Nothing stays on the surface — feelings are intense, private, and laced with an undercurrent of suspicion or possessiveness. Emotional honesty cuts like a blade, but it also heals.',
    keywords: ['intensity', 'secrecy', 'emotional power', 'catharsis'],
  },
  'Moon-Sagittarius': {
    brief:
      'The emotional atmosphere lightens and expands. Restlessness replaces brooding, and there is a collective hunger for freedom, adventure, and meaning. Feelings are expressed with blunt honesty — sometimes more blunt than kind.',
    keywords: ['optimism', 'wanderlust', 'bluntness', 'enthusiasm'],
  },
  'Moon-Capricorn': {
    brief:
      'The Moon is in its detriment, and emotional expression contracts. Feelings are managed rather than indulged, and the mood turns stoic, controlled, and quietly ambitious. There is dignity here, but also a risk of emotional suppression.',
    keywords: ['restraint', 'stoicism', 'responsibility', 'emotional control'],
  },
  'Moon-Aquarius': {
    brief:
      'Emotions detach from the personal and drift toward the abstract. The mood favors intellectual connection over sentimental intimacy, and feelings are processed through ideas rather than instincts. Compassion expands, but warmth can feel distant.',
    keywords: ['detachment', 'humanitarianism', 'unconventionality', 'independence'],
  },
  'Moon-Pisces': {
    brief:
      'Emotional boundaries dissolve. The collective mood becomes extraordinarily receptive — empathy deepens, imagination opens wide, and the line between one person\'s feelings and another\'s becomes nearly impossible to draw. Artistic and spiritual sensitivity peaks.',
    keywords: ['empathy', 'imagination', 'sensitivity', 'dreaminess'],
  },

  // ─── MERCURY ───────────────────────────────────────────────────────────────────

  'Mercury-Aries': {
    brief:
      'Thinking speeds up and conversation becomes competitive. Ideas arrive fast and fully formed, and there is little patience for nuance or deliberation. The mental atmosphere favors decisiveness over diplomacy — speak first, refine later.',
    keywords: ['directness', 'impulsive thinking', 'debate', 'decisiveness'],
  },
  'Mercury-Taurus': {
    brief:
      'The mind slows down and grows stubborn in the best sense. Thinking becomes practical, methodical, and resistant to pressure. Decisions are made carefully and changed reluctantly. This transit favors planning over brainstorming.',
    keywords: ['deliberation', 'practical thinking', 'persistence', 'common sense'],
  },
  'Mercury-Gemini': {
    brief:
      'Mercury is in its own sign — domicile — and mental agility reaches its peak. Information flows freely, wit sharpens, and the appetite for learning, conversation, and novelty becomes insatiable. The risk is superficiality; the gift is brilliance.',
    keywords: ['wit', 'versatility', 'curiosity', 'eloquence'],
  },
  'Mercury-Cancer': {
    brief:
      'Thinking becomes colored by emotion and memory. Communication turns intuitive and protective — words are chosen for their emotional impact, not just their logic. The mental atmosphere favors storytelling, reminiscence, and heartfelt expression.',
    keywords: ['intuitive thinking', 'nostalgia', 'emotional intelligence', 'memory'],
  },
  'Mercury-Leo': {
    brief:
      'Ideas go big. The mental atmosphere turns confident, dramatic, and persuasive — there is a collective talent for grand statements and compelling narratives. Thinking becomes creative but also prone to stubbornness and the desire to be right.',
    keywords: ['persuasion', 'creativity', 'confidence', 'dramatic flair'],
  },
  'Mercury-Virgo': {
    brief:
      'Mercury is in both its domicile and exaltation here, performing at its absolute best. Analysis sharpens to a fine point, details snap into focus, and the collective capacity for problem-solving, editing, and refinement is extraordinary.',
    keywords: ['precision', 'analysis', 'critical thinking', 'mastery'],
  },
  'Mercury-Libra': {
    brief:
      'Communication seeks balance and beauty. The mental atmosphere favors negotiation, seeing both sides, and expressing ideas with elegance. The downside is indecision — weighing every option endlessly without committing.',
    keywords: ['diplomacy', 'fairness', 'indecision', 'eloquence'],
  },
  'Mercury-Scorpio': {
    brief:
      'Thinking goes underground. The collective mind turns investigative, strategic, and unafraid of uncomfortable truths. Surface answers are rejected in favor of deeper understanding. Words carry unusual weight and hidden meanings.',
    keywords: ['investigation', 'strategy', 'depth', 'perceptiveness'],
  },
  'Mercury-Sagittarius': {
    brief:
      'Mercury is in its detriment here, struggling with Sagittarian breadth over Mercurial precision. The mind reaches for big ideas and grand truths but can stumble over details and tact. Philosophical debate thrives; careful fact-checking does not.',
    keywords: ['big-picture thinking', 'bluntness', 'philosophy', 'overreach'],
  },
  'Mercury-Capricorn': {
    brief:
      'Thinking turns serious and strategic. Communication becomes efficient, authoritative, and stripped of unnecessary flourish. The collective mental style favors planning, structure, and ideas that can be translated into concrete results.',
    keywords: ['pragmatism', 'authority', 'structure', 'efficiency'],
  },
  'Mercury-Aquarius': {
    brief:
      'The mind craves originality. Thinking becomes inventive, contrarian, and drawn to ideas that challenge convention. The collective appetite for innovation intensifies, and intellectual rebellion — questioning assumptions — becomes the dominant mode.',
    keywords: ['innovation', 'originality', 'rebellion', 'forward thinking'],
  },
  'Mercury-Pisces': {
    brief:
      'Mercury is in both its detriment and fall here, and linear thinking gives way to something more fluid and impressionistic. Logic yields to intuition, and communication becomes poetic, symbolic, or frustratingly vague. Imagination is the compensation for lost precision.',
    keywords: ['imagination', 'vagueness', 'poetic thinking', 'intuition'],
  },

  // ─── VENUS ─────────────────────────────────────────────────────────────────────

  'Venus-Aries': {
    brief:
      'Venus is in its detriment in Aries, making love impatient and desire aggressive. The romantic atmosphere favors the chase over the relationship, the spark over the slow burn. Attraction is instant, fierce, and not particularly interested in compromise.',
    keywords: ['passion', 'impulsiveness', 'conquest', 'boldness'],
  },
  'Venus-Taurus': {
    brief:
      'Venus is in its own sign — domicile — and pleasure deepens into something rich and unhurried. Beauty, comfort, and sensory indulgence define the atmosphere. Love becomes loyal, physical, and rooted in the tangible. Commerce in fine goods prospers.',
    keywords: ['luxury', 'sensuality', 'loyalty', 'indulgence'],
  },
  'Venus-Gemini': {
    brief:
      'Love gets curious. The romantic atmosphere becomes playful, flirtatious, and intellectually driven — connection through conversation matters more than grand gestures. Variety is craved, and commitment may feel confining.',
    keywords: ['flirtation', 'charm', 'variety', 'playfulness'],
  },
  'Venus-Cancer': {
    brief:
      'Love turns protective and deeply sentimental. The romantic atmosphere favors emotional intimacy, domestic comfort, and gestures rooted in care rather than spectacle. Attachments deepen quickly, and the desire for emotional safety overrides everything else.',
    keywords: ['tenderness', 'devotion', 'emotional bonding', 'sentimentality'],
  },
  'Venus-Leo': {
    brief:
      'Love demands the spotlight. Romance becomes grand, generous, and performative — affection is expressed boldly, and the desire to be adored intensifies across the board. The atmosphere favors lavish gestures, creative collaboration, and joyful excess.',
    keywords: ['romance', 'generosity', 'drama', 'adoration'],
  },
  'Venus-Virgo': {
    brief:
      'Venus is in its fall here, and love becomes exacting. Affection is expressed through acts of service and attention to detail rather than grand declarations. The romantic atmosphere turns modest and critical — devotion is quiet, but the standards are impossibly high.',
    keywords: ['devotion', 'perfectionism', 'modesty', 'service'],
  },
  'Venus-Libra': {
    brief:
      'Venus is in its own sign — domicile — and the pursuit of harmony, beauty, and partnership reaches its zenith. Relationships take center stage, aesthetics sharpen, and the collective craving for fairness and elegance intensifies. Art and diplomacy flourish.',
    keywords: ['harmony', 'elegance', 'partnership', 'refinement'],
  },
  'Venus-Scorpio': {
    brief:
      'Venus is in its detriment, and love plunges into dangerous waters. The romantic atmosphere becomes possessive, magnetic, and intensely private. Desire deepens into obsession, and superficial connections are rejected in favor of total emotional surrender.',
    keywords: ['obsession', 'magnetism', 'jealousy', 'depth'],
  },
  'Venus-Sagittarius': {
    brief:
      'Love loosens its grip and goes exploring. The romantic atmosphere becomes adventurous, optimistic, and philosophically minded — attraction is sparked by shared ideals and a sense of possibility. Freedom matters more than security.',
    keywords: ['adventure', 'freedom', 'idealism', 'spontaneity'],
  },
  'Venus-Capricorn': {
    brief:
      'Love gets serious and practical. The romantic atmosphere favors commitment, stability, and partnerships that offer mutual advantage. Affection is expressed through reliability and shared ambition rather than sentimentality.',
    keywords: ['commitment', 'pragmatism', 'status', 'maturity'],
  },
  'Venus-Aquarius': {
    brief:
      'Love steps back and intellectualizes. The romantic atmosphere becomes unconventional, egalitarian, and somewhat detached — connection thrives on shared ideals and mutual respect for independence. Traditional romance may feel stifling.',
    keywords: ['unconventionality', 'independence', 'idealism', 'friendship'],
  },
  'Venus-Pisces': {
    brief:
      'Venus is exalted here, and love becomes transcendent. The romantic atmosphere dissolves boundaries — compassion, devotion, and imaginative tenderness reach their peak. This is the most selfless and spiritually attuned expression of love in the zodiac.',
    keywords: ['devotion', 'compassion', 'romance', 'transcendence'],
  },

  // ─── MARS ──────────────────────────────────────────────────────────────────────

  'Mars-Aries': {
    brief:
      'Mars is in its own sign — domicile — and raw energy fires on all cylinders. The atmosphere crackles with competitiveness, courage, and a hunger to act. Conflicts escalate quickly, but so does the capacity to start bold new endeavors from scratch.',
    keywords: ['aggression', 'initiative', 'courage', 'competition'],
  },
  'Mars-Taurus': {
    brief:
      'Mars is in its detriment here, and the warrior planet is forced to slow down. Energy becomes stubborn, enduring, and focused on material security. The atmosphere favors persistence over speed — battles are won through sheer immovability.',
    keywords: ['stubbornness', 'endurance', 'determination', 'slow burn'],
  },
  'Mars-Gemini': {
    brief:
      'Energy scatters and multiplies. The atmosphere becomes mentally combative — arguments sharpen, multitasking intensifies, and restless energy channels into words, ideas, and rapid-fire projects rather than sustained physical effort.',
    keywords: ['mental energy', 'debate', 'restlessness', 'versatility'],
  },
  'Mars-Cancer': {
    brief:
      'Mars is in its fall here, and aggression turns indirect and emotionally charged. Energy is driven by protective instincts and old grievances. The atmosphere becomes defensive and moody — confrontation happens sideways, through withdrawal or passive resistance.',
    keywords: ['defensiveness', 'emotional intensity', 'protectiveness', 'moodiness'],
  },
  'Mars-Leo': {
    brief:
      'Energy becomes dramatic, proud, and impossible to ignore. The atmosphere favors bold action, creative risk-taking, and the kind of effort that demands recognition. Conflicts become about pride and respect as much as substance.',
    keywords: ['bravery', 'pride', 'creative drive', 'showmanship'],
  },
  'Mars-Virgo': {
    brief:
      'Energy becomes precise and methodical. The atmosphere favors detailed, efficient work over grand gestures — effort is channeled into fixing, refining, and perfecting. Criticism sharpens, and standards for performance rise considerably.',
    keywords: ['efficiency', 'precision', 'criticism', 'methodical effort'],
  },
  'Mars-Libra': {
    brief:
      'Mars is in its detriment, and direct action gives way to negotiation and strategic maneuvering. The atmosphere becomes conflict-averse, and energy is spent seeking consensus rather than victory. The challenge is acting decisively when diplomacy fails.',
    keywords: ['negotiation', 'indirectness', 'strategic action', 'compromise'],
  },
  'Mars-Scorpio': {
    brief:
      'Mars is in its own sign — domicile — and energy plunges to its most focused, strategic, and relentless. The atmosphere becomes intensely purposeful, with a willingness to endure difficulty for the sake of transformation. Nothing is done halfway.',
    keywords: ['intensity', 'strategy', 'relentlessness', 'transformation'],
  },
  'Mars-Sagittarius': {
    brief:
      'Energy expands and aims high. The atmosphere becomes restless, adventurous, and animated by conviction — action is driven by beliefs, ideals, and the hunger for something bigger. The risk is scattered effort and righteous overconfidence.',
    keywords: ['zeal', 'adventure', 'conviction', 'overextension'],
  },
  'Mars-Capricorn': {
    brief:
      'Mars is exalted here, and energy achieves its most disciplined, strategic form. The atmosphere rewards calculated effort, long-term planning, and the patience to climb steadily rather than charge recklessly. Ambition becomes an unstoppable force.',
    keywords: ['discipline', 'ambition', 'strategic planning', 'endurance'],
  },
  'Mars-Aquarius': {
    brief:
      'Energy turns rebellious and ideologically driven. The atmosphere favors collective action, unconventional tactics, and the willingness to fight for principles rather than personal gain. Effort is channeled toward reform and breaking old patterns.',
    keywords: ['rebellion', 'reform', 'unconventional tactics', 'collective action'],
  },
  'Mars-Pisces': {
    brief:
      'Energy diffuses and loses its edge. The atmosphere becomes fluid, idealistic, and hard to pin down — action is motivated by compassion, imagination, or escapism rather than concrete goals. Effort works best when inspired, worst when forced.',
    keywords: ['compassion', 'diffusion', 'inspired action', 'escapism'],
  },


  // ─── JUPITER ───────────────────────────────────────────────────────────
  'Jupiter-Aries': {
    brief:
      'Jupiter in Aries lights a fire under every new beginning. There is a collective rush of confidence, a willingness to take big risks and start bold ventures. Enthusiasm runs high, but so does impatience — the energy favors pioneers who act fast over those who deliberate.',
    keywords: ['bold initiative', 'risk-taking', 'entrepreneurial spirit', 'impatience'],
  },
  'Jupiter-Taurus': {
    brief:
      'Jupiter in Taurus expands the appetite for comfort, wealth, and tangible security. Growth comes through patience and steady accumulation rather than speculation. The cultural mood favors investing in quality over quantity, and there is a renewed appreciation for the pleasures of the physical world.',
    keywords: ['material abundance', 'slow growth', 'sensory pleasure', 'financial expansion'],
  },
  'Jupiter-Gemini': {
    brief:
      'Jupiter is in detriment here, meaning its expansive nature scatters across too many interests at once. Information floods in from every direction, and the challenge is distinguishing signal from noise. Curiosity is sky-high, but depth of understanding takes real effort.',
    keywords: ['information overload', 'restless curiosity', 'scattered focus', 'intellectual buzz'],
  },
  'Jupiter-Cancer': {
    brief:
      'Jupiter is exalted in Cancer, one of its strongest placements. Generosity flows naturally toward family, home, and community. The cultural mood turns protective and nurturing — there is a deep collective hunger to belong somewhere and to take care of one another.',
    keywords: ['emotional generosity', 'homecoming', 'nurturing abundance', 'belonging'],
  },
  'Jupiter-Leo': {
    brief:
      'Jupiter in Leo is loud, warm, and theatrical. Confidence swells across the board, and creative self-expression gets the green light. The risk is grandiosity — everything feels like it should be bigger, bolder, more dramatic — but the genuine optimism is infectious.',
    keywords: ['creative confidence', 'grandiosity', 'celebration', 'dramatic flair'],
  },
  'Jupiter-Virgo': {
    brief:
      'Jupiter is in detriment in Virgo, where expansion meets the instinct to refine and critique. Growth happens through improving systems, fixing what is broken, and sweating the details. The mood is practical rather than visionary — progress comes from doing the unglamorous work.',
    keywords: ['practical improvement', 'service-oriented growth', 'detail focus', 'modest gains'],
  },
  'Jupiter-Libra': {
    brief:
      'Jupiter in Libra amplifies the drive toward fairness, partnership, and diplomacy. Alliances expand, and there is collective enthusiasm for building bridges rather than walls. The arts and cultural life flourish, and beauty feels like a shared priority.',
    keywords: ['diplomatic expansion', 'partnership', 'cultural flourishing', 'justice'],
  },
  'Jupiter-Scorpio': {
    brief:
      'Jupiter in Scorpio pushes growth into uncomfortable territory — hidden truths surface, taboo subjects enter public conversation, and there is a collective appetite for depth over surfaces. Transformation is the price of expansion here, and half-measures do not satisfy.',
    keywords: ['deep transformation', 'hidden truths revealed', 'intense growth', 'power dynamics'],
  },
  'Jupiter-Sagittarius': {
    brief:
      'Jupiter is in its own domicile in Sagittarius, fully at home and operating at full strength. The collective mood is expansive, philosophical, and hungry for meaning. Travel, education, and cross-cultural exchange all surge. Optimism is abundant — sometimes dangerously so.',
    keywords: ['philosophical expansion', 'wanderlust', 'unshakable optimism', 'big-picture thinking'],
  },
  'Jupiter-Capricorn': {
    brief:
      'Jupiter is in its fall in Capricorn, where expansive impulses are checked by the demand for structure and accountability. Growth is slow, earned, and built on solid foundations. The mood is ambitious but sober — success requires discipline, and shortcuts backfire.',
    keywords: ['disciplined ambition', 'earned success', 'structural growth', 'restrained optimism'],
  },
  'Jupiter-Aquarius': {
    brief:
      'Jupiter in Aquarius expands through ideas, communities, and visions of the future. The collective energy favors innovation, group efforts, and humanitarian ideals. There is excitement about what is possible when people organize around shared principles rather than personal gain.',
    keywords: ['collective vision', 'innovation', 'humanitarian ideals', 'community growth'],
  },
  'Jupiter-Pisces': {
    brief:
      'Jupiter is in its own domicile in Pisces, where compassion and imagination expand without limit. The cultural mood turns spiritual, empathetic, and creatively fertile. Boundaries dissolve — which brings both profound connection and the risk of escapism or confusion.',
    keywords: ['boundless compassion', 'spiritual expansion', 'creative imagination', 'dissolution'],
  },

  // ─── SATURN ────────────────────────────────────────────────────────────
  'Saturn-Aries': {
    brief:
      'Saturn is in its fall in Aries, creating friction between the need for caution and the impulse to charge ahead. Leadership is tested under real pressure, and reckless action meets hard consequences. The lesson is learning to be brave and disciplined at the same time.',
    keywords: ['tested courage', 'frustrated initiative', 'hard-won leadership', 'accountability'],
  },
  'Saturn-Taurus': {
    brief:
      'Saturn in Taurus tightens the screws on finances, resources, and material security. The mood is conservative — people build slowly, save more, and question what they truly need versus what they merely want. Scarcity fears surface, but so does genuine resilience.',
    keywords: ['financial austerity', 'resource management', 'endurance', 'material discipline'],
  },
  'Saturn-Gemini': {
    brief:
      'Saturn in Gemini demands rigor in communication and thinking. Casual opinions are not enough — the pressure is to back up claims, think critically, and communicate with precision. Intellectual laziness gets exposed, and the reward goes to those who do their homework.',
    keywords: ['intellectual rigor', 'communication discipline', 'critical thinking', 'mental focus'],
  },
  'Saturn-Cancer': {
    brief:
      'Saturn is in detriment in Cancer, placing heavy weight on family obligations, emotional boundaries, and the meaning of home. Security feels harder to achieve, and old emotional patterns demand confrontation. The collective wrestles with what it means to truly feel safe.',
    keywords: ['emotional restriction', 'family duty', 'security anxiety', 'inner walls'],
  },
  'Saturn-Leo': {
    brief:
      'Saturn is in detriment in Leo, dampening the urge toward self-expression and recognition. Creative confidence meets self-doubt, and authority figures face scrutiny. The lesson is finding authentic pride without ego inflation — earning respect rather than demanding it.',
    keywords: ['creative discipline', 'humbled ego', 'earned recognition', 'authority tested'],
  },
  'Saturn-Virgo': {
    brief:
      'Saturn in Virgo doubles down on precision, duty, and practical service. Standards rise across the board, and sloppy work is not tolerated. The mood can tip into perfectionism or anxiety, but the payoff is lasting improvement in systems, health practices, and daily routines.',
    keywords: ['high standards', 'perfectionism', 'systemic improvement', 'service commitment'],
  },
  'Saturn-Libra': {
    brief:
      'Saturn is exalted in Libra, one of its most effective placements. Commitments carry real weight — contracts, partnerships, and agreements are taken seriously. Justice and fairness become structural priorities, not just ideals. The demand is for balance that actually holds up under pressure.',
    keywords: ['binding commitments', 'structural justice', 'mature partnerships', 'accountability'],
  },
  'Saturn-Scorpio': {
    brief:
      'Saturn in Scorpio forces a reckoning with power, debt, and what has been buried. There is no looking away from difficult truths — control dynamics, shared resources, and unprocessed grief all demand honest attention. Transformation is hard-won but permanent.',
    keywords: ['power reckoning', 'deep accountability', 'emotional endurance', 'unavoidable truth'],
  },
  'Saturn-Sagittarius': {
    brief:
      'Saturn in Sagittarius tests beliefs, ideologies, and the structures that support them. Blind faith is not enough — convictions must hold up under scrutiny. The mood is philosophically serious, and institutions built on unexamined assumptions face real pressure to reform.',
    keywords: ['belief under pressure', 'ideological scrutiny', 'philosophical seriousness', 'reform'],
  },
  'Saturn-Capricorn': {
    brief:
      'Saturn is in its own domicile in Capricorn, operating with full authority. Institutional power consolidates, hierarchies solidify, and the rules tighten. Ambition runs deep but demands real substance — only those willing to do the long, hard climb reach the top.',
    keywords: ['institutional authority', 'structural power', 'relentless ambition', 'consolidation'],
  },
  'Saturn-Aquarius': {
    brief:
      'Saturn is in its own domicile in Aquarius, bringing discipline to collective ideals and group structures. Communities are tested — which ones are built to last, and which are held together by wishful thinking? The energy favors organized reform over chaotic rebellion.',
    keywords: ['organized reform', 'community accountability', 'structural innovation', 'tested ideals'],
  },
  'Saturn-Pisces': {
    brief:
      'Saturn in Pisces tries to give form to the formless — faith, grief, compassion, and creative vision all meet the demand for structure. Boundaries between reality and illusion blur, and the collective struggles to find solid ground in emotional and spiritual life.',
    keywords: ['faith tested', 'structured compassion', 'dissolving boundaries', 'spiritual discipline'],
  },

  // ─── URANUS ────────────────────────────────────────────────────────────
  'Uranus-Aries': {
    brief:
      'Uranus in Aries electrifies the collective will to break free and start over. Independence movements, radical self-assertion, and impatience with the status quo define this era. The cultural mood is volatile and pioneering — old identities shatter to make room for something fiercer.',
    keywords: ['radical independence', 'identity disruption', 'volatile pioneering', 'liberation'],
  },
  'Uranus-Taurus': {
    brief:
      'Uranus in Taurus shakes the foundations of material life — how wealth is created, how resources are distributed, how value is defined. What once felt permanent and reliable becomes unstable. The generation living through this redefines security from the ground up.',
    keywords: ['economic disruption', 'value revolution', 'material instability', 'resource innovation'],
  },
  'Uranus-Gemini': {
    brief:
      'Uranus in Gemini revolutionizes how information moves and how people communicate. Language itself shifts, new forms of expression emerge, and the speed of cultural exchange accelerates dramatically. The collective mind fragments and rewires simultaneously.',
    keywords: ['communication revolution', 'intellectual upheaval', 'information acceleration', 'cognitive shift'],
  },
  'Uranus-Cancer': {
    brief:
      'Uranus in Cancer disrupts the meaning of home, family, and belonging. Domestic structures that once seemed permanent break apart or transform. A generation redefines what family looks like and challenges inherited ideas about roots, safety, and emotional loyalty.',
    keywords: ['domestic upheaval', 'family redefined', 'rootlessness', 'emotional liberation'],
  },
  'Uranus-Leo': {
    brief:
      'Uranus in Leo unleashes radical creativity and redefines self-expression for a generation. Old models of leadership and celebrity are overthrown in favor of something more authentic and unpredictable. The cultural mood prizes originality over tradition in art, performance, and public life.',
    keywords: ['creative revolution', 'radical self-expression', 'leadership disruption', 'originality'],
  },
  'Uranus-Virgo': {
    brief:
      'Uranus in Virgo transforms work, health, and daily systems at the structural level. Routines that served previous generations become obsolete. A new relationship to labor, wellness, and practical problem-solving emerges — more efficient, less sentimental, sometimes coldly analytical.',
    keywords: ['systemic reinvention', 'work transformation', 'health innovation', 'analytical disruption'],
  },
  'Uranus-Libra': {
    brief:
      'Uranus in Libra rewrites the rules of partnership, marriage, and social contracts. A generation experiments with new forms of relationship and challenges inherited assumptions about commitment and fairness. The cultural landscape of justice and aesthetics shifts abruptly.',
    keywords: ['relationship revolution', 'social contract disruption', 'justice reform', 'aesthetic upheaval'],
  },
  'Uranus-Scorpio': {
    brief:
      'Uranus in Scorpio exposes what power structures prefer to keep hidden. Secrets surface on a mass scale, taboos are confronted head-on, and a generation develops an unflinching relationship with death, sexuality, and the mechanics of control. Nothing stays buried.',
    keywords: ['power exposed', 'taboo shattered', 'radical transformation', 'unflinching depth'],
  },
  'Uranus-Sagittarius': {
    brief:
      'Uranus in Sagittarius electrifies the search for meaning and blows open cultural horizons. A generation rebels against dogma and inherited belief systems, seeking truth through direct experience rather than authority. Education, philosophy, and cross-cultural contact are revolutionized.',
    keywords: ['belief disruption', 'philosophical rebellion', 'cultural horizon expansion', 'dogma rejected'],
  },
  'Uranus-Capricorn': {
    brief:
      'Uranus in Capricorn destabilizes institutions, governments, and established hierarchies. The structures that organize collective life — from corporations to political systems — face sudden, irreversible change. A generation inherits the task of rebuilding authority on radically different terms.',
    keywords: ['institutional disruption', 'authority overthrown', 'structural rebuilding', 'power shift'],
  },
  'Uranus-Aquarius': {
    brief:
      'Uranus is in its own domicile in Aquarius, amplifying its revolutionary nature to full intensity. A generation is defined by collective awakening, radical idealism, and the drive to reinvent society from first principles. Group identity and individual freedom exist in electric tension.',
    keywords: ['collective awakening', 'radical idealism', 'societal reinvention', 'utopian tension'],
  },
  'Uranus-Pisces': {
    brief:
      'Uranus in Pisces dissolves the boundary between the rational and the mystical. A generation experiences sudden spiritual awakenings, and the collective imagination is flooded with new visions. Art, music, and spiritual life are electrified — but so is confusion about what is real.',
    keywords: ['spiritual disruption', 'visionary flood', 'mystical awakening', 'reality dissolution'],
  },

  // ─── NEPTUNE ───────────────────────────────────────────────────────────
  'Neptune-Aries': {
    brief:
      'Neptune in Aries dissolves the sharp edges of individual identity and heroism. The collective dream turns toward a new kind of courage — less about conquest, more about surrendering to something larger. Idealism around leadership and self-determination runs high but can lack grounding.',
    keywords: ['idealized courage', 'identity fog', 'spiritual pioneering', 'ego dissolution'],
  },
  'Neptune-Taurus': {
    brief:
      'Neptune in Taurus blurs the line between what is real and what is imagined in the material world. Collective fantasies about wealth, nature, and the body intensify. There is a longing for an earthly paradise — a deep cultural pull toward beauty and comfort that can veer into delusion.',
    keywords: ['material fantasy', 'earthly longing', 'beauty idealized', 'value confusion'],
  },
  'Neptune-Gemini': {
    brief:
      'Neptune in Gemini floods the information landscape with myth, rumor, and imagination. The boundary between fact and fiction becomes culturally permeable. Storytelling and language take on a dreamlike quality, and the collective mind is both more creative and more easily deceived.',
    keywords: ['narrative fog', 'mythic storytelling', 'fact-fiction blur', 'imaginative language'],
  },
  'Neptune-Cancer': {
    brief:
      'Neptune in Cancer romanticizes home, motherland, and the emotional past. Nostalgia becomes a powerful cultural force, and the collective longs for a sense of belonging that may never have existed as remembered. Compassion for the vulnerable deepens, but sentimentality can cloud judgment.',
    keywords: ['nostalgic longing', 'homeland idealized', 'sentimental compassion', 'emotional fantasy'],
  },
  'Neptune-Leo': {
    brief:
      'Neptune in Leo glamorizes creativity, romance, and the cult of personality. The collective is enchanted by larger-than-life figures and grand romantic narratives. Art and entertainment become vehicles for collective dreaming, but the line between inspiration and illusion grows thin.',
    keywords: ['glamour', 'romantic idealism', 'creative enchantment', 'personality worship'],
  },
  'Neptune-Virgo': {
    brief:
      'Neptune in Virgo creates tension between the urge to serve and the tendency to idealize purity. The collective dreams of perfect health, perfect systems, and selfless service — but reality resists perfection. Healing practices evolve, and the meaning of wellness becomes culturally charged.',
    keywords: ['healing idealism', 'purity fantasy', 'service mystique', 'wellness culture'],
  },
  'Neptune-Libra': {
    brief:
      'Neptune in Libra romanticizes partnership, peace, and beauty to an extraordinary degree. The collective longs for harmony and projects utopian fantasies onto relationships and art. Aesthetics reach dreamy heights, but the pursuit of perfect balance can mask avoidance of real conflict.',
    keywords: ['romantic idealism', 'peace fantasy', 'aesthetic dreaminess', 'conflict avoidance'],
  },
  'Neptune-Scorpio': {
    brief:
      'Neptune in Scorpio immerses the collective in the mysteries of sex, death, and the unconscious. Taboo subjects take on a hypnotic, almost sacred quality. A generation is drawn to the hidden depths of experience, and the boundary between the psychological and the spiritual dissolves.',
    keywords: ['taboo mysticism', 'psychological depth', 'sacred darkness', 'unconscious immersion'],
  },
  'Neptune-Sagittarius': {
    brief:
      'Neptune in Sagittarius turns the search for truth into a spiritual quest. The collective is drawn to visionary philosophies, foreign cultures, and expansive belief systems. Faith intensifies across the board — but so does the risk of following false prophets and mistaking fantasy for wisdom.',
    keywords: ['spiritual seeking', 'visionary faith', 'philosophical idealism', 'false prophecy'],
  },
  'Neptune-Capricorn': {
    brief:
      'Neptune in Capricorn dissolves faith in institutions and established authority. The collective gradually loses trust in structures it once took for granted — governments, corporations, traditional career paths. What replaces them is unclear, and the mood oscillates between disillusionment and quiet reinvention.',
    keywords: ['institutional disillusionment', 'authority eroded', 'structural fog', 'quiet reinvention'],
  },
  'Neptune-Aquarius': {
    brief:
      'Neptune in Aquarius idealizes collective progress, humanitarian causes, and the dream of universal connection. The boundary between individual and group consciousness blurs. Utopian visions of community flourish, but so does confusion about where the self ends and the crowd begins.',
    keywords: ['utopian dreaming', 'collective consciousness', 'humanitarian idealism', 'boundary blur'],
  },
  'Neptune-Pisces': {
    brief:
      'Neptune is in its own domicile in Pisces, fully immersed in its element. Spiritual longing, creative imagination, and empathy reach extraordinary intensity. The collective is flooded with compassion and vision, but also with escapism, confusion, and the dissolution of certainties once taken for granted.',
    keywords: ['spiritual immersion', 'boundless empathy', 'creative flooding', 'mass escapism'],
  },

  // ─── PLUTO ─────────────────────────────────────────────────────────────
  'Pluto-Aries': {
    brief:
      'Pluto in Aries drives a generational confrontation with raw power, survival, and the meaning of individual will. The collective is forced to reckon with aggression, dominance, and the shadow side of independence. What emerges is a transformed understanding of what strength actually requires.',
    keywords: ['primal power', 'survival instinct', 'will transformed', 'aggression confronted'],
  },
  'Pluto-Taurus': {
    brief:
      'Pluto in Taurus forces a deep, slow transformation of how wealth, land, and resources are controlled. What the culture values most is broken down and rebuilt from the roots. Attachment to material permanence is tested by forces that insist nothing is truly owned forever.',
    keywords: ['wealth transformation', 'resource control', 'material impermanence', 'deep restructuring'],
  },
  'Pluto-Gemini': {
    brief:
      'Pluto in Gemini transforms the infrastructure of thought and communication. The way a generation processes information, tells stories, and constructs reality undergoes irreversible change. Old frameworks of knowledge collapse, and new ones rise from the wreckage with unsettling speed.',
    keywords: ['information power', 'knowledge transformed', 'narrative collapse', 'cognitive revolution'],
  },
  'Pluto-Cancer': {
    brief:
      'Pluto in Cancer forces a reckoning with the deepest roots of emotional and national identity. Family structures, homeland mythologies, and the meaning of belonging are torn apart and reformed. A generation carries the weight of ancestral trauma brought fully to the surface.',
    keywords: ['ancestral reckoning', 'homeland transformed', 'family upheaval', 'emotional excavation'],
  },
  'Pluto-Leo': {
    brief:
      'Pluto in Leo transforms the meaning of personal power, creativity, and leadership. A generation is forged in the fire of dramatic self-confrontation — the ego is both empowered and destroyed. The cultural relationship to authority, fame, and creative expression is permanently altered.',
    keywords: ['ego transformation', 'creative power', 'leadership crisis', 'dramatic rebirth'],
  },
  'Pluto-Virgo': {
    brief:
      'Pluto in Virgo transforms work, health, and the systems that organize daily life. A generation dismantles and rebuilds the practical machinery of civilization — labor, medicine, food, ecology. The obsession with purity and efficiency has both healing and destructive potential.',
    keywords: ['systemic overhaul', 'health transformation', 'labor crisis', 'purity obsession'],
  },
  'Pluto-Libra': {
    brief:
      'Pluto in Libra transforms the structures of relationship, justice, and social harmony. A generation confronts the power dynamics hidden inside partnerships, legal systems, and the pursuit of fairness. The old balance is destroyed so a more honest one can eventually take its place.',
    keywords: ['justice transformed', 'relationship power', 'social reckoning', 'balance destroyed and rebuilt'],
  },
  'Pluto-Scorpio': {
    brief:
      'Pluto is in its own domicile in Scorpio, operating at maximum intensity. A generation is defined by an unflinching confrontation with death, sexuality, trauma, and the mechanics of power. Nothing is off-limits, nothing stays hidden, and the collective undergoes transformation at the deepest possible level.',
    keywords: ['total transformation', 'death confronted', 'power unmasked', 'psychological depth'],
  },
  'Pluto-Sagittarius': {
    brief:
      'Pluto in Sagittarius transforms belief systems, religious institutions, and the collective search for meaning. A generation dismantles inherited ideologies and rebuilds the framework of truth from scratch. The stakes around what people believe — and who controls the narrative — become existential.',
    keywords: ['belief destroyed and rebuilt', 'ideological crisis', 'truth power', 'meaning transformed'],
  },
  'Pluto-Capricorn': {
    brief:
      'Pluto in Capricorn dismantles and rebuilds the fundamental structures of authority — governments, corporations, economic systems, and social hierarchies. The transformation is slow, grinding, and total. A generation witnesses the death of institutional forms that seemed permanent and the painful birth of whatever comes next.',
    keywords: ['institutional collapse', 'authority reborn', 'structural transformation', 'power restructured'],
  },
  'Pluto-Aquarius': {
    brief:
      'Pluto in Aquarius transforms the relationship between the individual and the collective. Power shifts toward groups, networks, and movements, and the old models of centralized control face existential pressure. A generation redefines what freedom, equality, and community mean at the deepest level.',
    keywords: ['collective power shift', 'freedom redefined', 'network transformation', 'decentralized authority'],
  },
  'Pluto-Pisces': {
    brief:
      'Pluto in Pisces forces a total transformation of the collective spiritual and emotional life. Illusions that have sustained entire civilizations dissolve, and a generation must face the void left behind with honesty and courage. What emerges is a fundamentally new relationship to faith, compassion, and the unseen.',
    keywords: ['spiritual transformation', 'illusion destroyed', 'compassion reborn', 'collective catharsis'],
  },
};

// prettier-ignore
export const NATAL_INTERPRETATIONS: Record<string, Interpretation> = {

  // =====================
  // SUN (domicile Leo, exaltation Aries, detriment Aquarius, fall Libra)
  // =====================
  'Sun-Aries': {
    brief:
      'The Sun is exalted in Aries, meaning the core identity burns with unusual clarity and force. This person knows who they are early and acts on it without hesitation. They lead with instinct, thrive on initiative, and feel most alive when starting something from nothing. Patience is their perennial growing edge — they can light a fire in any room but sometimes forget to tend it.',
    keywords: ['bold', 'pioneering', 'impatient', 'self-starting'],
  },
  'Sun-Taurus': {
    brief:
      'There is a deep steadiness at the center of this person that others find either grounding or immovable. They build their identity around what endures — lasting work, sensory richness, reliable bonds. Rushing them is pointless; they operate on their own timeline and produce remarkably solid results because of it. Their challenge is distinguishing between healthy persistence and stubborn refusal to adapt.',
    keywords: ['steady', 'sensual', 'determined', 'unhurried'],
  },
  'Sun-Gemini': {
    brief:
      'This person\'s identity is woven from curiosity itself. They come alive through conversation, questions, and the thrill of connecting seemingly unrelated ideas. Versatility is their gift — they can talk to anyone about anything and mean it. The shadow side is scattered energy and a restless need for novelty that can leave projects and people half-finished.',
    keywords: ['curious', 'articulate', 'versatile', 'restless'],
  },
  'Sun-Cancer': {
    brief:
      'Identity runs through feeling for this person — they know themselves through what they care about and who they protect. There is a quiet tenacity beneath the emotional sensitivity; they hold on to what matters with surprising force. They create belonging wherever they go, often becoming the emotional anchor in any group. When wounded, they retreat into a shell that can be hard to coax them out of.',
    keywords: ['nurturing', 'protective', 'intuitive', 'tenacious'],
  },
  'Sun-Leo': {
    brief:
      'The Sun is at home in Leo, and it shows. This person radiates a natural warmth and authority that draws people in without effort. They need to create, to be seen, and to matter — not out of vanity but because self-expression is as essential to them as breathing. Generosity comes easily, but they must watch for the expectation that the spotlight will always find them.',
    keywords: ['radiant', 'generous', 'expressive', 'proud'],
  },
  'Sun-Virgo': {
    brief:
      'This person finds themselves through usefulness — through the craft of making things work better. They notice what others miss, refine what others abandon, and quietly hold systems together. Their intelligence is practical and exacting, which makes them invaluable but sometimes self-critical to a punishing degree. Learning to accept imperfection in themselves is a lifelong task.',
    keywords: ['precise', 'analytical', 'service-oriented', 'self-critical'],
  },
  'Sun-Libra': {
    brief:
      'The Sun is in its fall in Libra, which means the sense of self is filtered through relationship and context. This person genuinely sees multiple sides of every situation, which makes them gifted mediators but can leave them unsure of their own position. They are drawn to beauty, fairness, and harmony, sometimes at the cost of suppressing their own needs to keep the peace.',
    keywords: ['diplomatic', 'aesthetic', 'indecisive', 'relational'],
  },
  'Sun-Scorpio': {
    brief:
      'There is an intensity at the core of this person that cannot be faked or diluted. They experience life at full depth and have little patience for surface-level anything. Loyalty is absolute, but so is the capacity for cutting someone off entirely. They are drawn to transformation — tearing down what is false and rebuilding from raw truth.',
    keywords: ['intense', 'perceptive', 'private', 'transformative'],
  },
  'Sun-Sagittarius': {
    brief:
      'This person\'s identity is shaped by the search for meaning. They need a big picture, a philosophy, a horizon to move toward. Enthusiasm is genuine and contagious — they can make the mundane feel like an adventure. The risk is overcommitting to grand visions while neglecting the details, or mistaking bluntness for honesty.',
    keywords: ['adventurous', 'philosophical', 'optimistic', 'blunt'],
  },
  'Sun-Capricorn': {
    brief:
      'Ambition is baked into this person\'s sense of self — not always the loud kind, but a deep, structural drive to build something that lasts. They take responsibility seriously, sometimes too seriously, aging into their confidence rather than starting with it. There is a dry wit beneath the composure that surprises people. Their challenge is learning that worthiness does not require achievement.',
    keywords: ['ambitious', 'disciplined', 'pragmatic', 'reserved'],
  },
  'Sun-Aquarius': {
    brief:
      'The Sun is in its detriment in Aquarius, which gives this person a complicated relationship with ego and individuality. They define themselves through ideas, communities, and causes larger than themselves. Originality comes naturally — they think in ways that genuinely surprise people. The tension is between wanting to belong and refusing to conform, which can make them feel like permanent outsiders.',
    keywords: ['unconventional', 'idealistic', 'detached', 'original'],
  },
  'Sun-Pisces': {
    brief:
      'The boundaries of this person\'s identity are unusually permeable. They absorb the moods and needs of those around them, which gives them profound empathy but can blur their sense of where they end and others begin. Creativity and imagination are core strengths — they see the world in ways that are poetic and sometimes otherworldly. Grounding practices are essential or they drift.',
    keywords: ['empathetic', 'imaginative', 'fluid', 'escapist'],
  },

  // =====================
  // MOON (domicile Cancer, exaltation Taurus, detriment Capricorn, fall Scorpio)
  // =====================
  'Moon-Aries': {
    brief:
      'Emotions hit fast and hard with this placement. This person processes feelings through action — when upset, they need to move, argue, or fix something immediately. There is an emotional courage here that is genuinely admirable; they will charge into situations others avoid. The challenge is learning that not every feeling requires an immediate response.',
    keywords: ['reactive', 'emotionally brave', 'impulsive', 'direct'],
  },
  'Moon-Taurus': {
    brief:
      'The Moon is exalted in Taurus, and emotional life has a rare stability because of it. This person finds comfort in the physical world — good food, familiar places, the presence of people they trust. They process feelings slowly and thoroughly, which gives them a calm that others lean on. Change is genuinely difficult for them, especially when it disrupts their sense of security.',
    keywords: ['grounded', 'comfort-seeking', 'loyal', 'resistant to change'],
  },
  'Moon-Gemini': {
    brief:
      'This person thinks about their feelings before they feel them. Emotions are processed through language — talking it out, writing it down, analyzing what they are experiencing. They need mental stimulation to feel emotionally safe, and boredom is genuinely distressing. The risk is intellectualizing emotions to the point of losing touch with what they actually feel.',
    keywords: ['verbal', 'emotionally curious', 'changeable', 'witty'],
  },
  'Moon-Cancer': {
    brief:
      'The Moon is at home in Cancer, and the emotional life is rich, powerful, and central to everything. This person feels deeply and remembers feelings with photographic precision. They instinctively nurture — creating safe spaces, feeding people, sensing what others need before being told. Moodiness is real, and they must learn that not every emotional wave requires them to drown in it.',
    keywords: ['deeply feeling', 'nurturing', 'nostalgic', 'moody'],
  },
  'Moon-Leo': {
    brief:
      'There is a warmth and bigness to this person\'s emotional life that fills a room. They need to feel appreciated and admired, and they give that same generous attention back tenfold. Emotional expression is dramatic and sincere — when they love, everyone knows it. The vulnerability is that perceived slights can wound them far more deeply than they let on.',
    keywords: ['warm-hearted', 'expressive', 'proud', 'generous'],
  },
  'Moon-Virgo': {
    brief:
      'This person shows love through acts of service and practical care — they will notice you are getting sick before you do and show up with exactly what you need. Emotionally, they are more anxious than they appear, running mental checklists against everything that could go wrong. They feel safe when life is orderly and useful. Learning to sit with messy, unresolvable feelings is their growth edge.',
    keywords: ['helpful', 'anxious', 'detail-oriented', 'quietly caring'],
  },
  'Moon-Libra': {
    brief:
      'Emotional wellbeing is tied to harmony in relationships for this person. They have a refined sense of fairness and can become genuinely distressed by conflict or ugliness. There is an instinctive graciousness that makes others feel at ease. The shadow is people-pleasing — suppressing their own emotional needs to maintain peace until resentment builds.',
    keywords: ['harmony-seeking', 'gracious', 'people-pleasing', 'aesthetic'],
  },
  'Moon-Scorpio': {
    brief:
      'The Moon is in its fall in Scorpio, and the emotional world is intense, private, and not easily shared. This person feels everything at maximum depth but reveals almost nothing on the surface. Trust is earned slowly and lost permanently. There is tremendous emotional resilience here — they can endure what would break others — but they must guard against turning pain into a fortress.',
    keywords: ['intense', 'secretive', 'emotionally resilient', 'all-or-nothing'],
  },
  'Moon-Sagittarius': {
    brief:
      'This person needs emotional freedom the way others need security. They process feelings by seeking perspective — traveling, learning, talking to people from entirely different walks of life. Optimism is their default emotional setting, which is both a gift and a defense mechanism. Sitting with heavy emotions without trying to find the silver lining is their real work.',
    keywords: ['optimistic', 'freedom-loving', 'restless', 'philosophical'],
  },
  'Moon-Capricorn': {
    brief:
      'The Moon is in its detriment in Capricorn, and emotional expression does not come easily. This person often learned early that feelings were a liability, and they developed impressive self-containment as a result. They show care through responsibility and follow-through rather than words. Beneath the composed exterior is a deep well of feeling that they allow only a trusted few to see.',
    keywords: ['stoic', 'responsible', 'emotionally guarded', 'dependable'],
  },
  'Moon-Aquarius': {
    brief:
      'Emotions are experienced at a certain distance with this placement — this person observes their feelings with curiosity rather than being swept away by them. They care deeply about humanity in the abstract but can struggle with the messy intimacy of individual relationships. Emotional independence is non-negotiable. Their challenge is allowing themselves to need people without feeling like it compromises who they are.',
    keywords: ['detached', 'humanitarian', 'independent', 'unconventional'],
  },
  'Moon-Pisces': {
    brief:
      'The emotional boundaries here are thin as paper. This person absorbs the feelings of everyone around them, often without realizing it, which gives them an almost psychic empathy. They need solitude and creative outlets to process what they take in. Compassion is boundless, but so is the tendency to escape when reality becomes too harsh — through fantasy, substances, or sheer emotional withdrawal.',
    keywords: ['empathetic', 'dreamy', 'compassionate', 'escapist'],
  },

  // =====================
  // MERCURY (domicile Gemini & Virgo, exaltation Virgo, detriment Sagittarius & Pisces, fall Pisces)
  // =====================
  'Mercury-Aries': {
    brief:
      'This person thinks fast and speaks faster. Ideas arrive fully formed and are delivered with a directness that can be refreshing or startling depending on the audience. They are decisive thinkers who trust their first instinct, which is often right. The weakness is a tendency to interrupt, argue for sport, and dismiss ideas that take too long to explain.',
    keywords: ['quick-thinking', 'direct', 'argumentative', 'decisive'],
  },
  'Mercury-Taurus': {
    brief:
      'Thought moves slowly and deliberately here, arriving at conclusions that are remarkably solid precisely because they were not rushed. This person has a practical, grounded intelligence — they think in terms of what is real, tangible, and useful. Once they form an opinion, changing it requires significant evidence. Their voice often has a pleasant, measured quality that people find calming.',
    keywords: ['deliberate', 'practical', 'stubborn-minded', 'grounded'],
  },
  'Mercury-Gemini': {
    brief:
      'Mercury is at home in Gemini, and the mind is quick, curious, and endlessly versatile. This person can hold multiple perspectives simultaneously without discomfort, which makes them brilliant conversationalists and natural learners. They collect information the way some people collect objects — for the sheer pleasure of it. The risk is superficiality, skimming across many subjects without mastering any.',
    keywords: ['quick-witted', 'curious', 'talkative', 'adaptable'],
  },
  'Mercury-Cancer': {
    brief:
      'Thinking is colored by feeling with this placement. This person has an excellent memory, especially for emotional details — they remember how things felt, not just what happened. Their communication style is warm and intuitive; they read between the lines effortlessly. Objectivity can be difficult when emotions are involved, and they may take intellectual disagreements personally.',
    keywords: ['intuitive', 'retentive', 'subjective', 'emotionally intelligent'],
  },
  'Mercury-Leo': {
    brief:
      'This person communicates with flair and conviction. Their ideas tend to be bold, and they present them with a confidence that commands attention. They are natural storytellers who make even mundane anecdotes compelling. The shadow is an attachment to being right and a tendency to dominate conversations, sometimes talking over quieter voices.',
    keywords: ['dramatic', 'confident', 'persuasive', 'attention-commanding'],
  },
  'Mercury-Virgo': {
    brief:
      'Mercury is both at home and exalted in Virgo, making this one of the sharpest mental placements in the zodiac. This person notices everything — errors, patterns, inconsistencies that others glaze over. Their thinking is systematic, precise, and oriented toward improvement. The challenge is analysis paralysis and a critical inner voice that applies impossible standards to their own work and sometimes to everyone else\'s.',
    keywords: ['analytical', 'meticulous', 'critical', 'systematic'],
  },
  'Mercury-Libra': {
    brief:
      'This person thinks in terms of balance, fairness, and how ideas relate to each other. They are gifted at seeing both sides of an argument, which makes them excellent negotiators but sometimes agonizingly slow decision-makers. Their communication style is diplomatic and tactful — they know how to say difficult things gracefully. They genuinely struggle to form opinions in isolation; they think best in dialogue.',
    keywords: ['diplomatic', 'balanced', 'indecisive', 'fair-minded'],
  },
  'Mercury-Scorpio': {
    brief:
      'The mind here is penetrating, investigative, and impossible to fool. This person sees through pretense instinctively and is drawn to hidden truths, underlying motives, and anything beneath the surface. They speak with precision and sometimes with devastating honesty. Trust determines what they share — they can keep secrets indefinitely and expect the same in return.',
    keywords: ['penetrating', 'strategic', 'secretive', 'perceptive'],
  },
  'Mercury-Sagittarius': {
    brief:
      'Mercury is in its detriment in Sagittarius, and the mind reaches for big ideas at the expense of fine details. This person thinks in terms of meaning, philosophy, and broad patterns. They are enthusiastic communicators who inspire others with their vision, but they can be careless with facts and prone to exaggeration. Nuance is not their natural strength — they prefer the sweeping statement.',
    keywords: ['philosophical', 'blunt', 'big-picture', 'enthusiastic'],
  },
  'Mercury-Capricorn': {
    brief:
      'Thinking is structured, strategic, and oriented toward results. This person does not waste words or entertain ideas without practical application. They have a dry, understated wit that can catch people off guard. Their mental authority grows with age and experience — they become sharper and more confident in their thinking over time. The risk is rigidity and dismissing ideas that seem impractical.',
    keywords: ['strategic', 'pragmatic', 'dry-witted', 'disciplined'],
  },
  'Mercury-Aquarius': {
    brief:
      'This person thinks in original, sometimes startling ways. Their mind naturally gravitates toward systems, patterns, and future possibilities that others have not considered. They communicate ideas with a detached clarity that can be brilliant or alienating depending on context. Conventional thinking bores them, and they may unconsciously provoke just to shake people out of comfortable assumptions.',
    keywords: ['original', 'innovative', 'detached', 'provocative'],
  },
  'Mercury-Pisces': {
    brief:
      'Mercury is in both its detriment and fall in Pisces, and linear thinking is not this person\'s strength — nor does it need to be. Their mind works through images, impressions, and intuitive leaps that can produce genuinely creative insights. They absorb information more than they analyze it, and they often know things without being able to explain how. Structure, deadlines, and precise language require conscious effort.',
    keywords: ['imaginative', 'intuitive', 'poetic', 'unfocused'],
  },

  // =====================
  // VENUS (domicile Taurus & Libra, exaltation Pisces, detriment Aries & Scorpio, fall Virgo)
  // =====================
  'Venus-Aries': {
    brief:
      'Venus is in its detriment in Aries, and love is pursued with a boldness that can be thrilling or overwhelming. This person falls fast, chases what they want, and loses interest if there is no challenge. They are attracted to confidence and independence in others, and they bring a fierce directness to romance. The lesson is learning that love sometimes requires patience and surrender, not conquest.',
    keywords: ['passionate', 'impulsive', 'direct', 'competitive'],
  },
  'Venus-Taurus': {
    brief:
      'Venus is at home in Taurus, and love here is expressed through loyalty, physical affection, and the creation of comfort. This person values stability in relationships and shows devotion through consistent, tangible acts — cooking for someone, building a home together, showing up day after day. Their sensuality is genuine and unhurried. Possessiveness is the shadow they must watch for.',
    keywords: ['devoted', 'sensual', 'loyal', 'possessive'],
  },
  'Venus-Gemini': {
    brief:
      'This person falls in love with minds. They need intellectual stimulation in relationships as much as physical attraction, and flirtation through conversation is an art form for them. Variety keeps them engaged — they are drawn to people who surprise them and who can match their verbal agility. Commitment can feel constraining unless the relationship keeps evolving.',
    keywords: ['flirtatious', 'cerebral', 'playful', 'commitment-wary'],
  },
  'Venus-Cancer': {
    brief:
      'Love is expressed through care, memory, and emotional attunement with this placement. This person remembers every important date, every preference, every vulnerability their partner has shared. They create deep emotional bonds and want relationships that feel like home. The risk is smothering — loving so protectively that they crowd out the independence their partner needs.',
    keywords: ['nurturing', 'sentimental', 'protective', 'clingy'],
  },
  'Venus-Leo': {
    brief:
      'This person loves with their whole chest — big gestures, sincere compliments, and a warmth that makes their partner feel like the center of the universe. They are generous and loyal in love and expect the same devotion in return. Romance is not optional; it is essential. The shadow is wounded pride — they take rejection harder than almost any other placement.',
    keywords: ['romantic', 'generous', 'dramatic', 'prideful'],
  },
  'Venus-Virgo': {
    brief:
      'Venus is in its fall in Virgo, and love is shown through practical devotion rather than grand romance. This person pays attention to the small things — remembering how their partner takes their coffee, quietly solving problems before they are even mentioned. They can be hard to read because affection is understated. The challenge is an inner critic that finds fault in partners and in themselves, making it hard to simply enjoy love.',
    keywords: ['devoted', 'particular', 'modest', 'self-critical'],
  },
  'Venus-Libra': {
    brief:
      'Venus is at home in Libra, and this person has a natural grace in relationships that others envy. Partnership is central to their happiness — they genuinely thrive in a good relationship and wilt without one. They have a refined aesthetic sense and are attracted to beauty, charm, and social elegance. The risk is losing themselves in the other person or staying in unfulfilling relationships because being alone feels worse.',
    keywords: ['charming', 'partnership-oriented', 'aesthetic', 'conflict-avoidant'],
  },
  'Venus-Scorpio': {
    brief:
      'Venus is in its detriment in Scorpio, and love here is an all-or-nothing affair. This person craves emotional and physical depth in relationships — surface-level connection leaves them cold. When they commit, their loyalty is absolute and their intimacy is transformative. Jealousy and possessiveness are real dangers, and betrayal is met with a finality that rarely allows second chances.',
    keywords: ['intense', 'deeply bonding', 'jealous', 'transformative'],
  },
  'Venus-Sagittarius': {
    brief:
      'Freedom and growth are the foundation of love for this person. They are attracted to people who expand their world — through culture, philosophy, humor, or adventure. Relationships must feel like an exploration, not a cage. They are honest and enthusiastic partners but can struggle with the day-to-day maintenance that long-term love requires.',
    keywords: ['adventurous', 'honest', 'freedom-loving', 'non-committal'],
  },
  'Venus-Capricorn': {
    brief:
      'Love is taken seriously here — this person does not date casually or give their heart without considering the long-term implications. They are attracted to competence, ambition, and emotional maturity. Affection is expressed through commitment, reliability, and building something lasting together. The shadow is emotional coolness, or treating relationships like strategic partnerships rather than living, breathing connections.',
    keywords: ['committed', 'mature', 'reserved', 'status-conscious'],
  },
  'Venus-Aquarius': {
    brief:
      'This person needs space and intellectual freedom in relationships above almost everything else. They are attracted to people who are unusual, independent, and unafraid to be themselves. Friendship is the foundation of their romantic life — they want a partner who is also their most interesting companion. Emotional intensity can feel suffocating to them, and they may unconsciously keep partners at arm\'s length.',
    keywords: ['independent', 'unconventional', 'friendly', 'emotionally cool'],
  },
  'Venus-Pisces': {
    brief:
      'Venus is exalted in Pisces, and love reaches its most boundless and selfless expression here. This person loves with a compassion and tenderness that can feel almost spiritual. They idealize their partners and see the best in people, which is beautiful but leaves them vulnerable to disappointment. Boundaries in love are their greatest challenge — they give without limit and must learn that self-sacrifice is not the same as devotion.',
    keywords: ['compassionate', 'romantic', 'idealistic', 'self-sacrificing'],
  },

  // =====================
  // MARS (domicile Aries & Scorpio, exaltation Capricorn, detriment Taurus & Libra, fall Cancer)
  // =====================
  'Mars-Aries': {
    brief:
      'Mars is at home in Aries, and the drive to act is immediate, fierce, and fearless. This person moves through the world with a raw energy that is hard to ignore. They compete instinctively, confront directly, and recover from setbacks with remarkable speed. The risk is recklessness — burning bridges, starting fights, and mistaking aggression for strength.',
    keywords: ['fearless', 'competitive', 'impulsive', 'energetic'],
  },
  'Mars-Taurus': {
    brief:
      'Mars is in its detriment in Taurus, and this person is slow to anger but nearly impossible to stop once they get going. Their drive is steady rather than explosive — they achieve through persistence, patience, and sheer endurance. They fight for security, comfort, and the things they have built. Laziness and stubbornness are the shadow sides; they can dig in their heels long past the point of reason.',
    keywords: ['persistent', 'slow-burning', 'stubborn', 'enduring'],
  },
  'Mars-Gemini': {
    brief:
      'This person fights with words and wins with wit. Their energy is mental and scattered across multiple interests simultaneously — they need variety or they stagnate. They are quick to engage in debate and skilled at arguing from any angle. Physical stamina may be inconsistent, but mental energy is relentless. The challenge is following through; they start more projects than they finish.',
    keywords: ['quick', 'verbally combative', 'scattered', 'mentally driven'],
  },
  'Mars-Cancer': {
    brief:
      'Mars is in its fall in Cancer, and the fighting spirit is complicated by deep emotional sensitivity. This person is fiercely protective of family and loved ones — threaten someone they care about and they become formidable. Their anger tends to be indirect, expressing itself through moodiness, passive aggression, or emotional withdrawal rather than open confrontation. Learning to assert themselves directly without guilt is their core challenge.',
    keywords: ['protective', 'passive-aggressive', 'emotionally driven', 'defensive'],
  },
  'Mars-Leo': {
    brief:
      'There is a boldness and theatrical quality to how this person asserts themselves. They fight for recognition, creative expression, and the right to be seen. Their energy is warm and commanding — they lead naturally and inspire others to follow. Pride can be a vulnerability; they struggle when their efforts go unacknowledged and may create drama to reclaim the spotlight.',
    keywords: ['bold', 'dramatic', 'commanding', 'proud'],
  },
  'Mars-Virgo': {
    brief:
      'This person channels their drive into precision, efficiency, and getting things exactly right. Their work ethic is formidable — they improve systems, solve problems, and tackle tasks that others find tedious with genuine focus. Anger is often expressed through criticism or nitpicking rather than direct confrontation. They are most effective when they direct their exacting standards toward meaningful work rather than petty corrections.',
    keywords: ['meticulous', 'hardworking', 'critical', 'efficient'],
  },
  'Mars-Libra': {
    brief:
      'Mars is in its detriment in Libra, and the drive to act is constantly filtered through awareness of how others will respond. This person fights for fairness, justice, and balance, but can be indecisive about when and how to assert themselves. They prefer to negotiate rather than confront and can become frustrated by their own reluctance to make waves. When they finally do take action, it is measured and strategically sound.',
    keywords: ['diplomatic', 'indecisive', 'justice-oriented', 'strategic'],
  },
  'Mars-Scorpio': {
    brief:
      'Mars is at home in Scorpio, and the drive here is intense, focused, and relentless. This person does nothing halfway — when they commit to a goal, they pursue it with a quiet ferocity that can be intimidating. They are strategic rather than impulsive, willing to wait for the right moment to act. The shadow is vindictiveness; when wronged, they have the patience and memory to settle scores long after others have moved on.',
    keywords: ['relentless', 'strategic', 'intense', 'vengeful'],
  },
  'Mars-Sagittarius': {
    brief:
      'Energy is abundant, enthusiastic, and pointed toward the horizon with this placement. This person fights for beliefs, principles, and the freedom to explore. They take action with an optimism that borders on recklessness — leaping before looking because they trust that things will work out. Restlessness is constant; they need physical movement, travel, or intellectual adventure to feel like themselves.',
    keywords: ['adventurous', 'enthusiastic', 'restless', 'principled'],
  },
  'Mars-Capricorn': {
    brief:
      'Mars is exalted in Capricorn, and ambition is channeled with disciplined, strategic precision. This person plays the long game — they set goals, build plans, and execute with a patience that produces remarkable results over time. Their drive is quiet but implacable; obstacles are problems to be solved, not reasons to quit. The risk is becoming calculating to the point of coldness, or defining themselves entirely through achievement.',
    keywords: ['ambitious', 'disciplined', 'strategic', 'tireless'],
  },
  'Mars-Aquarius': {
    brief:
      'This person fights for ideas, causes, and the future they believe in. Their energy is unconventional — they approach problems from unexpected angles and refuse to follow the established playbook if it does not make sense. They can be stubborn about their independence and rebellious when they feel controlled. Collective action energizes them more than solitary ambition.',
    keywords: ['rebellious', 'innovative', 'stubborn', 'cause-driven'],
  },
  'Mars-Pisces': {
    brief:
      'Drive and ambition take an unusual form here — this person is motivated by compassion, imagination, and a vision of how things could be. Their energy ebbs and flows with their emotional state, making them inconsistent but capable of extraordinary effort when inspired. They avoid direct conflict and may struggle to assert themselves, channeling frustration inward. Creative and spiritual pursuits are where their energy finds its best expression.',
    keywords: ['compassionate', 'imaginative', 'passive', 'inspired'],
  },


  // ============================================================
  // JUPITER (growth, expansion, faith, opportunity, abundance)
  // Domicile: Sagittarius & Pisces | Exaltation: Cancer
  // Detriment: Gemini & Virgo | Fall: Capricorn
  // ============================================================

  'Jupiter-Aries': {
    brief:
      'Someone with Jupiter in Aries meets opportunity with bold, instinctive confidence. They grow fastest when they trust their pioneering impulses and leap before the crowd even notices the opening. Generosity here is spontaneous and fiery — they champion underdogs, spark new ventures, and inspire others through sheer enthusiasm. Their faith in life is muscular and direct: they believe in action.',
    keywords: ['bold optimism', 'trailblazing faith', 'courageous expansion'],
  },
  'Jupiter-Taurus': {
    brief:
      'This person expands through patience, sensory richness, and steady accumulation. They have an instinct for turning modest resources into something abundant, trusting the slow magic of persistence over flashy shortcuts. Their generosity is tangible — good meals, comfortable spaces, practical help rather than empty promises. Growth arrives when they commit fully and let things ripen in their own time.',
    keywords: ['patient abundance', 'sensory richness', 'grounded generosity'],
  },
  'Jupiter-Gemini': {
    brief:
      'Jupiter in Gemini scatters its gifts across many interests, making this person a lively connector of ideas and people. In its detriment here, Jupiter must work harder to deepen rather than merely broaden — the temptation is to know a little about everything and master nothing. At their best, they are brilliant translators who make complex subjects accessible and joyful. Their optimism lives in conversation, curiosity, and the next fascinating question.',
    keywords: ['intellectual curiosity', 'restless expansion', 'versatile thinking'],
  },
  'Jupiter-Cancer': {
    brief:
      'Exalted in Cancer, Jupiter here produces people of extraordinary emotional generosity. They grow by nurturing — feeding others, creating sanctuaries, honoring roots and memory. Their faith is deeply intuitive; they trust the wisdom of feeling and the bonds of family, chosen or born. This placement often brings abundance through caretaking, emotional intelligence, and an instinct for making everyone feel they belong.',
    keywords: ['emotional abundance', 'nurturing faith', 'intuitive generosity'],
  },
  'Jupiter-Leo': {
    brief:
      'Jupiter in Leo magnifies the heart. This person grows through creative self-expression, dramatic generosity, and a willingness to be seen in full color. They believe in the power of celebration, loyalty, and living with theatrical warmth. Their optimism is contagious because it comes from genuine delight — they want everyone at the feast, and they will make sure the feast is magnificent.',
    keywords: ['radiant confidence', 'creative generosity', 'joyful self-expression'],
  },
  'Jupiter-Virgo': {
    brief:
      'In its detriment in Virgo, Jupiter must find expansion through precision rather than grand gestures. This person grows by mastering useful skills, refining systems, and being genuinely helpful in concrete ways. Their generosity is practical — they show love through service, careful attention, and solving real problems. The challenge is to avoid shrinking their vision to only what can be measured and proved.',
    keywords: ['practical wisdom', 'skilled service', 'meticulous growth'],
  },
  'Jupiter-Libra': {
    brief:
      'Someone with Jupiter in Libra expands through partnership, aesthetic beauty, and the pursuit of fairness. They grow when they collaborate, negotiate, and create harmony between opposing forces. Their faith lives in the belief that balance is possible and that beauty matters — not as luxury, but as a form of justice. Generosity here is relational: they give by making space for others to shine.',
    keywords: ['diplomatic expansion', 'aesthetic faith', 'relational abundance'],
  },
  'Jupiter-Scorpio': {
    brief:
      'This person grows through depth, transformation, and unflinching honesty about the hidden layers of experience. Jupiter in Scorpio finds abundance by going where others fear to look — into taboo, grief, power dynamics, and the alchemy of crisis. Their faith is forged in darkness and is therefore remarkably resilient. They are generous with their insight and loyal to those who earn their trust.',
    keywords: ['transformative depth', 'resilient faith', 'fearless insight'],
  },
  'Jupiter-Sagittarius': {
    brief:
      'In its own domicile, Jupiter in Sagittarius is expansive, philosophical, and irrepressibly hopeful. This person is a natural seeker — drawn to travel, big ideas, foreign cultures, and the endless horizon of meaning. Their generosity is sweeping and enthusiastic; they want to share everything they have discovered. Faith here is instinctive and robust, sometimes to the point of excess, but always animated by genuine wonder.',
    keywords: ['philosophical seeking', 'adventurous faith', 'boundless enthusiasm'],
  },
  'Jupiter-Capricorn': {
    brief:
      'Jupiter in its fall in Capricorn must earn every ounce of expansion through discipline and long-term effort. This person does not expect luck — they build it, brick by brick, with strategic patience. Their generosity is structural: they create institutions, mentor deliberately, and invest in what endures. Growth comes slowly but solidly, and their faith, once tested and proven, is unshakable.',
    keywords: ['disciplined growth', 'strategic patience', 'earned abundance'],
  },
  'Jupiter-Aquarius': {
    brief:
      'Someone with Jupiter in Aquarius grows through community, unconventional ideas, and a vision of collective well-being. Their optimism is humanitarian — they believe progress is possible when individuals serve something larger than personal gain. Generosity here is egalitarian and sometimes impersonal; they give to causes, movements, and future generations. Their faith lives in the power of ideas to reshape the world.',
    keywords: ['humanitarian vision', 'progressive optimism', 'collective growth'],
  },
  'Jupiter-Pisces': {
    brief:
      'In its traditional domicile, Jupiter in Pisces dissolves boundaries between self and world, producing deep compassion and imaginative abundance. This person grows through empathy, art, spiritual practice, and surrender to forces larger than the ego. Their generosity flows like water — instinctive, boundary-less, sometimes to their own detriment. Faith here is oceanic: vast, mysterious, and nourished by the unseen.',
    keywords: ['boundless compassion', 'mystical faith', 'imaginative abundance'],
  },

  // ============================================================
  // SATURN (responsibility, structure, discipline, limitation, mastery)
  // Domicile: Capricorn & Aquarius | Exaltation: Libra
  // Detriment: Cancer & Leo | Fall: Aries
  // ============================================================

  'Saturn-Aries': {
    brief:
      'Saturn in its fall in Aries creates a deep tension between the urge to act and the fear of acting wrongly. This person often struggles with anger, impulsiveness, or a frustrating sense that their boldness meets resistance at every turn. The mastery they are building is the hardest kind: disciplined courage. Over time, they learn to channel raw will into focused, sustainable leadership.',
    keywords: ['disciplined courage', 'tempered will', 'frustrated initiative'],
  },
  'Saturn-Taurus': {
    brief:
      'Someone with Saturn in Taurus takes material security seriously — sometimes too seriously. Early experiences may have impressed upon them that resources are scarce and must be carefully guarded. Their mastery lies in building real, lasting stability through patient effort and honest labor. When they learn that true security comes from inner sufficiency rather than accumulation alone, they become remarkably grounded and dependable.',
    keywords: ['material discipline', 'patient endurance', 'earned stability'],
  },
  'Saturn-Gemini': {
    brief:
      'This person approaches communication and learning with unusual seriousness and rigor. Saturn in Gemini may bring early struggles with self-expression, shyness, or the feeling that their words carry heavy weight. Over time, they develop a precise, authoritative way of thinking and speaking. Their mastery emerges as intellectual discipline — the ability to organize scattered ideas into clear, enduring structures.',
    keywords: ['intellectual rigor', 'careful communication', 'structured thinking'],
  },
  'Saturn-Cancer': {
    brief:
      'In its detriment in Cancer, Saturn burdens the emotional life with responsibility, reserve, and an early sense of having to be the strong one in the family. This person may struggle to express vulnerability or trust that emotional needs will be met. Their deepest work involves building inner security that does not depend on external approval. When they master this, they become profoundly protective and emotionally wise.',
    keywords: ['emotional reserve', 'family responsibility', 'guarded vulnerability'],
  },
  'Saturn-Leo': {
    brief:
      'Saturn in its detriment in Leo creates a complicated relationship with self-expression, recognition, and joy. This person may feel that their creative impulses are stifled or that they must earn the right to shine. There can be a seriousness about identity — a fear of being seen as frivolous. Their mastery comes when they learn to express authority with warmth and to claim their creative power without apology.',
    keywords: ['restrained expression', 'earned recognition', 'serious creativity'],
  },
  'Saturn-Virgo': {
    brief:
      'Someone with Saturn in Virgo holds themselves to exacting standards of competence and usefulness. Perfectionism is both their gift and their burden — they refine every detail but may struggle to feel that anything is ever good enough. Their discipline in matters of craft, health, and service is formidable. Mastery arrives when they learn that imperfection is not failure and that their careful work speaks for itself.',
    keywords: ['exacting standards', 'disciplined service', 'perfectionist burden'],
  },
  'Saturn-Libra': {
    brief:
      'Exalted in Libra, Saturn here bestows a mature, principled approach to relationships and justice. This person takes commitments seriously and understands that true fairness requires structure, boundaries, and sometimes difficult choices. They may be drawn to law, mediation, or any field where balance must be actively maintained. Their authority is expressed through diplomacy, and their integrity in partnership is deeply earned.',
    keywords: ['principled fairness', 'committed partnerships', 'diplomatic authority'],
  },
  'Saturn-Scorpio': {
    brief:
      'This person confronts power, loss, and the shadow side of life with unflinching seriousness. Saturn in Scorpio demands emotional honesty even when it is painful, and early experiences may involve encounters with control, betrayal, or enforced transformation. Their mastery is hard-won: the ability to sit with darkness without being consumed by it. They develop extraordinary psychological resilience and a quiet, formidable strength.',
    keywords: ['psychological resilience', 'shadow mastery', 'unflinching honesty'],
  },
  'Saturn-Sagittarius': {
    brief:
      'Someone with Saturn in Sagittarius takes belief, ethics, and the search for meaning seriously — perhaps too seriously at times. They may wrestle with dogmatism, doubt, or the burden of needing a comprehensive worldview before they can act. Their discipline is philosophical: they build carefully reasoned frameworks rather than accepting easy answers. Mastery comes when they hold their convictions with both rigor and humility.',
    keywords: ['philosophical discipline', 'structured belief', 'tested convictions'],
  },
  'Saturn-Capricorn': {
    brief:
      'In its own domicile, Saturn in Capricorn is powerfully aligned with its nature: ambitious, strategic, and willing to endure whatever the climb requires. This person understands authority from the inside and often assumes responsibility early in life. Their discipline is natural but can harden into coldness or workaholism if unchecked. At their best, they are master builders — patient architects of lasting achievement.',
    keywords: ['natural authority', 'strategic ambition', 'enduring discipline'],
  },
  'Saturn-Aquarius': {
    brief:
      'In its traditional domicile, Saturn in Aquarius brings discipline to the realm of ideas, community, and social structures. This person thinks in systems and often feels a weighty responsibility toward collective progress. They can be brilliant organizers of groups and movements, but may struggle with emotional detachment or rigidity in their ideals. Their mastery lies in building structures that serve human freedom rather than constrain it.',
    keywords: ['systematic thinking', 'social responsibility', 'principled reform'],
  },
  'Saturn-Pisces': {
    brief:
      'Saturn in Pisces asks someone to give form to the formless — to discipline their imagination, spirituality, and emotional sensitivity without crushing these gifts. This person may feel the weight of collective suffering or struggle to set boundaries between their inner world and the chaos around them. Their mastery emerges as the ability to channel compassion into concrete action and to hold space for grief without drowning in it.',
    keywords: ['structured compassion', 'disciplined imagination', 'bounded sensitivity'],
  },

  // ============================================================
  // URANUS (revolution, individuation, innovation, disruption, awakening)
  // Spends ~7 years per sign — GENERATIONAL
  // No traditional dignities
  // ============================================================

  'Uranus-Aries': {
    brief:
      'People born with Uranus in Aries carry a fierce, restless drive to reinvent what it means to be an individual. This generation challenges conformity head-on, valuing personal freedom and direct action over polite consensus. They can be pioneers and provocateurs in equal measure, sometimes confusing rebellion with purpose. Their collective gift is the courage to start over — to tear down stale structures and insist on authenticity.',
    keywords: ['radical individualism', 'pioneering disruption', 'fierce independence'],
  },
  'Uranus-Taurus': {
    brief:
      'This generation arrives to revolutionize humanity\'s relationship with material resources, the body, and the earth itself. People born with Uranus in Taurus tend to question inherited assumptions about wealth, ownership, and what constitutes real value. They bring innovation to stubborn, entrenched systems — slowly, because Taurus resists sudden change, but irreversibly. Their gift is grounding radical ideas in practical, tangible form.',
    keywords: ['resource revolution', 'grounded innovation', 'redefining value'],
  },
  'Uranus-Gemini': {
    brief:
      'People born with Uranus in Gemini carry a mandate to transform how information moves and how minds connect. This generation tends to be intellectually restless, drawn to unconventional ways of learning, communicating, and processing knowledge. They challenge the boundary between disciplines, mixing ideas that were never meant to meet. Their collective gift is cognitive flexibility — the ability to think in entirely new patterns.',
    keywords: ['cognitive revolution', 'intellectual restlessness', 'unconventional communication'],
  },
  'Uranus-Cancer': {
    brief:
      'This generation disrupts traditional notions of family, home, and belonging. People born with Uranus in Cancer often redefine what safety means, building chosen families or reinventing domestic life in ways their parents could not have imagined. There can be a tension between deep emotional needs and a compulsion to break free of familial expectation. Their gift is liberating the concept of home from rigid inheritance.',
    keywords: ['domestic reinvention', 'liberated belonging', 'emotional independence'],
  },
  'Uranus-Leo': {
    brief:
      'People born with Uranus in Leo carry a drive to revolutionize creative expression, leadership, and the very idea of personal identity. This generation tends to produce bold, unconventional artists and leaders who refuse to perform selfhood by anyone else\'s script. They challenge authority not by hiding but by being unapologetically original. Their collective gift is the insistence that authenticity is more powerful than conformity.',
    keywords: ['creative revolution', 'radical self-expression', 'unconventional leadership'],
  },
  'Uranus-Virgo': {
    brief:
      'This generation transforms systems of health, work, and daily practice from the inside out. People born with Uranus in Virgo tend to question conventional approaches to wellness, labor, and efficiency, seeking innovative methods rooted in precise observation. They are gifted at finding the flaw in the system and redesigning it. Their collective contribution is the insistence that practical life deserves the same revolutionary attention as grand ideals.',
    keywords: ['systemic innovation', 'practical revolution', 'analytical disruption'],
  },
  'Uranus-Libra': {
    brief:
      'People born with Uranus in Libra carry a generational impulse to reinvent relationships, partnership, and the structures of justice. They tend to challenge traditional ideas about marriage, commitment, and what fairness actually looks like in practice. This generation experiments with new forms of collaboration and connection, sometimes at the cost of stability. Their gift is the insistence that equality must be lived, not merely declared.',
    keywords: ['relational revolution', 'partnership innovation', 'radical fairness'],
  },
  'Uranus-Scorpio': {
    brief:
      'This generation confronts taboo, hidden power, and the deepest psychological truths with a revolutionary intensity. People born with Uranus in Scorpio tend to be unflinching about what lies beneath the surface — they expose secrets, challenge power structures, and refuse comfortable denial. Their transformation is volcanic: slow pressure building toward sudden, irreversible change. Their collective gift is the courage to look at what others will not.',
    keywords: ['psychological revolution', 'taboo-breaking', 'transformative intensity'],
  },
  'Uranus-Sagittarius': {
    brief:
      'People born with Uranus in Sagittarius carry a drive to revolutionize belief, education, and the search for meaning. This generation questions inherited philosophies, religious dogma, and cultural assumptions with restless intellectual energy. They seek truth through direct experience rather than received wisdom, and they are often drawn to the edges of the known world — literal or conceptual. Their gift is the liberation of thought from tradition.',
    keywords: ['philosophical disruption', 'liberated belief', 'adventurous innovation'],
  },
  'Uranus-Capricorn': {
    brief:
      'This generation arrives to shake the foundations of authority, government, and institutional power. People born with Uranus in Capricorn tend to be pragmatic revolutionaries — they do not merely protest old structures but build new ones to replace them. There is a tension between respect for tradition and an urgent need to modernize it. Their collective gift is the ability to make radical change look like common sense.',
    keywords: ['institutional reform', 'pragmatic revolution', 'structural innovation'],
  },
  'Uranus-Aquarius': {
    brief:
      'People born with Uranus in Aquarius carry a powerful generational mandate to reimagine community, collective identity, and the future itself. This placement amplifies Uranus\'s own nature, producing a generation intensely focused on progress, humanitarian ideals, and systemic change. They can be visionary but sometimes detached, prizing ideas over emotional connection. Their gift is an unshakable faith that the world can be fundamentally reorganized for the better.',
    keywords: ['visionary idealism', 'collective reinvention', 'humanitarian awakening'],
  },
  'Uranus-Pisces': {
    brief:
      'This generation dissolves old boundaries between the spiritual and the mundane, bringing revolution to imagination, compassion, and collective consciousness. People born with Uranus in Pisces tend to experience sudden awakenings through art, mysticism, or encounters with suffering that shatter comfortable illusions. They are drawn to healing and creative expression as forms of liberation. Their collective gift is the radical expansion of empathy.',
    keywords: ['spiritual awakening', 'imaginative revolution', 'compassionate disruption'],
  },

  // ============================================================
  // NEPTUNE (dreams, illusion, transcendence, compassion, dissolution)
  // Spends ~14 years per sign — GENERATIONAL
  // No traditional dignities
  // ============================================================

  'Neptune-Aries': {
    brief:
      'People born with Neptune in Aries carry a generational dream of heroic individualism — the vision that a single courageous act can redeem the world. This generation tends to idealize boldness, self-reliance, and the warrior spirit, sometimes confusing aggression with strength. Their collective blind spot is impatience with vulnerability. At their best, they channel spiritual fire into compassionate leadership and inspire others to act on behalf of something sacred.',
    keywords: ['idealized courage', 'spiritual fire', 'heroic dreaming'],
  },
  'Neptune-Taurus': {
    brief:
      'This generation dreams of a world where beauty, comfort, and the earth itself are treated as sacred. People born with Neptune in Taurus tend to idealize simplicity, natural abundance, and sensory pleasure as pathways to transcendence. Their blind spot can be materialism disguised as spirituality, or the illusion that possessing beautiful things equals inner peace. Their gift is the vision that the physical world is not separate from the divine.',
    keywords: ['sacred materialism', 'earthly transcendence', 'sensory idealism'],
  },
  'Neptune-Gemini': {
    brief:
      'People born with Neptune in Gemini carry a generational longing to dissolve the boundaries between minds — to communicate so perfectly that separation itself disappears. This generation tends to idealize words, stories, and intellectual connection, sometimes losing themselves in endless information or mistaking cleverness for wisdom. Their collective gift is the ability to weave narratives that enchant and unite, dissolving rigid categories of thought.',
    keywords: ['enchanted communication', 'mythic storytelling', 'intellectual transcendence'],
  },
  'Neptune-Cancer': {
    brief:
      'This generation dreams of perfect belonging — an idealized home, family, or motherland that provides unconditional emotional safety. People born with Neptune in Cancer tend to carry deep nostalgia and a longing for roots that may or may not have ever existed. Their blind spot is sentimentality that resists the present. Their gift is a profound capacity for emotional attunement and the ability to create spaces where others feel deeply held.',
    keywords: ['idealized belonging', 'deep nostalgia', 'emotional attunement'],
  },
  'Neptune-Leo': {
    brief:
      'People born with Neptune in Leo carry a generational dream of transcendence through creative self-expression, romance, and the radiance of the individual spirit. This generation tends to idealize the artist, the lover, and the charismatic leader, sometimes confusing performance with authenticity. Their blind spot is vanity disguised as inspiration. At their best, they channel the numinous into art and generosity that genuinely moves the human heart.',
    keywords: ['creative transcendence', 'romantic idealism', 'inspired radiance'],
  },
  'Neptune-Virgo': {
    brief:
      'This generation carries a dream of perfecting the everyday — the vision that meticulous care, service, and right living can heal the world. People born with Neptune in Virgo tend to idealize purity, health, and usefulness, sometimes falling into anxiety when reality refuses to be tidy. Their blind spot is the illusion that control equals holiness. Their collective gift is devotion to craft and the quiet spiritual practice of doing ordinary things with extraordinary attention.',
    keywords: ['devoted craftsmanship', 'healing service', 'sacred routine'],
  },
  'Neptune-Libra': {
    brief:
      'People born with Neptune in Libra carry a generational dream of perfect harmony, beauty, and justice in human relationships. This generation tends to idealize partnership, diplomacy, and aesthetic refinement, sometimes avoiding necessary conflict in the name of peace. Their blind spot is the belief that surface harmony equals genuine resolution. Their gift is a deep, almost spiritual commitment to fairness and the vision that beauty can be a force for reconciliation.',
    keywords: ['idealized harmony', 'aesthetic spirituality', 'relational transcendence'],
  },
  'Neptune-Scorpio': {
    brief:
      'This generation dreams of total transformation — the dissolution of everything false so that what is real can finally emerge. People born with Neptune in Scorpio tend to be drawn to the hidden, the taboo, and the psychologically intense, seeking transcendence through depth rather than light. Their blind spot is glamorizing darkness or confusing obsession with spiritual insight. Their gift is a fearless willingness to dissolve the ego and confront the mysteries that others avoid.',
    keywords: ['transformative mysticism', 'depth seeking', 'fearless dissolution'],
  },
  'Neptune-Sagittarius': {
    brief:
      'People born with Neptune in Sagittarius carry a generational dream of universal meaning — the vision that all paths lead to the same transcendent truth. This generation tends to idealize spiritual seeking, cross-cultural connection, and the expansion of consciousness beyond any single tradition. Their blind spot is spiritual bypassing or the belief that enthusiasm alone constitutes wisdom. Their gift is an infectious faith that life is meaningful and that the horizon always holds more.',
    keywords: ['universal seeking', 'spiritual wanderlust', 'expansive faith'],
  },
  'Neptune-Capricorn': {
    brief:
      'This generation dreams of dissolving and reimagining the structures of power, authority, and social order. People born with Neptune in Capricorn tend to carry a quiet disillusionment with institutions, sometimes struggling to believe in systems that previous generations took for granted. Their blind spot is cynicism masquerading as realism. Their collective gift is the capacity to envision authority rooted in compassion and to imagine structures that serve the soul as well as the state.',
    keywords: ['institutional dreaming', 'compassionate authority', 'structural imagination'],
  },
  'Neptune-Aquarius': {
    brief:
      'People born with Neptune in Aquarius carry a generational dream of collective transcendence — the dissolution of barriers between individuals in service of a shared, luminous future. This generation tends to idealize community, technological possibility, and the notion that humanity can evolve beyond its limitations. Their blind spot is utopianism that ignores present suffering. Their gift is the vision that interconnection is not merely practical but sacred.',
    keywords: ['collective transcendence', 'utopian vision', 'sacred interconnection'],
  },
  'Neptune-Pisces': {
    brief:
      'This generation carries a dream of total spiritual dissolution — the merging of all boundaries, the return to oceanic oneness. People born with Neptune in Pisces tend to be extraordinarily sensitive, imaginative, and porous to collective emotion. Their blind spot is escapism, martyrdom, or the inability to distinguish personal feeling from the world\'s pain. Their gift is an almost limitless capacity for compassion and the artistic or spiritual expression of truths that words alone cannot hold.',
    keywords: ['oceanic compassion', 'boundless imagination', 'spiritual dissolution'],
  },

  // ============================================================
  // PLUTO (power, transformation, the underworld, regeneration, obsession)
  // Spends ~12-31 years per sign — GENERATIONAL
  // No traditional dignities
  // ============================================================

  'Pluto-Aries': {
    brief:
      'People born with Pluto in Aries carry a generational obsession with the raw power of the individual will. This generation tends to confront questions of identity, autonomy, and survival with primal intensity, driven to discover what one person can truly become when stripped of everything inherited. Their shadow is ruthless self-interest disguised as independence. Their gift is the capacity to regenerate through sheer force of personal courage and to redefine what it means to begin.',
    keywords: ['primal will', 'identity transformation', 'radical self-reinvention'],
  },
  'Pluto-Taurus': {
    brief:
      'This generation transforms humanity\'s relationship with the material world — wealth, the body, the earth, and the meaning of survival itself. People born with Pluto in Taurus tend to experience collective crises around resources and sustenance that force a complete rethinking of value. Their shadow is possessiveness taken to destructive extremes. Their gift is the power to rebuild from the ground up, composting what has decayed into genuinely fertile new growth.',
    keywords: ['material transformation', 'resource regeneration', 'deep sustenance'],
  },
  'Pluto-Gemini': {
    brief:
      'People born with Pluto in Gemini carry a generational intensity around knowledge, communication, and the power of ideas to destroy and recreate worlds. This generation tends to experience the transformation of how information is gathered, shared, and weaponized. Their shadow is manipulation through words and the seduction of intellectual power. Their gift is the capacity to think thoughts that permanently alter the landscape of human understanding.',
    keywords: ['intellectual power', 'transformative knowledge', 'communication intensity'],
  },
  'Pluto-Cancer': {
    brief:
      'This generation confronts the deepest layers of family, homeland, and emotional inheritance. People born with Pluto in Cancer tend to carry powerful, sometimes overwhelming ancestral material — legacies of displacement, fierce protectiveness, and the question of what home means when the old world has been destroyed. Their shadow is clannish tribalism or emotional manipulation. Their gift is the power to transform the meaning of family and to regenerate the soul of a people.',
    keywords: ['ancestral transformation', 'emotional intensity', 'homeland regeneration'],
  },
  'Pluto-Leo': {
    brief:
      'People born with Pluto in Leo carry a generational obsession with personal power, creative authority, and the drama of the self. This generation tends to produce outsized personalities who confront questions of ego, leadership, and legacy with volcanic intensity. Their shadow is narcissism and the destructive need to dominate the stage. Their gift is the capacity to channel immense creative power into works and acts that outlast a single lifetime.',
    keywords: ['creative power', 'dramatic transformation', 'ego confrontation'],
  },
  'Pluto-Virgo': {
    brief:
      'This generation transforms the daily fabric of life — work, health, service, and the systems that sustain human existence. People born with Pluto in Virgo tend to carry an intense, sometimes obsessive drive to analyze, purify, and perfect. They inherit broken systems and feel compelled to dismantle them down to their smallest components. Their shadow is paralysis through criticism or the weaponization of purity. Their gift is the power to heal through ruthless, loving precision.',
    keywords: ['systemic purification', 'analytical intensity', 'healing through precision'],
  },
  'Pluto-Libra': {
    brief:
      'People born with Pluto in Libra carry a generational mandate to transform relationships, justice, and the balance of power between individuals. This generation tends to experience the destruction and reconstruction of partnership models, legal frameworks, and social contracts. Their shadow is passive-aggressive power struggles masked by charm. Their gift is the relentless pursuit of genuine equality and the willingness to destroy false peace in order to build real justice.',
    keywords: ['relational transformation', 'justice obsession', 'power rebalancing'],
  },
  'Pluto-Scorpio': {
    brief:
      'This generation was born into Pluto\'s own territory, carrying an extraordinary intensity around death, sexuality, hidden power, and psychological truth. People born with Pluto in Scorpio tend to be unflinching about the darkest aspects of human experience, drawn to confront what lies buried. Their shadow is nihilism, self-destruction, or the compulsive misuse of emotional power. Their gift is an unmatched capacity for regeneration — the ability to walk through total destruction and emerge transformed.',
    keywords: ['psychological depth', 'regenerative power', 'unflinching transformation'],
  },
  'Pluto-Sagittarius': {
    brief:
      'People born with Pluto in Sagittarius carry a generational obsession with truth, belief, and the meaning of existence itself. This generation tends to experience the destruction and reconstruction of religious, educational, and philosophical systems. They confront the question of what is worth believing when every inherited certainty has been exposed as incomplete. Their shadow is fanaticism or the weaponization of ideology. Their gift is the power to forge authentic faith from the ruins of dogma.',
    keywords: ['ideological transformation', 'truth obsession', 'faith regeneration'],
  },
  'Pluto-Capricorn': {
    brief:
      'This generation dismantles and rebuilds the very foundations of institutional power — governments, corporations, and hierarchies that no longer serve. People born with Pluto in Capricorn tend to inherit a world where traditional authority has been exposed as corrupt or hollow, and they carry the intense burden of restructuring it. Their shadow is authoritarianism or the cynical pursuit of power for its own sake. Their gift is the capacity to build new structures from the bones of the old, with unflinching realism.',
    keywords: ['institutional transformation', 'power restructuring', 'foundational regeneration'],
  },
  'Pluto-Aquarius': {
    brief:
      'People born with Pluto in Aquarius carry a generational mandate to transform collective identity, social networks, and the very concept of human progress. This generation tends to confront the shadow side of community — groupthink, dehumanization in the name of ideology, and the tension between individual freedom and collective power. Their shadow is cold utopianism that sacrifices people for principles. Their gift is the power to regenerate society itself and to imagine forms of human connection that have never existed before.',
    keywords: ['collective transformation', 'social regeneration', 'visionary power'],
  },
  'Pluto-Pisces': {
    brief:
      'This generation confronts the deepest layers of collective consciousness — the spiritual undercurrents, hidden grief, and accumulated illusions of an entire civilization. People born with Pluto in Pisces tend to carry extraordinary sensitivity to suffering and an intense drive to dissolve everything that separates humanity from its own soul. Their shadow is spiritual manipulation or the seductive pull of oblivion. Their gift is the power of total compassion — the kind that transforms not through force but through surrender.',
    keywords: ['spiritual transformation', 'compassionate power', 'collective dissolution'],
  },


  'Rising-Aries': {
    brief:
      'Someone with Aries rising walks into a room and the energy shifts — there is an unmistakable charge of urgency and aliveness about them. They come across as bold, direct, and a little impatient, with sharp features or a quick, purposeful stride that people notice immediately. Their chart ruler is Mars, meaning the planet of drive and action steers their entire life direction, giving them a competitive edge and a need to be first. They are often drawn to new beginnings over and over — starting projects, reinventing themselves, charging into unfamiliar territory with startling confidence. Life keeps asking them to develop courage without recklessness, to lead without steamrolling. At their best, they are trailblazers whose sheer force of will inspires everyone around them.',
    keywords: ['bold', 'pioneering', 'impatient', 'energizing'],
  },
  'Rising-Taurus': {
    brief:
      'Taurus rising people radiate calm. There is something grounded and unhurried about them — a steadiness in their voice, a solidity in their presence that puts others at ease. Ruled by Venus, their chart ruler, they are naturally drawn to beauty, comfort, and sensory pleasure, and this shows in how they dress, decorate, or carry themselves. First impressions often center on their warmth and reliability, though beneath that gentle exterior lies a stubbornness that can rival stone. Their life path tends to circle around themes of security, self-worth, and learning to build things that last. They move slowly, but what they build rarely crumbles.',
    keywords: ['grounded', 'sensual', 'steady', 'determined'],
  },
  'Rising-Gemini': {
    brief:
      'Gemini rising gives someone an unmistakable sparkle — quick eyes, expressive hands, a way of talking that pulls people in. They come across as curious, witty, and a little restless, as though their mind is already three conversations ahead. Mercury, their chart ruler, makes communication and mental agility the central engine of their life, and they often find themselves playing the role of messenger, translator, or connector between different worlds. People may notice they seem younger than their age, carrying a perpetual air of youthful curiosity. Their life themes revolve around learning, adaptability, and the challenge of going deep instead of wide. At their best, they are brilliant synthesizers who can make any complex idea feel accessible.',
    keywords: ['curious', 'articulate', 'adaptable', 'restless'],
  },
  'Rising-Cancer': {
    brief:
      'Cancer rising people often have soft, approachable faces and a quality of emotional receptivity that others sense immediately — they feel safe to be around, like a harbor in rough waters. Ruled by the Moon, their chart ruler, their moods and outer presentation shift more than most, sometimes visibly changing day to day depending on their emotional weather. First impressions tend to highlight their warmth, their attentiveness, and a certain protective caution, as though they are quietly assessing whether it is safe to let someone in. Their life path circles around themes of home, belonging, nurturing, and learning where healthy boundaries begin. They absorb the emotional atmosphere of any room they enter, which is both their gift and their greatest vulnerability. At their best, they create spaces where people feel genuinely held and seen.',
    keywords: ['nurturing', 'intuitive', 'protective', 'emotionally receptive'],
  },
  'Rising-Leo': {
    brief:
      'Leo rising people are hard to miss. There is a natural radiance about them — a warmth, a theatrical quality, a way of holding themselves that suggests they know they are being watched and do not entirely mind. The Sun is their chart ruler, which means their entire life direction is tied to questions of identity, self-expression, and creative vitality. People often notice their hair, their laugh, or the way they light up when given an audience. Their life themes center on learning to shine authentically rather than performing, and on the difference between demanding attention and naturally commanding it. When they lead with genuine generosity rather than ego, they become magnetic in a way that elevates everyone around them.',
    keywords: ['radiant', 'expressive', 'commanding', 'generous'],
  },
  'Rising-Virgo': {
    brief:
      'Virgo rising gives someone a composed, observant quality — they often come across as put-together, thoughtful, and quietly competent, the kind of person who notices details everyone else misses. Ruled by Mercury, their chart ruler, their life is organized around the mind, but where Gemini rising scatters outward, Virgo rising turns inward, analyzing and refining. First impressions usually highlight their modesty, their helpfulness, and a certain self-contained precision that can read as reserved. Their life path keeps bringing them face to face with themes of service, health, self-improvement, and the tension between perfectionism and self-acceptance. They carry an inner critic that is both their sharpest tool and their heaviest burden. At their best, they are quietly indispensable — the person who makes everything work and makes it look effortless.',
    keywords: ['observant', 'precise', 'modest', 'service-oriented'],
  },
  'Rising-Libra': {
    brief:
      'Libra rising people are often strikingly attractive — not always in a conventional way, but in the sense that something about their presence feels balanced, harmonious, and aesthetically pleasing. Venus, their chart ruler, steers their life toward beauty, partnership, and the art of relating, giving them a natural social grace that others find disarming. They come across as diplomatic, charming, and genuinely interested in fairness, though this can sometimes mask a deep indecisiveness beneath the polished surface. Their life themes revolve around relationships, justice, and the ongoing struggle between keeping the peace and standing firmly in their own truth. People often turn to them as mediators, mirrors, or confidants. At their best, they create harmony not by avoiding conflict but by holding space for every side with genuine equity.',
    keywords: ['charming', 'diplomatic', 'aesthetic', 'partnership-driven'],
  },
  'Rising-Scorpio': {
    brief:
      'Scorpio rising people project an intensity that is difficult to ignore — a penetrating gaze, a stillness that suggests they see far more than they reveal. Ruled by Mars, their chart ruler, their life is driven by a deep, sometimes consuming need to get to the truth beneath appearances, and they bring a warrior-like focus to everything they pursue. First impressions tend to land on their magnetism and a sense of mystery, as though something powerful is being carefully controlled just below the surface. Their life path circles around themes of transformation, power, trust, and the cycle of letting go and being reborn. They are often tested by crisis and emerge fundamentally changed, stronger, and more perceptive than before. At their best, they are fearless healers and truth-tellers who are not afraid of the dark.',
    keywords: ['intense', 'magnetic', 'perceptive', 'transformative'],
  },
  'Rising-Sagittarius': {
    brief:
      'Sagittarius rising people enter a room like a gust of fresh air — open-faced, enthusiastic, often laughing or mid-story, with a bigness about their gestures and their energy that feels expansive. Jupiter, their chart ruler, is the planet of growth and meaning, which gives their entire life a questing quality, as though they are always searching for the next horizon, the bigger picture, the deeper truth. They come across as optimistic, blunt, and a little restless, with an infectious confidence that can border on overcommitting. Their life themes center on philosophy, travel, education, and the tension between freedom and commitment. People are drawn to their honesty and enthusiasm, even when that honesty stings. At their best, they are natural teachers and adventurers who expand everyone else\u2019s sense of what is possible.',
    keywords: ['adventurous', 'optimistic', 'philosophical', 'candid'],
  },
  'Rising-Capricorn': {
    brief:
      'Capricorn rising gives someone an air of quiet authority — they often seem older or more serious than they are, with a composure that suggests they have already seen a great deal and are not easily rattled. Saturn, their chart ruler, is the planet of discipline, time, and structure, meaning their entire life is shaped by a deep awareness of consequences and a drive to build something enduring. First impressions tend to center on their competence, their reserve, and a dry humor that catches people off guard. Their life path involves themes of ambition, responsibility, and the slow climb toward mastery, often with early hardships that forge remarkable resilience. They tend to age in reverse, growing lighter and more playful as the years pass. At their best, they are the architects of lasting legacies, earning respect through sheer dedication and integrity.',
    keywords: ['authoritative', 'disciplined', 'resilient', 'ambitious'],
  },
  'Rising-Aquarius': {
    brief:
      'Aquarius rising people stand out without trying — there is something unconventional about their look, their manner, or their ideas that signals they operate by their own rules. Saturn, their chart ruler, provides an unexpected backbone of discipline beneath their eccentric surface, giving them the structure to turn radical visions into real-world change. They come across as friendly but somewhat detached, as though part of their attention is always fixed on a larger collective concern rather than personal drama. Their life themes orbit around individuality, community, innovation, and the tension between belonging to a group and refusing to conform. People are drawn to their originality and their refusal to follow the expected path. At their best, they are visionaries who challenge the status quo while genuinely caring about the well-being of all.',
    keywords: ['unconventional', 'visionary', 'detached', 'humanitarian'],
  },
  'Rising-Pisces': {
    brief:
      'Pisces rising people have a dreamy, almost ethereal quality — soft edges, gentle eyes, a way of being present that feels slightly otherworldly, as though part of them exists somewhere beyond the tangible. Jupiter, their chart ruler, gives their life a quality of expansion through imagination, compassion, and spiritual seeking, drawing them toward experiences that dissolve boundaries. They come across as empathetic, creative, and sometimes hard to pin down, shifting like water to match whatever container the moment provides. Their life themes revolve around faith, surrender, artistic expression, and the challenge of staying grounded while their spirit yearns for transcendence. People often project their fantasies onto Pisces rising individuals, seeing what they wish to see rather than who is truly there. At their best, they are luminous artists and healers whose sensitivity becomes a channel for something larger than themselves.',
    keywords: ['ethereal', 'empathetic', 'imaginative', 'fluid'],
  },
};
