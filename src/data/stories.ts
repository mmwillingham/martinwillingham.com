import type { Story } from '@/types'

import { matecumbeIslandContent } from '@/content/matecumbe-island'
import { blueEyesBlackCoralContent } from '@/content/blue-eyes-black-coral'
import { theHighLifeContent } from '@/content/the-high-life'
import { alaskaSouthContent } from '@/content/alaska-south'

export const stories: Story[] = [
  {
    id: 'matecumbe-island',
    slug: 'matecumbe-island',
    title: 'Matecumbe Island',
    excerpt:
      'A sun-drenched coastal escapade blending deep-water mysteries, hidden keys, and a healthy dose of wit where relationships take center stage.',
    image: '/images/stories/matecumbe-island.png',
    readingTime: 12,
    content: matecumbeIslandContent,
  },
  {
    id: 'blue-eyes-black-coral',
    slug: 'blue-eyes-black-coral',
    title: 'Blue Eyes Black Coral',
    excerpt:
      'A Southern coming-of-age story following a college boy in Athens, Georgia, navigating the highs and lows of friendship, popularity, and the pursuit of a beautiful blue-eyed girl.',
    image: '/images/stories/blue-eyes-black-coral.png',
    readingTime: 15,
    content: blueEyesBlackCoralContent,
  },
  {
    id: 'the-high-life',
    slug: 'the-high-life',
    title: 'The High Life',
    excerpt:
      'Part 3 of the Black Coral series. Benton and Shelly live the high life in the Florida Keys, navigating new coastal adventures and unexpected crises together.',
    image: '/images/stories/the-high-life.png',
    readingTime: 10,
    content: theHighLifeContent,
  },
  {
    id: 'alaska-south',
    slug: 'alaska-south',
    title: 'Alaska South',
    excerpt:
      'A firsthand nonfiction account of a grueling and beautiful trek through the wild expanses of Alaska and Northwest Canada—all from the saddle of a bicycle.',
    image: '/images/stories/alaska-south.png',
    readingTime: 20,
    content: alaskaSouthContent,
  },
]

export const getStoryBySlug = (slug: string): Story | undefined => {
  return stories.find((story) => story.slug === slug)
}