'use client'

import React, { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { Game, ProviderType, SearchFilters } from '@/types/games'

interface SearchFilterProps {
  onSearch: (filters: SearchFilters) => void;
}

export function SearchFilter({ onSearch }: SearchFilterProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    provider: '',
    game: '',
    type: '',
  })
  const [isOpen, setIsOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(filters)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input
        type="text"
        name="provider"
        placeholder="Search"
        value={filters.provider}
        onChange={handleInputChange}
        className="px-0.5 py-1 md:text-sm text-xs text-gray-400 bg-transparent border-b border-lime-500/50 focus:border-lime-500 transition-colors duration-200 outline-none min-w-[80px]"
      />
      <div className="relative">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center cursor-pointer px-0.5 py-1 md:text-sm text-xs text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-all duration-200 outline-none min-w-[90px]"
        >
          <span className="flex-1">{filters.game || 'All Games'}</span>
          <ChevronDown 
            size={14} 
            className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-40 py-1 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg shadow-xl z-50">
            <div 
              onClick={() => {
                setFilters(prev => ({ ...prev, game: '' }))
                setIsOpen(false)
              }}
              className="px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-lime-500/10 cursor-pointer transition-colors duration-150"
            >
              ALL GAMES
            </div>
            {['FORTNITE', 'VALORANT', 'APEX LEGENDS', 'CALL OF DUTY', 'RUST', 'R6S', 'DAYZ', 'OVERWATCH 2', 'PUBG'].map((game) => (
              <div
                key={game}
                onClick={() => {
                  setFilters(prev => ({ ...prev, game: game as Game }))
                  setIsOpen(false)
                }}
                className="px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-lime-500/10 cursor-pointer transition-colors duration-150"
              >
                {game}
              </div>
            ))}
          </div>
        )}
      </div>
      <button type="submit" className="text-lime-500 hover:text-lime-400 transition-colors duration-200">
        <Search size={14} className="mt-1" />
      </button>
    </form>
  )
}

