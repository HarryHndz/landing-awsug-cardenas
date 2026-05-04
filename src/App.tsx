import './App.css'
import { Hero } from './components/Hero'
import { Join } from './components/Join'
import { Footer } from './components/Footer'
import { PastEvents } from './components/PastEvents'
import { Organizers } from './components/Organizers'
import { NextEvent } from './components/NextEvent'
import { About } from './components/About'
import { Nav } from './components/Nav'

function App() {
  return (
    <div className="page grain">
      <Nav />
      <main>
        <Hero />
        <About />
        <NextEvent />
        <PastEvents />
        <Organizers />
        <Join />
      </main>
      <Footer />
    </div>
  )
}

export default App
