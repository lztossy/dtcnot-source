'use client'

import React, { useState } from 'react'
import { Nav } from '@/components/nav'
import Link from 'next/link'
import { RequestForm } from '@/components/request-form'

export default function RequestPage() {
  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("/assets/new-gradient.jpg")' }}>
      <Nav onSearch={() => {}} />
      
      <main className="py-4 text-gray-200">
        <div className="px-4 pt-2">
          <div className="mb-2 text-center bg-transparent md:grid">
            <h1 className="font-mono text-2xl font-bold uppercase md:text-3xl text-lime-500">
              Request Listing
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Apply for your product to be added to our listings.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8">
          <RequestForm />
        </div>
      </main>

      <footer className="my-6 space-x-4 text-md text-center *:text-lime-600">
        <Link href="https://x.com/dtcnot" className="hover:text-lime-300">x</Link>
        <Link href="https://discord.gg/dtcnot" className="hover:text-lime-300">discord</Link>
        <Link href="https://t.me/dtcnot/" className="hover:text-lime-300">telegram</Link>
      </footer>
      <br></br>
    </div>
  )
}

