import { matecumbeIslandContent } from '@/content/matecumbe-island'
import { blueEyesBlackCoralContent } from '@/content/blue-eyes-black-coral'
import { theHighLifeContent } from '@/content/the-high-life'
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
      'A Southern coming-of-age story following a college boy in Athens, Georgia, navigating the highs and lows of friendship, popularity, and the pursuit of a beautiful blue-eyed girl.',
      'Set against the backdrop of campus life and coastal Georgia, the novel explores desire, loyalty, and the choices that shape who we become.',
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
      'A sun-drenched coastal escapade blending deep-water mysteries, hidden keys, and a healthy dose of wit where relationships take center stage.',
      'On the islands of the Florida Keys, old secrets surface and new alliances form in a story of adventure, romance, and the pull of the open water.',
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
    id: 'the-high-life',
    slug: 'the-high-life',
    title: 'The High Life',
    category: 'Black Coral Series',
    eyebrow: 'Black Coral Series',
    coverImage: '/images/books/the-high-life.jpg',
    coverAlt: 'Cover of The High Life by Martin Willingham',
    description: [
      'Part 3 of the Black Coral series. Benton and Shelly live the high life in the Florida Keys, navigating new coastal adventures and unexpected crises together.',
      'As their world expands, so do the stakes—testing the bonds forged in earlier books and pushing both characters toward choices they cannot take back.',
    ],
    excerptSlug: 'the-high-life',
    excerptContent: theHighLifeContent,
    readingTime: 10,
    retailLinks: [
      { label: 'Amazon', url: 'https://www.amazon.com' },
      { label: 'Barnes & Noble', url: 'https://www.barnesandnoble.com' },
      { label: 'Apple Books', url: 'https://books.apple.com' },
    ],
  },
  {
    id: 'alaska-south',
    slug: 'alaska-south',
    title: 'Alaska South',
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

const categoryOrder: BookCategory[] = ['Black Coral Series', 'Nonfiction']

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
