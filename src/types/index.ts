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
  retailLinks: RetailLink[]
  metadata?: BookMetadata
  callout?: string
}

export interface Story {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  readingTime: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  photo: string
  text: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
