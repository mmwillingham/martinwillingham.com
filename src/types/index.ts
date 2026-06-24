export type BookCategory = 'Black Coral Series' | 'Nonfiction'

export interface RetailLink {
  label: string
  url: string
}

export interface BookMetadata {
  publisher?: string
  year?: string
  pages?: string
  format?: string
}

export interface Book {
  id: string
  slug: string
  title: string
  category: BookCategory
  eyebrow: string
  coverImage: string
  coverAlt: string
  description: string[]
  excerptSlug: string
  excerptContent: string
  readingTime: number
  retailLinks: RetailLink[]
  metadata?: BookMetadata
  callout?: string
}
