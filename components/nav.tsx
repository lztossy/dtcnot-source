'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchFilter } from './search-filter'
import { SearchFilters } from '@/types/games'
import { Menu, X } from 'lucide-react'

interface NavProps {
  onSearch: (filters: SearchFilters) => void;
}

export function Nav({ onSearch }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full bg-transparent backdrop-blur-sm bg-opacity-20">
      <div className="flex flex-col items-center justify-between w-full max-w-6xl px-4 py-4 mx-auto md:flex-row">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <Image 
              src="/assets/logo.png" 
              alt="Logo" 
              width={192}
              height={48}
              className="pt-2 max-w-48 lg:max-w-48"
            />
          </Link>
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className={`flex flex-col items-center w-full space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:w-auto ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4 [&>a]:inline [&>a]:text-xs">
            <Link href="/" className="px-1 py-1 font-semibold md:text-base text-gray-500 hover:text-lime-500">
              Home
            </Link>
            <Link href="/about" className="px-1 py-1 text-gray-500 transition duration-300 md:text-base hover:text-lime-500">
              About
            </Link>
            <Link href="/about#support" className="px-1 py-1 text-gray-500 transition duration-300 md:text-base hover:text-lime-500">
              Support
            </Link>
            <Link href="https://discord.gg/dtcnot" className="px-1 py-1 text-gray-500 transition duration-300 md:text-base hover:text-lime-500">
              Discord
            </Link>
          </div>
          <SearchFilter onSearch={onSearch} />
        </div>
      </div>
    </nav>
  )
}

