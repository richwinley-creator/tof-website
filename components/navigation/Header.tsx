'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigation = {
  left: [
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Register', href: '/register' },
  ],
  right: [
    { name: 'Winners', href: '/winners' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
    { name: 'About', href: '/about' },
  ],
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-masters-green shadow-md">
      <nav className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Left navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.left.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-masters-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
                Tournament of Friends
              </h1>
              <p className="text-masters-gold text-xs tracking-widest uppercase mt-1">
                Est. 2015
              </p>
            </div>
          </Link>

          {/* Right navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.right.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-masters-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/members"
              className="bg-masters-gold text-masters-dark px-4 py-2 font-semibold hover:bg-opacity-90 transition-colors duration-200"
            >
              Members
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {[...navigation.left, ...navigation.right].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-masters-gold transition-colors duration-200 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/members"
                className="bg-masters-gold text-masters-dark px-4 py-2 font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Members
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
