import React, { useEffect, useState } from 'react'

const CATEGORIES = [
  { name: 'Necklaces', slug: 'necklaces', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Earrings', slug: 'earrings', image: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWNrbGFjZXN8ZW58MHwwfHx8MTc2MzQ3Njc4Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Rings', slug: 'rings', image: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Bangles', slug: 'bangles', image: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWNrbGFjZXN8ZW58MHwwfHx8MTc2MzQ3Njc4Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Bridal Sets', slug: 'bridal-sets', image: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWNrbGFjZXN8ZW58MHwwfHx8MTc2MzQ3Njc4Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Anklets', slug: 'anklets', image: 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWNrbGFjZXN8ZW58MHwwfHx8MTc2MzQ3Njc4Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-amber-100 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map(cat => (
            <a key={cat.slug} href={`#category-${cat.slug}`} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-square bg-cover bg-center" style={{backgroundImage: `url(${cat.image})`}} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-sm font-semibold text-amber-100 drop-shadow">{cat.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
