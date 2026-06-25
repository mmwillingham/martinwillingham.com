import { matecumbeIslandContent } from '@/content/matecumbe-island'
import { blueEyesBlackCoralContent } from '@/content/blue-eyes-black-coral'
import { bonefishAndBarracudaContent } from '@/content/bonefish-and-barracuda'
import { littleBentonContent } from '@/content/little-benton'
import { bridgeToAlaskaContent } from '@/content/bridge-to-alaska'
import { hauntedHouseContent } from '@/content/haunted-house'
import { theMadmanAndHisPreyContent } from '@/content/the-madman-and-his-prey'
import { alaskaSouthContent } from '@/content/alaska-south'
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
    title: 'Bonefish and Barracuda',
    category: 'Black Coral Series',
    eyebrow: 'Black Coral Series',
    coverImage: '/images/books/bonefish-and-barracuda.jpg',
    coverAlt: 'Cover of Bonefish and Barracuda by Martin Willingham',
    description: [
      'Part 3 of the Black Coral series. Benton and Shelly navigate life in the Florida Keys—coastal adventures, shifting loyalties, and unexpected crises on the water.',
      'As their world expands, so do the stakes—testing the bonds forged in earlier books and pushing both characters toward choices they cannot take back.',
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
      'A planned entry in the Black Coral series following Benton in an earlier chapter of his story.',
      'More details coming soon.',
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
      'A planned entry in the Black Coral series bridging coastal life and the long road north.',
      'More details coming soon.',
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
    title: 'Alaska South (coming soon)',
    category: 'Nonfiction',
    eyebrow: 'Nonfiction',
    coverImage: '/images/books/alaska-south.jpg',
    coverAlt: 'Cover of Alaska South by Martin Willingham',
    description: [
      `<strong>Alaska South</strong>`,
      `Ten thousand, six hundred and fifty-two miles. That is the distance covered in an odyssey that spanned the vast, untamed wilderness of North America. Setting out from Anchorage with his best friend, the author embarked on a relentless journey across the wild reaches of Alaska, the rugged Yukon Territory, the sprawling provinces of British Columbia and Alberta, and down into the peaks of Montana.`,
      `While the trek utilized a variety of transport—from pickup trucks, ships, and planes to trains and buses—the heart of the story belongs to the road. Over 3,200 miles were covered by bicycle, a grueling passage that saw the pair pedal from the shadows of Denali and Fairbanks to the remote outpost of Chicken, across the Yukon River into Dawson City, and south through the high passes of the Canadian Rockies.`,
      `This is more than a travelogue; it is a tapestry of the North. From the unique characters and travelers they encountered to the local residents and the Indigenous peoples who have shaped these lands for generations, the narrative captures the grit and the wonder of the road. It is a testament to the endurance of a lifelong friendship and the profound perspective gained when you traverse a continent under your own power.`,
    ],
    excerptSlug: 'alaska-south',
    excerptContent: alaskaSouthContent,
    readingTime: 20,
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

export function parseExcerptContent(content: string): string[] {
  return content
    .trim()
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean)
}
