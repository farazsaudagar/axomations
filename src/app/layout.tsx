import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
    title: 'Axomations - Why Complicate? Just Axomate.',
    description:
        'Axomations builds smart, tailor-made automations that save time, reduce error, and grow your business.',
    keywords:
        'automation, business automation, workflow automation, process automation',
    icons: {
        icon: [
            { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
            { url: '/small-logo.png', sizes: '32x32', type: 'image/png' },
            { url: '/small-logo.png', sizes: '16x16', type: 'image/png' },
        ],
        shortcut: '/favicon.png',
        apple: '/small-logo.png',
    },
    openGraph: {
        title: 'Axomations - Why Complicate? Just Axomate.',
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
        <html lang='en'>
            <body className='font-montserrat'>{children}</body>
        </html>
    )
}

