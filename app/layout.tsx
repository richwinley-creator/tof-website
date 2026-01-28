import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tournament of Friends | Home of the Black Jacket',
  description: 'An annual golf tournament celebrating Black excellence, brotherhood, and competition for the prestigious Black Jacket.',
  keywords: 'golf, tournament, black jacket, black golfers, african american golf, brotherhood, competition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
