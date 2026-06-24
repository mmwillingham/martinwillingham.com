import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Books } from '@/components/sections/Books' // Updated export name

export default function Home(): React.JSX.Element {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <About />
      <Books /> {/* Updated tag name */}
      <Contact />
    </main>
  )
}