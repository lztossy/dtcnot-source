import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const samo = localFont({
  src: '../public/fonts/samo.ttf',
  display: 'swap',
  variable: '--font-samo',
})

