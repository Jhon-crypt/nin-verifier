import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Nin-Verifier',
  description: 'Discover the power of our NIN Secure Identity Gateway – the key to seamless, secure identity verification. Unlock a world of possibilities and trust with ease.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      <body style={{ backgroundColor: "#041109" }}>{children}</body>
    </html>
  )
}
