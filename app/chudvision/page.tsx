'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiPaypalLogoLight } from "react-icons/pi"
import { LuComputer } from "react-icons/lu"
import { gameColors, SearchFilters } from '@/types/games'
import dynamic from 'next/dynamic'

const DynamicNav = dynamic(() => import('@/components/nav').then((mod) => mod.Nav), { ssr: false })

export default function ReportedPage() {
  const [searchResults, setSearchResults] = useState<{ provider: string; game: string } | null>(null)

  const handleSearch = (filters: SearchFilters) => {
    if (filters.provider.toLowerCase() === 'reported' || filters.game.toLowerCase() === 'fortnite') {
      setSearchResults({ provider: 'Reported', game: 'FORTNITE'})
    } else {
      setSearchResults(null)
    }
  }

  return (
    <div className="min-h-screen text-gray-200 bg-fixed bg-black bg-center bg-cover font-samo" style={{ backgroundImage: "url('/assets/new-gradient.jpg')" }}>
      <DynamicNav onSearch={handleSearch} />
      <main>
        {searchResults ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <p>Provider: {searchResults.provider}</p>
            <p>Game: {searchResults.game}</p>
          </div>
        ) : (
          <>
            <ProductInfo />
            
            <Features />
            <div className="w-full my-2 border-t-2 border-opacity-50 border-dashed border-t-red-400/10"></div>
            <TrackHistory />
            <div className="w-full my-2 border-t-2 border-opacity-50 border-dashed border-t-red-400/10"></div>
            <CommentSection />
          </>
        )}
      </main>
      <footer className="my-6 space-x-4 text-md text-center *:text-lime-600">
        <Link href="https://x.com/dtcnot" className="hover:text-lime-500">x</Link>
        <Link href="https://discord.gg/dtcnot" className="hover:text-lime-500">discord</Link>
        <Link href="https://t.me/dtcnot/" className="hover:text-lime-500">telegram</Link>
      </footer>
      <br></br><br></br>
    </div>
  )
}

function ProductInfo() {
  return (
    <section className="flex flex-col items-center justify-center p-2 my-4 mt-8 mb-2 space-y-4 font-bold text-md md:text-md">
      <div className="flex items-center justify-center space-x-4">
        <Image 
          className="rounded-full size-10 md:size-14 bg-white/25" 
          src="/assets/chudlogo.jpg"
          alt=""
          width={56}
          height={56}
        />
        <span className="flex items-center justify-center capitalize">
          <span className="text-xl font-bold md:text-2xl">Chudvision</span>
        </span>
      </div>
      
      <div className="flex flex-wrap items-center justify-center space-x-2">
        <Link href="https://chudvision.net/" target="_blank" className="flex justify-center items-center px-2 py-1 space-x-1 text-center text-gray-300 rounded border border-gray-600 transition duration-300 bg-zinc-900 hover:border-lime-600 hover:text-lime-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
            <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
            <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
            <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
            <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
            <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
            <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
            <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
            <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
          </svg>
          <span>Website</span>
        </Link>
        
        <Link href="https://discord.com/invite/tfVfrRr4HR" target="_blank" className="flex justify-center items-center px-2 py-1 space-x-1 text-center text-orange-600 rounded border border-orange-900 transition duration-300 bg-zinc-900 hover:border-lime-600 hover:text-lime-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
            <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
            <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
            <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
            <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
            <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
            <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
            <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
            <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
          </svg>
          <span>Discord</span>
        </Link>


      </div>
      
      <div className="flex items-center justify-center max-w-md mt-4 text-xs space-x-2">
        <span className="px-2 py-1 text-center text-emerald-400 rounded border bg-zinc-900/50 border-zinc-700 hover:text-lime-500 transition-colors duration-200" title="CARD">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
        </span>
        <span className="px-2 py-1 text-center text-emerald-400 rounded border bg-zinc-900/50 border-zinc-700 hover:text-lime-500 transition-colors duration-200" title="BANK">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
          </svg>
        </span>
        <span className="px-2 py-1 text-center text-yellow-500 rounded border bg-zinc-900/50 border-zinc-700 hover:text-lime-500 transition-colors duration-200" title="BTC">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
          </svg>
        </span>
        <span className="px-2 py-1 text-center text-gray-400 rounded border bg-zinc-900/50 border-zinc-700 hover:text-lime-500 transition-colors duration-200" title="PAYPAL">
          <PiPaypalLogoLight className="w-4 h-4" />
        </span>
      </div>
      
      <p className="max-w-lg p-4 text-sm border rounded-lg md:text-base border-white/20 bg-gray-500/10">
      Trustworthy, efficient, and secure cheat. Popular and well-regarded.
      </p>
    </section>
  )
}

function DetectionLevel() {
  return (
    <section className="flex items-center justify-center px-2">
      <div className="flex flex-col justify-center max-w-lg p-4 text-sm border rounded-lg md:text-base border-green-500/20 bg-green-500/10">
        <h2 className="flex items-center space-x-2 text-lg font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 circle-check-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path>
          </svg>
          <span> DETECTION LEVEL <b>0</b> </span>
        </h2>
        <p className="mt-2 text-sm">
          The software ToS <b className="font-bold">does not mention</b> that it will never get detected.
        </p>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <div className="mb-5 space-y-1.5 max-w-lg">
        <p className="block px-3 py-1.5 text-sm font-bold rounded-lg border transition duration-300 border-amber-300/30 bg-amber-300/10 hover:bg-amber-300/20 hover:border-amber-100/50">
          Please ensure that you verify their status prior to making a purchase. Our statement regarding its
          trustworthiness and undetectability does not imply that it is current or up to date, <Link href="https://discord.com/invite/tfVfrRr4HR" className="underline">chudvision.net/discord</Link>
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-2 mt-2 auto-cols-max md:grid-cols-2">
        {['Externally running', 'Prioritizing detection'].map((feature, index) => (
          <div key={index} className="block py-1.5 px-3 text-center text-sm border rounded-lg transition duration-300 border-green-900 bg-green-900/30 hover:bg-green-900/50 hover:border-green-700 hover:text-lime-500">
            <span className="flex items-center">
              <span className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600 circle-check-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor"></path>
                </svg>
              </span>
              <span className="flex-1 ml-2 overflow-hidden capitalize-first whitespace-nowrap overflow-ellipsis">
                {feature}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

function TrackHistory() {
  return (
    <section className="flex flex-col items-center justify-center p-4" id="tos">
      <Link href="/about#tos-checker" className="text-xl font-bold hover:text-lime-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 calendar-cog" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5"></path>
          <path d="M16 3v4"></path>
          <path d="M8 3v4"></path>
          <path d="M4 11h16"></path>
          <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M19.001 15.5v1.5"></path>
          <path d="M19.001 21v1.5"></path>
          <path d="M22.032 17.25l-1.299 .75"></path>
          <path d="M17.27 20l-1.3 .75"></path>
          <path d="M15.97 17.25l1.3 .75"></path>
          <path d="M20.733 20l1.3 .75"></path>
        </svg>
        <span>Track History</span>
        <span className="text-xs text-white/30">?</span>
      </Link>
      <p className="max-w-sm text-xs text-center text-gray-500 text-opacity-75">Manual, weekly checks</p>
      <p className="max-w-sm mt-1 text-xs text-center text-gray-600 text-opacity-75">Last Check: Unknown</p>
      
      <div className="max-w-lg">
        <details className="py-2">
          <summary className="max-w-md mt-2 text-lg font-bold text-center text-blue-400 text-opacity-75 cursor-pointer hover:text-lime-500" style={{textAlign: 'start'}}></summary>
          <div className="px-3 py-2 mt-2 border rounded-md w-full border-blue-900 bg-blue-900/30">
            <h3 className="text-sm font-bold uppercase">No History Available</h3>
            <p className="my-1.5 text-sm">This product does not have any recorded history yet.</p>
          </div>
        </details>
      </div>
    </section>
  )
}

function CommentSection() {
  useEffect(() => {
    // Dynamically adding the Utterances script
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "rzr1931/dtcnot");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-dark");
    script.crossOrigin = "anonymous";
    script.async = true;

    // Appending the script to the comment section div
    const commentSection = document.getElementById("comment-section");
    if (commentSection) {
      commentSection.appendChild(script);
    }
  }, []);
  return (
    <section className="flex flex-col items-center justify-center p-4 mb-16" id="discuss">
      <Link href="/about#comments" target="_blank" className="text-xl font-bold hover:text-lime-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 messages" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
          <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
        </svg>
        <span>Comments</span>
        <span className="text-xs text-white/30">?</span>
      </Link>
      <p className="max-w-sm pb-4 mt-1 text-xs text-center text-gray-500 text-opacity-75">
        Although comments are moderated, beware of fake reviews. Always do your own research.
      </p>
      <div id="comment-section" className="w-full max-w-xl mx-2 break-all sm:mx-6">

      </div>
    </section>
  )
}

