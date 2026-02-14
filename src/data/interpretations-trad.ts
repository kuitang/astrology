import type { Interpretation } from './interpretations.js';

// prettier-ignore
export const TRANSIT_INTERPRETATIONS: Record<string, Interpretation> = {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SUN (Luminary, diurnal sect, hot & dry)
  // Domicile: Leo | Exaltation: Aries | Detriment: Aquarius | Fall: Libra
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'Sun-Aries': {
    brief:
      'The Sun in its exaltation reaches its greatest strength and clarity of expression. The diurnal Luminary in the cardinal fire sign kindles the collective will toward action, initiative, and the assertion of authority. Leaders rise to prominence and affairs of state demand decisive governance. All undertakings requiring courage and forward momentum are favored, though the excess of solar heat in Aries may produce tyrannical pride and reckless haste in public affairs.',
    keywords: ['exaltation', 'authority', 'initiative', 'pride'],
  },

  'Sun-Taurus': {
    brief:
      'The Sun traverses the fixed earth sign of Venus, turning collective attention toward material acquisition, agricultural production, and the stabilization of resources. Commerce in land, livestock, and tangible goods prospers under this steady, fertile influence. The pace of public life slows as the Luminary favors preservation over innovation. The deficiency appears as obstinate resistance to necessary change, and affairs stagnate when leaders cling to established wealth rather than adapting.',
    keywords: ['material wealth', 'agriculture', 'stability', 'obstinacy'],
  },

  'Sun-Gemini': {
    brief:
      'The Luminary in the mutable air sign of Mercury enlivens all matters of communication, trade, and intellectual exchange. Messengers, scribes, diplomats, and merchants find their activities favored as the collective mind grows restless and curious. Markets quicken with the exchange of goods and information across borders. The excess manifests as superficiality and scattered purpose — public discourse multiplies in volume but diminishes in depth, and commitments made under this transit prove fickle.',
    keywords: ['communication', 'trade', 'curiosity', 'fickleness'],
  },

  'Sun-Cancer': {
    brief:
      'The Sun in the cardinal water sign of the Moon illuminates matters of home, lineage, and national identity. Public sentiment turns protective and clannish, favoring domestic concerns over foreign ventures. Agriculture and all enterprises tied to nourishment, water, and the care of the vulnerable are activated. The Luminary here is not in dignity and must express its authority through indirect, nurturing means — leaders who attempt bold, solar assertion find themselves undermined by the shifting tides of popular feeling.',
    keywords: ['homeland', 'lineage', 'nourishment', 'sentiment'],
  },

  'Sun-Leo': {
    brief:
      'The Sun in its own domicile radiates with full sovereign power. This is the Luminary at its most regal, and all matters of rulership, spectacle, honor, and generosity come to the fore. Public life takes on a ceremonial grandeur; courts, festivals, and displays of magnificence flourish. Patronage of the arts and acts of royal largesse are characteristic. The excess is vainglory — when solar pride meets no check, rulers become despots and the cult of personality eclipses the common good.',
    keywords: ['domicile', 'sovereignty', 'magnificence', 'vainglory'],
  },

  'Sun-Virgo': {
    brief:
      'The Luminary in the mutable earth sign of Mercury directs collective energy toward labor, craft, and the meticulous ordering of practical affairs. Harvests are gathered, accounts are settled, and the machinery of daily commerce demands careful attention. Health and hygiene become matters of public concern. This transit favors the diligent worker and the skilled artisan over the bold commander — the Sun here must express its authority through competence and service rather than spectacle, and the deficiency appears as excessive criticism and petty anxieties.',
    keywords: ['labor', 'craft', 'discernment', 'service'],
  },

  'Sun-Libra': {
    brief:
      'The Sun in its fall occupies the cardinal air sign of Venus, where the Luminary\'s natural authority is weakened and must operate through negotiation, compromise, and the cultivation of alliances. Affairs of state turn toward diplomacy, treaties, and the balancing of competing interests. Justice and the law courts are activated, and public attention falls on questions of fairness and proportion. The Sun in fall struggles to act decisively — leadership becomes tentative, overly accommodating, and susceptible to the influence of others.',
    keywords: ['fall', 'diplomacy', 'justice', 'indecision'],
  },

  'Sun-Scorpio': {
    brief:
      'The Luminary descends into the fixed water sign of Mars, illuminating matters ordinarily hidden from public view: debts, inheritances, mortality, and the concealed workings of power. This transit favors investigation, surgery, and the settling of accounts with the dead and the past. Commerce in shared resources and taxation is activated. The Sun in this nocturnal domicile of Mars must contend with darkness — public affairs take on an atmosphere of suspicion, and those in authority are subject to scrutiny, exposure, and betrayal.',
    keywords: ['hidden matters', 'debts', 'investigation', 'exposure'],
  },

  'Sun-Sagittarius': {
    brief:
      'The Sun in the mutable fire sign of Jupiter expands the collective vision toward distant horizons — philosophy, law, religion, and foreign lands. Long-distance trade and pilgrimage are favored, and public discourse elevates itself toward questions of meaning, justice, and higher principle. Courts of law and religious institutions gain prominence. The excess manifests as self-righteous dogmatism and overreach, where the confidence bestowed by Jupiter\'s sign inflates conviction beyond the bounds of wisdom.',
    keywords: ['philosophy', 'foreign affairs', 'law', 'dogmatism'],
  },

  'Sun-Capricorn': {
    brief:
      'The Luminary in the cardinal earth sign of Saturn occupies the territory of the Greater Malefic, and public life takes on a sober, austere character. Affairs of state demand structure, discipline, and long-term planning. Authority figures are tested and hierarchies are reinforced or reformed. Commerce favors established institutions, stone and mineral trades, and enterprises requiring patience. The Sun under Saturn\'s dominion is constrained — ambition must submit to necessity, and leaders who lack discipline are brought low by the weight of their responsibilities.',
    keywords: ['austerity', 'discipline', 'hierarchy', 'endurance'],
  },

  'Sun-Aquarius': {
    brief:
      'The Sun in its detriment occupies the fixed air sign of Saturn, where the Luminary\'s warmth and vitality are diminished by cold, dry Saturnian conditions. The collective mood turns toward reform, communal ideals, and the questioning of established authority. Intellectual and philosophical gatherings are favored, but personal glory and individual leadership are undermined. The Sun in detriment produces rulers who are alienated from their subjects, and public affairs suffer from a deficit of warmth, generosity, and personal connection.',
    keywords: ['detriment', 'reform', 'alienation', 'communal ideals'],
  },

  'Sun-Pisces': {
    brief:
      'The Luminary in the mutable water sign of Jupiter dissolves the sharp edges of solar authority, turning collective attention toward compassion, spiritual seeking, and the care of the suffering. Temples, hospitals, and charitable institutions are activated. Commerce in wine, fish, and goods of the sea is favored. The Sun here must navigate Jupiter\'s boundless waters without its usual clarity — public affairs grow confused, boundaries between realms blur, and leaders are moved more by pity and vision than by practical strategy.',
    keywords: ['compassion', 'dissolution', 'spirituality', 'confusion'],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MOON (Luminary, nocturnal sect, cold & moist)
  // Domicile: Cancer | Exaltation: Taurus | Detriment: Capricorn | Fall: Scorpio
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'Moon-Aries': {
    brief:
      'The Moon in the cardinal fire sign of Mars quickens the collective mood with urgency, impatience, and a restless need for action. Public sentiment becomes volatile and easily inflamed — crowds are roused to anger or enthusiasm with equal swiftness. The cold, moist nature of the Moon is dried and heated by Aries, producing emotional impulse without reflection. Short-lived passions govern the marketplace and the assembly. Affairs requiring patience and careful deliberation suffer, while those demanding immediate response are served.',
    keywords: ['urgency', 'volatility', 'impulse', 'inflammation'],
  },

  'Moon-Taurus': {
    brief:
      'The Moon in her exaltation finds abundant strength in the fixed earth sign of Venus, where her cold, moist nature is grounded and stabilized. Public sentiment becomes calm, contented, and oriented toward material comfort and sensual pleasure. Commerce in food, textiles, and agrarian goods thrives. Fertility of land and livestock is signified, and the domestic sphere prospers. The collective mood is slow to change but deeply rooted — the excess manifests as complacency and an unwillingness to endure necessary discomfort.',
    keywords: ['exaltation', 'contentment', 'fertility', 'complacency'],
  },

  'Moon-Gemini': {
    brief:
      'The Moon in the mutable air sign of Mercury renders public sentiment changeable, talkative, and intellectually curious but emotionally shallow. News, rumors, and gossip spread rapidly through markets and courts. Commerce in letters, books, and small goods quickens. The collective mood shifts with every new piece of information, making this transit unfavorable for matters requiring emotional depth or lasting commitment. Merchants and messengers prosper, but bonds of loyalty and trust are tested by the restlessness of popular opinion.',
    keywords: ['changeability', 'gossip', 'restlessness', 'information'],
  },

  'Moon-Cancer': {
    brief:
      'The Moon in her own domicile moves through her strongest position, amplifying all lunar significations: the domestic sphere, nourishment, fertility, memory, and the bonds of kinship. Public sentiment turns inward and protective. Commerce in food, lodging, and land is favored. Emotional sensitivity runs high — the collective mood is swayed by appeals to home, heritage, and belonging. The excess of lunar power here can produce clinginess, insularity, and an irrational fear of the foreign and unfamiliar.',
    keywords: ['domicile', 'nourishment', 'fertility', 'protection'],
  },

  'Moon-Leo': {
    brief:
      'The Moon in the fixed fire sign of the Sun places the nocturnal Luminary under the authority of her diurnal counterpart, bringing public sentiment into alignment with matters of pride, honor, and display. The collective mood becomes dramatic, generous, and eager for spectacle. Festivals, theatrical performances, and public celebrations are favored. The Moon here is not in dignity and must express popular feeling through solar channels — the common people look to their rulers for warmth and patronage, and feel slighted when denied recognition.',
    keywords: ['spectacle', 'pride', 'generosity', 'drama'],
  },

  'Moon-Virgo': {
    brief:
      'The Moon in the mutable earth sign of Mercury directs public sentiment toward practical concerns: health, diet, labor conditions, and the minutiae of daily sustenance. The collective mood becomes anxious, analytical, and preoccupied with correction and improvement. Commerce in herbs, medicines, and grain is activated. Servants and laborers find their concerns reflected in popular discourse. The deficiency of this position is excessive worry — the Moon\'s natural receptivity absorbs every imperfection, producing a pervasive atmosphere of dissatisfaction and nervous complaint.',
    keywords: ['anxiety', 'health', 'labor', 'correction'],
  },

  'Moon-Libra': {
    brief:
      'The Moon in the cardinal air sign of Venus inclines public sentiment toward harmony, social grace, and the desire for equitable relations. The collective mood favors partnership, artistic appreciation, and the peaceful resolution of disputes. Markets in luxury goods, fine cloth, and ornament prosper. The Moon here seeks emotional equilibrium but may sacrifice authentic feeling for the appearance of accord — popular opinion becomes overly concerned with propriety and reluctant to confront genuine grievances for fear of disrupting the peace.',
    keywords: ['harmony', 'partnership', 'propriety', 'appeasement'],
  },

  'Moon-Scorpio': {
    brief:
      'The Moon in her fall occupies the fixed water sign of Mars, where the Luminary\'s emotional nature is intensified, darkened, and made suspicious. Public sentiment becomes brooding, secretive, and prone to resentment. Hidden grievances surface in the collective mood, and popular feeling turns toward vengeance, jealousy, and the exposure of concealed wrongs. Commerce in matters of death, debt, and inheritance is activated. The Moon in fall produces a pervasive emotional toxicity — trust erodes, and the bonds of community are strained by paranoia and unspoken hostility.',
    keywords: ['fall', 'suspicion', 'intensity', 'resentment'],
  },

  'Moon-Sagittarius': {
    brief:
      'The Moon in the mutable fire sign of Jupiter lifts public sentiment toward optimism, restlessness, and a longing for broader horizons. The collective mood becomes philosophical, adventurous, and impatient with routine domestic concerns. Foreign customs, distant lands, and religious observances capture popular imagination. Commerce in horses, long-distance shipping, and the goods of foreign nations is favored. The excess manifests as emotional recklessness — the people grow discontented with their present circumstances and chase visions that outpace their means.',
    keywords: ['optimism', 'restlessness', 'adventure', 'discontent'],
  },

  'Moon-Capricorn': {
    brief:
      'The Moon in her detriment occupies the cardinal earth sign of Saturn, where her moist, nurturing nature is chilled and hardened. Public sentiment becomes somber, dutiful, and emotionally restrained. The collective mood favors austerity over indulgence, and the people endure privation with grim resolve. Commerce contracts and the domestic sphere is burdened by obligations and scarcity. The Moon in detriment produces a pervasive emotional coldness — compassion withers, the bonds of kinship grow stiff with formality, and popular feeling is suppressed by the weight of necessity and tradition.',
    keywords: ['detriment', 'austerity', 'coldness', 'duty'],
  },

  'Moon-Aquarius': {
    brief:
      'The Moon in the fixed air sign of Saturn renders public sentiment detached, idealistic, and oriented toward communal causes rather than private affections. The collective mood favors reform, intellectual fellowship, and the questioning of inherited customs. Popular feeling is expressed through assemblies, guilds, and associations rather than through familial bonds. The Moon here is emotionally dislocated — the warmth of personal attachment is sacrificed to abstract principle, and the common people feel alienated from their rulers and from one another.',
    keywords: ['detachment', 'idealism', 'reform', 'alienation'],
  },

  'Moon-Pisces': {
    brief:
      'The Moon in the mutable water sign of Jupiter amplifies the Luminary\'s receptive, empathic nature to its fullest expression. Public sentiment becomes deeply compassionate, imaginative, and susceptible to collective moods of grief or ecstasy. Temples, shrines, and places of healing are activated, and popular devotion intensifies. Commerce in wine, fish, oils, and the products of the sea is favored. The excess manifests as emotional overwhelm — boundaries dissolve, rumors and fantasies spread unchecked, and the collective mood drifts between piety and delusion.',
    keywords: ['compassion', 'imagination', 'devotion', 'delusion'],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MERCURY (neutral planet, cold & dry, sect variable)
  // Domicile: Gemini & Virgo | Exaltation: Virgo | Detriment: Sagittarius & Pisces | Fall: Pisces
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'Mercury-Aries': {
    brief:
      'Mercury in the cardinal fire sign of Mars sharpens the tongue, quickens debate, and fills public discourse with aggressive, decisive rhetoric. Diplomacy gives way to blunt speech and ultimatums. Commerce proceeds at a rapid pace but is prone to errors born of haste. Letters, contracts, and treaties drafted under this transit are bold in their terms but careless in their particulars. The excess produces quarrelsome speech, slander, and an atmosphere in which disputes are inflamed rather than resolved by the exchange of words.',
    keywords: ['sharp speech', 'haste', 'debate', 'quarrels'],
  },

  'Mercury-Taurus': {
    brief:
      'Mercury in the fixed earth sign of Venus slows the pace of thought and speech, favoring deliberate, practical communication over swift cleverness. Commercial negotiations proceed carefully, and agreements reached under this transit tend to be durable. The marketplace favors tangible goods and contracts grounded in material reality. Intellectual life becomes plodding but trustworthy. The deficiency is mental rigidity — once a position is taken, no argument, however rational, can dislodge it, and public discourse loses the flexibility needed to adapt to changing circumstances.',
    keywords: ['deliberation', 'durability', 'practicality', 'rigidity'],
  },

  'Mercury-Gemini': {
    brief:
      'Mercury in its own domicile achieves its full natural expression: swift, versatile, and endlessly communicative. Trade, scholarship, diplomacy, and the circulation of news all flourish under this transit. Markets quicken, roads and ports bustle with traffic, and the exchange of ideas across boundaries accelerates. Scribes, translators, and intermediaries of all kinds prosper. The excess of Mercurial energy produces a surfeit of information without synthesis — wit substitutes for wisdom, and the sheer volume of communication overwhelms the capacity for discernment.',
    keywords: ['domicile', 'eloquence', 'commerce', 'versatility'],
  },

  'Mercury-Cancer': {
    brief:
      'Mercury in the cardinal water sign of the Moon brings the mind and tongue into the service of feeling, memory, and domestic concern. Public discourse turns sentimental, and arguments are won by appeals to tradition and emotional loyalty rather than logic. Commerce in household goods and provisions is favored. Letters and speeches take on a personal, intimate quality. The deficiency is that reason becomes captive to mood — judgments are clouded by nostalgia, bias, and subjective feeling, and objective analysis is dismissed as cold and heartless.',
    keywords: ['sentiment', 'memory', 'bias', 'tradition'],
  },

  'Mercury-Leo': {
    brief:
      'Mercury in the fixed fire sign of the Sun lends grandeur and authority to speech, proclamation, and public communication. Edicts, orations, and declarations carry weight and command attention. Intellectual life takes on a theatrical, performative quality — ideas are judged as much by the magnificence of their expression as by their truth. Commerce favors luxury goods and the patronage of artists and scholars. The excess produces pompous, self-aggrandizing rhetoric and an unwillingness to entertain dissenting voices or humble truths.',
    keywords: ['proclamation', 'grandeur', 'authority', 'pomposity'],
  },

  'Mercury-Virgo': {
    brief:
      'Mercury in its domicile and exaltation achieves its highest possible dignity, excelling in analysis, classification, and the precise ordering of information. All matters requiring meticulous attention to detail — accounting, medicine, craftsmanship, legal documentation — are supremely favored. Commerce is conducted with exactitude and probity. Scholarship and the healing arts flourish. The excess of this double dignity is paralyzing perfectionism — the mind becomes so absorbed in minutiae that it loses sight of larger purposes, and criticism replaces creation.',
    keywords: ['exaltation', 'precision', 'analysis', 'perfectionism'],
  },

  'Mercury-Libra': {
    brief:
      'Mercury in the cardinal air sign of Venus applies the intellect to matters of justice, partnership, and aesthetic judgment. Diplomacy, arbitration, and legal reasoning are favored, and public discourse strives for balance and fairness. Commercial negotiations benefit from a spirit of equitable exchange. The arts of rhetoric and persuasion are refined under this transit. The deficiency is chronic indecision — the mind weighs every side so carefully that it cannot commit to a conclusion, and disputes are prolonged by an excess of deliberation.',
    keywords: ['diplomacy', 'arbitration', 'balance', 'indecision'],
  },

  'Mercury-Scorpio': {
    brief:
      'Mercury in the fixed water sign of Mars turns the intellect toward penetration, secrecy, and the uncovering of hidden truths. Investigations, interrogations, and the study of occult or concealed matters are favored. Commerce in debts, inheritances, and the assets of the dead is activated. Speech becomes pointed, strategic, and potentially weaponized. The excess produces paranoid thinking, manipulation through words, and an atmosphere where every utterance is suspected of concealing an ulterior motive.',
    keywords: ['investigation', 'secrecy', 'penetration', 'manipulation'],
  },

  'Mercury-Sagittarius': {
    brief:
      'Mercury in its detriment occupies the mutable fire sign of Jupiter, where the planet of precise thought is overwhelmed by Jupiter\'s expansive, generalizing nature. Public discourse becomes sweeping, moralistic, and careless of factual detail. Philosophy and religion dominate intellectual life at the expense of empirical inquiry. Long-distance communication and foreign correspondence are activated but prone to misunderstanding. Mercury in detriment produces grandiose claims, sloppy reasoning, and a preference for inspiring narrative over accurate reporting.',
    keywords: ['detriment', 'exaggeration', 'moralizing', 'carelessness'],
  },

  'Mercury-Capricorn': {
    brief:
      'Mercury in the cardinal earth sign of Saturn applies the intellect to matters of governance, administration, and long-term planning. Public discourse becomes sober, calculated, and focused on practical outcomes. Commerce favors established institutions, and contracts are drafted with an eye to durability and enforcement. Scholarship turns toward history, law, and the systematic organization of knowledge. The deficiency is intellectual coldness and pessimism — the mind under Saturn\'s influence dismisses imagination and hope as frivolous, producing discourse that is correct but joyless.',
    keywords: ['administration', 'calculation', 'sobriety', 'pessimism'],
  },

  'Mercury-Aquarius': {
    brief:
      'Mercury in the fixed air sign of Saturn directs the intellect toward systematic, unconventional thinking and the exchange of ideas within learned societies and philosophical circles. Public discourse takes on an abstract, theoretical quality, favoring universal principles over particular cases. Communication through guilds, brotherhoods, and intellectual associations is activated. The deficiency is a detachment from practical reality — Mercury under Saturn\'s fixed air produces brilliant theories that fail to account for the stubborn complexities of human life and material circumstance.',
    keywords: ['theory', 'abstraction', 'innovation', 'impracticality'],
  },

  'Mercury-Pisces': {
    brief:
      'Mercury in its detriment and fall occupies its weakest possible position in the mutable water sign of Jupiter. The rational faculty is drowned in Jupiter\'s oceanic waters — thought becomes intuitive, poetic, and unreliable for precise work. Public discourse dissolves into rumor, fantasy, and inspired but incoherent vision. Commerce is plagued by deception, misunderstanding, and poorly defined terms. Mercury in fall and detriment favors prophets, poets, and mystics over merchants, scribes, and logicians.',
    keywords: ['fall', 'detriment', 'confusion', 'intuition'],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VENUS (Lesser Benefic, nocturnal sect, cold & moist)
  // Domicile: Taurus & Libra | Exaltation: Pisces | Detriment: Aries & Scorpio | Fall: Virgo
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'Venus-Aries': {
    brief:
      'The Lesser Benefic in her detriment occupies the cardinal fire sign of Mars, where Venus\'s cold, moist nature is agitated by martial heat. Matters of love, pleasure, and social harmony are pursued with aggressive intensity rather than grace. Courtship becomes conquest, and partnerships are formed through bold initiative rather than mutual attraction. Commerce in luxury goods is activated but marked by impulsive spending. Venus in detriment produces passionate but unstable unions, artistic works that favor boldness over beauty, and social relations strained by impatience and selfish desire.',
    keywords: ['detriment', 'passion', 'impulsiveness', 'conquest'],
  },

  'Venus-Taurus': {
    brief:
      'The Lesser Benefic in her own domicile of fixed earth achieves full expression of her most sensual, material significations. All pleasures of the body — fine food, fragrant gardens, beautiful garments, and physical love — are favored and abundant. Commerce in luxury goods, textiles, perfumes, and agricultural produce thrives. The arts flourish, particularly those appealing to the senses: music, sculpture, and horticulture. Public life takes on an atmosphere of ease and abundance. The excess manifests as indolence, gluttony, and a refusal to sacrifice comfort for higher purpose.',
    keywords: ['domicile', 'sensuality', 'abundance', 'indolence'],
  },

  'Venus-Gemini': {
    brief:
      'The Lesser Benefic in the mutable air sign of Mercury brings charm, wit, and sociability to public discourse. Courtship and social relations are conducted through clever conversation, letters, and intellectual flirtation. Commerce in decorative arts, fashionable goods, and literary works is favored. Diplomatic negotiations benefit from Venus\'s grace applied through Mercury\'s facility with words. The deficiency is emotional superficiality — affections are expressed verbally but lack depth, and social bonds are maintained through pleasant discourse rather than genuine devotion.',
    keywords: ['charm', 'flirtation', 'wit', 'superficiality'],
  },

  'Venus-Cancer': {
    brief:
      'The Lesser Benefic in the cardinal water sign of the Moon deepens affection and directs pleasure toward the domestic sphere. Bonds of family and kinship are strengthened, and public sentiment favors nurturing, sentimental forms of love. Commerce in household goods, fine linens, and provisions for the home prospers. The arts turn toward themes of motherhood, homeland, and ancestral memory. Venus here produces a tender, protective love that can become clinging — the desire for emotional security may smother the beloved and resist all change that threatens the comfort of familiar bonds.',
    keywords: ['tenderness', 'domesticity', 'nostalgia', 'clinginess'],
  },

  'Venus-Leo': {
    brief:
      'The Lesser Benefic in the fixed fire sign of the Sun brings warmth, generosity, and theatrical grandeur to matters of love, art, and social pleasure. Public celebrations, courtly romance, and the patronage of artists are all favored. Commerce in gold, jewels, and objects of splendor thrives. Love is expressed with royal magnanimity and demands adoration in return. The excess produces vanity in love, extravagant display that substitutes spectacle for substance, and a tendency to treat affection as tribute owed to one\'s magnificence rather than a mutual exchange of hearts.',
    keywords: ['magnificence', 'patronage', 'romance', 'vanity'],
  },

  'Venus-Virgo': {
    brief:
      'The Lesser Benefic in her fall occupies the mutable earth sign of Mercury, where Venus\'s capacity for pleasure, beauty, and easy social grace is undermined by Virgoan precision and critical analysis. Love becomes dutiful rather than delightful, and aesthetic judgment turns fastidious. Commerce in small, finely crafted goods is favored, but the spirit of generous enjoyment is diminished. Venus in fall produces relationships strained by criticism and impossible standards — the longing for perfection in love destroys the imperfect but genuine affection that is actually available.',
    keywords: ['fall', 'criticism', 'duty', 'fastidiousness'],
  },

  'Venus-Libra': {
    brief:
      'The Lesser Benefic in her own domicile of cardinal air achieves her most refined and socially accomplished expression. Diplomacy, partnership, and the harmonious ordering of social relations are supremely favored. The arts flourish — particularly those of proportion, balance, and elegant design. Legal proceedings benefit from a spirit of fairness and mutual accommodation. Marriage and formal alliances prosper. The excess of Venusian grace in Libra is a paralysis of will — the desire to please everyone and offend no one produces an ornamental civility that masks the avoidance of difficult truths.',
    keywords: ['domicile', 'harmony', 'elegance', 'accommodation'],
  },

  'Venus-Scorpio': {
    brief:
      'The Lesser Benefic in her detriment occupies the fixed water sign of Mars, where Venus\'s gentle, harmonizing nature is overwhelmed by Scorpio\'s intensity, possessiveness, and preoccupation with power. Love becomes entangled with jealousy, control, and the fear of betrayal. Commerce in shared resources, dowries, and the property of the dead is activated. The arts turn toward themes of obsession, destruction, and forbidden desire. Venus in detriment produces bonds that are passionate but corrosive — pleasure is pursued through excess and shadowed by the knowledge of its inevitable loss.',
    keywords: ['detriment', 'jealousy', 'obsession', 'intensity'],
  },

  'Venus-Sagittarius': {
    brief:
      'The Lesser Benefic in the mutable fire sign of Jupiter expands the appetite for pleasure, adventure, and cross-cultural exchange. Love of foreign customs, distant lands, and philosophical ideals characterizes this transit. Commerce in exotic goods, horses, and the luxuries of distant nations is favored. The arts aspire toward grandeur and moral elevation. Social relations benefit from Jupiterian generosity and openness. The excess manifests as romantic restlessness and an inability to commit — the pursuit of an idealized love leads to the neglect of genuine bonds already formed.',
    keywords: ['adventure', 'generosity', 'exoticism', 'restlessness'],
  },

  'Venus-Capricorn': {
    brief:
      'The Lesser Benefic in the cardinal earth sign of Saturn brings a sober, calculating quality to matters of love, pleasure, and social relations. Marriages and partnerships are contracted for advantage, status, and material security rather than affection. Commerce favors established luxury houses and goods that display enduring quality over fleeting fashion. The arts turn toward austere, classical forms that emphasize structure and tradition. Venus under Saturn\'s dominion produces a chill in social life — pleasure is permitted only when it serves practical ends, and warmth of feeling is sacrificed to propriety and ambition.',
    keywords: ['calculation', 'status', 'austerity', 'propriety'],
  },

  'Venus-Aquarius': {
    brief:
      'The Lesser Benefic in the fixed air sign of Saturn directs affection and aesthetic sensibility toward communal ideals, intellectual friendship, and unconventional forms of beauty. Social bonds are formed around shared principles rather than personal warmth. Commerce in rare, unusual, and artisanal goods is favored. The arts incline toward the experimental and the provocative. Venus here produces a love of humanity in the abstract that struggles with the messy particulars of intimate relationship — personal devotion is sacrificed to the cool satisfaction of philosophical fellowship.',
    keywords: ['fellowship', 'idealism', 'unconventionality', 'detachment'],
  },

  'Venus-Pisces': {
    brief:
      'The Lesser Benefic in her exaltation achieves her most sublime and transcendent expression in the mutable water sign of Jupiter. Love becomes selfless, compassionate, and tinged with the sacred. The arts reach their highest aspiration — music, poetry, and devotional imagery flourish with otherworldly beauty. Commerce in wine, perfume, and the goods of the sea prospers. Charity, forgiveness, and the dissolution of boundaries between lover and beloved characterize this transit. The excess is a loss of discernment in love — Venus exalted in Pisces gives everything without reservation, inviting exploitation and self-dissolution.',
    keywords: ['exaltation', 'transcendence', 'compassion', 'self-sacrifice'],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MARS (Lesser Malefic, nocturnal sect, hot & dry)
  // Domicile: Aries & Scorpio | Exaltation: Capricorn | Detriment: Taurus & Libra | Fall: Cancer
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  'Mars-Aries': {
    brief:
      'The Lesser Malefic in its own domicile of cardinal fire achieves its purest and most direct expression of martial energy. Military campaigns, athletic competitions, and all contests of strength and courage are powerfully activated. Industry quickens as the collective will to act, build, and conquer is unleashed. Leadership is seized rather than negotiated, and affairs of state are decided by force and daring. The excess of Mars in domicile is unbridled aggression — violence erupts without provocation, and the martial virtues of courage and discipline degenerate into cruelty and wanton destruction.',
    keywords: ['domicile', 'warfare', 'courage', 'aggression'],
  },

  'Mars-Taurus': {
    brief:
      'The Lesser Malefic in its detriment occupies the fixed earth sign of Venus, where martial energy is slowed, frustrated, and denied its natural outlet in swift action. Conflicts over territory, resources, and material possessions dominate public affairs. Industry proceeds stubbornly but is marked by grinding labor rather than bold enterprise. Mars in detriment produces a smoldering, resentful anger that builds over time — disputes are prolonged because neither side will yield, and the desire for material security becomes a cause of bitter, protracted strife.',
    keywords: ['detriment', 'stubbornness', 'territorial disputes', 'resentment'],
  },

  'Mars-Gemini': {
    brief:
      'The Lesser Malefic in the mutable air sign of Mercury directs martial energy into the realm of words, ideas, and communication. Verbal conflict, satirical attacks, polemical writing, and intellectual warfare are activated. Commerce becomes competitive and contentious, and the marketplace is marked by sharp dealing and aggressive negotiation. Military intelligence, espionage, and strategic deception are favored. The excess produces slander, libelous speech, and disputes that multiply and scatter without resolution — Mars in Gemini fights on too many fronts at once.',
    keywords: ['polemics', 'verbal combat', 'espionage', 'scattered conflict'],
  },

  'Mars-Cancer': {
    brief:
      'The Lesser Malefic in its fall occupies the cardinal water sign of the Moon, where martial heat is quenched and misdirected. Aggression turns inward and becomes defensive, passive-aggressive, and emotionally volatile. Conflicts arise within families, clans, and domestic settings rather than on the battlefield. The defense of home and homeland is activated, but offensive campaigns falter. Mars in fall produces the warrior who fights from wounded feeling rather than strategic purpose — rage is triggered by perceived threats to emotional security, and military action is undermined by sentimentality and erratic moods.',
    keywords: ['fall', 'defensiveness', 'domestic strife', 'emotional volatility'],
  },

  'Mars-Leo': {
    brief:
      'The Lesser Malefic in the fixed fire sign of the Sun channels martial energy into displays of heroic valor, competitive glory, and the assertion of personal honor. Military leaders seek fame, and conflicts are fought for prestige as much as territory. Industry is energized by pride and the desire to create lasting monuments. Athletic and martial competitions draw great public attention. The excess produces tyrannical commanders who sacrifice their troops for personal glory, and conflicts escalate because neither side will accept the humiliation of retreat.',
    keywords: ['valor', 'glory', 'pride', 'tyranny'],
  },

  'Mars-Virgo': {
    brief:
      'The Lesser Malefic in the mutable earth sign of Mercury applies martial energy to precise, methodical work — surgery, engineering, and the crafting of weapons and tools. Military operations proceed with careful planning and attention to logistics rather than bold charges. Labor disputes and conflicts over working conditions are activated. Industry favors skilled craftsmanship and technical precision. The excess produces petty cruelty masked as correction, harsh discipline applied to trivial faults, and a cutting, critical aggression that wounds through detailed enumeration of another\'s failings.',
    keywords: ['precision', 'craftsmanship', 'logistics', 'harsh criticism'],
  },

  'Mars-Libra': {
    brief:
      'The Lesser Malefic in its detriment occupies the cardinal air sign of Venus, where martial directness is frustrated by Libra\'s insistence on balance, fairness, and social propriety. Military action is delayed by negotiations, treaties, and the need for allies. Conflicts arise within partnerships and alliances, and the courts of law become arenas of aggressive dispute. Mars in detriment produces a passive aggression that operates through legal maneuvering, social manipulation, and the weaponization of civility — the warrior forced to fight with a diplomat\'s tools does so with poorly concealed fury.',
    keywords: ['detriment', 'legal conflict', 'passive aggression', 'frustrated action'],
  },

  'Mars-Scorpio': {
    brief:
      'The Lesser Malefic in its nocturnal domicile of fixed water achieves a concentrated, strategic, and deeply penetrating expression of martial power. Covert operations, intelligence gathering, and the destruction of hidden enemies are supremely favored. Commerce in debts, taxes, and the resources of the dead is activated with aggressive intent. Industry turns toward mining, metallurgy, and the extraction of hidden wealth. Mars in Scorpio strikes with patient, calculated lethality — the excess is an obsessive vindictiveness that pursues the total annihilation of perceived enemies long after any rational purpose has been served.',
    keywords: ['domicile', 'strategy', 'vindictiveness', 'covert action'],
  },

  'Mars-Sagittarius': {
    brief:
      'The Lesser Malefic in the mutable fire sign of Jupiter combines martial aggression with Jupiterian expansion, producing campaigns of conquest, crusade, and ideologically driven warfare. Military ventures into foreign lands are activated, and conflicts are justified by appeals to law, religion, or philosophical principle. Athletic competition and the martial arts are pursued with enthusiasm and magnanimity. The excess produces holy wars and righteous violence — Mars inflamed by Jupiter\'s moral certainty believes its aggression serves a higher purpose, and restraint is dismissed as cowardice or impiety.',
    keywords: ['crusade', 'expansion', 'righteous anger', 'zealotry'],
  },

  'Mars-Capricorn': {
    brief:
      'The Lesser Malefic in its exaltation achieves its most disciplined, effective, and strategically potent expression in the cardinal earth sign of Saturn. Military campaigns are waged with patient professionalism, and martial energy is channeled through established hierarchies and proven methods. Industry, engineering, and large-scale construction projects are powerfully favored. Authority is enforced with ruthless efficiency. Mars exalted produces the consummate general — but the excess is a cold, calculating brutality that serves ambition without mercy, where discipline becomes oppression and strategic patience becomes grinding attrition.',
    keywords: ['exaltation', 'discipline', 'strategy', 'ruthlessness'],
  },

  'Mars-Aquarius': {
    brief:
      'The Lesser Malefic in the fixed air sign of Saturn directs martial energy toward collective causes, rebellions, and the overthrow of established orders. Conflicts arise between reformers and traditionalists, and violence is justified in the name of communal ideals. Industry favors collaborative enterprises and the organized labor of guilds and brotherhoods. Military innovation and unconventional tactics are favored. The excess produces revolutionary violence that destroys existing structures without the capacity to build replacements — Mars under Saturn\'s fixed air fights for abstract principles while the material world burns.',
    keywords: ['rebellion', 'reform', 'collective action', 'revolutionary violence'],
  },

  'Mars-Pisces': {
    brief:
      'The Lesser Malefic in the mutable water sign of Jupiter finds its martial energy diffused, confused, and deprived of clear targets. Military campaigns lose direction, and the fog of war thickens. Conflicts arise from misunderstanding, deception, and the confusion of allies and enemies. Industry is undermined by poor planning and shifting objectives. Mars here may fight for compassionate or spiritual causes — the defense of the helpless, the protection of sacred places — but the execution is plagued by disorganization. The excess produces aimless violence, self-destructive fury, and martyrdom mistaken for valor.',
    keywords: ['confusion', 'misdirection', 'martyrdom', 'dissolution'],
  },

  // ─────────────────────────────────────────────
  // JUPITER (Greater Benefic)
  // Domicile: Sagittarius, Pisces
  // Exaltation: Cancer
  // Detriment: Gemini, Virgo
  // Fall: Capricorn
  // ─────────────────────────────────────────────

  'Jupiter-Aries': {
    brief:
      'The Greater Benefic in the domicile of Mars kindles expansive confidence across nations. Jupiter\'s hot, moist nature amplifies the cardinal fire of Aries, producing a season of bold enterprise, military ventures, and the founding of new institutions. Leadership is rewarded, and those who act with courage find fortune favoring the first mover. Commerce in iron, weapons, and pioneering trades flourishes. However, the excess of heat may produce recklessness — wars begun under this transit often start with great enthusiasm but lack the temperance for sustained campaigns.',
    keywords: ['enterprise', 'courage', 'expansion', 'recklessness'],
  },

  'Jupiter-Taurus': {
    brief:
      'The Greater Benefic in the domicile of Venus brings abundance to agriculture, banking, and all matters of material wealth. Jupiter\'s generous nature finds a stable vessel in the fixed earth of Taurus, favoring long-term investments, land acquisition, and the accumulation of reserves. Public feasts and celebrations of plenty mark this transit. The arts receive patronage, and craftsmanship commands high prices. Yet the combination may breed complacency and overindulgence — inflation of goods and a dangerous faith that prosperity shall never end are the characteristic vices of this placement.',
    keywords: ['abundance', 'prosperity', 'indulgence', 'stability'],
  },

  'Jupiter-Gemini': {
    brief:
      'The Greater Benefic in Gemini occupies its detriment, where Jupiter\'s sweeping wisdom is fragmented by Mercury\'s restless mutability. Grand narratives lose coherence; the collective appetite for knowledge becomes scattered across a thousand pursuits, mastering none. Commerce in books, messages, and information of every kind increases enormously, yet the sheer volume overwhelms discernment. Treaties and agreements multiply but lack binding force. Education expands in access but dilutes in substance. The benefit of this transit lies in the sheer fertility of ideas — what is lost in depth is partially compensated by an extraordinary breadth of intellectual commerce and the cross-pollination of disciplines that would otherwise never meet.',
    keywords: ['detriment', 'dispersion', 'commerce', 'restlessness'],
  },

  'Jupiter-Cancer': {
    brief:
      'The Greater Benefic achieves exaltation in Cancer, its most dignified placement by elevation. Jupiter\'s expansive warmth is perfectly received by the fertile, nurturing waters of the Crab, producing a season of extraordinary generosity, civic benevolence, and familial increase. Nations invest in their people — granaries fill, orphanages are endowed, and the bonds between ruler and subject grow tender. Maritime trade and all commerce conducted over water prosper greatly. Fertility rates rise, and the collective mood turns toward protection of hearth and homeland. This is among the most fortunate of all planetary transits for the common welfare.',
    keywords: ['exaltation', 'nurture', 'fertility', 'benevolence'],
  },

  'Jupiter-Leo': {
    brief:
      'The Greater Benefic in the domicile of the Sun produces magnificent displays of authority, patronage, and royal largesse. Jupiter\'s expansive nature amplifies Leo\'s solar dignity, favoring rulers, nobles, and all who hold positions of visible power. Grand building projects, public spectacles, and the endowment of temples and theaters characterize this transit. Generosity flows from the top of hierarchies downward. The danger lies in the inflation of pride — leaders may overspend on glory while neglecting the mundane needs of governance, and flattery becomes the common currency of courts.',
    keywords: ['magnificence', 'patronage', 'pride', 'authority'],
  },

  'Jupiter-Virgo': {
    brief:
      'The Greater Benefic in Virgo occupies its detriment, where Jupiter\'s expansive and generous nature is constrained by Mercury\'s cold, analytical earth. Grand visions are subjected to tedious accounting; faith must justify itself before reason. Commerce in grain, medicine, and the trades of skilled laborers is stimulated, but the usual Jupiterian largesse feels pinched and qualified. Scholarly and scientific pursuits benefit, as Jupiter\'s wisdom submits to Virgo\'s method. The collective grows skeptical of inflated promises, demanding evidence and practical results from its institutions and leaders.',
    keywords: ['detriment', 'scrutiny', 'method', 'skepticism'],
  },

  'Jupiter-Libra': {
    brief:
      'The Greater Benefic in the domicile of Venus turns collective attention toward justice, diplomacy, and the beautification of public life. Treaties and alliances are forged with optimism; courts of law operate with greater fairness and mercy. The arts, marriage customs, and all partnerships — commercial and personal — receive Jupiter\'s blessing of increase. International trade and cultural exchange flourish as nations seek harmony over conflict. The shadow of this transit is a tendency toward superficial peace — agreements that paper over genuine grievances, and a collective preference for pleasant appearances over difficult truths.',
    keywords: ['diplomacy', 'justice', 'alliance', 'harmony'],
  },

  'Jupiter-Scorpio': {
    brief:
      'The Greater Benefic in the domicile of Mars by night plunges expansive fortune into the fixed waters of secrecy, inheritance, and transformation. Hidden wealth is uncovered; legacies, debts, and the pooled resources of nations undergo dramatic increase or redistribution. Jupiter here magnifies the investigative and occult dimensions of Scorpio — interest in the mysteries, in death rites, and in the unseen mechanisms of power swells among the populace. Commerce in mining, taxation, and the management of others\' assets is favored. The excess of this transit manifests as obsessive accumulation and the dangerous expansion of covert influence.',
    keywords: ['inheritance', 'secrecy', 'transformation', 'depth'],
  },

  'Jupiter-Sagittarius': {
    brief:
      'The Greater Benefic returns to its own domicile, producing one of the most characteristically Jupiterian periods in the zodiacal cycle. Philosophy, religion, long-distance travel, and higher learning all expand with vigor and confidence. Universities are founded or enriched, religious movements gain adherents, and the collective appetite for meaning and adventure is immense. Foreign cultures are embraced with enthusiasm, and trade routes extend to distant lands. The peril is dogmatism — Jupiter in its own sign may become so convinced of its wisdom that it refuses correction, and religious or philosophical excess may produce fanaticism alongside genuine enlightenment.',
    keywords: ['domicile', 'philosophy', 'expansion', 'dogmatism'],
  },

  'Jupiter-Capricorn': {
    brief:
      'The Greater Benefic in Capricorn occupies its fall, the sign most inhospitable to Jupiter\'s warm, moist, and generous nature. Saturn\'s cold, dry earth compresses Jupiterian optimism into cautious pragmatism — faith must prove its utility, and generosity is measured by return on investment. Governments and institutions of authority grow powerful but miserly; advancement comes through demonstrated competence rather than vision alone. Commerce is conducted with hard bargaining, and charity carries conditions. This transit tests whether prosperity can endure austerity, and often reveals the fragility of systems built on mere confidence.',
    keywords: ['fall', 'austerity', 'pragmatism', 'limitation'],
  },

  'Jupiter-Aquarius': {
    brief:
      'The Greater Benefic in the domicile of Saturn by day brings expansive optimism to matters of collective organization, reform, and the common good. Jupiter\'s generosity operates through Aquarian structures — guilds, fraternities, councils, and assemblies all benefit from increased membership and resources. Innovation in governance and the reform of outdated institutions proceed with unusual confidence. The sciences and mathematics receive patronage, and theoretical knowledge gains prestige. The risk is utopianism — grand schemes for the perfection of society that ignore the stubborn realities of human nature and the limits of reason.',
    keywords: ['reform', 'collectivism', 'innovation', 'utopianism'],
  },

  'Jupiter-Pisces': {
    brief:
      'The Greater Benefic returns to its nocturnal domicile in Pisces, where Jupiter\'s boundless generosity merges with the mutable waters of compassion, mysticism, and dissolution. Charitable institutions swell with donations; religious and spiritual movements gain enormous followings. The collective mood turns gentle, empathetic, and permissive. Maritime trade prospers, and all who work with water, fish, or liquors find fortune. Healing arts — particularly those involving baths, herbs, and spiritual remedies — are in great demand. The danger is a loss of discernment: Jupiter in Pisces may give too freely, trust too easily, and dissolve the boundaries that protect the vulnerable from exploitation.',
    keywords: ['domicile', 'compassion', 'mysticism', 'dissolution'],
  },

  // ─────────────────────────────────────────────
  // SATURN (Greater Malefic)
  // Domicile: Capricorn, Aquarius
  // Exaltation: Libra
  // Detriment: Cancer, Leo
  // Fall: Aries
  // ─────────────────────────────────────────────

  'Saturn-Aries': {
    brief:
      'The Greater Malefic in Aries occupies its fall, where Saturn\'s cold, slow, and constraining nature is most debilitated. Initiative is punished, and bold action meets frustrating delay. Military campaigns begun under this transit suffer from poor leadership, insufficient supply, and the exhaustion of morale. The collective experiences a crisis of will — the desire to act is present, but the means and the confidence are lacking. Chronic ailments of the head, fevers that will not break, and inflammatory conditions that become entrenched characterize the medical significations. Patience is the only remedy, yet patience is precisely what this transit denies.',
    keywords: ['fall', 'frustration', 'delay', 'debility'],
  },

  'Saturn-Taurus': {
    brief:
      'The Greater Malefic in the fixed earth of Taurus imposes scarcity upon material resources. Saturn\'s cold, dry nature hardens Taurus\'s fertile soil — harvests diminish, prices rise, and the collective must learn to endure with less. Banking and finance contract; debts become oppressive, and those who have overextended find no mercy from creditors. Yet this transit also rewards the genuinely frugal and builds wealth that endures through discipline alone. Land held through this period becomes the foundation of lasting patrimony. The collective lesson is the difference between true security and the mere appearance of abundance.',
    keywords: ['scarcity', 'endurance', 'frugality', 'contraction'],
  },

  'Saturn-Gemini': {
    brief:
      'The Greater Malefic in the domicile of Mercury subjects communication, trade, and intellectual life to severe testing. Contracts must be read with care; agreements forged under this transit carry heavy obligations. Education becomes more rigorous and less accessible, favoring depth over breadth. The press, messengers, and all who deal in information face restrictions and accountability. Short-distance travel is burdened by poor roads or hostile conditions. Saturn here demands that words carry weight — idle speech, false promises, and intellectual frivolity meet correction. The benefit is that knowledge gained under this transit is hard-won and enduring.',
    keywords: ['rigor', 'accountability', 'restriction', 'precision'],
  },

  'Saturn-Cancer': {
    brief:
      'The Greater Malefic in Cancer occupies its detriment, where Saturn\'s cold severity afflicts the most nurturing sign of the zodiac. Families bear heavy burdens — food scarcity, housing crises, and the neglect of children and the elderly mark this transit. Nations turn inward with fear rather than warmth, building walls instead of hearths. The emotional life of the collective hardens; sentimentality gives way to grim endurance. Stomach ailments, conditions of cold and damp in the chest, and chronic nutritional deficiencies are the medical signatures. Yet those who maintain genuine care for their dependents through this darkness build bonds that no subsequent prosperity can dissolve.',
    keywords: ['detriment', 'hardship', 'deprivation', 'endurance'],
  },

  'Saturn-Leo': {
    brief:
      'The Greater Malefic in the domicile of the Sun occupies its detriment, where Saturn\'s cold and melancholic nature directly opposes Leo\'s solar warmth and vitality. Rulers face humiliation, authority is challenged, and the pride of nations is tested by failure. Entertainment and public spectacle lose their luster; the collective mood grows somber and distrustful of displays of power. The heart — both literally and figuratively — comes under strain. Leadership succession becomes a source of crisis rather than celebration. Yet Saturn in Leo can produce leaders of extraordinary gravitas, those who earn authority through suffering rather than inheritance, and whose rule endures precisely because it was forged in difficulty.',
    keywords: ['detriment', 'humiliation', 'gravitas', 'austerity'],
  },

  'Saturn-Virgo': {
    brief:
      'The Greater Malefic in the domicile of Mercury imposes rigorous order upon labor, health, and the details of daily life. Workers face demanding conditions; standards of quality rise while compensation stagnates. The medical profession is burdened with chronic illness and insufficient resources, yet the diagnostic arts sharpen considerably. Agriculture suffers from pests, blight, or exhaustion of soil that demands careful husbandry. Bureaucracy expands, and the administration of civic life becomes both more efficient and more oppressive. This transit rewards meticulous attention to duty and punishes those who have neglected the small, unglamorous tasks upon which complex systems depend.',
    keywords: ['labor', 'discipline', 'hygiene', 'duty'],
  },

  'Saturn-Libra': {
    brief:
      'The Greater Malefic achieves exaltation in Libra, where Saturn\'s love of structure and law finds its highest expression through the scales of justice. Courts, treaties, and legal codes are reformed with lasting consequence. Marriages and partnerships formed under this transit carry extraordinary weight — they are entered into soberly and endure through genuine commitment rather than passion. International relations are conducted with gravity and formality, producing agreements that hold for generations. The arts acquire a classical severity, favoring proportion, restraint, and timeless form over innovation. This is Saturn at its most constructive — the architect of enduring civilizational order.',
    keywords: ['exaltation', 'justice', 'commitment', 'order'],
  },

  'Saturn-Scorpio': {
    brief:
      'The Greater Malefic in the fixed water of Scorpio confronts the collective with mortality, debt, and the consequences of hidden corruption. Taxes grow burdensome; the management of shared resources becomes a source of bitter conflict. Secrets harbored by institutions are exposed under duress, and the process of revelation is neither gentle nor merciful. Plagues, poisonings, and ailments of the reproductive organs carry Saturn\'s signature of chronic severity. Inheritance disputes become protracted and bitter. Yet this transit also produces the deepest form of spiritual discipline — the soul that endures Saturn in Scorpio emerges stripped of illusion, possessing a power that no external force can diminish.',
    keywords: ['mortality', 'debt', 'exposure', 'severity'],
  },

  'Saturn-Sagittarius': {
    brief:
      'The Greater Malefic in the domicile of Jupiter subjects religion, philosophy, and higher learning to demanding scrutiny. Faiths that lack genuine foundations are tested to destruction; universities must justify their existence through demonstrable results. Long-distance travel and foreign trade encounter barriers — tariffs, hostile borders, and the collapse of established routes. The collective relationship with meaning itself becomes strained; dogma hardens where wisdom should flow. Legal systems governing international affairs grow rigid and punitive. Yet this transit can also produce philosophy of genuine profundity — thought that has been tested by doubt and emerged stronger for the ordeal.',
    keywords: ['orthodoxy', 'restriction', 'testing', 'profundity'],
  },

  'Saturn-Capricorn': {
    brief:
      'The Greater Malefic returns to its diurnal domicile, where its power is most concentrated and uncompromising. Governments, hierarchies, and all structures of temporal authority reach the apex of their strength — or reveal the fatal cracks in their foundations. This is the transit of institutional reckoning: what is sound endures and consolidates; what is corrupt collapses under its own weight. Ambition is rewarded only when matched by competence and willingness to bear responsibility. The elderly and those in positions of long-standing authority are especially prominent. The collective mood is serious, pragmatic, and intolerant of weakness. Building projects of lasting significance are favored.',
    keywords: ['domicile', 'authority', 'reckoning', 'consolidation'],
  },

  'Saturn-Aquarius': {
    brief:
      'The Greater Malefic returns to its nocturnal domicile in Aquarius, where Saturn\'s capacity for structure serves the collective and its ideals. Laws governing communal life are codified; organizations devoted to reform acquire institutional permanence. The sciences advance through methodical labor rather than inspiration, producing results of lasting value. Social bonds are tested — friendships and alliances that lack genuine foundation dissolve, while those built on shared principle endure. The collective confronts the limits of its own idealism, learning that progress requires not merely vision but the patient construction of systems capable of sustaining it.',
    keywords: ['domicile', 'structure', 'reform', 'systematization'],
  },

  'Saturn-Pisces': {
    brief:
      'The Greater Malefic in the sign of the Fishes imposes harsh structure upon the formless. Saturn\'s cold, dry nature constrains Pisces\' boundless mutability — faith is tested by doubt, compassion meets its limits, and institutions devoted to mercy must account for their foundations. Those who have built spiritual practice upon discipline endure; those who have mistaken dissolution for transcendence meet correction. Prisons, hospitals, and monasteries — all Piscean places of enclosure — demand attention and reform. Chronic ailments involving the feet, the lymphatic system, and conditions of excess moisture demand attention.',
    keywords: ['discipline', 'faith', 'dissolution', 'correction'],
  },

  // ─────────────────────────────────────────────
  // URANUS (Modern — no traditional dignities)
  // Approximate cycle: ~84 years, ~7 years per sign
  // ─────────────────────────────────────────────

  'Uranus-Aries': {
    brief:
      'The planet of sudden upheaval enters the cardinal fire sign, igniting a generational cycle of radical individualism and the violent overthrow of stagnant orders. New forms of warfare, new assertions of sovereignty, and the eruption of suppressed martial energies characterize this long transit. The collective will toward independence becomes irresistible — movements for liberation arise with explosive force, though their ultimate direction remains uncertain. Inventions pertaining to fire, metals, and the projection of force transform the material conditions of life. The generational character born under this transit carries a fierce, impatient quality that reshapes the world through sheer audacity.',
    keywords: ['upheaval', 'liberation', 'invention', 'audacity'],
  },

  'Uranus-Taurus': {
    brief:
      'The planet of disruption enters the most resistant of the fixed signs, producing a prolonged and often violent transformation of material foundations. Currency systems, land ownership, agricultural methods, and the very concept of value undergo revolutionary change. What was considered permanent wealth is suddenly rendered unstable, while new and unexpected forms of prosperity emerge. The earth itself may respond with seismic or volcanic disturbance. The generational cohort shaped by this transit develops an unusual relationship with material security — simultaneously innovative and deeply anxious about the stability of the ground beneath them.',
    keywords: ['disruption', 'revaluation', 'instability', 'innovation'],
  },

  'Uranus-Gemini': {
    brief:
      'The planet of sudden insight enters the mutable air sign ruled by Mercury, producing a generational revolution in communication, information, and the transmission of knowledge. The means by which people exchange ideas undergoes fundamental transformation — old systems of messaging and record-keeping are shattered and rebuilt in radically new forms. Education is disrupted and reimagined. The collective mind accelerates, generating brilliant innovations in language, mathematics, and the connective tissues of civilization. The generation shaped by this transit possesses extraordinary intellectual restlessness and an instinct for connecting disparate ideas into novel synthesis.',
    keywords: ['revolution', 'communication', 'acceleration', 'synthesis'],
  },

  'Uranus-Cancer': {
    brief:
      'The planet of disruption enters the cardinal water sign of home, family, and nation, producing a generational upheaval in domestic arrangements and collective identity. The very definition of family, homeland, and belonging is radically altered. Mass migrations, the redrawing of national boundaries, and the transformation of housing and food systems mark this transit. Emotional life within the collective becomes volatile — nostalgia wars with the irresistible pull of change. The generational character born under this transit carries a deep tension between the desire for roots and the compulsion to break free from inherited patterns of nurture and belonging.',
    keywords: ['displacement', 'redefinition', 'rootlessness', 'transformation'],
  },

  'Uranus-Leo': {
    brief:
      'The planet of radical change enters the fixed fire sign of sovereignty, creativity, and self-expression, producing a generational revolution in the nature of authority and the arts. Established rulers and ruling classes face sudden and often dramatic overthrow. New forms of creative expression emerge that shock established sensibilities and permanently alter cultural life. The relationship between the individual will and collective power is renegotiated with disruptive force. The generation shaped by this transit possesses an extraordinary need for authentic self-expression and an instinctive rebellion against any authority perceived as illegitimate or merely inherited.',
    keywords: ['revolution', 'creativity', 'rebellion', 'authenticity'],
  },

  'Uranus-Virgo': {
    brief:
      'The planet of sudden transformation enters the mutable earth sign of labor, health, and practical service, producing a generational revolution in work, medicine, and daily routine. The methods by which the collective maintains bodily health and performs necessary labor are fundamentally disrupted and reorganized. New tools and techniques for agriculture, craft, and the healing arts emerge with startling rapidity. The generation shaped by this transit develops an unusual combination of analytical precision and radical dissatisfaction with inherited methods, applying inventive genius to the most practical and unglamorous aspects of collective life.',
    keywords: ['innovation', 'method', 'disruption', 'precision'],
  },

  'Uranus-Libra': {
    brief:
      'The planet of upheaval enters the cardinal air sign of partnership, justice, and social harmony, producing a generational revolution in the laws and customs governing human relationships. Marriage, diplomatic convention, legal codes, and the very concept of fairness undergo radical transformation. Alliances that seemed permanent dissolve overnight; new and unprecedented forms of partnership emerge. The arts are electrified by shocking new aesthetics. The generation shaped by this transit carries a deep ambivalence about commitment — intensely desiring connection while instinctively rebelling against any form of relational obligation perceived as confining or unjust.',
    keywords: ['liberation', 'disruption', 'partnership', 'justice'],
  },

  'Uranus-Scorpio': {
    brief:
      'The planet of radical change enters the fixed water sign of death, power, and hidden resources, producing a generational confrontation with taboo, mortality, and the occult mechanisms of control. Secrets held by the powerful are suddenly and violently exposed. Systems of shared wealth — taxation, inheritance, banking — undergo revolutionary transformation. The collective relationship with death and sexuality is profoundly altered. The generation shaped by this transit possesses an intense, penetrating quality — a refusal to accept surface explanations and a compulsive need to uncover what has been deliberately concealed, no matter the cost of that knowledge.',
    keywords: ['exposure', 'transformation', 'intensity', 'power'],
  },

  'Uranus-Sagittarius': {
    brief:
      'The planet of sudden insight enters the mutable fire sign of philosophy, religion, and distant horizons, producing a generational revolution in belief systems and the expansion of known boundaries. Orthodoxies that have held for centuries are shattered by new knowledge; the frontiers of exploration — whether geographic, intellectual, or spiritual — advance with explosive speed. Foreign cultures collide and intermingle in unprecedented ways. The generation shaped by this transit carries an irrepressible hunger for truth and meaning combined with a deep skepticism toward inherited doctrine, producing both visionary prophets and restless seekers who never find a creed sufficient to contain them.',
    keywords: ['revelation', 'exploration', 'heterodoxy', 'expansion'],
  },

  'Uranus-Capricorn': {
    brief:
      'The planet of upheaval enters the cardinal earth sign of government, hierarchy, and temporal authority, producing a generational revolution in the structures of power themselves. Established governments, dynasties, and institutional orders face sudden and often irreversible disruption. The rules by which society organizes rank, responsibility, and ambition are radically rewritten. New forms of governance emerge from the rubble of the old. The generation shaped by this transit develops an unusual relationship with authority — simultaneously drawn to power and instinctively contemptuous of its traditional forms, seeking to rebuild the architecture of civilization according to entirely new principles.',
    keywords: ['revolution', 'restructuring', 'authority', 'upheaval'],
  },

  'Uranus-Aquarius': {
    brief:
      'The planet of radical change enters the fixed air sign most sympathetic to its nature, producing a generational period of extraordinary collective innovation and social experimentation. The bonds connecting individuals to their communities are rewired; new forms of association, fraternity, and collective identity emerge with startling rapidity. Scientific and theoretical breakthroughs accelerate far beyond their normal pace. Idealism about human potential reaches fevered intensity, sometimes producing genuine liberation and sometimes dangerous utopianism. The generation shaped by this transit possesses a genius for collective organization and an unshakeable faith in the possibility of a radically different future.',
    keywords: ['innovation', 'collectivism', 'breakthrough', 'idealism'],
  },

  'Uranus-Pisces': {
    brief:
      'The planet of sudden disruption enters the mutable water sign of dissolution, mysticism, and the collective unconscious, producing a generational upheaval in spiritual life and the invisible currents that bind societies together. Established religions and spiritual traditions are simultaneously undermined and revitalized by strange new revelations. The boundary between the rational and the numinous becomes dangerously thin. Mass movements of ecstatic or apocalyptic character arise. The generation shaped by this transit carries a profound sensitivity to the unseen dimensions of existence, combined with a restless dissatisfaction with any spiritual framework that cannot accommodate the radical and the unexpected.',
    keywords: ['revelation', 'dissolution', 'mysticism', 'awakening'],
  },

  // ─────────────────────────────────────────────
  // NEPTUNE (Modern — no traditional dignities)
  // Approximate cycle: ~165 years, ~14 years per sign
  // ─────────────────────────────────────────────

  'Neptune-Aries': {
    brief:
      'The planet of dissolution and dreams enters the cardinal fire sign of initiative and war, producing a long generational period in which the collective ideal of heroism and individual courage is simultaneously glorified and undermined. Martial endeavors are cloaked in idealistic narratives that obscure their true costs. The boundary between genuine courage and delusional aggression becomes treacherously unclear. New spiritual movements arise that emphasize the divine nature of the individual will. The generational character shaped by this transit oscillates between inspired self-sacrifice and a dangerous confusion about where righteous action ends and destructive fantasy begins.',
    keywords: ['idealism', 'delusion', 'sacrifice', 'heroism'],
  },

  'Neptune-Taurus': {
    brief:
      'The planet of dissolution enters the fixed earth sign of material value, producing a prolonged generational period in which the nature of wealth, beauty, and physical security becomes profoundly uncertain. What constitutes genuine value grows confused — speculative bubbles inflate around illusory assets while true wealth is neglected or undervalued. The arts devoted to sensory pleasure reach extraordinary refinement but may lack substance. Agriculture and the relationship with the land acquire a mystical or idealistic quality. The generation shaped by this transit must learn, often painfully, to distinguish between genuine material sustenance and the seductive dream of effortless abundance.',
    keywords: ['illusion', 'value', 'refinement', 'speculation'],
  },

  'Neptune-Gemini': {
    brief:
      'The planet of fog and fantasy enters the mutable air sign of communication and intellect, producing a long generational period in which truth and falsehood become extraordinarily difficult to distinguish. The channels of information are flooded with rumor, propaganda, and inspired fiction in equal measure. Language itself becomes slippery — words lose their fixed meanings, and the collective capacity for precise thought is both enriched by imaginative genius and corroded by deliberate deception. The generation shaped by this transit possesses remarkable gifts of narrative and persuasion, yet must perpetually guard against the dissolution of rational clarity into mere cleverness or outright fabrication.',
    keywords: ['deception', 'imagination', 'confusion', 'narrative'],
  },

  'Neptune-Cancer': {
    brief:
      'The planet of dreams and dissolution enters the cardinal water sign of home, family, and patriotic feeling, producing a prolonged generational period in which collective identity becomes intensely emotional and deeply confused. Nationalism acquires a mythic, almost religious quality — the homeland is idealized beyond recognition, and the boundaries between genuine love of one\'s people and dangerous fantasy become perilously thin. Housing and domestic life are subject to speculative delusion. The generation shaped by this transit carries an overwhelming nostalgia for a past that may never have existed, combined with a genuine and deeply felt longing for belonging that transcends the merely political.',
    keywords: ['nostalgia', 'idealization', 'longing', 'myth'],
  },

  'Neptune-Leo': {
    brief:
      'The planet of illusion enters the fixed fire sign of sovereignty and creative expression, producing a long generational period in which the collective relationship with leadership, glamour, and the arts undergoes profound enchantment. Rulers are idolized or demonized with equal irrationality; the line between genuine charisma and manufactured spectacle dissolves. The performing and visual arts reach heights of extraordinary beauty and seductive power. Children born into this transit inherit a deep need to be seen and adored, yet struggle to distinguish authentic self-expression from the performance of an idealized persona. The cult of personality — for good or ill — defines the age.',
    keywords: ['glamour', 'spectacle', 'enchantment', 'persona'],
  },

  'Neptune-Virgo': {
    brief:
      'The planet of dissolution enters the mutable earth sign of labor, health, and discernment, producing a long generational period in which the boundaries between genuine service and self-deception grow dangerously unclear. Medical practice is simultaneously advanced by intuitive breakthroughs and plagued by quackery. The workforce experiences confusion about the value and meaning of labor. Standards of purity — in food, in craft, in moral conduct — are both elevated to impossible ideals and eroded by hidden contamination. The generation shaped by this transit must learn to apply spiritual sensitivity to practical matters without losing the critical faculty that distinguishes healing from harm.',
    keywords: ['confusion', 'service', 'purity', 'discernment'],
  },

  'Neptune-Libra': {
    brief:
      'The planet of dreams and enchantment enters the cardinal air sign of partnership and justice, producing a long generational period in which the ideals governing human relationships and social harmony are profoundly romanticized. Love and marriage are elevated to spiritual callings, yet the resulting expectations become impossible to fulfill in the imperfect world. Diplomacy and law are conducted under a fog of good intentions that may obscure genuine injustice. The arts achieve extraordinary elegance and emotional depth. The generation shaped by this transit carries a deep and often painful idealism about partnership — seeking the transcendent in every bond, and frequently disappointed by the merely human.',
    keywords: ['romance', 'idealism', 'enchantment', 'disillusionment'],
  },

  'Neptune-Scorpio': {
    brief:
      'The planet of dissolution enters the fixed water sign of death, hidden power, and the taboo, producing a long generational period in which the collective unconscious is stirred to extraordinary depth. The boundaries separating the living from the dead, the conscious from the unconscious, and the sacred from the profane grow impossibly thin. Occult practices, previously suppressed, emerge into collective awareness. Sexuality is both mystified and confused. Poisoning — literal and metaphorical — becomes a pervasive concern. The generation shaped by this transit possesses an intense and sometimes terrifying sensitivity to the hidden dimensions of existence, driving them toward either profound psychological insight or dangerous fascination with darkness.',
    keywords: ['depth', 'taboo', 'occultism', 'intensity'],
  },

  'Neptune-Sagittarius': {
    brief:
      'The planet of dreams and dissolution enters the mutable fire sign of religion, philosophy, and far horizons, producing a long generational period in which faith, belief, and the search for meaning become both enormously expansive and dangerously unmoored. New religious and philosophical movements arise with intoxicating appeal, promising ultimate truth while often delivering little more than beautiful illusion. The boundaries between cultures dissolve through travel and exchange, producing both genuine cosmopolitan wisdom and rootless spiritual wandering. The generation shaped by this transit inherits an enormous hunger for transcendence paired with a constitutional inability to commit to any single path of belief.',
    keywords: ['faith', 'wandering', 'transcendence', 'illusion'],
  },

  'Neptune-Capricorn': {
    brief:
      'The planet of dissolution enters the cardinal earth sign of government and institutional authority, producing a long generational period in which the structures of power are slowly corroded from within by confusion, corruption, and the gradual erosion of public trust. Governments operate behind veils of secrecy; the line between legitimate authority and mere power grows indistinct. Yet this transit also inspires the dream of ideal governance — the vision of institutions that serve the collective good with selfless devotion. The generation shaped by this transit carries a deep ambivalence toward authority, sensing both its necessity and its corruption, and often struggling to build structures worthy of their ideals.',
    keywords: ['erosion', 'corruption', 'ambivalence', 'ideal'],
  },

  'Neptune-Aquarius': {
    brief:
      'The planet of dreams enters the fixed air sign of collective ideals and social organization, producing a long generational period in which utopian visions of human brotherhood achieve extraordinary power over the collective imagination. The dream of universal equality, of the perfection of society through reason and compassion, becomes intoxicating — and the distinction between achievable reform and impossible fantasy grows treacherously unclear. Friendship and group belonging acquire spiritual significance. The generation shaped by this transit possesses a genuine genius for envisioning a better world, yet must constantly guard against the dissolution of practical effort into mere dreaming and the confusion of sentiment with solidarity.',
    keywords: ['utopianism', 'brotherhood', 'vision', 'idealism'],
  },

  'Neptune-Pisces': {
    brief:
      'The planet of dissolution returns to the mutable water sign most congenial to its nature, producing a long generational period of extraordinary spiritual intensity and collective psychic sensitivity. The boundaries between self and other, between waking and dreaming, between the material and the numinous dissolve to a degree rarely encountered. Compassion and empathy swell to oceanic proportions — yet so does confusion, escapism, and the vulnerability of the collective to deception and addiction. Healing arts of every description flourish. The generation shaped by this transit carries within it the potential for either the highest form of selfless love or the most complete dissolution of meaning into formless chaos.',
    keywords: ['transcendence', 'compassion', 'dissolution', 'sensitivity'],
  },

  // ─────────────────────────────────────────────
  // PLUTO (Modern — no traditional dignities)
  // Approximate cycle: ~248 years, ~12-31 years per sign
  // (highly elliptical orbit)
  // ─────────────────────────────────────────────

  'Pluto-Aries': {
    brief:
      'The planet of inexorable transformation enters the cardinal fire sign of war, sovereignty, and individual will, producing a generational period in which the collective drive for power expresses itself through raw, elemental force. Empires are born and destroyed through the sheer assertion of martial will. The concept of the self — its rights, its sovereignty, its capacity for violence — is transformed at the deepest level. Revolutionary movements erupt with irresistible intensity, sweeping away orders that have endured for centuries. The generation shaped by this transit carries an extraordinary and sometimes terrifying capacity for decisive action, forged in an age when survival itself demands the courage to destroy the old and begin utterly anew.',
    keywords: ['conquest', 'revolution', 'will', 'annihilation'],
  },

  'Pluto-Taurus': {
    brief:
      'The planet of deep transformation enters the fixed earth sign of wealth, agriculture, and material value, producing a prolonged generational period in which the very foundations of economic life are destroyed and rebuilt. The ownership of land, the nature of currency, and the relationship between labor and sustenance undergo changes so fundamental that the world before and after is barely recognizable. Famines and periods of extraordinary abundance alternate with devastating unpredictability. The generation shaped by this transit develops an obsessive relationship with material security, having witnessed or inherited the knowledge that everything considered solid and permanent can be utterly annihilated and must be rebuilt from the earth itself.',
    keywords: ['upheaval', 'wealth', 'survival', 'regeneration'],
  },

  'Pluto-Gemini': {
    brief:
      'The planet of inexorable transformation enters the mutable air sign of communication, trade, and intellect, producing a generational period in which the means of transmitting knowledge and conducting commerce are destroyed and rebuilt from their foundations. The power of the word — spoken, written, or transmitted by any means — becomes a matter of life and death for civilizations. Propaganda, intelligence, and the control of information emerge as decisive forces in the struggle for power. The generation shaped by this transit possesses an extraordinary and sometimes ruthless intelligence, an instinctive understanding that knowledge is power in its most literal and consequential sense.',
    keywords: ['propaganda', 'intelligence', 'transformation', 'power'],
  },

  'Pluto-Cancer': {
    brief:
      'The planet of deep transformation enters the cardinal water sign of home, family, and national identity, producing a generational period in which the bonds of kinship, ethnicity, and homeland are tested to the point of destruction. Mass displacement, the redrawing of national borders, and the transformation of family structure at the most fundamental level characterize this transit. The emotional life of the collective is stirred to depths that produce both extraordinary acts of protection and terrible acts of tribal violence. The generation shaped by this transit carries within it a primal, visceral attachment to belonging — and the knowledge, often gained through suffering, of what it costs to lose everything that once felt like home.',
    keywords: ['displacement', 'homeland', 'survival', 'transformation'],
  },

  'Pluto-Leo': {
    brief:
      'The planet of inexorable transformation enters the fixed fire sign of sovereignty, creativity, and the individual will, producing a generational period in which the nature of power, authority, and self-expression is fundamentally and permanently altered. Rulers of extraordinary potency arise — for good or ill — wielding power on a scale previously unimaginable. The creative arts channel forces of elemental intensity, producing works that define entire civilizations. The generation shaped by this transit possesses an overwhelming sense of personal destiny and a compulsive need to leave an indelible mark upon the world, carrying both the capacity for magnificent creation and the temptation of absolute power.',
    keywords: ['power', 'destiny', 'creation', 'dominion'],
  },

  'Pluto-Virgo': {
    brief:
      'The planet of deep transformation enters the mutable earth sign of labor, health, and practical service, producing a generational period in which the methods by which civilization sustains itself — work, medicine, agriculture, craft — are fundamentally destroyed and rebuilt. Diseases previously thought unconquerable yield to new knowledge; simultaneously, new plagues emerge from the transformation of daily life. The relationship between master and servant, between skilled and unskilled labor, is irrevocably altered. The generation shaped by this transit carries an obsessive perfectionism and a deep, often anxious awareness that the health of the body — personal and collective — depends on systems whose complexity demands constant, ruthless scrutiny.',
    keywords: ['purification', 'analysis', 'crisis', 'service'],
  },

  'Pluto-Libra': {
    brief:
      'The planet of inexorable transformation enters the cardinal air sign of partnership, law, and social harmony, producing a generational period in which the fundamental agreements governing human relationships are destroyed and renegotiated. Marriage, diplomatic convention, legal frameworks, and the concept of justice itself undergo transformation so deep that the social contract emerges in a form the previous generation would scarcely recognize. The generation shaped by this transit carries an intense and often painful awareness of power dynamics within relationships — an instinctive knowledge that harmony, to be genuine, must be forged through confrontation with inequality rather than maintained through the polite avoidance of difficult truths.',
    keywords: ['renegotiation', 'justice', 'transformation', 'power'],
  },

  'Pluto-Scorpio': {
    brief:
      'The planet of transformation enters the fixed water sign most congenial to its nature, producing a generational period of extraordinary psychological and collective intensity. The hidden mechanisms of power — financial, sexual, political — are dragged into the light with merciless force. Death, in all its literal and metaphorical dimensions, becomes an inescapable collective preoccupation. Taboos are shattered; what was forbidden is explored with compulsive thoroughness. The generation shaped by this transit possesses an almost supernatural capacity for psychological penetration, an unflinching willingness to confront the darkest dimensions of human nature, and a regenerative power born from intimate familiarity with destruction itself.',
    keywords: ['intensity', 'exposure', 'regeneration', 'taboo'],
  },

  'Pluto-Sagittarius': {
    brief:
      'The planet of inexorable transformation enters the mutable fire sign of religion, philosophy, and far horizons, producing a generational period in which belief systems, cultural boundaries, and the collective understanding of truth are destroyed and rebuilt. Religions undergo schism or radical reformation; the encounter between civilizations separated by distance produces transformations neither could have anticipated. The very concept of truth — what can be known, what must be believed, what lies beyond human comprehension — becomes a battleground of existential consequence. The generation shaped by this transit carries an intense, almost fanatical relationship with meaning, driven by the knowledge that all systems of belief are mortal and that truth must be perpetually reconquered from the forces of chaos.',
    keywords: ['fanaticism', 'revelation', 'confrontation', 'truth'],
  },

  'Pluto-Capricorn': {
    brief:
      'The planet of deep transformation enters the cardinal earth sign of government, hierarchy, and institutional power, producing a generational period in which the structures of authority that have governed civilization are tested to destruction. Empires, dynasties, and systems of governance that have endured for centuries face crises from which they either emerge utterly transformed or do not emerge at all. The concentration of power reaches extremes that provoke equally extreme reactions. The generation shaped by this transit inherits the monumental task of rebuilding the very foundations of institutional life — knowing, from the wreckage they have witnessed, that no structure of human authority is permanent, and that the price of failing to build well is catastrophic.',
    keywords: ['destruction', 'authority', 'rebuilding', 'reckoning'],
  },

  'Pluto-Aquarius': {
    brief:
      'The planet of inexorable transformation enters the fixed air sign of collective organization, innovation, and the ideal of human equality, producing a generational period in which the relationship between the individual and the collective is fundamentally and permanently transformed. The power of organized groups — whether devoted to liberation or to control — reaches unprecedented intensity. The tools and systems by which societies organize themselves undergo changes so radical that the very nature of collective life is altered beyond recognition. The generation shaped by this transit must confront the ultimate question of power in its most impersonal form: whether the transformation of collective life serves genuine human freedom or merely replaces old tyrannies with new and more efficient ones.',
    keywords: ['collectivism', 'transformation', 'power', 'liberation'],
  },

  'Pluto-Pisces': {
    brief:
      'The planet of deep transformation enters the mutable water sign of dissolution, mysticism, and the collective unconscious, producing a generational period in which the deepest strata of shared human experience are stirred and fundamentally altered. The boundary between the material and the spiritual, between sanity and madness, between compassion and self-annihilation becomes a site of tremendous collective crisis and potential rebirth. Religious and spiritual life undergoes transformation at the most profound level — old faiths die or are reborn in forms their founders would not recognize. The generation shaped by this transit carries within it the capacity for either the most transcendent compassion the world has known or the most complete surrender to collective delusion, and often both at once.',
    keywords: ['transcendence', 'dissolution', 'rebirth', 'crisis'],
  },
};

// prettier-ignore
export const NATAL_INTERPRETATIONS: Record<string, Interpretation> = {

  // ============================================================
  // SUN (Greater Luminary) — 12 Signs
  // ============================================================

  'Sun-Aries': {
    brief:
      'The Sun holds its exaltation in Aries, where the vital force blazes forth with sovereign confidence and initiatory power. The native is born to lead, to begin, and to impress will upon circumstance with the directness of a flame that needs no permission to burn. The choleric temperament runs hot and dry, lending courage that borders on recklessness and a constitution suited to martial pursuits and feats of daring. Natural vocations include command, pioneering enterprise, and any arena where boldness determines the outcome. The exaltation grants magnificent self-assertion and the capacity to inspire others through sheer force of presence. The peril lies in the conflagration of pride — a will so sovereign it cannot bend, and thus breaks.',
    keywords: ['exaltation', 'initiative', 'courage', 'sovereignty'],
  },

  'Sun-Taurus': {
    brief:
      'In Taurus, the Sun illuminates the fixed earth of Venus, granting the native a steady, enduring vitality rooted in the pleasures and substance of the material world. The temperament is cold and dry moderated by Venusian warmth, producing individuals of remarkable physical stamina and sensory refinement. The native builds slowly but what is built endures — wealth, reputation, and legacy accrue through patience rather than haste. Natural vocations include stewardship of land, cultivation of beauty, and the management of tangible resources. The gift is an unshakable constancy of purpose and a talent for making the good life manifest. The peril is an obstinacy that mistakes immovability for strength, and possessiveness that confuses having with loving.',
    keywords: ['steadfastness', 'sensory', 'endurance', 'accumulation'],
  },

  'Sun-Gemini': {
    brief:
      'The Sun in Gemini places the vital spirit under Mercury\'s governance, producing a native of quicksilver intelligence and restless curiosity. The temperament inclines toward the hot and moist, lending sociability, eloquence, and a constitution animated more by nervous energy than brute force. The mind moves between subjects with the agility of a messenger between courts, gathering knowledge from every quarter. Natural vocations include rhetoric, commerce, letters, and any craft requiring dexterity of hand or tongue. The gift is a versatility that adapts to any company and comprehends any subject with speed. The peril is dispersion — the light scattered through too many facets loses its power to illumine any single thing deeply.',
    keywords: ['versatility', 'eloquence', 'curiosity', 'dexterity'],
  },

  'Sun-Cancer': {
    brief:
      'In Cancer, the Sun occupies the domicile of the Moon, and the vital force expresses itself through nurture, memory, and the bonds of lineage. The native draws strength from roots — family, homeland, and ancestral tradition — and possesses an instinct for sheltering and sustaining what is vulnerable. The cold and moist temperament of Cancer renders the constitution sensitive to environment and season, with vitality waxing and waning in sympathy with emotional tides. Natural vocations include the care of households, provisioning of communities, and guardianship of heritage. The gift is a profound capacity to nourish life in all its forms. The peril is that the protective shell becomes a prison, and fear of exposure prevents the native from venturing forth into the sovereignty the Sun demands.',
    keywords: ['nurture', 'heritage', 'protection', 'sensitivity'],
  },

  'Sun-Leo': {
    brief:
      'The Sun reigns in its own domicile in Leo, and no placement more fully expresses the solar nature — radiant, generous, commanding, and vital. The native possesses a natural authority that requires neither title nor argument, for it proceeds from the sheer force of being. The hot and dry temperament of this fixed fire sign grants a robust constitution, a magnanimous heart, and a talent for spectacle and display. Natural vocations include governance, the performance of sacred and civic rites, and any role that places the individual at the luminous center. The gift is nobility of spirit that elevates all who come within its orbit. The peril is the tyrant\'s error — believing that because the light emanates from oneself, all things exist only to reflect it.',
    keywords: ['domicile', 'majesty', 'generosity', 'authority'],
  },

  'Sun-Virgo': {
    brief:
      'In Virgo, the Sun is governed by Mercury in an earth sign, directing the vital force toward analysis, refinement, and the perfection of craft. The native possesses a discriminating intelligence that finds purpose in service, correction, and the mastery of useful arts. The cold and dry temperament lends a constitution inclined toward lean efficiency, with health often a matter of careful regimen. Natural vocations include medicine, scribal work, the cultivation of grain and herb, and any discipline requiring precision and discernment. The gift is an exactitude that elevates humble work to the level of art, finding the sacred in right proportion. The peril is a self-criticism so relentless that it devours the very confidence the Sun requires to shine.',
    keywords: ['discernment', 'service', 'precision', 'craft'],
  },

  'Sun-Libra': {
    brief:
      'The Sun occupies its fall in Libra, where the sovereign will must express itself through negotiation, balance, and the imperatives of relationship. The native\'s vitality is bound to the social realm — identity is forged not in solitary assertion but in the mirror of the other. The hot and moist temperament of this cardinal air sign grants charm, aesthetic sensibility, and a constitution that thrives in harmony and sickens in discord. Natural vocations include diplomacy, the administration of justice, and the cultivation of beauty in all its civic forms. The gift is the ability to hold opposing forces in equilibrium and to create peace where others see only contest. The peril of the fall is a selfhood so dependent upon approval that it cannot stand alone when standing alone is required.',
    keywords: ['fall', 'diplomacy', 'balance', 'partnership'],
  },

  'Sun-Scorpio': {
    brief:
      'In Scorpio, the Sun is governed by Mars in a fixed water sign, and the vital force plunges beneath the surface into the realm of hidden power, transformation, and the unseen. The native possesses an intensity of will that operates through depth rather than display, and a penetrating insight into what others conceal. The cold and moist temperament, inflected by martial force, grants a constitution of remarkable resilience — the native endures what would destroy others. Natural vocations include the investigation of mysteries, the management of shared resources, and any enterprise touching upon death, inheritance, or regeneration. The gift is a fearless confrontation with the depths of existence. The peril is that the native, dwelling so long in shadow, comes to trust no light and poisons bonds through suspicion.',
    keywords: ['intensity', 'penetration', 'resilience', 'secrecy'],
  },

  'Sun-Sagittarius': {
    brief:
      'The Sun in Sagittarius is governed by Jupiter, the Greater Benefic, and the vital force is directed toward expansion, philosophy, and the pursuit of meaning beyond the horizon. The native is animated by faith — in providence, in the possibility of understanding, in the value of the journey itself. The hot and dry temperament of this mutable fire sign grants an enthusiastic, robust constitution inclined to motion and exploration. Natural vocations include priesthood, teaching, the practice of law, long-distance trade, and the care of horses and hunting. The gift is a magnanimity of vision that inspires others to seek what is higher. The peril is a restlessness that mistakes motion for progress, and a confidence so expansive it cannot perceive its own ignorance.',
    keywords: ['faith', 'expansion', 'philosophy', 'wandering'],
  },

  'Sun-Capricorn': {
    brief:
      'In Capricorn, the Sun enters the domicile of Saturn, and the vital force is tempered by cold discipline, ambition, and the long view of time. The native possesses a sober determination that measures worth by lasting achievement rather than momentary brilliance. The cold and dry temperament grants a constitution that improves with age — this is the placement of those who ripen slowly and endure longest. Natural vocations include governance, architecture, administration of estates, and any enterprise requiring patient accumulation of authority. The gift is the capacity to build structures — of stone, of law, of legacy — that outlast their maker. The peril is a dryness of spirit, where duty and ambition consume all warmth, leaving a life of accomplishment but little joy.',
    keywords: ['ambition', 'discipline', 'structure', 'endurance'],
  },

  'Sun-Aquarius': {
    brief:
      'The Sun occupies its detriment in Aquarius, the other domicile of Saturn, where the sovereign self must contend with the demands of the collective and the abstractions of principle. The native\'s vitality is directed not toward personal glory but toward the advancement of ideas, communities, and systems larger than any single will. The hot and moist temperament of this fixed air sign grants an intellectual constitution — keen, detached, and oriented toward the universal. Natural vocations include the reform of institutions, the study of natural philosophy, and the cultivation of fellowships and alliances. The gift is a vision capacious enough to hold all of humanity in its regard. The peril of the detriment is alienation from the very warmth of individual connection — the native who loves mankind in the abstract may struggle to love any single person in the particular.',
    keywords: ['detriment', 'innovation', 'collectivity', 'detachment'],
  },

  'Sun-Pisces': {
    brief:
      'In Pisces, the Sun is governed by Jupiter in a mutable water sign, and the vital force dissolves into the oceanic, the compassionate, and the imaginal. The native\'s identity is permeable — absorbing the feelings of others, attuned to suffering, and drawn toward the transcendent. The cold and moist temperament grants a constitution sensitive to intoxicants, impressions, and the unseen currents of the soul. Natural vocations include the healing arts, sacred music, contemplative life, and any work performed in seclusion or on behalf of the forgotten. The gift is a selflessness that approaches sainthood, a capacity to redeem through compassion. The peril is the dissolution of self altogether — the native who empties the vessel of identity entirely may find that nothing remains to give.',
    keywords: ['compassion', 'dissolution', 'imagination', 'transcendence'],
  },

  // ============================================================
  // MOON (Lesser Luminary) — 12 Signs
  // ============================================================

  'Moon-Aries': {
    brief:
      'The Moon in Aries places the emotional nature under the governance of Mars, producing a native whose instinctive responses are swift, fierce, and decisively active. Feelings arise with the urgency of a drawn blade — immediate, sharp, and impossible to conceal. The hot and dry martial influence upon the cold and moist lunar nature creates an internal tension between the need for security and the impulse toward confrontation. The native possesses courage in crisis and a visceral honesty in emotional expression. Natural vocations include midwifery, emergency physic, and the management of volatile situations. The gift is a fearless emotional directness that cuts through pretense. The peril is an inner volatility that exhausts both the native and those who depend upon the native\'s care.',
    keywords: ['impulsiveness', 'emotional courage', 'volatility', 'directness'],
  },

  'Moon-Taurus': {
    brief:
      'The Moon achieves her exaltation in Taurus, where the emotional nature finds its deepest contentment in the stable, the tangible, and the nourishing. The native\'s instincts are oriented toward comfort, sustenance, and the preservation of what is good — the full table, the tended garden, the familiar hearth. The cold and moist lunar nature harmonizes beautifully with the cold and dry fixity of Taurus, producing a temperament of remarkable emotional steadiness and physical fecundity. Natural vocations include the provisioning of households, cultivation of land, and all arts of nourishment and bodily care. The exaltation grants a serene constancy of feeling that others find deeply reassuring. The peril is an attachment to comfort so profound that the native cannot endure necessary change and clings to what must be released.',
    keywords: ['exaltation', 'contentment', 'fertility', 'constancy'],
  },

  'Moon-Gemini': {
    brief:
      'In Gemini, the Moon is governed by Mercury, and the emotional nature is filtered through the intellect, producing a native who processes feeling through language, story, and ceaseless communication. The instincts are curious rather than cautious, and the native finds emotional nourishment in variety, conversation, and the acquisition of information. The hot and moist Mercurial air quickens the Moon\'s reflective nature into a restless mental agility. Natural vocations include teaching of the young, scribal arts, local trade, and the conveyance of messages and news. The gift is an emotional intelligence that can name and articulate what others feel but cannot express. The peril is a fundamental nervousness of soul — feelings that change so rapidly they never deepen into lasting bonds.',
    keywords: ['adaptability', 'communication', 'restlessness', 'wit'],
  },

  'Moon-Cancer': {
    brief:
      'The Moon reigns in her own domicile in Cancer, and no placement more perfectly expresses the lunar nature — receptive, nurturing, protective, and deeply attuned to the rhythms of need. The native possesses an instinctive wisdom about sustenance, belonging, and the invisible threads that bind families and communities through generations. The cold and moist temperament is doubled, granting a constitution profoundly sensitive to environment, diet, and the emotional atmosphere of any space. Natural vocations include all forms of caregiving, the management of households and inns, and the keeping of memory and tradition. The gift is an inexhaustible capacity for empathic nourishment. The peril is a vulnerability so acute that the native builds walls of defensive emotion — moodiness, clinging, and the weaponization of care.',
    keywords: ['domicile', 'nurture', 'memory', 'receptivity'],
  },

  'Moon-Leo': {
    brief:
      'The Moon in Leo places the emotional nature under the governance of the Sun, producing a native whose feelings are warm, generous, and require visible expression and recognition. The instincts orient toward display, celebration, and the creation of joy — the native needs to feel special and, in turn, makes others feel celebrated. The hot and dry solar influence upon the lunar nature grants emotional vitality and a constitution enlivened by pleasure and praise. Natural vocations include the patronage of arts, the hosting of feasts and assemblies, and the care of children. The gift is a magnanimous heart that transforms ordinary life into something festive and dignified. The peril is an emotional dependence upon admiration — when the applause ceases, the native mistakes silence for abandonment.',
    keywords: ['warmth', 'generosity', 'display', 'pride'],
  },

  'Moon-Virgo': {
    brief:
      'In Virgo, the Moon is governed by Mercury in an earth sign, and the emotional nature expresses itself through service, discernment, and the quiet perfection of daily routine. The native\'s instincts are practical and analytical — feeling is processed through the body\'s rhythms and the careful ordering of the immediate environment. The cold and dry Virgoan temperament restrains the Moon\'s moisture, producing a constitution attentive to diet, hygiene, and the subtle signals of bodily health. Natural vocations include herbalism, the preparation of medicines and foods, and any service requiring careful attention to the needs of others. The gift is an emotional intelligence expressed through acts of practical devotion. The peril is an anxious perfectionism that cannot rest, finding fault in what others would call sufficiently good.',
    keywords: ['service', 'discernment', 'anxiety', 'modesty'],
  },

  'Moon-Libra': {
    brief:
      'The Moon in Libra places the emotional nature under Venus\'s governance, producing a native whose instincts are oriented toward harmony, beauty, and the maintenance of pleasant relations. The native feels most nourished in refined company and aesthetically pleasing surroundings, and possesses an innate talent for smoothing tensions and creating social grace. The hot and moist temperament of Libra complements the Moon\'s own moisture, granting a charming and sociable disposition. Natural vocations include the arranging of marriages and alliances, the decoration of spaces, and the mediation of disputes. The gift is an emotional refinement that elevates the quality of all social intercourse. The peril is a compulsive need for peace that leads the native to suppress genuine feeling, choosing pleasantness over truth.',
    keywords: ['harmony', 'refinement', 'sociability', 'compromise'],
  },

  'Moon-Scorpio': {
    brief:
      'The Moon occupies her fall in Scorpio, where the emotional nature is plunged into depths that the Luminary of comfort and security finds profoundly challenging. The native\'s feelings run deep, intense, and largely invisible — a subterranean river of passion, loyalty, and unspoken knowledge. Mars\'s governance infuses the lunar nature with a fierce protectiveness that can become possessive and consuming. The cold and moist temperament intensified by fixed water produces emotional states of extraordinary tenacity. Natural vocations include the investigation of hidden matters, the care of the dying, and work with inheritance and legacy. The gift of this fall is emotional power — the capacity to transform through feeling what reason alone cannot reach. The peril is an inner torment that trusts nothing, forgives slowly, and holds wounds as though they were treasures.',
    keywords: ['fall', 'intensity', 'secrecy', 'emotional power'],
  },

  'Moon-Sagittarius': {
    brief:
      'In Sagittarius, the Moon is governed by Jupiter, and the emotional nature is buoyed by optimism, restlessness, and a hunger for meaning that transcends the domestic. The native\'s instincts lean toward the philosophical and the foreign — emotional nourishment comes from new horizons, inspiring teachings, and the sense that life is a grand pilgrimage. The hot and dry temperament of mutable fire dries the Moon\'s natural moisture, producing a constitution that thrives on movement and wilts in confinement. Natural vocations include the education of the young in matters of faith, long-distance travel, and the care of pilgrims and strangers. The gift is an emotional generosity that sees the best in every situation and every soul. The peril is a restlessness that mistakes depth for limitation, fleeing every bond before it has time to ripen.',
    keywords: ['optimism', 'restlessness', 'faith', 'expansiveness'],
  },

  'Moon-Capricorn': {
    brief:
      'The Moon occupies her detriment in Capricorn, where the emotional nature is governed by Saturn and subjected to the cold discipline of necessity, duty, and time. The native\'s feelings are restrained, cautious, and filtered through an awareness of consequence — spontaneous emotional expression is suppressed in favor of composure and propriety. The doubly cold and dry temperament produces a constitution that is lean, serious, and ages with particular distinction. Natural vocations include the administration of estates, the governance of dependents, and any role requiring emotional self-command under difficult circumstances. The gift of the detriment is an emotional maturity rare among the young, and a reliability that others come to depend upon absolutely. The peril is a loneliness born of walls built too high — the native who cannot show vulnerability cannot receive the comfort that vulnerability invites.',
    keywords: ['detriment', 'reserve', 'duty', 'emotional control'],
  },

  'Moon-Aquarius': {
    brief:
      'The Moon in Aquarius is governed by Saturn in a fixed air sign, and the emotional nature is directed toward the collective, the principled, and the intellectually conceived. The native\'s instincts operate through ideas rather than feelings — emotional responses are filtered through frameworks of fairness, progress, and rational assessment. The hot and moist temperament of Aquarius provides sociability, but the Saturnian governance keeps intimacy at a considered distance. Natural vocations include the organization of communities, the reform of customs, and the care of groups rather than individuals. The gift is an emotional detachment that allows clear judgment when others are overwhelmed by personal feeling. The peril is a coolness in intimate bonds that leaves those closest to the native feeling appreciated in theory but untouched in the heart.',
    keywords: ['detachment', 'humanitarianism', 'principle', 'unconventionality'],
  },

  'Moon-Pisces': {
    brief:
      'In Pisces, the Moon is governed by Jupiter in a mutable water sign, and the emotional nature opens to the full depth and breadth of human feeling — one\'s own and that of every soul encountered. The native possesses a psychic permeability that absorbs the moods, sufferings, and joys of the surrounding world as naturally as water absorbs color. The cold and moist temperament is doubled and tripled, producing a constitution exquisitely sensitive to atmosphere, intoxicant, and the unseen. Natural vocations include the healing arts, the care of the afflicted, sacred music, and contemplative devotion. The gift is a compassion so vast it becomes a form of wisdom, understanding through feeling what the intellect cannot reach. The peril is a self so porous that the native drowns in the emotional seas of others, unable to distinguish personal sorrow from the world\'s.',
    keywords: ['empathy', 'permeability', 'compassion', 'imagination'],
  },

  // ============================================================
  // MERCURY — 12 Signs
  // ============================================================

  'Mercury-Aries': {
    brief:
      'Mercury in Aries places the intellect under martial governance, producing a mind that is swift, combative, and decisive to the point of bluntness. The native thinks as a warrior moves — forward, with minimal deliberation and maximum conviction. The hot and dry temperament accelerates Mercury\'s already quick nature into a kind of mental daring that excels in debate, improvisation, and the rapid assessment of tactical situations. Natural vocations include advocacy, military counsel, and any craft requiring quick verbal or manual dexterity under pressure. The gift is a penetrating directness of thought that cuts to the essence of any matter. The peril is a haste of judgment that speaks before it listens and decides before it understands.',
    keywords: ['directness', 'haste', 'combative speech', 'decisiveness'],
  },

  'Mercury-Taurus': {
    brief:
      'In Taurus, Mercury is governed by Venus in a fixed earth sign, and the intellect operates with deliberate, methodical patience. The native\'s mind is not quick but thorough — ideas must be tested against practical reality before they are accepted, and once accepted, they are held with tenacious certainty. The cold and dry temperament steadies Mercury\'s natural volatility, producing a thinker of remarkable common sense and retentive memory. Natural vocations include accounting, land surveying, the appraisal of goods, and any craft requiring careful measurement and patient skill. The gift is a reliability of thought that others trust implicitly. The peril is a mental fixity that cannot accommodate new information once a position has been established, confusing stubbornness with wisdom.',
    keywords: ['deliberation', 'practicality', 'retention', 'stubbornness'],
  },

  'Mercury-Gemini': {
    brief:
      'Mercury reigns in its own domicile in Gemini, and the intellect achieves its purest expression — agile, articulate, endlessly curious, and capable of holding multiple perspectives simultaneously. The native\'s mind moves with the swiftness of the messenger god himself, gathering, sorting, and disseminating information with breathtaking facility. The hot and moist temperament doubles Mercury\'s own nature, producing a constitution animated by nervous intelligence and communicative drive. Natural vocations include rhetoric, letters, commerce, translation, and the conveyance of knowledge across boundaries. The gift is an intellectual brilliance that illuminates every subject it touches with clarity and charm. The peril is superficiality — the mind that touches everything lightly may grasp nothing firmly, and cleverness without depth becomes mere trickery.',
    keywords: ['domicile', 'eloquence', 'versatility', 'intellectual agility'],
  },

  'Mercury-Cancer': {
    brief:
      'Mercury in Cancer places the intellect under the Moon\'s governance, producing a mind that thinks through feeling, memory, and intuitive sympathy. The native processes information emotionally before rationally — the subjective impression precedes and often overrides the logical assessment. The cold and moist temperament slows and deepens Mercury\'s natural speed, granting a retentive memory particularly strong for personal narratives and ancestral knowledge. Natural vocations include the keeping of records and genealogies, the education of children, and any form of counsel that requires empathic listening. The gift is an intelligence of the heart that understands through compassion what analysis alone would miss. The peril is a mind so influenced by mood and sentiment that it cannot achieve the detachment necessary for clear judgment.',
    keywords: ['intuition', 'memory', 'subjective thought', 'empathy'],
  },

  'Mercury-Leo': {
    brief:
      'In Leo, Mercury is governed by the Sun, and the intellect is warmed by confidence, creativity, and a desire to communicate with authority and flair. The native thinks in bold strokes rather than fine lines, and the mind is drawn to grand narratives, dramatic expression, and ideas that inspire rather than merely inform. The hot and dry solar influence gives the mind a fixed quality — opinions, once formed with conviction, become declarations. Natural vocations include oratory, the composition of hymns and proclamations, and the instruction of others in matters of honor and governance. The gift is a commanding eloquence that can move hearts and organize minds around a vision. The peril is intellectual pride — the mind that speaks always from the throne may cease to listen, and certainty may harden into dogma.',
    keywords: ['authority', 'creativity', 'confidence', 'dramatic expression'],
  },

  'Mercury-Virgo': {
    brief:
      'Mercury achieves both domicile and exaltation in Virgo, making this the most potent essential dignity available to the planet of intellect. The native possesses an analytical precision that borders on the surgical — the mind dissects, categorizes, and refines with tireless exactitude. The cold and dry temperament of earth perfectly grounds Mercury\'s airy nature, producing thought that is both brilliant and applicable. Natural vocations include medicine, pharmacy, scribal and secretarial arts, accounting, and the systematic study of natural phenomena. The gift is an intelligence that perfects everything it touches, finding the flaw that others overlook and the solution that others cannot devise. The peril is a mind so absorbed in detail that it loses sight of the whole, and a critical faculty so sharp it wounds the thinker as readily as it corrects the world.',
    keywords: ['domicile', 'exaltation', 'analysis', 'precision'],
  },

  'Mercury-Libra': {
    brief:
      'Mercury in Libra is governed by Venus in a cardinal air sign, and the intellect is oriented toward comparison, weighing of alternatives, and the pursuit of fairness in all judgments. The native possesses a mind naturally suited to seeing both sides of any question, and communicates with a grace and diplomacy that makes even difficult truths palatable. The hot and moist temperament of Libra complements Mercury\'s airy nature, producing a sociable and persuasive thinker. Natural vocations include the practice of law, arbitration, the negotiation of contracts, and any art requiring aesthetic judgment. The gift is an intellect that achieves balance — the mind as scales, measuring with elegant precision. The peril is indecision elevated to an art form, where the capacity to see every perspective paralyzes the capacity to choose.',
    keywords: ['balance', 'diplomacy', 'aesthetic judgment', 'indecision'],
  },

  'Mercury-Scorpio': {
    brief:
      'In Scorpio, Mercury is governed by Mars in a fixed water sign, and the intellect becomes a probing instrument designed to penetrate surfaces and uncover what is hidden. The native\'s mind is investigative, suspicious of the obvious, and drawn to secrets, codes, and the unspoken motivations beneath polite discourse. The cold and moist temperament deepens Mercury\'s perceptions, granting psychological acuity and a memory that forgives nothing. Natural vocations include the investigation of crimes and mysteries, the practice of occult arts, surgery, and any discipline requiring the discernment of hidden causes. The gift is a mind that perceives what others cannot or will not see. The peril is an intellect so attuned to hidden motives that it finds conspiracy everywhere and trusts no communication at face value.',
    keywords: ['investigation', 'penetration', 'secrecy', 'psychological acuity'],
  },

  'Mercury-Sagittarius': {
    brief:
      'Mercury occupies its detriment in Sagittarius, where the precise, detail-oriented intellect must operate within Jupiter\'s expansive domain of faith, philosophy, and broad generalization. The native\'s mind grasps grand patterns and sweeping truths with natural ease but struggles with the particulars that give such truths their practical force. The hot and dry temperament of mutable fire accelerates thought but scatters focus. Natural vocations include preaching, the teaching of philosophy and law, the writing of treatises, and prophecy. The gift of the detriment is a mind capable of genuine wisdom — seeing the forest that others, lost among the trees, cannot perceive. The peril is intellectual overreach — pronouncements made with Jovian confidence but without Mercurial rigor, and a carelessness with facts that undermines credibility.',
    keywords: ['detriment', 'philosophy', 'overreach', 'broad vision'],
  },

  'Mercury-Capricorn': {
    brief:
      'In Capricorn, Mercury is governed by Saturn, and the intellect operates with sober methodical precision, oriented toward practical outcomes and long-term planning. The native\'s mind is architectural — constructing arguments, plans, and systems with the patient rigor of one who builds in stone rather than wood. The cold and dry temperament concentrates Mercury\'s diffuse energies into focused, disciplined thought. Natural vocations include administration, engineering, the drafting of laws and contracts, and any enterprise requiring systematic organization over extended time. The gift is an intellect of exceptional gravitas and reliability, whose conclusions carry the weight of thorough consideration. The peril is a heaviness of mind — thought so burdened by consequence and caution that it loses the lightness necessary for invention and play.',
    keywords: ['method', 'gravity', 'systematic thought', 'caution'],
  },

  'Mercury-Aquarius': {
    brief:
      'Mercury in Aquarius is governed by Saturn in a fixed air sign, and the intellect is directed toward abstract systems, universal principles, and the conceptual architecture of societies and natural law. The native possesses a mind that operates best at a remove from the personal and the immediate, perceiving patterns invisible to those embedded in convention. The hot and moist temperament of Aquarius enlivens Saturn\'s coldness, producing an original and sometimes eccentric thinker. Natural vocations include natural philosophy, the reform of institutions, the invention of systems, and the teaching of uncommon doctrines. The gift is an intellect capable of genuinely original thought — seeing what has not yet been conceived. The peril is a detachment from common sense so complete that brilliance becomes mere eccentricity, and the native speaks a language no one else can understand.',
    keywords: ['originality', 'abstraction', 'systematic thought', 'eccentricity'],
  },

  'Mercury-Pisces': {
    brief:
      'Mercury occupies both its detriment and fall in Pisces, where the rational intellect must navigate waters that dissolve the very boundaries upon which logic depends. The native\'s mind operates through intuition, metaphor, and a kind of knowing that cannot be reduced to syllogism. The cold and moist temperament overwhelms Mercury\'s precision with impression and reverie. Natural vocations include poetry, the interpretation of dreams, the practice of music, and any contemplative art where meaning arises from symbol rather than statement. The gift of this debility is paradoxically profound — the mind that cannot think in straight lines may perceive the curved truths that linear thought cannot reach. The peril is confusion, deception both of self and others, and an inability to communicate clearly what is so deeply felt.',
    keywords: ['detriment', 'fall', 'intuition', 'poetic mind'],
  },

  // ============================================================
  // VENUS (Lesser Benefic) — 12 Signs
  // ============================================================

  'Venus-Aries': {
    brief:
      'Venus occupies her detriment in Aries, where the principle of love, harmony, and beauty must operate under the fierce governance of Mars. The native\'s affections are passionate, impulsive, and tinged with a conquering energy that pursues the beloved as a prize to be won rather than a companion to be cultivated. The hot and dry martial temperament overheats Venus\'s warm and moist nature, producing an ardor that burns brightly but often briefly. Natural vocations include the martial arts elevated to aesthetic form, competitive beauty, and the passionate defense of loved ones. The gift of the detriment is a love that is fearless — willing to risk, to declare, to pursue with magnificent boldness. The peril is a selfishness in affection that loves the chase more than the keeping, and a volatility that destroys the very bonds it so ardently creates.',
    keywords: ['detriment', 'passionate pursuit', 'impulsive love', 'ardor'],
  },

  'Venus-Taurus': {
    brief:
      'Venus reigns in her own domicile in Taurus, where the principle of love and beauty achieves its most sensuous and enduring expression. The native possesses a natural gift for pleasure, beauty, and the creation of environments that nourish the senses and the soul. The cold and dry earthen temperament grounds Venus\'s warmth into tangible form — love here is expressed through touch, through gifts, through the patient cultivation of shared comfort. Natural vocations include the arts of adornment, the cultivation of gardens, the preparation of fine foods, and the stewardship of beautiful things. The gift is a love that is faithful, embodied, and generously sustaining. The peril is an attachment to the material expressions of love so intense that the native mistakes the vessel for the wine, and luxury for happiness.',
    keywords: ['domicile', 'sensuality', 'fidelity', 'material beauty'],
  },

  'Venus-Gemini': {
    brief:
      'In Gemini, Venus is governed by Mercury, and the principle of love expresses itself through the intellect — through conversation, wit, and the pleasure of shared curiosity. The native is charmed and charming through language, finding beauty in clever expression and affection in the meeting of minds. The hot and moist temperament of mutable air makes the affections sociable, varied, and somewhat restless. Natural vocations include love poetry, the composition of songs, social correspondence, and any art that weaves beauty from words. The gift is a lightness in love that keeps affection playful, entertaining, and intellectually alive. The peril is a fickleness of heart that is easily distracted by the next interesting conversation, and a tendency to substitute the discussion of feeling for the experience of it.',
    keywords: ['intellectual charm', 'sociability', 'fickleness', 'verbal grace'],
  },

  'Venus-Cancer': {
    brief:
      'Venus in Cancer is governed by the Moon, and the principle of love flows through the channels of nurture, protection, and domestic devotion. The native\'s affections are maternal in quality — tender, sheltering, and bound to the rhythms of home and family. The cold and moist temperament deepens Venus\'s emotional nature, producing a capacity for devotion that is profoundly sentimental and fiercely loyal. Natural vocations include the decoration and ordering of households, the preparation of nourishing meals, and any domestic art that creates beauty within the sanctuary of the home. The gift is a love that creates sanctuary — the native makes those they cherish feel utterly safe. The peril is an emotional possessiveness masked as care, and a sentimentality that clings to the past rather than allowing love to grow into its present form.',
    keywords: ['domesticity', 'nurturing love', 'sentimentality', 'protectiveness'],
  },

  'Venus-Leo': {
    brief:
      'In Leo, Venus is governed by the Sun, and the principle of love becomes a grand, radiant affair — generous, dramatic, and oriented toward the ideal of courtly devotion. The native loves with pageantry and warmth, desiring to be adored and in turn adorning the beloved with lavish attention. The hot and dry solar temperament infuses Venus with fire, producing an affection that is demonstrative, proud, and unabashedly romantic. Natural vocations include the patronage and performance of arts, the hosting of celebrations, and any role that combines beauty with authority. The gift is a love so generous and life-affirming that it ennobles all who receive it. The peril is a vanity in affection that demands constant tribute, and a pride that cannot endure the ordinary phases of love where grand gestures give way to quiet dailiness.',
    keywords: ['grandeur', 'romantic display', 'generosity', 'pride in love'],
  },

  'Venus-Virgo': {
    brief:
      'Venus occupies her fall in Virgo, where the principle of love and beauty must submit to Mercury\'s exacting analysis and earth\'s demand for utility. The native\'s affections are expressed through acts of service, practical devotion, and an attentiveness to the beloved\'s needs that is meticulous but often unromantic. The cold and dry temperament restrains Venus\'s warmth, producing a love that is dutiful and precise but may lack spontaneous tenderness. Natural vocations include the crafts that unite beauty with function — fine needlework, calligraphy, the preparation of herbal remedies, and the ordering of collections. The gift of the fall is a love purified of illusion — the native sees the beloved clearly and loves what is actually there. The peril is a critical eye turned upon the heart, where imperfections in the beloved or in love itself are catalogued rather than forgiven.',
    keywords: ['fall', 'service', 'critical love', 'modest devotion'],
  },

  'Venus-Libra': {
    brief:
      'Venus reigns in her own domicile in Libra, where the principle of love and beauty achieves its most refined, social, and aesthetically conscious expression. The native possesses an innate sense of proportion, grace, and the art of relating — love here is a civilizing force that elevates both lovers through mutual regard and shared beauty. The hot and moist temperament of cardinal air makes the affections engaging, romantic, and deeply oriented toward partnership. Natural vocations include diplomacy, the design of beautiful spaces, the arbitration of taste, and the creation of art that embodies harmony. The gift is a genius for relationship — the native understands that love is an art requiring cultivation, reciprocity, and aesthetic care. The peril is a dependence upon partnership so profound that the native cannot feel whole alone, and a preference for form over substance in matters of the heart.',
    keywords: ['domicile', 'harmony', 'partnership', 'aesthetic love'],
  },

  'Venus-Scorpio': {
    brief:
      'Venus occupies her detriment in Scorpio, where the principle of love is drawn into depths of intensity, possession, and transformation that exceed the Benefic\'s natural preference for ease and pleasure. The native\'s affections are total — love is not a pleasant accompaniment to life but a consuming force that demands surrender, loyalty, and the revelation of all that is hidden. Mars\'s governance infuses Venus with a jealous and passionate ardor. Natural vocations include the creation of art that confronts mortality and desire, and any work where beauty is forged from the encounter with darkness. The gift of the detriment is a love of extraordinary depth and transformative power — the native loves in a way that changes both souls forever. The peril is a possessiveness that destroys what it cannot wholly own, and a tendency to confuse suffering with devotion.',
    keywords: ['detriment', 'intensity', 'possession', 'transformative love'],
  },

  'Venus-Sagittarius': {
    brief:
      'In Sagittarius, Venus is governed by Jupiter, and the principle of love expands toward the philosophical, the foreign, and the ideal. The native\'s affections are generous, adventurous, and drawn to what is different — love thrives on shared belief, intellectual companionship, and the excitement of discovering new worlds together. The hot and dry temperament of mutable fire makes the affections enthusiastic but sometimes restless. Natural vocations include the teaching of arts, the patronage of foreign beauty, and any vocation that unites love with the pursuit of meaning. The gift is a love that ennobles through shared aspiration, always pointing toward something higher than mere comfort. The peril is a restlessness in love that idealizes the distant and devalues the near, forever pursuing the next horizon rather than cultivating the ground beneath one\'s feet.',
    keywords: ['adventurous love', 'idealism', 'generosity', 'restlessness'],
  },

  'Venus-Capricorn': {
    brief:
      'In Capricorn, Venus is governed by Saturn, and the principle of love operates through duty, commitment, and the sober recognition that lasting bonds require structure and sacrifice. The native\'s affections mature slowly — trust is earned, not given, and love is demonstrated through reliability and the keeping of promises rather than through passionate display. The cold and dry temperament restrains Venus\'s warmth, producing an affection that is dignified, reserved, and often understated. Natural vocations include the arrangement of marriages and alliances that serve dynastic or practical ends, and arts that value craft and tradition over novelty. The gift is a love of exceptional loyalty and endurance — the native who commits does so with the permanence of stone. The peril is a coldness in affection that withholds tenderness out of caution, and a tendency to evaluate love by its utility rather than its beauty.',
    keywords: ['commitment', 'reserve', 'dutiful love', 'endurance'],
  },

  'Venus-Aquarius': {
    brief:
      'Venus in Aquarius is governed by Saturn in a fixed air sign, and the principle of love is directed toward the ideal, the collective, and the unconventional. The native\'s affections operate through the intellect and are oriented toward friendship, shared principles, and bonds that transcend the merely personal. The hot and moist temperament of Aquarius lends sociability, but Saturn\'s governance maintains a characteristic emotional coolness. Natural vocations include the cultivation of artistic communities, the patronage of innovative arts, and the creation of beauty that serves a social or philosophical purpose. The gift is a love liberated from possessiveness — the native values freedom within relationship and extends it genuinely. The peril is an emotional detachment mistaken for enlightenment, where the refusal to feel deeply is disguised as the transcendence of feeling.',
    keywords: ['unconventional love', 'friendship', 'detachment', 'idealism'],
  },

  'Venus-Pisces': {
    brief:
      'Venus reaches her highest exaltation in Pisces, where love transcends the personal and approaches the devotional. The native experiences affection as something sacred — boundless, self-sacrificing, and oriented toward the ideal rather than the actual. Music, poetry, and the contemplative arts speak directly to the heart. The cold and moist temperament dissolves the boundaries between lover and beloved, producing a capacity for union that approaches the mystical. Natural vocations include sacred music, the creation of devotional art, and any practice that sanctifies beauty as a path to the divine. The exaltation\'s gift is a capacity for love that redeems; its peril is the inability to see the beloved as they truly are, mistaking longing for union.',
    keywords: ['exaltation', 'devotion', 'transcendence', 'idealism'],
  },

  // ============================================================
  // MARS (Lesser Malefic) — 12 Signs
  // ============================================================

  'Mars-Aries': {
    brief:
      'Mars reigns in its own domicile in Aries, where the martial principle achieves its most direct, fierce, and uninhibited expression. The native possesses a raw, initiatory courage — the instinct to act first and with decisive force when confrontation arises. The hot and dry temperament is doubled, producing a choleric constitution of exceptional physical energy, competitive drive, and a marked impatience with obstacles. Natural vocations include soldiering, smithcraft, surgery, and any enterprise requiring boldness of action and swiftness of execution. The gift is a purity of martial force — courage without hesitation, action without the paralysis of overthought. The peril is violence without purpose, anger without measure, and a recklessness that destroys what patience might have preserved.',
    keywords: ['domicile', 'courage', 'aggression', 'initiative'],
  },

  'Mars-Taurus': {
    brief:
      'Mars in Taurus occupies its detriment, where the principle of swift decisive action must contend with the fixed earth\'s demand for patience, stability, and deliberate pace. The native\'s aggression is slow to kindle but, once aroused, possesses a stubborn, grinding force that does not relent — the siege rather than the sortie. The cold and dry Taurean temperament dampens Mars\'s heat, producing a constitution of considerable physical endurance but limited explosive power. Natural vocations include the clearing of land, the working of resistant materials, and any labor requiring sustained physical effort over extended duration. The gift of the detriment is a tenacity that outlasts all opposition through sheer refusal to yield. The peril is a wrathful stubbornness that holds grudges unto destruction, and an inability to adapt when circumstances demand a change of approach.',
    keywords: ['detriment', 'tenacity', 'slow anger', 'stubbornness'],
  },

  'Mars-Gemini': {
    brief:
      'In Gemini, Mars is governed by Mercury, and the martial principle is channeled through intellect, language, and dexterity rather than brute physical force. The native\'s combativeness expresses itself through sharp words, quick arguments, and a restless mental energy that requires constant engagement. The hot and moist temperament of mutable air disperses Mars\'s focused heat, producing a constitution more nervous than muscular. Natural vocations include debate, pamphleteering, the crafting of weapons with fine detail, and any enterprise combining manual skill with intellectual strategy. The gift is a martial intelligence — the ability to fight with ideas, to outmaneuver through wit, and to wield language as a blade. The peril is a scattered aggression that starts many battles and finishes few, and a tongue so sharp it cuts bonds that should be preserved.',
    keywords: ['verbal combat', 'dexterity', 'scattered energy', 'mental agility'],
  },

  'Mars-Cancer': {
    brief:
      'Mars occupies its fall in Cancer, where the martial principle must express itself through the most domestic, protective, and emotionally sensitive of signs. The native\'s aggression is deeply entangled with feeling — anger arises from wounds to security, family, and emotional bonds rather than from direct challenge. The cold and moist temperament of Cancer suppresses Mars\'s natural heat, producing a constitution where martial energy turns inward and manifests as defensive anxiety or passive resistance. Natural vocations include the fortification of homes and harbors, the protection of the vulnerable, and defensive rather than offensive warfare. The gift of the fall is a fierce protectiveness — the native will fight with desperate courage for those they love. The peril is an indirect aggression — manipulation, resentment, and emotional volatility that poisons the very hearth it seeks to defend.',
    keywords: ['fall', 'defensiveness', 'emotional anger', 'protectiveness'],
  },

  'Mars-Leo': {
    brief:
      'In Leo, Mars is governed by the Sun, and the martial principle is elevated by solar confidence, magnanimity, and a desire for glory. The native fights not merely to win but to be seen winning — there is a theatrical quality to the courage displayed, a need for the battle to mean something grand. The hot and dry temperament of fixed fire intensifies Mars\'s own nature, producing a constitution of tremendous vitality and physical presence. Natural vocations include the command of armies, competitive athletics, the performance of martial arts before audiences, and any enterprise requiring both courage and charisma. The gift is a noble martial spirit — brave, honorable, and willing to champion the weak. The peril is the vanity of the warrior who fights for reputation rather than necessity, and whose pride, once wounded, demands disproportionate revenge.',
    keywords: ['glory', 'noble courage', 'commanding force', 'pride'],
  },

  'Mars-Virgo': {
    brief:
      'Mars in Virgo is governed by Mercury in an earth sign, and the martial principle is refined into precision, technical skill, and the capacity for ruthlessly efficient action. The native\'s aggression is not passionate but calculated — force is applied exactly where needed and withdrawn when the objective is achieved. The cold and dry temperament channels Mars\'s heat into focused, disciplined output. Natural vocations include surgery, the manufacture of fine instruments, military logistics, and any craft requiring sharp tools wielded with exacting precision. The gift is a martial efficiency that accomplishes more with less, wasting neither energy nor emotion on excess. The peril is a cold perfectionism in conflict — a combatant so precise and critical that victory is never satisfying, and the drive to correct imperfections becomes a form of cruelty toward self and others.',
    keywords: ['precision', 'technique', 'efficiency', 'critical force'],
  },

  'Mars-Libra': {
    brief:
      'Mars occupies its detriment in Libra, where the principle of direct action and individual assertion must navigate Venus\'s domain of compromise, partnership, and social harmony. The native\'s aggression is perpetually moderated by awareness of the other — the desire to act decisively conflicts with the desire to be fair, liked, and in accord. The hot and moist temperament of cardinal air disperses Mars\'s concentrated force into diplomatic maneuvering. Natural vocations include legal advocacy, the negotiation of treaties, and any form of contest governed by rules of civility. The gift of the detriment is a strategic grace — the native fights through alliance, persuasion, and the leveraging of social position rather than brute force. The peril is an indecisiveness in moments requiring action, and a passive aggression born of anger that cannot express itself directly without violating the native\'s need for harmony.',
    keywords: ['detriment', 'passive aggression', 'strategic charm', 'indecision'],
  },

  'Mars-Scorpio': {
    brief:
      'Mars occupies its second domicile in Scorpio, where the martial principle achieves a concentrated, strategic, and psychologically penetrating expression. The native possesses a will of extraordinary intensity — force here is not displayed but deployed with calculated precision, aimed at targets chosen with patient deliberation. The cold and moist temperament of fixed water contains Mars\'s heat beneath the surface, producing a constitution of deceptive calm concealing enormous reserves of power. Natural vocations include espionage, surgery, the investigation of hidden matters, and any enterprise requiring ruthless focus and the willingness to confront what others fear. The gift is a martial mastery of the invisible — the native prevails not by overpowering opposition but by understanding and exploiting its hidden weaknesses. The peril is a vindictiveness that never forgets an injury, and a will to power that, unchecked, becomes manipulative and destructive.',
    keywords: ['domicile', 'strategic intensity', 'psychological force', 'control'],
  },

  'Mars-Sagittarius': {
    brief:
      'In Sagittarius, Mars is governed by Jupiter, and the martial principle is infused with the Greater Benefic\'s expansiveness, faith, and love of righteous cause. The native fights for beliefs, for principles, for the grand crusade — the energy of Mars is elevated from mere aggression into zealous action on behalf of a higher purpose. The hot and dry temperament of mutable fire makes the martial expression enthusiastic, mobile, and wide-ranging. Natural vocations include the leadership of campaigns motivated by conviction, long-distance military expeditions, the training of horses for war, and the defense of religious or philosophical principles. The gift is a martial spirit ennobled by meaning — courage in service of something greater than personal advantage. The peril is fanaticism — the warrior so convinced of the righteousness of the cause that all restraint is abandoned, and holy war becomes unholy destruction.',
    keywords: ['crusading spirit', 'zealous action', 'expansive force', 'fanaticism'],
  },

  'Mars-Capricorn': {
    brief:
      'Mars achieves its highest essential dignity in Capricorn, where the martial drive is channeled through Saturn\'s discipline into sustained, strategic force. The native possesses ambition that operates with the patience of a siege rather than the fury of a charge. Authority is earned through demonstrated competence over years. The cold and dry Saturnian temperament tempers Mars\'s heat into a controlled, enduring flame. Natural vocations include military command, the engineering of fortifications, the management of enterprises requiring long-term planning, and any work where power must be exercised with calculating restraint. The exaltation grants mastery in enterprises requiring endurance, command, and unflinching calculation. The peril lies in the cold application of force without mercy — effectiveness divorced from warmth.',
    keywords: ['exaltation', 'discipline', 'strategy', 'endurance'],
  },

  'Mars-Aquarius': {
    brief:
      'In Aquarius, Mars is governed by Saturn in a fixed air sign, and the martial principle is directed toward collective causes, the reform of systems, and the overthrow of what is judged unjust or outmoded. The native\'s combativeness is principled rather than personal — anger arises from the violation of ideals rather than the provocation of ego. The hot and moist temperament of Aquarius socializes Mars\'s force, directing it through groups, alliances, and movements. Natural vocations include the organization of collective action, the reform of military or civil structures, and the invention of new methods of combat or contest. The gift is a martial detachment that fights effectively for others without being consumed by personal rage. The peril is a coldness in conflict that dehumanizes the opponent in the name of principle, and a willingness to sacrifice individuals for the perceived good of the collective.',
    keywords: ['collective action', 'principled force', 'reform', 'detachment'],
  },

  'Mars-Pisces': {
    brief:
      'Mars in Pisces is governed by Jupiter in a mutable water sign, and the martial principle is diffused through the waters of compassion, imagination, and spiritual yearning. The native\'s aggression is not direct but operates through subtle channels — influence, inspiration, sacrifice, and the willingness to fight for those who cannot fight for themselves. The cold and moist temperament dissolves Mars\'s focused heat, producing a constitution where force manifests as emotional passion rather than physical confrontation. Natural vocations include the defense of the helpless, the waging of spiritual or artistic struggles, and any combat conducted through indirect or hidden means. The gift is a martial compassion — the warrior who fights not to conquer but to redeem, and whose strength is most evident in the capacity for sacrifice. The peril is a diffusion of will so complete that the native cannot marshal force when it is needed, and righteous anger dissipates into confusion, escapism, or self-undoing.',
    keywords: ['compassionate force', 'indirect action', 'sacrifice', 'diffusion'],
  },


  // =====================
  // JUPITER (Greater Benefic)
  // =====================

  'Jupiter-Aries': {
    brief:
      'Jupiter in Aries places the Greater Benefic in a sign of its triplicity rulership by night, granting a bold and expansive temperament inclined toward initiative. The native grows through acts of courage, pioneering ventures, and the willingness to stake everything on conviction. Faith here is muscular and instinctive — the native believes by doing, not by contemplating. The peril lies in overreach, reckless enthusiasm, and the assumption that righteous intention excuses collateral harm. Vocations that reward decisive leadership, martial valor, or entrepreneurial daring suit this placement. The path to wisdom runs through tempering audacity with patience.',
    keywords: ['audacity', 'initiative', 'expansion', 'zeal'],
  },

  'Jupiter-Taurus': {
    brief:
      'Jupiter in Taurus finds the Greater Benefic in a fixed, earthy sign where abundance manifests through material stewardship and patient accumulation. The native possesses a generous yet acquisitive nature, drawn to the pleasures of the senses and the cultivation of lasting wealth. Growth comes through learning to hold resources with an open hand rather than a clenched fist. There is a gift for attracting prosperity, yet the shadow is indolence and excessive attachment to comfort. The native thrives in vocations tied to land, agriculture, finance, or the arts of pleasure. Wisdom arrives when the native distinguishes sufficiency from gluttony.',
    keywords: ['abundance', 'stewardship', 'sensuality', 'accumulation'],
  },

  'Jupiter-Gemini': {
    brief:
      'Jupiter in Gemini places the Greater Benefic in the sign of its detriment, where expansive vision is scattered across too many channels and the mind mistakes breadth for depth. The native is intellectually voracious, gifted in languages, trade, and the dissemination of knowledge, yet prone to superficiality and restless inconsistency. Faith is located in information itself — the native believes that knowing more is the remedy for every ill. The challenge is to bind the proliferating mind to a single purpose long enough to produce mastery. Vocations in teaching, writing, commerce, and diplomacy reward this placement when discipline is present. The path to growth demands that the native learn to say less and mean more.',
    keywords: ['curiosity', 'dispersion', 'eloquence', 'restlessness'],
  },

  'Jupiter-Cancer': {
    brief:
      'Jupiter in Cancer is exalted, the most dignified placement for the Greater Benefic, where generosity flows naturally through nurture, hospitality, and the bonds of kinship. The native possesses an instinctive magnanimity and a deep capacity to provide emotional shelter for others. Faith is rooted in belonging — in family, homeland, and ancestral tradition. Growth arrives through the willingness to extend the boundaries of clan until all beings are recognized as kin. The peril is clannish insularity, sentimental excess, and the use of generosity as a mechanism of control. Vocations in caretaking, cooking, real estate, and the stewardship of heritage reward this exalted Jupiter.',
    keywords: ['nurture', 'exaltation', 'hospitality', 'belonging'],
  },

  'Jupiter-Leo': {
    brief:
      'Jupiter in Leo places the Greater Benefic in a hot, dry, royal sign where expansiveness manifests as creative confidence and a magnanimous spirit. The native possesses a natural largesse, an appetite for grandeur, and a sincere desire to inspire others through personal example. Faith is located in the self — in the conviction that one is destined for something great. The danger lies in pride that mistakes applause for wisdom and spectacle for substance. Vocations in performance, leadership, education, and patronage of the arts thrive under this placement. Growth comes when the native learns to shine without needing to be the center of every room.',
    keywords: ['magnanimity', 'grandeur', 'confidence', 'pride'],
  },

  'Jupiter-Virgo': {
    brief:
      'Jupiter in Virgo places the Greater Benefic in the sign of its detriment, where the impulse to expand conflicts with the Virgoan demand for precision, modesty, and discrimination. The native may struggle with a tension between grand vision and paralyzing perfectionism, finding it difficult to trust anything that cannot be verified and catalogued. Faith here must be earned through evidence and practical service. The gift is an unusual capacity to bring order to complex systems and to serve others with competence rather than mere sentiment. Vocations in medicine, craft, analysis, and practical service honor this placement. Wisdom comes when the native accepts that not everything meaningful can be measured.',
    keywords: ['precision', 'service', 'perfectionism', 'analysis'],
  },

  'Jupiter-Libra': {
    brief:
      'Jupiter in Libra places the Greater Benefic in a cardinal air sign where growth arrives through partnership, justice, and the cultivation of social harmony. The native possesses a refined aesthetic sensibility and a genuine belief in fairness as the organizing principle of the good life. There is a gift for diplomacy, mediation, and the art of bringing disparate parties into accord. The peril lies in an indecisive agreeableness that sacrifices truth for peace and avoids necessary conflict. Vocations in law, the arts, diplomacy, and counseling reward this placement when paired with backbone. The path to wisdom requires the native to distinguish genuine justice from mere people-pleasing.',
    keywords: ['justice', 'diplomacy', 'harmony', 'refinement'],
  },

  'Jupiter-Scorpio': {
    brief:
      'Jupiter in Scorpio places the Greater Benefic in a fixed water sign where expansion occurs through depth rather than breadth, and growth demands descent into the hidden places. The native possesses an instinct for uncovering what others conceal, a powerful emotional intensity, and a capacity for profound transformation. Faith here is forged in crisis — the native believes most deeply in what has survived destruction. There is a gift for regeneration, healing, and the management of shared resources or legacies. The peril is obsessive control, vindictiveness, and the intoxication of wielding hidden power. Wisdom arrives when the native uses penetrating insight for healing rather than domination.',
    keywords: ['transformation', 'depth', 'intensity', 'regeneration'],
  },

  'Jupiter-Sagittarius': {
    brief:
      'Jupiter in Sagittarius occupies its own domicile, the sign of the Archer, where the Greater Benefic operates with full essential dignity and unimpeded expression. The native is animated by an irrepressible love of truth, adventure, and philosophical inquiry, possessing a buoyant faith that meaning can be found in all experience. There is a gift for teaching, preaching, exploration, and the synthesis of diverse wisdoms into a coherent worldview. The peril of this domicile placement is self-righteous excess — the assumption that personal belief constitutes universal law. Vocations in religion, philosophy, higher education, publishing, and foreign travel are natural expressions. Growth comes through the humility to recognize that even the most expansive vision is still partial.',
    keywords: ['domicile', 'philosophy', 'faith', 'exploration'],
  },

  'Jupiter-Capricorn': {
    brief:
      'Jupiter in Capricorn places the Greater Benefic in the sign of its fall, where expansive optimism is constrained by Saturnian sobriety, pragmatism, and the demands of worldly ambition. The native may experience a muted or delayed relationship with faith, finding it difficult to trust in providence when material evidence suggests scarcity. Yet the gift of this fallen Jupiter is a rare capacity to build lasting structures from limited resources and to earn rather than inherit good fortune. Growth arrives slowly, through discipline and the patient accumulation of competence and authority. Vocations in administration, governance, architecture, and institutional leadership suit this placement. Wisdom is won when the native discovers that restraint can itself be a form of abundance.',
    keywords: ['fall', 'restraint', 'ambition', 'earned-fortune'],
  },

  'Jupiter-Aquarius': {
    brief:
      'Jupiter in Aquarius places the Greater Benefic in a fixed air sign ruled by Saturn, where expansion manifests through intellectual fellowship, humanitarian ideals, and the pursuit of collective progress. The native is drawn toward utopian vision, reform, and the belief that knowledge shared freely elevates all. There is a gift for thinking beyond convention and for finding community among those who share uncommon ideas. The peril lies in abstraction — loving humanity in theory while struggling with actual humans. Vocations in science, reform movements, communal organization, and visionary thought honor this placement. Wisdom comes when the native tempers idealism with compassion for imperfection.',
    keywords: ['idealism', 'fellowship', 'reform', 'innovation'],
  },

  'Jupiter-Pisces': {
    brief:
      'Jupiter in Pisces occupies its traditional domicile and place of nocturnal rulership, where the Greater Benefic expresses its most compassionate and spiritually expansive nature. The native possesses an oceanic empathy, an instinctive connection to the sacred, and a capacity for selfless devotion that can border on the saintly. Faith here is mystical rather than doctrinal — it arises from direct experience of the numinous. The peril is boundarylessness: the native may lose the self in the suffering of others or dissolve discipline in escapist fantasy. Vocations in the healing arts, music, contemplative life, charitable work, and the care of the marginalized are natural expressions. Growth requires learning that even compassion needs a vessel to hold it.',
    keywords: ['domicile', 'compassion', 'mysticism', 'devotion'],
  },

  // =====================
  // SATURN (Greater Malefic)
  // =====================

  'Saturn-Aries': {
    brief:
      'Saturn in Aries places the Greater Malefic in the sign of its fall, where the cold, slow, deliberative nature of Saturn clashes painfully with the hot, impulsive drive of the Ram. The native often experiences frustration, inhibited anger, and a deep conflict between the desire to act decisively and an inner voice that counsels caution or inadequacy. Initiative is tested repeatedly; the native must learn to act without either recklessness or paralysis. The mature expression forges a tempered will — authority earned through trials of courage rather than mere patience. Vocations demanding disciplined aggression, such as surgery, martial training, or crisis management, suit this fallen Saturn. The life lesson is that true strength is not the absence of fear but the mastery of it.',
    keywords: ['fall', 'inhibition', 'tempered-will', 'frustration'],
  },

  'Saturn-Taurus': {
    brief:
      'Saturn in Taurus places the Greater Malefic in a fixed earth sign where restriction manifests through material concerns — scarcity, slow accumulation, and the fear of insufficiency. The native may develop an early and intimate relationship with want, learning the weight of every resource and the cost of every comfort. There is an exceptional capacity for endurance, thrift, and the patient building of material security over decades. The peril is a rigidity of values and a possessiveness born of deprivation that persists long after abundance has arrived. Vocations in agriculture, banking, construction, and resource management reward this placement. Wisdom arrives when the native distinguishes prudence from miserliness and security from hoarding.',
    keywords: ['endurance', 'scarcity', 'thrift', 'material-discipline'],
  },

  'Saturn-Gemini': {
    brief:
      'Saturn in Gemini places the Greater Malefic in a mutable air sign where discipline is imposed upon the mind, communication, and the gathering of knowledge. The native may experience early difficulties with speech, learning, or sibling relationships, but these hardships forge a precise and methodical intellect. There is a gift for careful reasoning, scholarly rigor, and the patient mastery of complex information. The peril is mental rigidity, cynicism, or a communication style so cautious it becomes withholding. Vocations in scholarship, technical writing, accounting, and systematic research honor this placement. The life lesson lies in learning to speak the difficult truth clearly and without cruelty.',
    keywords: ['mental-discipline', 'rigor', 'caution', 'precision'],
  },

  'Saturn-Cancer': {
    brief:
      'Saturn in Cancer places the Greater Malefic in the sign of its detriment, where the cold and austere nature of Saturn directly opposes the warm, nurturing impulse of the Crab. The native often carries a fundamental wound around belonging, family, and emotional security — a sense that home was never quite safe or sufficient. Emotional expression may be inhibited, and the native may struggle to receive care even when it is offered. Yet the mature expression builds extraordinary emotional resilience and the capacity to provide for others precisely because the native knows what deprivation feels like. Vocations in social work, elder care, institutional caretaking, and the preservation of history suit this detriment placement. Wisdom comes when the native learns to let others in without requiring them to prove their loyalty first.',
    keywords: ['detriment', 'emotional-restriction', 'resilience', 'ancestral-burden'],
  },

  'Saturn-Leo': {
    brief:
      'Saturn in Leo places the Greater Malefic in the sign of its detriment, where the demand for self-expression, recognition, and creative joy is met with restriction, self-doubt, and the heavy weight of responsibility. The native may struggle with a painful inhibition of the creative impulse or a deep fear of being seen as frivolous, unworthy, or insufficiently serious. Authority and leadership are desired but approached with ambivalence. The mature expression produces a quiet, earned dignity — authority that commands respect through competence rather than display. Vocations in governance, structured creative disciplines, and institutional leadership reward this placement when vanity is relinquished. The life lesson is that true authority does not require applause to sustain itself.',
    keywords: ['detriment', 'inhibited-expression', 'earned-dignity', 'gravitas'],
  },

  'Saturn-Virgo': {
    brief:
      'Saturn in Virgo places the Greater Malefic in a mutable earth sign where discipline and analysis reinforce each other, producing a temperament of extraordinary meticulousness and practical competence. The native applies rigorous standards to every task and may develop mastery in crafts, health practices, or systems of classification. There is a natural affinity between Saturnian structure and Virgoan precision, making this a productive if demanding placement. The peril is crippling self-criticism, anxiety about imperfection, and a tendency to reduce all of life to a problem requiring correction. Vocations in medicine, engineering, quality assurance, and skilled trades thrive here. Wisdom arrives when the native accepts that excellence need not mean flawlessness.',
    keywords: ['meticulousness', 'craft', 'self-criticism', 'competence'],
  },

  'Saturn-Libra': {
    brief:
      'Saturn in Libra is exalted, the most dignified placement for the Greater Malefic, where the principle of structure finds its highest expression in law, justice, and the architecture of fair agreements. The native possesses an innate understanding that lasting relationships and societies require codified standards, mutual obligation, and the subordination of personal desire to collective equity. There is a gift for mediation, jurisprudence, and the construction of durable alliances. The peril of this exaltation is a coldness that reduces human bonds to contracts and mistakes procedural fairness for genuine compassion. Vocations in law, diplomacy, arbitration, and institutional governance are natural expressions of this placement. Growth comes when the native remembers that justice without mercy is merely cruelty in formal attire.',
    keywords: ['exaltation', 'justice', 'structure', 'obligation'],
  },

  'Saturn-Scorpio': {
    brief:
      'Saturn in Scorpio places the Greater Malefic in a fixed water sign where discipline is forged through confrontation with death, loss, taboo, and the hidden mechanisms of power. The native develops an unflinching capacity to endure psychological extremity and to operate effectively in environments of secrecy and crisis. There is a formidable willpower here, but it is often purchased at the cost of trust — the native may become guarded, suspicious, and slow to reveal vulnerability. The mature expression channels this intensity into transformative work: research into hidden causes, management of crises, or stewardship of legacies. Vocations in psychology, forensics, surgery, and estate management suit this placement. Wisdom comes when the native learns that control is not the same as safety.',
    keywords: ['endurance', 'secrecy', 'willpower', 'psychological-depth'],
  },

  'Saturn-Sagittarius': {
    brief:
      'Saturn in Sagittarius places the Greater Malefic in a mutable fire sign where the expansive quest for meaning is subjected to rigorous examination and the demand for intellectual honesty. The native may struggle with crises of faith, encountering the limits of philosophy and the failure of inherited belief systems to answer life\'s hardest questions. There is a gift for building coherent ethical frameworks and for teaching with authority rather than mere enthusiasm. The peril is dogmatism — Saturn can calcify Sagittarian faith into rigid orthodoxy. Vocations in theology, academic philosophy, legal scholarship, and institutional religion honor this placement. The life lesson is to hold convictions with strength and humility simultaneously.',
    keywords: ['orthodoxy', 'discipline-of-faith', 'intellectual-honesty', 'doctrine'],
  },

  'Saturn-Capricorn': {
    brief:
      'Saturn in Capricorn occupies its own domicile, the sign of the Sea-Goat, where the Greater Malefic operates with full essential dignity and concentrated purpose. The native possesses an extraordinary capacity for sustained effort, strategic patience, and the construction of enduring institutions or careers. Ambition here is not flashy but relentless — a slow, methodical ascent toward mastery and authority. There is a natural gravitas and a willingness to bear responsibility that others avoid. The peril of this powerful domicile is ruthless pragmatism, emotional isolation, and the reduction of all human value to utility. Vocations in governance, architecture, administration, and long-term enterprise are deeply natural. Wisdom arrives when the native discovers that the summit is meaningless without someone to share it with.',
    keywords: ['domicile', 'authority', 'ambition', 'mastery'],
  },

  'Saturn-Aquarius': {
    brief:
      'Saturn in Aquarius occupies its traditional domicile and diurnal rulership, where the Greater Malefic expresses its most intellectual and socially structural nature. The native is drawn to the organization of collective life — systems, constitutions, frameworks of thought that govern communities. There is a capacity for detached analysis and a belief that rational principles, consistently applied, can reform the world. The gift is systemic thinking; the peril is a cold idealism that sacrifices individuals for abstractions and human warmth for theoretical consistency. Vocations in legislation, systems design, scientific research, and organizational reform suit this domicile placement. Growth comes when the native remembers that the people within the system matter more than the system itself.',
    keywords: ['domicile', 'systems', 'reform', 'detachment'],
  },

  'Saturn-Pisces': {
    brief:
      'Saturn in the sign of the Fishes demands that the native find discipline within surrender and structure within formlessness. Spiritual or artistic practice must be built upon rigorous foundations rather than vague inspiration. The native may wrestle with nebulous anxieties and a sense of carrying burdens that are not entirely their own. There is a gift for giving form to the ineffable — through sacred music, contemplative practice, institutional charity, or the administration of healing spaces. The mature expression is spiritual resilience — the capacity to hold both form and formlessness without being destroyed by either. Chronic conditions involving the feet and the lymphatic system require lifelong attention.',
    keywords: ['discipline', 'spiritual', 'formlessness', 'endurance'],
  },

  // =====================
  // URANUS (no traditional dignities)
  // =====================

  'Uranus-Aries': {
    brief:
      'Those born with Uranus in the sign of the Ram carry a generational imprint of radical individualism and the violent disruption of stagnant hierarchies. This cohort arrives bearing the archetype of the revolutionary pioneer — compelled to shatter old forms through sheer force of will before any replacement has been conceived. The collective purpose is the renewal of courage itself, the insistence that freedom must be seized rather than petitioned for. The shadow is reckless destruction for its own sake, mistaking upheaval for progress and aggression for liberation. The challenge for this generation is to channel the fire of revolt into structures that outlast the initial conflagration. They must learn that breaking chains is only the first act; building something worthy is the harder labor.',
    keywords: ['revolution', 'individualism', 'disruption', 'pioneering'],
  },

  'Uranus-Taurus': {
    brief:
      'Those born with Uranus in the sign of the Bull carry a generational imprint of radical transformation in the realm of material value, resources, and the meaning of security. This cohort is tasked with overturning entrenched assumptions about wealth, property, and the relationship between the body and the earth. The collective purpose is to reimagine what sustains life — to disrupt calcified economies and propose new foundations for shared abundance. The shadow is destabilizing upheaval that destroys livelihoods without offering alternatives, or a stubborn resistance to change that delays necessary revolution until crisis forces the hand. The challenge is to honor the need for stability while refusing to let comfort become a prison. This generation must prove that the ground beneath can shift without everything built upon it collapsing.',
    keywords: ['material-upheaval', 'revaluation', 'resource-revolution', 'disrupted-security'],
  },

  'Uranus-Gemini': {
    brief:
      'Those born with Uranus in the sign of the Twins carry a generational imprint of radical transformation in thought, communication, and the architecture of knowledge. This cohort arrives with minds wired for discontinuity — brilliant at making unexpected connections, impatient with linear reasoning, and driven to reinvent how information is shared and understood. The collective purpose is the liberation of the intellect from inherited orthodoxies and the democratization of knowledge itself. The shadow is cognitive fragmentation, an inability to sustain depth, and the weaponization of information through deception or overwhelming noise. The challenge for this generation is to ensure that the revolution in communication serves comprehension rather than confusion. They must learn that speed of thought is not the same as clarity of thought.',
    keywords: ['intellectual-revolution', 'communication', 'fragmentation', 'innovation'],
  },

  'Uranus-Cancer': {
    brief:
      'Those born with Uranus in the sign of the Crab carry a generational imprint of radical disruption to the structures of family, homeland, and belonging. This cohort arrives during an era when the definition of home is being dismantled and rebuilt — when inherited notions of tribe, nation, and domestic arrangement are shaken at their foundations. The collective purpose is the liberation of the heart from claustrophobic definitions of kinship, expanding the boundaries of who and what constitutes family. The shadow is rootlessness, emotional instability, and the destruction of sheltering structures without providing new ones. The challenge is to honor the human need for belonging while refusing to let it calcify into exclusion. This generation must prove that the bonds of care can survive reimagination.',
    keywords: ['uprooting', 'redefined-belonging', 'domestic-upheaval', 'emotional-liberation'],
  },

  'Uranus-Leo': {
    brief:
      'Those born with Uranus in the sign of the Lion carry a generational imprint of radical transformation in creative self-expression, authority, and the relationship between the individual and the collective. This cohort arrives with a fierce insistence on personal authenticity and a refusal to subordinate the creative will to convention. The collective purpose is the liberation of the vital force — the insistence that every soul has the right to shine without permission from established hierarchies. The shadow is narcissistic individualism, the confusion of self-display with genuine creativity, and the elevation of personality over substance. The challenge for this generation is to wield personal magnetism in service of something larger than the self. They must learn that the brightest light illuminates others rather than blinding them.',
    keywords: ['creative-revolt', 'authenticity', 'individualism', 'self-expression'],
  },

  'Uranus-Virgo': {
    brief:
      'Those born with Uranus in the sign of the Maiden carry a generational imprint of radical transformation in systems of service, health, craft, and daily labor. This cohort arrives with an impulse to revolutionize the practical infrastructure of life — to reimagine work, to challenge the rituals of the body, and to apply analytical brilliance to problems previously accepted as inevitable. The collective purpose is the refinement of revolution itself, insisting that liberation must be practical, detailed, and applicable to ordinary life. The shadow is a critical restlessness that dismantles functional systems without gratitude, and an anxious perfectionism that cannot rest in sufficiency. The challenge is to serve the ideal of improvement without becoming enslaved to it. This generation must prove that revolution can be meticulous.',
    keywords: ['systemic-reform', 'analytical-revolution', 'craft', 'practical-disruption'],
  },

  'Uranus-Libra': {
    brief:
      'Those born with Uranus in the sign of the Scales carry a generational imprint of radical transformation in relationships, aesthetics, and the principles of justice. This cohort arrives with a compulsion to reinvent the terms of partnership, to challenge inherited assumptions about beauty, and to dismantle inequitable social contracts. The collective purpose is the liberation of the relational sphere — the insistence that love, alliance, and fairness must be renegotiated in every generation. The shadow is an instability in bonds that mistakes disruption for freedom and commitment-avoidance for independence. The challenge for this generation is to build new forms of partnership that honor both autonomy and intimacy. They must learn that true equality requires sustained effort, not merely the abolition of old hierarchies.',
    keywords: ['relational-revolution', 'redefined-justice', 'partnership-upheaval', 'aesthetic-disruption'],
  },

  'Uranus-Scorpio': {
    brief:
      'Those born with Uranus in the sign of the Scorpion carry a generational imprint of radical transformation in the realms of power, sexuality, death, and the hidden undercurrents that govern collective life. This cohort arrives with an instinct for exposing what has been buried — secrets, corruptions, and taboos that the previous order preferred to leave undisturbed. The collective purpose is the liberation of the soul from unconscious bondage, the insistence that what festers in darkness must be brought to light regardless of the consequences. The shadow is a destructive fascination with extremity, the confusion of intensity with depth, and the wielding of revelatory power as a weapon. The challenge is to transform without annihilating. This generation must prove that the abyss can be faced without falling into it.',
    keywords: ['exposure', 'power-transformation', 'taboo-breaking', 'depth'],
  },

  'Uranus-Sagittarius': {
    brief:
      'Those born with Uranus in the sign of the Archer carry a generational imprint of radical transformation in belief, philosophy, and the quest for meaning. This cohort arrives with a restless compulsion to overthrow inherited doctrines and to forge new syntheses from the fragments of shattered orthodoxies. The collective purpose is the liberation of faith from institutional captivity — the insistence that truth must be pursued through direct experience rather than received authority. The shadow is ideological chaos, spiritual tourism that never commits, and the arrogant assumption that iconoclasm is itself a philosophy. The challenge for this generation is to build new temples after burning the old ones. They must learn that the destruction of a map does not constitute knowledge of the territory.',
    keywords: ['ideological-revolution', 'philosophical-upheaval', 'liberated-belief', 'iconoclasm'],
  },

  'Uranus-Capricorn': {
    brief:
      'Those born with Uranus in the sign of the Sea-Goat carry a generational imprint of radical transformation in the structures of governance, authority, and institutional power. This cohort arrives with a paradoxical impulse: to revolutionize the establishment from within, to climb the old hierarchies in order to dismantle or rebuild them. The collective purpose is the restructuring of power itself — the insistence that institutions must serve the living rather than perpetuate themselves. The shadow is a cold ambition that co-opts revolutionary language to serve personal advancement, or a cynicism that destroys public trust without offering viable alternatives. The challenge is to reform without becoming the new tyrant. This generation must prove that authority can be wielded in service of liberation.',
    keywords: ['institutional-upheaval', 'structural-reform', 'authority-disruption', 'pragmatic-revolution'],
  },

  'Uranus-Aquarius': {
    brief:
      'Those born with Uranus in the sign of the Water-Bearer carry a generational imprint of radical transformation at its purest and most abstract, for Uranus finds a natural resonance in this sign of collective vision and intellectual independence. This cohort arrives with an uncompromising faith in the future and a willingness to discard the past entirely in pursuit of a more rational, equitable, and interconnected world. The collective purpose is the acceleration of human evolution through the liberation of thought from all inherited constraints. The shadow is a utopian detachment from human reality, a coldness that sacrifices the present for a theoretical tomorrow, and a groupthink that mistakes conformity to progressive ideals for genuine freedom. The challenge is to remain human while reimagining humanity. This generation must prove that the future they envision has room for the messy, irrational heart.',
    keywords: ['visionary', 'collective-liberation', 'utopian-impulse', 'intellectual-independence'],
  },

  'Uranus-Pisces': {
    brief:
      'Those born with Uranus in the sign of the Fishes carry a generational imprint of radical transformation in the spiritual, imaginative, and unconscious dimensions of collective life. This cohort arrives at a moment when the boundary between the visible and invisible worlds becomes dangerously permeable, and old spiritual certainties dissolve into a chaos of competing visions. The collective purpose is the liberation of the imagination — the insistence that the unseen world must be renegotiated rather than merely inherited or denied. The shadow is collective delusion, spiritual bypassing, and a chaotic dissolution that cannot distinguish illumination from madness. The challenge for this generation is to channel the flood of the numinous into forms that heal rather than overwhelm. They must learn that awakening without grounding is not liberation but drowning.',
    keywords: ['spiritual-upheaval', 'imaginative-liberation', 'dissolution', 'visionary-chaos'],
  },

  // =====================
  // NEPTUNE (no traditional dignities)
  // =====================

  'Neptune-Aries': {
    brief:
      'Those born with Neptune in the sign of the Ram carry a generational imprint of collective longing for a heroic ideal — a dream of courageous action unburdened by doubt or moral ambiguity. This cohort is haunted by visions of primal leadership, the myth of the lone champion who acts decisively while others hesitate. The collective purpose is the spiritualization of the will, the discovery that true courage arises from surrender to something greater than personal ambition. The shadow is the glamorization of violence, the worship of charismatic strongmen, and the delusion that force can resolve what only wisdom can address. The challenge for this generation is to distinguish genuine heroism from its intoxicating imitation. They must learn that the deepest bravery is often invisible.',
    keywords: ['heroic-ideal', 'spiritual-will', 'glamorized-action', 'mythic-courage'],
  },

  'Neptune-Taurus': {
    brief:
      'Those born with Neptune in the sign of the Bull carry a generational imprint of collective dreaming about the nature of value, beauty, and earthly paradise. This cohort is animated by a longing for a world of sensory perfection — an Eden of abundance where matter and spirit are seamlessly unified. The collective purpose is the re-enchantment of the material world, the recognition that the sacred dwells in soil, bread, and the labor of hands. The shadow is materialistic fantasy, addiction to comfort, and the confusion of aesthetic pleasure with spiritual attainment. The challenge for this generation is to honor the beauty of the world without idolizing it. They must learn that the garden requires tending, and that paradise is cultivated, not merely imagined.',
    keywords: ['enchanted-matter', 'sensory-idealism', 'earthly-paradise', 'material-dream'],
  },

  'Neptune-Gemini': {
    brief:
      'Those born with Neptune in the sign of the Twins carry a generational imprint of collective enchantment with language, narrative, and the dream of universal communication. This cohort is animated by the vision that words can dissolve barriers — that the right story, told in the right way, can unite what division has sundered. The collective purpose is the mythologization of knowledge, the weaving of disparate truths into narratives that give meaning to the bewildering variety of human experience. The shadow is deception elevated to an art form, the dissolution of fact into fiction, and a collective susceptibility to propaganda disguised as poetry. The challenge for this generation is to wield the enchantment of language without losing the anchor of truth. They must learn that a beautiful lie is still a lie.',
    keywords: ['mythic-narrative', 'enchanted-speech', 'deception', 'poetic-vision'],
  },

  'Neptune-Cancer': {
    brief:
      'Those born with Neptune in the sign of the Crab carry a generational imprint of collective longing for an idealized homeland, a mythic past of safety and unconditional belonging. This cohort dreams of perfect nurture — a world where every soul is held, where the waters of compassion flow without limit, and where the wound of separation is healed through return to the source. The collective purpose is the spiritualization of care, the recognition that all beings share the same vulnerability and the same need for shelter. The shadow is sentimental nationalism, the idealization of family to the point of delusion, and a regressive longing for a golden age that never existed. The challenge is to offer genuine compassion without drowning in nostalgia. This generation must build the home they remember even though it never was.',
    keywords: ['idealized-homeland', 'mythic-nurture', 'collective-nostalgia', 'compassionate-longing'],
  },

  'Neptune-Leo': {
    brief:
      'Those born with Neptune in the sign of the Lion carry a generational imprint of collective dreaming about the nature of creativity, glory, and the divine spark within the individual soul. This cohort is animated by a vision of the self as sacred — a belief that each person carries a unique gift that, if fully expressed, would illuminate the world. The collective purpose is the spiritualization of creativity, the recognition that art and play are not frivolous but are essential acts of cosmic participation. The shadow is the cult of personality, the confusion of celebrity with divinity, and a collective narcissism that mistakes self-absorption for self-realization. The challenge for this generation is to create without worshipping the creator. They must learn that the light shining through them is not theirs to possess.',
    keywords: ['divine-creativity', 'glamour', 'sacred-individuality', 'creative-illusion'],
  },

  'Neptune-Virgo': {
    brief:
      'Those born with Neptune in the sign of the Maiden carry a generational imprint of collective dreaming about perfection, purity, and the redemption of ordinary life through devoted service. This cohort is animated by a vision of the sacred within the mundane — the belief that holiness is found not in transcendence but in the meticulous care of daily tasks and the healing of the body. The collective purpose is the spiritualization of work and health, the insistence that service is itself a form of prayer. The shadow is a crippling anxiety about imperfection, hypochondria elevated to collective obsession, and a martyrdom that sacrifices the self on the altar of usefulness. The challenge is to serve without self-destruction. This generation must learn that the desire to heal everything is itself a wound requiring attention.',
    keywords: ['sacred-service', 'purification', 'healing-ideal', 'perfectionist-dream'],
  },

  'Neptune-Libra': {
    brief:
      'Those born with Neptune in the sign of the Scales carry a generational imprint of collective longing for perfect harmony, ideal partnership, and a world governed by beauty and justice in equal measure. This cohort dreams of relationships unburdened by power, of art that resolves all contradiction, and of social arrangements so elegant that conflict simply dissolves. The collective purpose is the spiritualization of relationship itself — the vision that love, rightly practiced, is the highest form of spiritual attainment. The shadow is romantic delusion, codependency disguised as devotion, and a collective inability to face the reality that beauty and justice sometimes demand difficult choices. The challenge for this generation is to pursue harmony without denying the necessity of discord. They must learn that peace forged in avoidance is merely a truce.',
    keywords: ['romantic-ideal', 'harmonious-vision', 'aesthetic-longing', 'relational-dream'],
  },

  'Neptune-Scorpio': {
    brief:
      'Those born with Neptune in the sign of the Scorpion carry a generational imprint of collective fascination with the depths — the hidden, the forbidden, the transformative power of confronting what lies beneath the surface of polite existence. This cohort dreams of total psychological and spiritual transparency, a world where masks are removed and the raw truth of desire, death, and power is acknowledged without shame. The collective purpose is the dissolution of taboo, the spiritualization of the shadow, and the recognition that what is denied does not disappear but festers. The shadow is a collective intoxication with darkness, addiction to intensity, and the romanticization of self-destruction as spiritual depth. The challenge is to descend without drowning. This generation must learn that facing the abyss is not the same as making a home there.',
    keywords: ['depth-fascination', 'taboo-dissolution', 'shadow-work', 'transformative-longing'],
  },

  'Neptune-Sagittarius': {
    brief:
      'Those born with Neptune in the sign of the Archer carry a generational imprint of collective longing for transcendent meaning, universal truth, and a faith capacious enough to encompass all of human experience. This cohort dreams of a world without borders — geographic, intellectual, or spiritual — where all paths lead to the same summit and every belief system is a facet of one diamond. The collective purpose is the dissolution of sectarian boundaries and the spiritualization of the quest for knowledge. The shadow is spiritual inflation, naive universalism that erases genuine difference, and a collective susceptibility to charismatic gurus who promise enlightenment without effort. The challenge for this generation is to honor the diversity of paths without collapsing them into a shallow eclecticism. They must learn that depth requires commitment, not merely openness.',
    keywords: ['spiritual-quest', 'universal-longing', 'boundless-faith', 'ideological-dissolution'],
  },

  'Neptune-Capricorn': {
    brief:
      'Those born with Neptune in the sign of the Sea-Goat carry a generational imprint of collective dreaming about the ideal form of authority, governance, and institutional life. This cohort is haunted by visions of a perfect order — a world where power is exercised wisely, where hierarchies serve rather than exploit, and where the structures of civilization reflect transcendent principles. The collective purpose is the spiritualization of responsibility, the recognition that worldly authority is a sacred trust. The shadow is the worship of institutional power, the confusion of respectability with virtue, and a collective disillusionment when the structures meant to protect prove hollow or corrupt. The challenge is to hold institutions accountable without losing faith in the possibility of just governance. This generation must build while knowing that all structures are ultimately provisional.',
    keywords: ['institutional-idealism', 'authority-dream', 'structural-disillusion', 'sacred-responsibility'],
  },

  'Neptune-Aquarius': {
    brief:
      'Those born with Neptune in the sign of the Water-Bearer carry a generational imprint of collective dreaming about universal brotherhood, the dissolution of barriers between peoples, and the vision of a humanity united by shared ideals rather than divided by tribe. This cohort is animated by the archetype of the connected collective — a world where the boundaries between self and other, local and global, dissolve into a web of mutual recognition. The collective purpose is the spiritualization of community, the insistence that solidarity is not merely a political stance but a mystical experience. The shadow is the loss of individual identity in collective fantasy, the confusion of virtual connection with genuine communion, and a utopian detachment from the suffering that persists in the real world. The challenge is to dream the collective dream without losing the individual dreamer. This generation must learn that true unity does not require the erasure of difference.',
    keywords: ['collective-dream', 'universal-brotherhood', 'dissolved-boundaries', 'humanitarian-vision'],
  },

  'Neptune-Pisces': {
    brief:
      'Those born with Neptune in the sign of the Fishes carry a generational imprint of extraordinary spiritual permeability, for Neptune finds its deepest resonance in this sign of oceanic consciousness. This cohort arrives at a moment when the collective psyche is saturated with longing for dissolution — the desire to merge with something vast, to relinquish the exhausting fiction of separateness. The collective purpose is the renewal of the sacred imagination, the opening of channels between the visible and invisible worlds that had grown calcified. The shadow is epidemic escapism, collective addiction, spiritual confusion so profound that the generation cannot distinguish the numinous from the merely intoxicating. The challenge is immense: to receive the flood of the transcendent without losing the capacity to function in the world of form. This generation must learn that the ocean is only sacred when the swimmer remembers the shore.',
    keywords: ['oceanic-consciousness', 'spiritual-saturation', 'transcendent-longing', 'dissolution'],
  },

  // =====================
  // PLUTO (no traditional dignities)
  // =====================

  'Pluto-Aries': {
    brief:
      'Those born with Pluto in the sign of the Ram carry a generational imprint of profound transformation in the nature of selfhood, identity, and the will to exist. This cohort arrives bearing the archetype of death and rebirth applied to the most fundamental question: what does it mean to be an individual? The collective purpose is the destruction and regeneration of the very concept of personal sovereignty, forcing a reckoning with how the self is constructed, defended, and ultimately surrendered. The shadow is a nihilistic aggression that destroys identity without rebuilding it, or a tyrannical assertion of self that refuses all vulnerability. The challenge for this generation is to pass through the fire of ego-death and emerge with a will purified of its compulsions. They must learn that true power begins where the fear of annihilation ends.',
    keywords: ['identity-transformation', 'primal-will', 'ego-death', 'sovereign-rebirth'],
  },

  'Pluto-Taurus': {
    brief:
      'Those born with Pluto in the sign of the Bull carry a generational imprint of profound transformation in humanity\'s relationship with the material world — with land, wealth, the body, and the earth itself. This cohort arrives at a time when the foundations of material security are being exposed as unsustainable, demanding a total reckoning with how resources are held, consumed, and shared. The collective purpose is the death and regeneration of value systems, the confrontation with collective greed, and the forging of a new relationship between human desire and earthly limits. The shadow is apocalyptic destruction of the material basis of life, or an obsessive hoarding born of existential terror. The challenge is to relinquish what cannot be sustained without succumbing to despair. This generation must learn that the earth renews itself only when what is exhausted is allowed to die.',
    keywords: ['material-transformation', 'resource-reckoning', 'earthly-power', 'value-death'],
  },

  'Pluto-Gemini': {
    brief:
      'Those born with Pluto in the sign of the Twins carry a generational imprint of profound transformation in the realm of thought, language, and the dissemination of knowledge. This cohort arrives at moments when the power of the word — to create or destroy, to illuminate or deceive — is laid bare with terrifying clarity. The collective purpose is the death and regeneration of how civilizations think, communicate, and construct shared reality through narrative and information. The shadow is the weaponization of knowledge, propaganda that reshapes reality itself, and an intellectual ruthlessness that uses ideas as instruments of domination. The challenge for this generation is to wield the transformative power of thought without becoming consumed by it. They must learn that the pen is mightier than the sword precisely because it can destroy without the wielder noticing.',
    keywords: ['thought-transformation', 'power-of-language', 'information-power', 'intellectual-death-rebirth'],
  },

  'Pluto-Cancer': {
    brief:
      'Those born with Pluto in the sign of the Crab carry a generational imprint of profound transformation in the structures of family, tribe, nation, and the emotional foundations of collective identity. This cohort arrives during eras when the bonds of kinship and homeland are tested to the point of destruction — when the question of who belongs and who is exiled becomes a matter of survival. The collective purpose is the death and regeneration of the concept of home itself, the confrontation with ancestral trauma, and the forging of new foundations from the rubble of shattered security. The shadow is tribal fanaticism, the weaponization of belonging, and the manipulation of collective grief for the purposes of power. The challenge is to grieve what has been lost without weaponizing the grief. This generation must learn that the deepest roots survive the most violent storms.',
    keywords: ['ancestral-reckoning', 'tribal-transformation', 'homeland-death-rebirth', 'emotional-power'],
  },

  'Pluto-Leo': {
    brief:
      'Those born with Pluto in the sign of the Lion carry a generational imprint of profound transformation in the expression of the creative will, the nature of authority, and the relationship between the individual and the collective. This cohort arrives bearing the archetype of the king who must die so that the kingdom may be renewed — the confrontation with the shadow of personal power and the compulsive need for recognition. The collective purpose is the death and regeneration of leadership itself, the exposure of the corruptions inherent in concentrated authority, and the discovery that true creative power demands the sacrifice of the ego. The shadow is megalomania, the cult of the charismatic leader, and a generation\'s collective inflation that confuses self-importance with destiny. The challenge is to create from the depths rather than for the applause. This generation must learn that the throne is always temporary.',
    keywords: ['creative-power', 'authority-transformation', 'ego-sacrifice', 'leadership-reckoning'],
  },

  'Pluto-Virgo': {
    brief:
      'Those born with Pluto in the sign of the Maiden carry a generational imprint of profound transformation in the domains of work, health, service, and the systems that organize daily life. This cohort arrives at moments when the infrastructure of civilization — its labor, its medicine, its ecological practices — must be dismantled and rebuilt from the ground up. The collective purpose is the death and regeneration of how humanity serves, heals, and tends to the practical maintenance of existence. The shadow is a ruthless efficiency that reduces human beings to functions, an obsessive analysis that destroys what it examines, and a collective anxiety that manifests as crisis in the body and the environment. The challenge is to reform without losing mercy. This generation must learn that the scalpel that heals and the scalpel that destroys are the same instrument wielded with different intention.',
    keywords: ['systemic-transformation', 'purification', 'service-reckoning', 'analytical-power'],
  },

  'Pluto-Libra': {
    brief:
      'Those born with Pluto in the sign of the Scales carry a generational imprint of profound transformation in the nature of relationship, justice, and the social contract. This cohort arrives at moments when the terms of partnership — personal and collective — must be renegotiated at the deepest level, when power dynamics hidden within the facade of civility are exposed and confronted. The collective purpose is the death and regeneration of how human beings relate to one another, the dismantling of inequitable structures disguised as harmony, and the forging of bonds that can withstand the truth. The shadow is a generation haunted by the impossibility of perfect fairness, paralyzed by the awareness that all relationships contain power, and prone to severing bonds rather than transforming them. The challenge is to pursue justice without destroying intimacy. This generation must learn that love and power are not opposites but must be integrated.',
    keywords: ['relational-transformation', 'justice-reckoning', 'power-in-partnership', 'social-death-rebirth'],
  },

  'Pluto-Scorpio': {
    brief:
      'Those born with Pluto in the sign of the Scorpion carry a generational imprint of the most intensified encounter with the underworld, for Pluto finds its deepest resonance in this sign of death, regeneration, and hidden power. This cohort arrives as emissaries of the abyss — tasked with confronting the collective shadow at its most concentrated and refusing the comfortable fictions that previous generations maintained. The collective purpose is nothing less than the total exposure of what has been denied: the hidden mechanisms of power, the unacknowledged presence of death, and the transformative potential of facing the darkest truths without flinching. The shadow is a generation so intimate with darkness that it risks normalizing destruction, confusing nihilism with depth, and becoming the very predatory forces it sought to expose. The challenge is to transform the shadow without being consumed by it. This generation must learn that the one who stares into the abyss must eventually look away and choose to build.',
    keywords: ['shadow-confrontation', 'depth-transformation', 'underworld', 'regenerative-power'],
  },

  'Pluto-Sagittarius': {
    brief:
      'Those born with Pluto in the sign of the Archer carry a generational imprint of profound transformation in the realm of belief, ideology, and the structures that give life meaning. This cohort arrives at moments when the old gods are dying and new ones have not yet been born — when inherited systems of meaning collapse under the weight of their own contradictions and the search for truth becomes desperate, all-consuming, and dangerous. The collective purpose is the death and regeneration of faith itself, the willingness to destroy comforting illusions in the name of a more authentic encounter with the sacred. The shadow is ideological extremism, the fanatical insistence that one\'s own revelation justifies any destruction, and a collective tendency to oscillate between total belief and total cynicism. The challenge is to hold the tension between the death of old meaning and the birth of new. This generation must learn that the wilderness between faiths is itself sacred ground.',
    keywords: ['faith-transformation', 'ideological-reckoning', 'truth-obsession', 'meaning-death-rebirth'],
  },

  'Pluto-Capricorn': {
    brief:
      'Those born with Pluto in the sign of the Sea-Goat carry a generational imprint of profound transformation in the structures of power, governance, and institutional authority. This cohort arrives at moments when the edifices of civilization — its governments, its corporations, its hierarchies of control — are exposed as corrupt, obsolete, or unsustainable, demanding demolition and reconstruction at the deepest level. The collective purpose is the death and regeneration of authority itself, the confrontation with the shadow of institutional power, and the rebuilding of structures that serve life rather than perpetuate themselves. The shadow is a generation marked by collective disillusionment so severe that it risks nihilistic withdrawal from public life, or conversely, authoritarian overcorrection. The challenge is to dismantle without despair and rebuild without repeating. This generation must learn that the collapse of the old order is not the end of the world but the painful beginning of a new one.',
    keywords: ['institutional-transformation', 'authority-collapse', 'structural-reckoning', 'power-death-rebirth'],
  },

  'Pluto-Aquarius': {
    brief:
      'Those born with Pluto in the sign of the Water-Bearer carry a generational imprint of profound transformation in the nature of collective organization, shared knowledge, and the meaning of human solidarity. This cohort arrives at moments when the relationship between the individual and the group undergoes a radical and irreversible metamorphosis — when the old forms of community, ideology, and collective identity must be destroyed and reconstituted. The collective purpose is the death and regeneration of how humanity organizes itself, the exposure of the shadow within progressive ideals, and the forging of new forms of solidarity that can withstand the truth about human nature. The shadow is a totalizing collectivism that annihilates individual liberty in the name of progress, or a fragmentation so complete that no common ground remains. The challenge is to reimagine the collective without erasing the individual. This generation must learn that the future belongs to those who can hold both freedom and belonging.',
    keywords: ['collective-transformation', 'solidarity-reckoning', 'systemic-metamorphosis', 'communal-death-rebirth'],
  },

  'Pluto-Pisces': {
    brief:
      'Those born with Pluto in the sign of the Fishes carry a generational imprint of profound transformation in the spiritual, imaginative, and unconscious foundations of collective life. This cohort arrives at moments when the veil between worlds grows thin to the point of rupture — when the collective unconscious surges into awareness, dissolving the boundary between the sacred and the profane, the real and the imagined. The collective purpose is the death and regeneration of the human relationship to the numinous, the confrontation with collective illusion at its deepest level, and the painful birth of a new spiritual dispensation. The shadow is collective psychic overwhelm, mass delusion, addiction as a civilizational phenomenon, and a spiritual crisis so profound that an entire generation may lose its bearings. The challenge is to surrender without disintegrating. This generation must learn that the death of one world-dream is the womb of the next, and that the darkness before dawn is not the end but the passage.',
    keywords: ['spiritual-transformation', 'collective-unconscious', 'dissolution-rebirth', 'numinous-reckoning'],
  },

  'Rising-Aries': {
    brief:
      'With Aries ascending, Mars governs the whole nativity, making courage, initiative, and contest the central themes of the life. The native presents a countenance marked by directness, physical vitality, and an urgency that others perceive before a word is spoken. The body tends toward heat and dryness; sharp features, a ruddy complexion, and a forward-leaning bearing are common. Life unfolds as a series of battles — the native thrives when given a clear objective and the freedom to pursue it without restraint. The gift is decisive action in the face of danger; the peril is the inability to rest, to compromise, or to distinguish between enemies worth fighting and provocations best ignored.',
    keywords: ['Mars-ruled', 'initiative', 'contest', 'vitality'],
  },

  'Rising-Taurus': {
    brief:
      'With Taurus ascending, Venus is lord of the nativity, orienting the entire life toward the acquisition, cultivation, and preservation of what is beautiful, fertile, and enduring. The bodily constitution inclines toward cold and dryness tempered by Venusian moisture — a thick neck, sturdy frame, full lips, and a complexion of notable evenness are traditional markers. Others perceive the native as steady, unhurried, and possessed of a quiet magnetism that draws people near without apparent effort. The fundamental theme of the life is stewardship: the native builds slowly, values substance over spectacle, and measures worth by what can be touched, tasted, and retained. The gift is an immovable patience and loyalty that weathers all storms; the challenge is a fixity that can harden into possessiveness, sloth, or a stubborn refusal to release what has already served its purpose.',
    keywords: ['Venus-ruled', 'stewardship', 'endurance', 'sensuality'],
  },

  'Rising-Gemini': {
    brief:
      'With Gemini ascending, Mercury rules the nativity, making communication, trade, and the ceaseless movement of information the central occupation of the life. The constitution tends toward heat and moisture — the native is often lean, quick-limbed, with expressive hands and alert, darting eyes that miss nothing. Others perceive the native as clever, verbally nimble, and possessed of an intellectual restlessness that can charm or unsettle in equal measure. The life theme is mediation: the native stands between worlds, translating, connecting, and brokering exchange wherever boundaries exist. The gift is an adaptable intelligence that learns swiftly and navigates complexity with ease; the peril is a scattering of purpose, a tongue that outruns judgment, and a restlessness that mistakes motion for progress.',
    keywords: ['Mercury-ruled', 'mediation', 'intellect', 'duality'],
  },

  'Rising-Cancer': {
    brief:
      'With Cancer ascending, the Moon governs the nativity, binding the entire life to the rhythms of waxing and waning — nourishment, memory, and the tides of feeling shape every undertaking. The bodily constitution inclines toward cold and moisture; a round or full face, pale or changeable complexion, and a soft, receptive bearing are traditional indicators. Others perceive the native as approachable and protective, yet detect beneath the gentleness a guarded watchfulness, as one who has learned that the world is not always safe. The fundamental life theme is shelter: the native seeks to create, defend, and sustain a place of belonging for self and kin. The gift is an extraordinary capacity to nourish others and to remember what matters most; the challenge is a vulnerability to mood, an attachment to the past that can become a prison, and a tendency to shield the self behind indirect expression rather than open confrontation.',
    keywords: ['Moon-ruled', 'nourishment', 'memory', 'protection'],
  },

  'Rising-Leo': {
    brief:
      'With Leo ascending, the Sun is lord of the nativity, and the life is organized around questions of sovereignty, honor, and the radiance of individual will. The bodily constitution runs hot and dry — a broad chest, strong back, prominent mane of hair, and a bearing of natural authority are traditional hallmarks. Others perceive the native as commanding, generous, and impossible to overlook; even in silence there is a presence that fills the room and demands acknowledgment. The fundamental theme of the life is rulership, whether over a household, a craft, or a domain of influence — the native must find a throne or build one. The gift is a magnanimous heart and the courage to stand visibly at the center of events; the peril is pride that cannot bear diminishment, a need for recognition that corrodes when denied, and the loneliness that attends those who confuse admiration with love.',
    keywords: ['Sun-ruled', 'sovereignty', 'magnanimity', 'authority'],
  },

  'Rising-Virgo': {
    brief:
      'With Virgo ascending, Mercury governs the nativity in its nocturnal dignity, directing the life toward discernment, service, and the refinement of all things imperfect. The bodily constitution inclines toward cold and dryness — a slender frame, precise features, clear and analytical eyes, and an understated manner of dress and movement are traditional markers. Others perceive the native as modest, competent, and exacting, one who notices what everyone else overlooks and whose criticism, though accurate, can sting. The fundamental life theme is correction: the native is drawn to identify what is broken, disordered, or impure and to apply skill and knowledge toward its repair. The gift is a penetrating intelligence wedded to practical craft, capable of mastering detail that would overwhelm a lesser mind; the challenge is a self-criticism that becomes corrosive, a perfectionism that delays completion, and a humility so deep it borders on self-erasure.',
    keywords: ['Mercury-ruled', 'discernment', 'service', 'refinement'],
  },

  'Rising-Libra': {
    brief:
      'With Libra ascending, Venus is lord of the nativity in her diurnal sign, orienting the life toward justice, proportion, and the harmonious arrangement of all relationships. The bodily constitution tends toward warmth and moisture — pleasing symmetry of feature, a graceful carriage, and a physical beauty or charm that invites the gaze of others are traditional indicators. Others perceive the native as diplomatic, aesthetically refined, and fundamentally oriented toward partnership; even solitary action is undertaken with an awareness of how it will be received. The fundamental life theme is balance: the native is called to weigh, to judge, and to seek equitable accord between opposing forces. The gift is a rare talent for creating harmony from discord and for seeing merit in every position; the peril is paralysis in the face of decision, a dependence upon the approval of others, and a courtesy so practiced it conceals the native from those who would know the truth of the heart.',
    keywords: ['Venus-ruled', 'justice', 'proportion', 'partnership'],
  },

  'Rising-Scorpio': {
    brief:
      'With Scorpio ascending, Mars governs the nativity from a nocturnal, fixed, and watery domicile, directing the life toward matters of power, transformation, and the unseen depths beneath the surface of things. The bodily constitution inclines toward cold and moisture — a compact and intense frame, penetrating eyes, and a stillness that conceals formidable reserves of strength are traditional hallmarks. Others perceive the native as magnetic and somewhat dangerous; there is an aura of concealment, as though the native possesses knowledge too potent or too private to share freely. The fundamental life theme is crisis and regeneration: the native encounters the extremities of existence — death, desire, betrayal, and rebirth — and must learn to wield power without being consumed by it. The gift is an unflinching courage in the face of what others cannot bear to witness and a capacity for profound loyalty; the challenge is a tendency toward suspicion, obsessive control, and a brooding intensity that poisons the self when it finds no worthy outlet.',
    keywords: ['Mars-ruled', 'transformation', 'depth', 'intensity'],
  },

  'Rising-Sagittarius': {
    brief:
      'With Sagittarius ascending, Jupiter is lord of the nativity, expanding the life toward wisdom, faith, and the far horizon — the native is born to seek what lies beyond the known. The bodily constitution runs hot and moist — a tall or large-boned frame, an open and genial countenance, strong thighs, and a restless physicality that craves movement and space are traditional indicators. Others perceive the native as jovial, frank to the point of bluntness, and animated by an enthusiasm that inspires confidence even when the enterprise is reckless. The fundamental life theme is the quest: whether through travel, philosophy, law, or sacred learning, the native must pursue a vision of truth that gives meaning to existence. The gift is an unshakable optimism and a generosity of spirit that elevates everyone within reach; the peril is excess in all things, promises made beyond the capacity to fulfill, and a restlessness that abandons what is near and good in pursuit of what is distant and imagined.',
    keywords: ['Jupiter-ruled', 'wisdom', 'quest', 'expansion'],
  },

  'Rising-Capricorn': {
    brief:
      'With Capricorn ascending, Saturn governs the nativity, imposing upon the life the themes of discipline, endurance, and the slow ascent toward lasting achievement. The bodily constitution inclines toward cold and dryness — a lean or angular frame, prominent bone structure, a serious cast of countenance, and a physical maturity that often appears older in youth yet ages with remarkable resilience are traditional markers. Others perceive the native as reserved, calculating, and possessed of an authority earned through competence rather than charm; there is little warmth in the first impression, but much respect. The fundamental life theme is mastery through time: the native builds structures — of career, reputation, or institution — that are meant to outlast the builder. The gift is an unbreakable perseverance and a strategic mind capable of planning across decades; the challenge is a severity that denies pleasure, a melancholy that deepens in solitude, and the temptation to measure all of life by the cold standard of utility.',
    keywords: ['Saturn-ruled', 'discipline', 'mastery', 'endurance'],
  },

  'Rising-Aquarius': {
    brief:
      'With Aquarius ascending, Saturn governs the nativity from a diurnal, fixed, and airy domicile, directing the life toward the ordering of communities, the reform of established custom, and the application of reason to collective affairs. The bodily constitution tends toward warmth moderated by Saturnian cold — a tall and somewhat angular frame, a distinctive or unconventional appearance, and a detached, observational bearing are traditional indicators. Others perceive the native as intellectual, principled, and somewhat aloof; there is a sense of one who belongs to the polis rather than to any single person, whose loyalties are to ideas as much as to individuals. The fundamental life theme is the reformation of the common good: the native is called to stand apart from convention in order to see what convention cannot and to advocate for what is rational, just, and universally beneficial. The gift is a penetrating objectivity and a steadfastness of conviction that does not bend to popular sentiment; the peril is an emotional detachment that estranges the native from intimate bonds, a rigidity of ideology, and a coldness mistaken for wisdom.',
    keywords: ['Saturn-ruled', 'reform', 'reason', 'detachment'],
  },

  'Rising-Pisces': {
    brief:
      'With Pisces ascending, Jupiter governs the nativity from a nocturnal, mutable, and watery domicile, dissolving the boundaries of the life and opening the native to the unseen, the sacred, and the sorrows of the world. The bodily constitution inclines toward cold and moisture — soft or rounded features, large and liquid eyes, a gentle or yielding frame, and a physical presence that seems to shift and adapt to the surrounding environment are traditional hallmarks. Others perceive the native as compassionate, elusive, and difficult to pin down; there is a dreamlike quality to the first impression, as though the native inhabits a realm slightly removed from the material world. The fundamental life theme is surrender: the native must learn what to give oneself to — whether art, devotion, healing, or sacrifice — and what currents to resist lest they carry the soul into dissolution. The gift is an extraordinary empathy and an intuitive perception that penetrates beyond the visible to the hidden suffering and beauty of existence; the challenge is a porousness that absorbs the pain of others, a tendency toward escapism and self-undoing, and a faith so boundless it becomes credulity.',
    keywords: ['Jupiter-ruled', 'surrender', 'empathy', 'transcendence'],
  },
};
