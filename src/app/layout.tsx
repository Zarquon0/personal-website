import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'William Stone | Portfolio',
  description: 'Resume-style personal site for William Stone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-dark font-body antialiased">{children}</body>
    </html>
  )
}
