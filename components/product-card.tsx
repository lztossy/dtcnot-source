import React from 'react'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Game, gameColors } from '@/types/games'

interface ProductCardProps {
  href: string
  image: string
  title: string
  description: string
  type: string
  games: Game[]  // Changed from game to games (array)
  verified?: boolean
  count?: number
}

export function ProductCard({
  href,
  image,
  title,
  description,
  type,
  games,  // Updated prop name
  verified,
  count
}: ProductCardProps) {
  return (
    <Link href={href} className="w-full max-w-md">
      <div className="flex flex-col justify-between p-4 bg-gray-700 bg-opacity-30 rounded-lg border border-transparent shadow-lg backdrop-blur-md transition duration-500 hover:border-lime-600/70">
        <div className="flex items-center">
          <Image
            src={image}
            alt={`${title} logo`}
            width={48}
            height={48}
            className="mr-4 w-12 h-12 rounded-full bg-white/10"
          />
          <div className="flex flex-col justify-start w-full text-lg font-bold text-white md:text-xl">
            <span className="flex items-center pb-1 w-full text-base font-bold">
              {verified && (
                <CheckCircle className="inline size-5 text-blue-400/80" />
              )}
              <span className="flex-1 text-sm capitalize whitespace-nowrap sm:text-base ms-3">
                {title}
              </span>
              {count !== undefined && (
                <span className="inline-flex justify-center items-center px-2 py-0.5 text-xs font-medium rounded ms-3 bg-lime-900 border-lime-800 text-white/70">
                  {count}
                </span>
              )}
            </span>
            <span className="block pr-1 mt-2 text-xs font-normal text-opacity-60 text-white/60">
              {description}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-start items-center gap-2 mt-4 text-xs">
          <span className="px-2 py-1 text-xs font-bold uppercase rounded border text-white/70 bg-zinc-900 border-zinc-700">
            {type}
          </span>
          {games.map((game) => (
            <span 
              key={game}
              className={`px-2 py-1 text-xs font-medium rounded border bg-zinc-900 border-zinc-700 ${gameColors[game]}`}
            >
              {game}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

