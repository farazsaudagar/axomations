import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Axomations - Automate Your Business. Reclaim Your Time.',
  description: 'Axomations builds smart, tailor-made automations that save time, reduce error, and grow your business.',
  keywords: 'automation, business automation, workflow automation, process automation',
  icons: {
    icon: [
      { url: '/small-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/small-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/small-logo.png',
    apple: '/small-logo.png',
  },
  openGraph: {
    title: 'Axomations - Automate Your Business. Reclaim Your Time.',
    description: 'Smart, tailor-made automations for your business',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-montserrat bg-off-white">{children}</body>
    </html>
  )
} 