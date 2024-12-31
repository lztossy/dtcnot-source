'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { ProviderFormData } from '@/components/admin-panel'

type ProviderContextType = {
  providers: ProviderFormData[]
  addProvider: (provider: ProviderFormData) => void
}

const ProviderContext = createContext<ProviderContextType | undefined>(undefined)

export function ProviderProvider({ children }: { children: ReactNode }) {
  const [providers, setProviders] = useState<ProviderFormData[]>([])

  const addProvider = (provider: ProviderFormData) => {
    setProviders((prevProviders) => [...prevProviders, provider])
  }

  return (
    <ProviderContext.Provider value={{ providers, addProvider }}>
      {children}
    </ProviderContext.Provider>
  )
}

export function useProviders() {
  const context = useContext(ProviderContext)
  if (context === undefined) {
    throw new Error('useProviders must be used within a ProviderProvider')
  }
  return context
}

