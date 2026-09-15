export type BookCategory = 'Black Coral Series' | 'Standalone' | 'Nonfiction'

export interface RetailLink {
  label: string
  url: string
  /** When set, renders as a Payhip embed buy button (on-site cart). */
  payhipProductId?: string
}

export interface BookMetadata {
  publisher?: string
  year?: string
  pages?: string
  format?: string
}

export interface PlaylistTrack {
  chapter: string
  song: string
  artist: string
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
  /** Optional link for a signed physical copy (shown under Buy Direct). */
  signedCopyUrl?: string
  metadata?: BookMetadata
  callout?: string
  playlist?: PlaylistTrack[]
}
