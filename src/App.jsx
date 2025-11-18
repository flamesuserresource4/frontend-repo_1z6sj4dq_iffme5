import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import Bestsellers from './components/Bestsellers'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-amber-50">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <Bestsellers />
      <footer className="border-t border-white/10 py-10 text-center text-amber-200/70">
        © {new Date().getFullYear()} HanuShreeJewels • Imitation Jewellery
      </footer>
    </div>
  )
}

export default App
