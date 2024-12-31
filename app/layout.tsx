import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ProviderProvider } from '@/contexts/ProviderContext'
import { Toaster } from 'react-hot-toast'
import React from 'react'
import { inter, samo } from './fonts'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const interFont = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DTCNOT.ME',
  description: 'Find only reputable & trusted cheats to spend your money on safely.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" className={`${interFont.className} ${samo.variable}`}>
      <body className="text-gray-200 font-samo">
        <UserProvider>
          <ProviderProvider>
            <div className="gradient fixed inset-0" />
            <div className="relative min-h-screen flex flex-col">
              <main className="flex-grow">
                {children}
              </main>
            </div>
            <Toaster />
          </ProviderProvider>
        </UserProvider>
      </body>
    </html>
  )
}

