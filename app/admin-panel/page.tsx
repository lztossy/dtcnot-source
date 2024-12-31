'use client'

import { AdminPanel } from '@/components/admin-panel'
import { Nav } from '@/components/nav'
import Link from 'next/link'

export default function AdminPanelPage() {
  const handleSearch = () => {
    // Implement search functionality here
  }

  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("/assets/new-gradient.webp")' }}>
      <Nav onSearch={handleSearch} />
      
      <main className="py-4 text-gray-200">
        <div className="px-4 pt-2">
          <div className="mb-2 text-center bg-transparent md:grid">
            <h1 className="font-mono text-2xl font-bold uppercase md:text-3xl text-red-500">
              Admin Panel
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Add new providers to the platform
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <AdminPanel />
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

