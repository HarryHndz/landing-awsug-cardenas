import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { NextEvent } from '../components/NextEvent'
import { PastEvents } from '../components/PastEvents'
import { Organizers } from '../components/Organizers'
import { Join } from '../components/Join'

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <NextEvent />
      <PastEvents />
      <Organizers />
      <Join />
    </main>
  )
}
