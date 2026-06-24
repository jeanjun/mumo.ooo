import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'

const fontSans = Geist({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'mumo',
  description: 'mumo.ooo',
  metadataBase: new URL('https://mumo.ooo')
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html
    lang="en"
    suppressHydrationWarning
    className={cn(
      'antialiased',
      fontSans.variable,
      fontMono.variable,
      'font-sans'
    )}
  >
    <body>{children}</body>
  </html>
)

export default RootLayout
