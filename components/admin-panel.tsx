'use client'

import React, { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Loader2, Plus, Trash2 } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useProviders } from '@/contexts/ProviderContext'

const providerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  logo: z.instanceof(File).optional(),
  discord: z.string().url('Must be a valid URL'),
  website: z.string().url('Must be a valid URL'),
  gameType: z.enum(['FORTNITE', 'VALORANT', 'APEX LEGENDS', 'CALL OF DUTY', 'DAYZ', 'OVERWATCH 2', 'PUBG']),
  description: z.string().min(1, 'Description is required'),
  providerType: z.enum(['SOFTWARE', 'DMA', 'SPOOFER']),
  type: z.enum(['PUBLIC', 'SLOTTED']),
  detectionLevel: z.number().min(0).max(10),
  noPersonalInfo: z.boolean(),
  acceptingCardPayments: z.boolean(),
  paymentMethods: z.object({
    card: z.boolean(),
    bank: z.boolean(),
    btc: z.boolean(),
    paypal: z.boolean(),
  }),
  userbase: z.string().min(1, 'Userbase is required'),
  undetectedDuration: z.string().min(1, 'Undetected duration is required'),
  detections: z.boolean(),
  detectionPrevention: z.string().optional(),
  lastUpdate: z.string().min(1, 'Last update is required'),
  releaseDate: z.string().min(1, 'Release date is required'),
  trackHistory: z.array(
    z.object({
      event: z.string().min(1, 'Event is required'),
      date: z.string().min(1, 'Date is required'),
    })
  ),
})

type ProviderFormData = z.infer<typeof providerSchema>

export type { ProviderFormData };

export function AdminPanel() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProviderFormData>({
    resolver: zodResolver(providerSchema),
    defaultValues: {
      paymentMethods: {
        card: false,
        bank: false,
        btc: false,
        paypal: false,
      },
      trackHistory: [{ event: '', date: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'trackHistory',
  })

  const watchDetections = watch('detections')
  const { addProvider } = useProviders()

  const onSubmit = async (data: ProviderFormData) => {
    setIsSubmitting(true)
    try {
      // Add the new provider to the context
      addProvider(data)

      toast.success('Provider added successfully!')
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Failed to add provider. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Basic Information</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register('name')} />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="logo">Logo</Label>
            <Input id="logo" type="file" accept="image/*" onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                setValue('logo', file)
              }
            }} />
            {errors.logo && <p className="text-red-500">{errors.logo.message}</p>}
          </div>
          <div>
            <Label htmlFor="discord">Discord</Label>
            <Input id="discord" {...register('discord')} />
            {errors.discord && <p className="text-red-500">{errors.discord.message}</p>}
          </div>
          <div>
            <Label htmlFor="website">Website</Label>
            <Input id="website" {...register('website')} />
            {errors.website && <p className="text-red-500">{errors.website.message}</p>}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Provider Details</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="gameType">Game Type</Label>
            <Select onValueChange={(value) => setValue('gameType', value as ProviderFormData['gameType'])}>
              <SelectTrigger>
                <SelectValue placeholder="Select game type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Fortnite">Fortnite</SelectItem>
                <SelectItem value="VALORANT">VALORANT</SelectItem>
                <SelectItem value="Apex Legends">Apex Legends</SelectItem>
                <SelectItem value="Call of Duty">Call of Duty</SelectItem>
              </SelectContent>
            </Select>
            {errors.gameType && <p className="text-red-500">{errors.gameType.message}</p>}
          </div>
          <div>
            <Label htmlFor="providerType">Provider Type</Label>
            <Select onValueChange={(value) => setValue('providerType', value as ProviderFormData['providerType'])}>
              <SelectTrigger>
                <SelectValue placeholder="Select provider type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SOFTWARE">Software</SelectItem>
                <SelectItem value="DMA">DMA</SelectItem>
                <SelectItem value="SPOOFER">Spoofer</SelectItem>
              </SelectContent>
            </Select>
            {errors.providerType && <p className="text-red-500">{errors.providerType.message}</p>}
          </div>
          <div>
            <Label htmlFor="type">Type</Label>
            <Select onValueChange={(value) => setValue('type', value as ProviderFormData['type'])}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PUBLIC">Public</SelectItem>
                <SelectItem value="SLOTTED">Slotted</SelectItem>
              </SelectContent>
            </Select>
            {errors.type && <p className="text-red-500">{errors.type.message}</p>}
          </div>
          <div>
            <Label htmlFor="detectionLevel">Detection Level</Label>
            <Input id="detectionLevel" type="number" min="0" max="10" {...register('detectionLevel', { valueAsNumber: true })} />
            {errors.detectionLevel && <p className="text-red-500">{errors.detectionLevel.message}</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register('description')} />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Features</h2>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="noPersonalInfo"
            checked={watch('noPersonalInfo')}
            onCheckedChange={(checked) => setValue('noPersonalInfo', checked === true)}
          />
          <Label htmlFor="noPersonalInfo">No personal information needed</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="acceptingCardPayments"
            checked={watch('acceptingCardPayments')}
            onCheckedChange={(checked) => setValue('acceptingCardPayments', checked === true)}
          />
          <Label htmlFor="acceptingCardPayments">Accepting Card Payments</Label>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Payment Methods</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(['card', 'bank', 'btc', 'paypal'] as const).map((method) => (
            <div key={method} className="flex items-center space-x-2">
              <Checkbox
                id={`paymentMethod-${method}`}
                checked={watch(`paymentMethods.${method}` as const)}
                onCheckedChange={(checked) =>
                  setValue(`paymentMethods.${method}` as const, checked === true)
                }
              />
              <Label htmlFor={`paymentMethod-${method}`}>{method.charAt(0).toUpperCase() + method.slice(1)}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Additional Information</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="userbase">Userbase</Label>
            <Input id="userbase" {...register('userbase')} />
            {errors.userbase && <p className="text-red-500">{errors.userbase.message}</p>}
          </div>
          <div>
            <Label htmlFor="undetectedDuration">How long undetected</Label>
            <Input id="undetectedDuration" {...register('undetectedDuration')} />
            {errors.undetectedDuration && <p className="text-red-500">{errors.undetectedDuration.message}</p>}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="detections"
            checked={watchDetections}
            onCheckedChange={(checked) => setValue('detections', checked)}
          />
          <Label htmlFor="detections">Has there ever been detections?</Label>
        </div>
        {watchDetections && (
          <div>
            <Label htmlFor="detectionPrevention">How did you prevent detections?</Label>
            <Textarea id="detectionPrevention" {...register('detectionPrevention')} />
            {errors.detectionPrevention && <p className="text-red-500">{errors.detectionPrevention.message}</p>}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Time Information</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="lastUpdate">Last update</Label>
            <Input id="lastUpdate" type="date" {...register('lastUpdate')} />
            {errors.lastUpdate && <p className="text-red-500">{errors.lastUpdate.message}</p>}
          </div>
          <div>
            <Label htmlFor="releaseDate">Release Date (Approx)</Label>
            <Input id="releaseDate" type="date" {...register('releaseDate')} />
            {errors.releaseDate && <p className="text-red-500">{errors.releaseDate.message}</p>}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Track History</h2>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-end space-x-2">
            <div className="flex-grow">
              <Label htmlFor={`trackHistory.${index}.event`}>Event</Label>
              <Input {...register(`trackHistory.${index}.event`)} />
              {errors.trackHistory?.[index]?.event && (
                <p className="text-red-500">{errors.trackHistory[index]?.event?.message}</p>
              )}
            </div>
            <div className="flex-grow">
              <Label htmlFor={`trackHistory.${index}.date`}>Date</Label>
              <Input type="date" {...register(`trackHistory.${index}.date`)} />
              {errors.trackHistory?.[index]?.date && (
                <p className="text-red-500">{errors.trackHistory[index]?.date?.message}</p>
              )}
            </div>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ event: '', date: '' })}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Track History Entry
        </Button>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Adding Provider...
          </>
        ) : (
          'Add Provider'
        )}
      </Button>
    </form>
  )
}

