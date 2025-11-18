import React, { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Bestsellers() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${BACKEND}/api/products?bestseller=true&limit=8`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="bestsellers" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-amber-100">Bestselling Jewellery</h2>
          <a href="#all-products" className="text-amber-300 text-sm">View all</a>
        </div>
        {loading ? (
          <p className="text-amber-200/80">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((p) => (
              <article key={p.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="aspect-square bg-center bg-cover" style={{backgroundImage: `url(${p.images?.[0] || 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop'})`}} />
                <div className="p-3">
                  <h3 className="text-amber-100 text-sm font-semibold line-clamp-1">{p.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-amber-200/90 text-sm">₹{p.price}</span>
                    <button className="text-xs px-3 py-1 rounded-full bg-amber-500 text-white hover:bg-amber-600">Add</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
