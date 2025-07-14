import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Axomations - Automate Your Business. Reclaim Your Time.',
  description: 'Axomations builds smart, tailor-made automations that save time, reduce error, and grow your business.',
  keywords: 'automation, business automation, workflow automation, process automation',
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