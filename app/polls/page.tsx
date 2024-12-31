'use client'

import React, { useState, useEffect } from 'react'
import { Nav } from '@/components/nav'
import Link from 'next/link'
import Image from 'next/image'
import { MoreVertical, Check, Search, Vote, ThumbsUp, X, Star, AlertTriangle, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { gameColors, Game } from '@/types/games'

type Provider = {
  name: string
  icon: string
  tags: string[]
  pros: string[]
  cons: string[]
  excels: string[]
  doesNotExcel: string[]
}

type Poll = {
  title: string
  type: string
  category: string
  game: Game
  providers: Provider[]
  endTime: number // Unix timestamp
}

function useCountdown(endTime: number) {
  const [timeLeft, setTimeLeft] = useState<string>('')

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime - Date.now()
      
      if (difference <= 0) {
        return 'Poll ended'
      }

      const hours = Math.floor(difference / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      return `${hours}h ${minutes}m ${seconds}s`
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [endTime])

  return timeLeft
}

const polls: Poll[] = [
  {
    title: "Software",
    type: "SPOOFER",
    category: "PERMANENT",
    game: "UNIVERSAL",
    endTime: Date.now() + 24 * 60 * 60 * 1000, // 24 hours from now
    providers: [
      {
        name: "SYNC",
        icon: "/assets/sync.webp",
        tags: ["Undetected", "Popular", "Stable"],
        pros: ["User-friendly interface", "Regular updates", "Active development"],
        cons: ["Higher price point"],
        excels: ["Stability", "Feature set", "Update frequency"],
        doesNotExcel: ["Customer support response time"]
      },
      {
        name: "VERSE ",
        icon: "/assets/verse.webp",
        tags: ["Multi-game", "Affordable", "New"],
        pros: ["Affordable", "Wide game support", "Modern UI"],
        cons: ["Less frequent updates"],
        excels: ["Value for money", "Game compatibility"],
        doesNotExcel: ["Advanced features", "Community size"]
      },
      {
        name: "Sickk Services",
        icon: "/assets/sickk.webp",
        tags: ["Customizable", "Advanced", "Stable"],
        pros: ["Highly customizable", "Active community", "Feature-rich"],
        cons: ["Steeper learning curve"],
        excels: ["Flexibility", "Community support", "Advanced features"],
        doesNotExcel: ["Ease of use for beginners"]
      }
    ]
  },
  {
    title: "Software",
    type: "Software",
    category: "Private",
    game: "VALORANT",
    endTime: Date.now() + 24 * 60 * 60 * 1000,
    providers: [
      {
        name: "WannaCry",
        icon: "/assets/wannacry.webp",
        tags: ["Premium", "Exclusive", "Stable"],
        pros: ["High-end features", "Personalized support", "Premium experience"],
        cons: ["Limited availability"],
        excels: ["Performance", "Exclusivity", "Support quality"],
        doesNotExcel: ["Accessibility for new users"]
      },
      {
        name: "Dummy Provider 2",
        icon: "/assets/wannacry.webp",
        tags: ["Specialized", "Premium", "New"],
        pros: ["Specialized features", "Regular updates", "Dedicated support"],
        cons: ["Higher price point"],
        excels: ["Niche game support", "Feature depth"],
        doesNotExcel: ["Broad game compatibility"]
      },
      {
        name: "Dummy Provider 3",
        icon: "/assets/wannacry.webp",
        tags: ["Cutting-edge", "Premium", "Advanced"],
        pros: ["Innovative features", "Early access to updates", "Unique features"],
        cons: ["Requires technical knowledge"],
        excels: ["Bleeding-edge technology", "Innovation"],
        doesNotExcel: ["Documentation for beginners"]
      }
    ]
  }
]

export default function PollsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredPolls = polls.filter(poll => 
    poll.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poll.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poll.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poll.game.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poll.providers.some(provider => 
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  )

  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center bg-black" style={{ backgroundImage: 'url("/assets/new-gradient.jpg")' }}>
      <Nav onSearch={() => {}} />
      
      <main className="py-4 text-gray-200 scale-90 origin-top">
        <div className="px-4 pt-2">
          <div className="mb-8 text-center bg-transparent md:grid">
            <h1 className="font-mono text-2xl font-bold uppercase md:text-3xl text-red-500">
              Provider Polls
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Compare and vote for your favorite providers
            </p>
            <div className="mt-6 flex justify-center">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search polls..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg pl-10 focus:outline-none focus:border-red-500/50 transition-colors"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 space-y-12 px-4">
          {filteredPolls.map((poll, index) => (
            <PollSection key={index} poll={poll} index={index + 1} />
          ))}
        </div>

        <div className="text-center mt-12 mb-8">
          <p className="text-gray-400">
            Don't see your product?{' '}
            <Link href="https://discord.gg/dtcnot" className="text-red-500 hover:text-red-400 transition-colors">
              Join our Discord
            </Link>
          </p>
        </div>
      </main>

      <footer className="my-6 space-x-4 text-md text-center *:text-red-600">
        <Link href="https://x.com/dtcnot" className="hover:text-red-300">x</Link>
        <Link href="https://discord.gg/dtcnot" className="hover:text-red-300">discord</Link>
        <Link href="https://t.me/dtcnot/" className="hover:text-red-300">telegram</Link>
      </footer>
    </div>
  )
}

function PollSection({ poll, index }: { poll: Poll; index: number }) {
  const timeLeft = useCountdown(poll.endTime)
  
  return (
    <section className="space-y-6 bg-gray-800/30 p-8 rounded-lg backdrop-blur-md relative overflow-hidden border border-gray-700/20">
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 lined-background opacity-5 pointer-events-none"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-3">
            <span className="px-3 py-1 text-sm bg-gray-700/50 rounded-lg border border-gray-600/20">
               #{index}
            </span>
            {poll.title}{' '}
            <span className="px-3 py-1 text-sm bg-gray-700/50 rounded-lg border border-gray-600/20">
              {poll.type}
            </span>
            <span className="px-3 py-1 text-sm bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/20">
              {poll.category}
            </span>
            <span className={`px-3 py-1 text-sm rounded-lg border border-gray-600/20 ${gameColors[poll.game]}`}>
              {poll.game}
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Clock size={16} />
          <span className="text-sm">{timeLeft}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {poll.providers.map((provider, index) => (
          <ProviderCard key={index} provider={provider} />
        ))}
      </div>
    </section>
  )
}

function ProviderCard({ provider }: { provider: Provider }) {
  const [showDetails, setShowDetails] = useState(false)
  const [voted, setVoted] = useState(false)

  return (
    <div className="bg-gray-700/50 rounded-lg p-4 relative border border-gray-600/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Image
            src={provider.icon}
            alt={`${provider.name} icon`}
            width={40}
            height={40}
            className="rounded-full"
          />
          <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
        </div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <MoreVertical size={20} />
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {provider.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/20">
            {tag}
          </span>
        ))}
      </div>
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 mt-4 overflow-hidden"
          >
            <DetailSection title="Pros" items={provider.pros} icon={<ThumbsUp size={16} className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5" />} />
            <DetailSection title="Cons" items={provider.cons} icon={<X size={16} className="mr-2 text-red-500 flex-shrink-0 mt-0.5" />} />
            <DetailSection title="Excels in" items={provider.excels} icon={<Star size={16} className="mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />} />
            <DetailSection title="Doesn't excel in" items={provider.doesNotExcel} icon={<AlertTriangle size={16} className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" />} />
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setVoted(!voted)}
        className={`mt-4 w-full py-2 rounded-md transition-all duration-300 flex items-center justify-center gap-2
          ${voted 
            ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
            : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
      >
        {voted ? (
          <>
            <Check size={18} />
            <span>Voted</span>
          </>
        ) : (
          <>
            <Vote size={18} />
            <span>Vote</span>
          </>
        )}
      </button>
    </div>
  )
}

function DetailSection({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-300 mb-2">{title}</h4>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-sm">
            {icon}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

