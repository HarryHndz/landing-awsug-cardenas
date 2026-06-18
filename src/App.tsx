import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { AddEvent } from './pages/AddEvent'

function App() {
  return (
    <div className="page grain">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agregar-evento" element={<AddEvent />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
