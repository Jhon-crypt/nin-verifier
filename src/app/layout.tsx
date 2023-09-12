import './globals.css'
import type { Metadata } from 'next'

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
      <body style={{ backgroundColor: "#041109" }}>{children}</body>
    </html>
  )
}
