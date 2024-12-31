'use client'

import React, { useState } from 'react'
import { Nav } from '@/components/nav'
import { ProductCard } from '@/components/product-card'
import Link from 'next/link'
import { SearchFilters, ProviderType, Game } from '@/types/games'
import { providers } from '@/data/providers'

export default function Home() {
  const [filteredProviders, setFilteredProviders] = useState(providers)
  const [notFound, setNotFound] = useState(false)
  const [activeCategory, setActiveCategory] = useState<ProviderType | ''>('')

  const handleSearch = (filters: SearchFilters) => {
    const { provider, game, type } = filters
    const filtered = providers.filter(p => {
      const matchProvider = provider ? p.title.toLowerCase().includes(provider.toLowerCase()) : true
      const matchGame = game ? p.games.includes(game) : true
      const matchType = type ? p.type === type : true
      return matchProvider && matchGame && matchType
    })

    setFilteredProviders(filtered)
    setNotFound(filtered.length === 0)
  }

  const handleCategoryClick = (category: ProviderType | '') => {
    setActiveCategory(category)
    handleSearch({ provider: '', game: '', type: category })
  }


  return (
<div className="flex flex-col min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("/assets/new-gradient.jpg")' }}>
  <main className="flex-grow text-lime-500" >
    <Nav onSearch={handleSearch} />
    <div className="px-4 pt-2">
    <div className="mb-2 text-center bg-transparent md:grid">
            <p className="font-mono text-sm font-bold uppercase md:text-base">
              Goodbye Detected, hello undetected.
            </p>
          </div>
    </div>

        <div className="mt-3 text-center text-gray-500">
          <button
            onClick={() => handleCategoryClick('')}
            className={`p-1 text-xs ${activeCategory === '' ? 'border-b border-lime-500/60 text-lime-500' : ''}`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryClick('SOFTWARE')}
            className={`p-1 text-xs ${activeCategory === 'SOFTWARE' ? 'border-b border-lime-500/60 text-lime-500' : ''}`}
          >
            Software
          </button>
          <button
            onClick={() => handleCategoryClick('DMA')}
            className={`p-1 text-xs ${activeCategory === 'DMA' ? 'border-b border-lime-500/60 text-lime-500' : ''}`}
          >
            DMA
          </button>
          <button
            onClick={() => handleCategoryClick('SPOOFER')}
            className={`p-1 text-xs ${activeCategory === 'SPOOFER' ? 'border-b border-lime-500/60 text-lime-500' : ''}`}
          >
            Spoofers
          </button>
        </div>

        <section className="flex justify-center items-center px-3 pb-12 mt-4">
          {notFound ? (
            <div className="text-center text-gray-400">
              <p className="text-xl font-bold">No results found</p>
              <p className="mt-2">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 max-w-6xl lg:grid-cols-3">
              {filteredProviders.map((provider, index) => (
                <ProductCard key={index} {...provider} />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="text-lime-600">
  </footer>
</div>
  )
}

