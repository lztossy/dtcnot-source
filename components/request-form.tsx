'use client'

import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ChevronDown, Check, Send, FileText, Box, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Checkbox } from '@headlessui/react'

export function RequestForm() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openSections, setOpenSections] = useState({
    categoryBranding: true,
    provision: false,
    time: false,
  })

  const categoryBrandingRef = useRef<{
    name: string;
    discord: string;
    website: string;
    role: string;
    usp: string;
    logo: string;
  }>({
    name: '',
    discord: '',
    website: '',
    role: '',
    usp: '',
    logo: '',
  })

  const provisionRef = useRef<{
    providerType: string[];
    gameType: string[];
    type: string[];
    userbase: string;
    undetectedDuration: string;
    detections: boolean;
    detectionPrevention: string;
  }>({
    providerType: [],
    gameType: [],
    type: [],
    userbase: '',
    undetectedDuration: '',
    detections: false,
    detectionPrevention: '',
  })

  const timeRef = useRef<{
    lastUpdate: string;
    releaseDate: string;
  }>({
    lastUpdate: '',
    releaseDate: '',
  })

  const handleInputChange = (section: string, name: string, value: any) => {
    switch (section) {
      case 'categoryBranding':
        (categoryBrandingRef.current as any)[name] = value;
        break;
      case 'provision':
        (provisionRef.current as any)[name] = value;
        break;
      case 'time':
        (timeRef.current as any)[name] = value;
        break;
    }
  }

  const handleSelectChange = (name: 'providerType' | 'gameType' | 'type', value: string) => {
    const currentValues = provisionRef.current[name];
    if (currentValues.includes(value)) {
      provisionRef.current[name] = currentValues.filter(v => v !== value);
    } else {
      provisionRef.current[name] = [...currentValues, value];
    }
    setOpenDropdown(null);
  }

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const formData = {
      ...categoryBrandingRef.current,
      ...provisionRef.current,
      ...timeRef.current,
    }

    const embed = {
      title: 'New Listing Request',
      color: 0x84CC16, // Green color
      thumbnail: {
        url: formData.logo
      },
      fields: [
        { name: 'Category Branding', value: '\u200B' },
        { name: 'Name', value: formData.name, inline: true },
        { name: 'Discord', value: formData.discord, inline: true },
        { name: 'Website', value: formData.website, inline: true },
        { name: 'Role', value: formData.role, inline: true },
        { name: 'Unique Selling Point (USP)', value: formData.usp },
        { name: 'Provision', value: '\u200B' },
        { name: 'Provider Type', value: formData.providerType.join(', '), inline: true },
        { name: 'Game Type', value: formData.gameType.join(', '), inline: true },
        { name: 'Type', value: formData.type.join(', '), inline: true },
        { name: 'Userbase', value: formData.userbase, inline: true },
        { name: 'How long undetected', value: formData.undetectedDuration, inline: true },
        { name: 'Detections', value: formData.detections ? 'Yes' : 'No', inline: true },
        { name: 'Detection Prevention', value: formData.detectionPrevention || 'N/A' },
        { name: 'Last Update', value: formData.lastUpdate, inline: true },
        { name: 'Release Date', value: formData.releaseDate, inline: true },
      ],
    }

    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ embed }),
      })

      if (response.ok) {
        alert('Request submitted successfully!')
        categoryBrandingRef.current = {
          name: '',
          discord: '',
          website: '',
          role: '',
          usp: '',
          logo: '',
        }
        provisionRef.current = {
          providerType: [],
          gameType: [],
          type: [],
          userbase: '',
          undetectedDuration: '',
          detections: false,
          detectionPrevention: '',
        }
        timeRef.current = {
          lastUpdate: '',
          releaseDate: '',
        }
        setOpenSections({...openSections})
      } else {
        throw new Error('Failed to submit request')
      }
    } catch (error: unknown) {
      console.error('Error submitting request:', error)
      let errorMessage = 'Failed to submit request. Please try again.'
      if (error instanceof Error) {
        errorMessage = error.message
      }
      alert(errorMessage)
    }
  }

  const CustomDropdown = ({ 
    label, 
    options, 
    value, 
    onChange, 
    name 
  }: { 
    label: string
    options: { value: string; label: string }[]
    value: string[]
    onChange: (value: string) => void
    name: string
  }) => (
    <div className="relative">
      <Label htmlFor={name}>{label} *</Label>
      <div className="relative">
        <div
          onClick={() => setOpenDropdown(openDropdown === name ? null : name)}
          className="flex items-center justify-between cursor-pointer px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-all duration-200 outline-none w-full"
        >
          <span>{value.length > 0 ? value.join(', ') : `Select ${label.toLowerCase()}`}</span>
          <ChevronDown 
            size={14} 
            className={`ml-1 transition-transform duration-200 ${openDropdown === name ? 'rotate-180' : ''}`}
          />
        </div>
        <AnimatePresence>
          {openDropdown === name && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-1 w-full py-1 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg shadow-xl z-50"
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => onChange(option.value)}
                  className="px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-lime-500/10 cursor-pointer transition-colors duration-150 flex items-center justify-between"
                >
                  <span>{option.label}</span>
                  {value.includes(option.value) && (
                    <Check size={14} className="text-green-500" />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  const FormSection = ({ title, name, icon, children }: { title: string, name: keyof typeof openSections, icon: React.ReactNode, children: React.ReactNode }) => (
    <div className="space-y-3">
      <div 
        className="flex items-center space-x-2 cursor-pointer py-2 border-b border-gray-700"
        onClick={() => toggleSection(name)}
      >
        {icon}
        <h2 className="text-lg font-bold text-lime-500 flex items-center">
          <span>{title}</span>
        </h2>
        <ChevronDown
          size={18}
          className={`ml-auto transition-transform duration-200 ${openSections[name] ? 'rotate-180' : ''}`}
        />
      </div>
      <AnimatePresence>
        {openSections[name] && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/30 p-4 rounded-lg backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 lined-background opacity-5 pointer-events-none"></div>
      <div className="relative z-10">
        <FormSection title="Branding" name="categoryBranding" icon={<FileText size={18} className="text-lime-500" />}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name <span className="text-lime-500">*</span></Label>
              <Input
                id="name"
                name="name"
                defaultValue={categoryBrandingRef.current.name}
                onChange={(e) => handleInputChange('categoryBranding', 'name', e.target.value)}
                required
                className="w-full px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500"
              />
            </div>
            <div>
              <Label htmlFor="discord">Discord <span className="text-lime-500">*</span></Label>
              <Input
                id="discord"
                name="discord"
                defaultValue={categoryBrandingRef.current.discord}
                onChange={(e) => handleInputChange('categoryBranding', 'discord', e.target.value)}
                required
                className="w-full px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500"
              />
            </div>
            <div>
              <Label htmlFor="logo">Discord Server Icon URL <span className="text-lime-500">*</span></Label>
              <Input 
                id="logo" 
                name="logo" 
                defaultValue={categoryBrandingRef.current.logo} 
                onChange={(e) => handleInputChange('categoryBranding', 'logo', e.target.value)} 
                required 
                placeholder="https://cdn.discordapp.com/icons/..." 
                className="w-full px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500" 
              />
            </div>
            <div>
              <Label htmlFor="website">Website <span className="text-lime-500">*</span></Label>
              <Input
                id="website"
                name="website"
                defaultValue={categoryBrandingRef.current.website}
                onChange={(e) => handleInputChange('categoryBranding', 'website', e.target.value)}
                required
                className="w-full px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500"
              />
            </div>
            <div>
              <Label htmlFor="role">Role <span className="text-lime-500">*</span></Label>
              <Input
                id="role"
                name="role"
                defaultValue={categoryBrandingRef.current.role}
                onChange={(e) => handleInputChange('categoryBranding', 'role', e.target.value)}
                required
                placeholder="Owner, developer, manager, etc."
                className="w-full px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500"
              />
            </div>
            <div>
              <Label htmlFor="usp">Unique Selling Point (USP) <span className="text-lime-500">*</span></Label>
              <Input
                id="usp"
                name="usp"
                defaultValue={categoryBrandingRef.current.usp}
                onChange={(e) => handleInputChange('categoryBranding', 'usp', e.target.value)}
                required
                placeholder="What makes your product unique?"
                className="w-full px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500"
              />
            </div>
            <br></br>
          </div>
        </FormSection>

        <FormSection title="Provision" name="provision" icon={<Box size={18} className="text-lime-500" />}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <CustomDropdown
              label="Provider Type"
              name="providerType"
              value={provisionRef.current.providerType}
              onChange={(value) => handleSelectChange('providerType', value)}
              options={[
                { value: 'SOFTWARE', label: 'Software' },
                { value: 'DMA', label: 'DMA' },
                { value: 'SPOOFER', label: 'Spoofer' },
              ]}
            />
            <CustomDropdown
              label="Game Type"
              name="gameType"
              value={provisionRef.current.gameType}
              onChange={(value) => handleSelectChange('gameType', value)}
              options={[
                { value: 'Fortnite', label: 'Fortnite' },
                { value: 'VALORANT', label: 'VALORANT' },
                { value: 'Apex Legends', label: 'Apex Legends' },
                { value: 'Call of Duty', label: 'Call of Duty' },
              ]}
            />
            <CustomDropdown
              label="Type"
              name="type"
              value={provisionRef.current.type}
              onChange={(value) => handleSelectChange('type', value)}
              options={[
                { value: 'PUBLIC', label: 'Public' },
                { value: 'SLOTTED', label: 'Slotted' },
              ]}
            />
            <div>
              <Label htmlFor="userbase">Userbase <span className="text-lime-500">*</span></Label>
              <Input
                id="userbase"
                name="userbase"
                defaultValue={provisionRef.current.userbase}
                onChange={(e) => handleInputChange('provision', 'userbase', e.target.value)}
                required
                className="w-full px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500"
              />
            </div>
            <div>
              <Label htmlFor="undetectedDuration">How long undetected <span className="text-lime-500">*</span></Label>
              <Input
                id="undetectedDuration"
                name="undetectedDuration"
                defaultValue={provisionRef.current.undetectedDuration}
                onChange={(e) => handleInputChange('provision', 'undetectedDuration', e.target.value)}
                required
                className="w-full px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={provisionRef.current.detections}
                onChange={(checked) => { provisionRef.current.detections = checked; setOpenSections({...openSections}) }}
                className={`${
                  provisionRef.current.detections ? 'bg-lime-500' : 'bg-gray-700'
                } w-6 h-6 rounded-md transition-colors duration-200 flex items-center justify-center`}
              >
                {provisionRef.current.detections && <Check className="w-4 h-4 text-white" />}
              </Checkbox>
              <Label htmlFor="detections">Has there ever been detections?</Label>
            </div>
            <br></br>
          </div>
          {provisionRef.current.detections && (
            <div className="mt-3">
              <Label htmlFor="detectionPrevention">How did you prevent detections? <span className="text-lime-500">*</span></Label>
              <Textarea 
                id="detectionPrevention" 
                name="detectionPrevention" 
                defaultValue={provisionRef.current.detectionPrevention} 
                onChange={(e) => handleInputChange('provision', 'detectionPrevention', e.target.value)} 
                required 
                className="px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500 w-full" 
              />
            </div>
            
          )}
        </FormSection>

        <FormSection title="Time" name="time" icon={<Clock size={18} className="text-lime-500" />}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <Label htmlFor="lastUpdate">Last update <span className="text-lime-500">*</span></Label>
              <Input
                id="lastUpdate"
                name="lastUpdate"
                type="date"
                defaultValue={timeRef.current.lastUpdate}
                onChange={(e) => handleInputChange('time', 'lastUpdate', e.target.value)}
                required
                className="w-full px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500"
              />
            </div>
            <div>
              <Label htmlFor="releaseDate">Release Date (Approx) <span className="text-lime-500">*</span></Label>
              <Input
                id="releaseDate"
                name="releaseDate"
                type="date"
                defaultValue={timeRef.current.releaseDate}
                onChange={(e) => handleInputChange('time', 'releaseDate', e.target.value)}
                required
                className="w-full px-0.5 py-1 text-sm text-gray-400 bg-transparent border-b border-lime-500/50 hover:border-lime-500 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-lime-500"
              />
            </div>
            <br></br>
          </div>
        </FormSection>

        <Button type="submit" className="w-full bg-lime-600 hover:bg-lime-600 text-white flex items-center justify-center space-x-2">
          <Send size={18} />
          <span>Submit Request</span>
        </Button>
      </div>
    </form>
  )
}

