import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_30%_20%,#f59e0b,transparent_25%),radial-gradient(circle_at_70%_40%,#f97316,transparent_25%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-amber-100">
              HanuShreeJewels
            </h1>
            <p className="mt-4 text-amber-200/90">
              Elegant imitation jewellery crafted for every occasion. Discover necklaces, earrings, bangles, bridal sets and more.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#bestsellers" className="px-5 py-3 rounded-full bg-amber-500 text-white shadow hover:bg-amber-600 transition">Shop Bestsellers</a>
              <a href="#categories" className="px-5 py-3 rounded-full bg-white/10 text-amber-100 ring-1 ring-white/20 hover:bg-white/20 transition">Browse Categories</a>
            </div>
          </div>
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-200/20 to-rose-200/20 border border-white/10 backdrop-blur-sm p-1">
            <div className="w-full h-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
