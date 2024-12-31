'use client'

import React, { useState } from 'react'
import Head from 'next/head';
import { Nav } from '@/components/nav'
import { ProductCard } from '@/components/product-card'
import Link from 'next/link'
import { SearchFilters, ProviderType, Game } from '@/types/games'
import { providers } from '@/data/providers'





const ChangelogPage = () => {
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
    <div className="h-full text-gray-200 bg-fixed bg-black bg-center bg-cover font-samo" style={{ backgroundImage: "url(/assets/new-gradient.jpg)" }}>


    <Nav onSearch={handleSearch} />
    <div className="px-4 pt-2">
    <div className="mb-2 text-center bg-transparent md:grid">
          </div>
    </div>
    <main style={{ height: '699.5px' }}>
      {/* Content */}
      <div className="flex flex-col items-center">
        <h1 className="my-4 text-xl font-bold">Changelog</h1>

        {changelogEntries.map((entry, index) => (
          <div key={index} className={`p-2 mt-4 w-full max-w-lg border ${entry.borderColor} ${entry.bgColor}`}>
            <h3 className="text-xs text-white/50">{entry.date}</h3>
            <h2 className="font-bold uppercase">{entry.title}</h2>
            <p className="mt-1 text-sm font-normal text-white/80">{entry.description}</p>
          </div>
        ))}

      </div>

      {/* Footer */}

      </main>
      <footer className="my-6 space-x-4 text-md text-center *:text-lime-600">
        <Link href="https://x.com/dtcnot" className="hover:text-lime-300">x</Link>
        <Link href="https://discord.gg/dtcnot" className="hover:text-lime-300">discord</Link>
        <Link href="https://t.me/dtcnot/" className="hover:text-lime-300">telegram</Link>
      </footer>
      <br></br>
    </div>
  );
};

const changelogEntries = [
    {
      date: "December 22, 2024 - 09:43 UTC",
      title: "Chaos has been listed.",
      description: "Application based, and secure cheat. Popular and well-regarded.",
      borderColor: "border-blue-500/40",
      bgColor: "bg-blue-500/10",
    },
  
  {
    date: "December 19, 2024 - 03:08 UTC",
    title: "Foxyz has been listed.",
    description: "A trustworthy, efficient, and secure cheat. Popular and well-regarded.",
    borderColor: "border-blue-500/40",
    bgColor: "bg-blue-500/10",
  },

  {
    date: "December 18, 2024 - 11:28 UTC",
    title: "Officially released.",
    description: "Our list is now complete and officially released to the public!",
    borderColor: "border-blue-500/40",
    bgColor: "bg-blue-500/10",
  },
  // Add more entries here...
];

export default ChangelogPage;
