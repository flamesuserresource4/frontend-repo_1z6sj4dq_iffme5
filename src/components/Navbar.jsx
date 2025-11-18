import React from 'react'
import { ShoppingBag, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-amber-300 font-bold text-lg">HanuShreeJewels</a>
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-200/70" />
            <input placeholder="Search jewellery..." className="pl-9 pr-3 py-2 rounded-full bg-white/5 border border-white/10 text-amber-100 placeholder:text-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <a href="#cart" className="relative text-amber-100 p-2 rounded-full hover:bg-white/10 transition">
            <ShoppingBag />
            <span className="absolute -top-1 -right-1 text-[10px] bg-amber-500 text-white rounded-full px-1.5">0</span>
          </a>
        </div>
      </div>
    </header>
  )
}
