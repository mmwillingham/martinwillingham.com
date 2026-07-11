import { matecumbeIslandContent } from '@/content/matecumbe-island'
import { blueEyesBlackCoralContent } from '@/content/blue-eyes-black-coral'
import { bonefishAndBarracudaContent } from '@/content/bonefish-and-barracuda'
import { littleBentonContent } from '@/content/little-benton'
import { bridgeToAlaskaContent } from '@/content/bridge-to-alaska'
import { hauntedHouseContent } from '@/content/haunted-house'
import { theMadmanAndHisPreyContent } from '@/content/the-madman-and-his-prey'
import { alaskaSouthContent } from '@/content/alaska-south'
import { burtonAndZonaContent } from '@/content/burton-and-zona'
import type { Book, BookCategory } from '@/types'

export const books: Book[] = [
  {
    id: 'blue-eyes-black-coral',
    slug: 'blue-eyes-black-coral',
    title: 'Blue Eyes Black Coral',
    category: 'Black Coral Series',
    eyebrow: 'Black Coral Series',
    coverImage: '/images/books/blue-eyes-black-coral.jpg',
    coverAlt: 'Cover of Blue Eyes Black Coral by Martin Willingham',
    description: [
      `“A witty, beautifully written look at a young man's internal battle—and the sharp, captivating girl he will do anything to win.”`,
      `The year is 1984. Eighteen-year-old Benton Wilkes arrives at the University of Georgia looking for adventure. When his freshman year quickly dissolves into a stinging period of abandonment and loneliness, an intramural football team rescues him, introducing an unforgettable cast of eccentric friends.`,
      `Benton’s world shifts when he meets Shelly, a girl with deep blue eyes and a painful past. She challenges his witty, superficial facade, forcing him to face the person in the mirror. But as Benton tries to outmaneuver a rival for her heart, a series of harmless pranks escalates into a tangled web of anonymous attacks that puts him into a county jail cell.`,
      `To find true freedom, he must dive beneath the surface of his own calculations, confront his deepest flaws, and figure out what it truly means to drop the mask.`,
      `<strong>Blue Eyes Black Coral</strong> is a witty, emotionally raw coming-of-age story about the masquerades we play—and the grace that finally sets us free.`
    ],
    excerptSlug: 'blue-eyes-black-coral',
    excerptContent: blueEyesBlackCoralContent,
    readingTime: 15,
    retailLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com' },
      { label: 'Barnes & Noble', url: 'https://www.barnesandnoble.com' },
      { label: 'Apple Books', url: 'https://books.apple.com' },
    ],
  },
  {
    id: 'matecumbe-island',
    slug: 'matecumbe-island',
    title: 'Matecumbe Island',
    category: 'Black Coral Series',
    eyebrow: 'Black Coral Series',
    coverImage: '/images/books/matecumbe-island.jpg',
    coverAlt: 'Cover of Matecumbe Island by Martin Willingham',
    description: [
      `<strong>Drawn by the lure of the sea</strong>, Benton Wilkes, an over-thinking college graduate from Georgia, trades a sensible career and predictable future for an adventure in the Florida Keys, carrying only the encouragement—and warning—from Shelly, the sweetheart he leaves behind.`,
      `After landing a job at an Islamorada dive shop, he soon discovers the island’s dark underbelly and finds himself entangled in a web of con artists, drug dealers, and a blackmail plot that threatens to destroy those he loves. As the storms grow and sharks circle, Benton must uncover and confront his enemies, especially the demons within.`,
      `Will he succumb to the temptations of an island where people and promises disappear, or will he find the courage to fight for his destiny?`,
      `Set in the 1980s, <strong>Matecumbe Island</strong> is a gripping tale of humor, self-discovery, love, and the tough choices that define a person's character.`,
    ],
    excerptSlug: 'matecumbe-island',
    excerptContent: matecumbeIslandContent,
    readingTime: 12,
    retailLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com' },
      { label: 'Barnes & Noble', url: 'https://www.barnesandnoble.com' },
      { label: 'Apple Books', url: 'https://books.apple.com' },
    ],
  },
  {
    id: 'bonefish-and-barracuda',
    slug: 'bonefish-and-barracuda',
    title: 'Bonefish and Barracuda (planned)',
    category: 'Black Coral Series',
    eyebrow: 'Black Coral Series',
    coverImage: '/images/books/bonefish-and-barracuda.jpg',
    coverAlt: 'Cover of Bonefish and Barracuda by Martin Willingham',
    description: [
      `<strong>Bonefish and Barracuda</strong>`,
      `Life in the Florida Keys was supposed to be a dream. For Benton and Shelly, it is. Shelly is masterfully managing the landscape at the iconic Cheeca Lodge, while Benton is juggling the demands of running Slammin’ Sammy’s Scuba Safari and learning the ropes as a boat captain. But the paradise is becoming crowded. They are surrounded by an unforgettable cast: Wayne, the seasoned "Captain Hook"; Garrett, a no-nonsense ex-Navy freighter captain who has little patience for tourists; Luka, a sharp-minded Croatian businessman; and Juan, a visionary new employee whose infectious ambition is matched only by the shadows of a past he is desperate to keep buried.`,
      `Benton is being pulled in every direction. Between the grueling demands of the dive shop and his burgeoning, high-demand career in IT, he is a rookie boss struggling to lead men with decades of experience on him. Juan is pushing him to gamble on new ventures, Wayne has found himself in deep water with a Cuban drug syndicate, and Garrett is ready to quit if he has to deal with one more difficult customer. Amidst the chaos, Shelly is fighting for a life outside of work, longing for time alone and a social circle of their own.`,
      `Then, the stakes skyrocket. A meeting with the Vice President of the United States thrusts them into a world far beyond the docks of the Keys. Filled with humor, grit, and lethal tension, <strong>Bonefish and Barracuda</strong> is a relentless ride through a landscape where the twists are as sharp as the reefs, and a dark past is always waiting to surface.`,
    ],
    excerptSlug: 'bonefish-and-barracuda',
    excerptContent: bonefishAndBarracudaContent,
    readingTime: 10,
    retailLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com' },
      { label: 'Barnes & Noble', url: 'https://www.barnesandnoble.com' },
      { label: 'Apple Books', url: 'https://books.apple.com' },
    ],
  },
  {
    id: 'little-benton',
    slug: 'little-benton',
    title: 'Little Benton (planned)',
    category: 'Black Coral Series',
    eyebrow: 'Black Coral Series',
    coverImage: '/images/books/little-benton.jpg',
    coverAlt: 'Cover of Little Benton by Martin Willingham',
    description: [
      `<strong>Little Benton</strong>`,
      `Before he was chasing Shelly, managing dive boats, navigating the wilds of the North, and before he discovered Black Coral, Benton Wilkes was just a shy kid trying to find his footing in a world that felt both dangerously big and wonderfully small. Little Benton is the origin story of a man shaped by the messy, beautiful reality of growing up.`,
      `From learning the art of the lie to navigating the intoxicating pull of first crushes and forbidden drinks, Benton’s childhood is a series of vivid, high-stakes episodes. Surrounded by a chaotic family of larger-than-life siblings and friends, he learns to maneuver through life’s unexpected sharp turns. His world is filled with extremes: the terror of bullies and the heartbreak of rejection, the chilling moment of coming face-to-face with a rattlesnake in a rock crevice, the haunting mystery of a friend’s abduction, and the sobering reality of death.`,
      `Yet, for every hardship, there is a thrill. Between the adrenaline of swim team victories, the height of backyard bike ramps, the quiet conquest of tree climbing, and the solitary, unsupervised crack of a gun in his own backyard, Benton is constantly tested. He is a middle child in a household that loves hard and lives louder. It is a story of grit, discovery, and the small, pivotal moments that transform a cautious boy into the man he is destined to become.`,
    ],
    excerptSlug: 'little-benton',
    excerptContent: littleBentonContent,
    readingTime: 10,
    retailLinks: [],
  },
  {
    id: 'bridge-to-alaska',
    slug: 'bridge-to-alaska',
    title: 'Bridge to Alaska (planned)',
    category: 'Black Coral Series',
    eyebrow: 'Black Coral Series',
    coverImage: '/images/books/bridge-to-alaska.jpg',
    coverAlt: 'Cover of Bridge to Alaska by Martin Willingham',
    description: [
      `<strong>Bridge to Alaska</strong>`,
      `Benton and Shelly are trading the salt air of the Florida Keys for the brutal, unforgiving terrain of the North. Seeking a break from their island paradise, they arrive in Anchorage to swap their boats for bicycles, intent on a three-thousand-mile ride that will test the absolute limits of their endurance. They expect the challenges of the road: the shadow of Denali, the remote reaches of Chicken, the crossing of the Yukon River into Dawson City, and the grueling, high-altitude passes of the Canadian Rockies. They prepare for equipment failure, bone-deep fatigue, and the occasional grizzly.`,
      `<strong>They are not prepared for what hides in the woods.</strong>`,
      `This is a land of massive geological shifts and even more massive personalities, where every mile brings a new absurdity and a new threat. Between dodging a persistent Amway salesman, navigating a tense encounter with a polygamist, and crossing paths with the man they call Cougar, Benton and Shelly learn quickly that the wilderness is never empty. From the eccentric woman living alone in a remote hut to a precarious job clearing an airstrip while surrounded by bears, the journey is as unpredictable as it is beautiful. But as the miles grind on, they face the one thing they never saw coming: a panic-filled, desperate separation that leaves them fighting to find each other before the North swallows them whole.`,
    ],
    excerptSlug: 'bridge-to-alaska',
    excerptContent: bridgeToAlaskaContent,
    readingTime: 10,
    retailLinks: [],
  },
  {
    id: 'haunted-house',
    slug: 'haunted-house',
    title: 'Haunted House (planned)',
    category: 'Standalone',
    eyebrow: 'Standalone',
    coverImage: '/images/books/haunted-house.jpg',
    coverAlt: 'Cover of Haunted House by Martin Willingham',
    description: [
      `<strong>They went looking for a ghost. They found a different century.</strong>`,
      `In 2026, Patrick, a sharp-witted lawyer, and Molly, a tenacious journalist, are trapped in an uneasy alliance, forced together on a long-distance road trip that neither of them wants. Their journey takes an unexpected turn when they stumble into a hidden cave in Tennessee, transforming a routine detour into a descent through time. Suddenly, they are stranded in 1895, forced to pose as a married couple in a house that will one day be known for its tragic past.`,
      `As they struggle to adapt to a life stripped of digital lifelines and modern privacy—often finding themselves at odds with the town’s suffocating social expectations and its dry-county austerity—the mismatched duo must set aside their mutual disdain to confront a crime that refuses to stay buried. While Patrick maneuvers through the era's rigid legal and social landscape to solve the cold case of a child’s trauma, Molly finds herself deeply entangled with the young girl who will one day become the town’s most enigmatic figure.`,
      `As they fight to return to the lives they left behind, they realize the history they are living is not just a mystery to be solved, but a legacy they are destined to shape. What they do in the past will not only rewrite the truth of the house they haunted but will alter the course of their own lives forever.`
    ],
    excerptSlug: 'haunted-house',
    excerptContent: hauntedHouseContent,
    readingTime: 10,
    retailLinks: [],
  },
  {
    id: 'the-madman-and-his-prey',
    slug: 'the-madman-and-his-prey',
    title: 'The Madman and His Prey (planned)',
    category: 'Standalone',
    eyebrow: 'Standalone',
    coverImage: '/images/books/the-madman-and-his-prey.jpg',
    coverAlt: 'Cover of The Madman and His Prey by Martin Willingham',
    description: [
      '<strong>He is a doctor, sworn to heal. Now, he has decided who needs to suffer.</strong>',
      `Disgusted by a world where the cruel and the corrupt thrive, Dr. Chuck Stevens has reached a breaking point. What begins as a single, accidental confrontation evolves into a cold, calculated mission. He is meticulous, he is patient, but he is no killer. He is simply an instrument of justice. With every news cycle, he identifies a new mark: not the invisible low-lifes of the city, but the powerful, popular, and protected. He targets those who prey on the vulnerable, including child abusers, human traffickers, religious charlatans who swindle the elderly out of their life savings, and corrupt officials who exploit their power, all while the public turns a blind eye. In the shadows, he experiments, crafting increasingly sophisticated instruments to ensure his brand of justice is felt.`,
      'Meanwhile, detectives Luke and Shae, mismatched partners and former lovers, are tasked with investigating a string of high-profile vanishings that the city is desperate to sweep under the rug. Blinded by their own assumptions and a history of personal friction, they are hunting a monster in all the wrong places. As the list of targets grows, the detectives are forced to reconcile their own past with the terrifying possibility that the man they are chasing is not hiding in the dark. He is right under their noses.',
    ],
    excerptSlug: 'the-madman-and-his-prey',
    excerptContent: theMadmanAndHisPreyContent,
    readingTime: 10,
    retailLinks: [],
  },
  {
    id: 'alaska-south',
    slug: 'alaska-south',
    title: 'South to Alaska',
    category: 'Nonfiction',
    eyebrow: 'Nonfiction',
    coverImage: '/images/books/alaska-south.jpg',
    coverAlt: 'Cover of South to Alaska by Martin Willingham',
    description: [
      `<strong>South to Alaska</strong>`,
      `In 1986, UGA juniors Martin and Scott decided on a whim to bike 800 miles to Key West with no money or experience. Yet despite blown tires, failing knees, semi-trucks, and brutal campsites, they crossed the finish line on schedule. Martin swore he’d never do it again.`,
      `He was wrong. Two years later, Scott proposed a wilder sequel: biking 3,000 miles across Alaska, down the Canadian Rockies, and into Montana. With zero training—unless you count Martin’s single seven-minute attempt on a stationary bike—they mounted up in Anchorage.`,
      `South to Alaska is not an elite athletic chronicle, but a witty, grit-and-gear diary of what happens when determination meets improvisation. Watch them tackle 200 miles of Canadian gravel on slick tires, clear a remote airstrip across a muskeg bog for a plate of sardines, and trade tall tales with eccentric frontiersmen. This is the hilarious story of two ordinary guys who dared to step off the beaten track, only to discover their wilderness expedition evolved into a daily hunt for the normal.`,
    ],
    excerptSlug: 'alaska-south',
    excerptContent: alaskaSouthContent,
    readingTime: 20,
    retailLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com/dp/B0H89Y6VML' },
      { label: 'Barnes & Noble', url: 'https://www.barnesandnoble.com' },
      { label: 'Apple Books', url: 'https://books.apple.com' },
    ],
  },
  {
    id: 'burton-and-zona',
    slug: 'burton-and-zona',
    title: 'Burton and Zona (planned)',
    category: 'Nonfiction',
    eyebrow: 'Nonfiction',
    coverImage: '/images/books/burton-and-zona.jpg',
    coverAlt: 'Cover of Burton and Zona by Martin Willingham',
    description: [
      `<strong>Burton and Zona</strong>`,
      `The year is 1895. In an era defined by ink, paper, and the rhythmic beat of a horse’s hooves, a courtship unfolds across the miles. Burton and Zona is a deeply personal narrative told through the letters of two young people separated by distance but united by a growing, undeniable bond.`,
      `He is a circuit-riding preacher, a man of profound thought and sudden, dark bouts of the blues, moving from station to station on horseback. She is a feisty, free-spirited schoolteacher with a mind entirely her own. From an initial, sharp rejection to a marriage that would shape a family, their story moves through the postal service, punctuated only by a single, fleeting face-to-face encounter.`,
      `As they navigate the challenges of their respective callings and the limitations of their time, the letters reveal two vibrant, complex lives in the making. It is a portrait of a vanished world and a testament to the power of the written word to build a bridge—and a life—between two kindred spirits.`,
    ],
    excerptSlug: 'burton-and-zona',
    excerptContent: burtonAndZonaContent,
    readingTime: 15,
    retailLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com' },
      { label: 'Barnes & Noble', url: 'https://www.barnesandnoble.com' },
      { label: 'Apple Books', url: 'https://books.apple.com' },
    ],
  },
]

const categoryOrder: BookCategory[] = [
  'Black Coral Series',
  'Standalone',
  'Nonfiction',
]

export const booksByCategory = categoryOrder.map((category) => ({
  category,
  books: books.filter((book) => book.category === category),
}))

export const getBookBySlug = (slug: string): Book | undefined => {
  return books.find((book) => book.slug === slug)
}

export const getBookByExcerptSlug = (slug: string): Book | undefined => {
  return books.find((book) => book.excerptSlug === slug)
}

export type ExcerptBlock =
  | { type: 'heading'; level: number; text: string }
  | { type: 'text'; content: string }

export function parseExcerptContent(content: string): ExcerptBlock[] {
  return content
    .trim()
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean)
    .flatMap(parseExcerptBlock)
}

function parseExcerptBlock(block: string): ExcerptBlock[] {
  const headingMatch = block.match(/^(#{1,6})\s+(.+)$/)
  if (headingMatch && !block.includes('\n')) {
    return [
      {
        type: 'heading',
        level: headingMatch[1].length,
        text: headingMatch[2].trim(),
      },
    ]
  }

  const [firstLine, ...rest] = block.split('\n')
  const firstLineHeading = firstLine.match(/^(#{1,6})\s+(.+)$/)
  if (firstLineHeading) {
    const blocks: ExcerptBlock[] = [
      {
        type: 'heading',
        level: firstLineHeading[1].length,
        text: firstLineHeading[2].trim(),
      },
    ]
    const remaining = rest.join('\n').trim()
    if (remaining) {
      blocks.push({ type: 'text', content: remaining })
    }
    return blocks
  }

  return [{ type: 'text', content: block }]
}
