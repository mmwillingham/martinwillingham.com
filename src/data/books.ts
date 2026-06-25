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
      `In 2026, Patrick, a sharp-witted lawyer, and Molly, a tenacious journalist, are trapped in an uneasy alliance, forced together on a cross-country road trip that neither of them wants. Their journey takes an unexpected turn when they stumble into a hidden cave in Tennessee, transforming a routine detour into a descent through time. Suddenly, they are stranded in 1885, forced to pose as a married couple in a house that will one day be known for its tragic past.`,
      `As they struggle to adapt to a life without their digital lifelines, anonymity, or their former identities, the mismatched duo must set aside their mutual disdain to survive a century-old crime that refuses to stay buried. While Patrick attempts to solve the cold case of a local child’s trauma, Molly finds herself drawn to the young girl who will eventually grow up to be the town’s most enigmatic figure.`,
      `As they fight to return to their own time—and to the lives they left behind—they realize that the history they are living is not just a mystery to be solved, but a legacy they are destined to shape. What they do in the past will not only rewrite the truth of the house they haunted but will alter the course of their own lives forever.`
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
      'A planned standalone novel.',
      'More details coming soon.',
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
      'A firsthand nonfiction account of a grueling and beautiful trek through the wild expanses of Alaska and Northwest Canada—all from the saddle of a bicycle.',
      'Part travel memoir, part endurance narrative, Alaska South captures the landscape, the weather, and the quiet revelations that come mile by mile on the road north.',
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
