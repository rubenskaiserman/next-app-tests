import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SPA react Teste',
  description: 'SPA with react and typescript - Learning the basics after using it for a while',
  icons: [
    {
      url: '/favicon.ico',
      sizes: '32x32',
      type: 'image/x-icon',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
