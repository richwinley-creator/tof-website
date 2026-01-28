'use client'

import { useState } from 'react'
import Link from 'next/link'

// This is a placeholder dashboard - will be connected to Supabase Auth
export default function MembersDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Placeholder member data
  const memberData = {
    name: 'John Doe',
    email: 'john@example.com',
    ghinNumber: '1234567',
    handicap: '12.5',
    memberSince: '2020',
    tournaments: [
      { year: 2024, location: 'Course Name', finish: '5th', score: '+3' },
      { year: 2023, location: 'Course Name', finish: '12th', score: '+8' },
      { year: 2022, location: 'Course Name', finish: '3rd', score: '+1' },
    ],
  }

  if (!isLoggedIn) {
    return (
      <>
        {/* Hero */}
        <section className="bg-masters-green text-white py-20">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Member Portal
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Access your Tournament of Friends dashboard
            </p>
          </div>
        </section>

        {/* Login Form */}
        <section className="section-white">
          <div className="container-main">
            <div className="max-w-md mx-auto">
              <div className="bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-serif font-bold text-masters-dark mb-6 text-center">
                  Sign In
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setIsLoggedIn(true)
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Remember me
                    </label>
                    <a href="#" className="text-masters-green hover:text-masters-gold">
                      Forgot password?
                    </a>
                  </div>
                  <button type="submit" className="w-full btn-primary">
                    Sign In
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Not a member yet?{' '}
                    <Link href="/register" className="text-masters-green hover:text-masters-gold font-medium">
                      Register for the tournament
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  // Logged in view
  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-12">
        <div className="container-main">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-masters-gold text-sm uppercase tracking-wider mb-1">Welcome back</p>
              <h1 className="text-3xl md:text-4xl font-serif font-bold">
                {memberData.name}
              </h1>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-xl font-serif font-bold text-masters-dark mb-4">
                  Profile
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-gray-500">Email</span>
                    <p className="font-medium">{memberData.email}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">GHIN Number</span>
                    <p className="font-medium">{memberData.ghinNumber}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Current Handicap</span>
                    <p className="font-medium text-masters-green text-xl">{memberData.handicap}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Member Since</span>
                    <p className="font-medium">{memberData.memberSince}</p>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gray-100 text-masters-dark py-2 rounded hover:bg-gray-200 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Current Registration Status */}
              <div className="bg-masters-gold/10 border border-masters-gold/30 p-6 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-masters-dark text-lg">
                      TOF 2026 Scottsdale
                    </h3>
                    <p className="text-gray-600 mt-1">
                      You are registered for the upcoming tournament
                    </p>
                  </div>
                  <span className="bg-masters-green text-white px-3 py-1 rounded text-sm font-medium">
                    Registered
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-masters-gold/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <span className="text-sm text-gray-500">Dates</span>
                      <p className="font-medium">Sep 20-23</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Location</span>
                      <p className="font-medium">Scottsdale, AZ</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Payment</span>
                      <p className="font-medium text-masters-green">Confirmed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tournament History */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-xl font-serif font-bold text-masters-dark mb-4">
                  Your Tournament History
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Year</th>
                        <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Location</th>
                        <th className="text-center py-3 px-2 text-sm font-semibold text-gray-600">Finish</th>
                        <th className="text-center py-3 px-2 text-sm font-semibold text-gray-600">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {memberData.tournaments.map((tournament) => (
                        <tr key={tournament.year} className="border-b last:border-0">
                          <td className="py-3 px-2 font-serif font-bold text-masters-green">
                            {tournament.year}
                          </td>
                          <td className="py-3 px-2">{tournament.location}</td>
                          <td className="py-3 px-2 text-center">
                            <span className={`font-bold ${tournament.finish.includes('3') ? 'text-masters-gold' : ''}`}>
                              {tournament.finish}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-center font-medium">{tournament.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/members/directory"
                  className="bg-masters-green text-white p-6 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  <h3 className="font-serif font-bold text-lg mb-2">The Brotherhood</h3>
                  <p className="text-gray-200 text-sm">View member directory</p>
                </Link>
                <Link
                  href="/schedule"
                  className="bg-masters-gold text-masters-dark p-6 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  <h3 className="font-serif font-bold text-lg mb-2">Tournament Schedule</h3>
                  <p className="text-masters-dark/70 text-sm">View pairings and itinerary</p>
                </Link>
                <Link
                  href="/leaderboard"
                  className="bg-gray-100 text-masters-dark p-6 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <h3 className="font-serif font-bold text-lg mb-2">Leaderboard</h3>
                  <p className="text-gray-600 text-sm">Check tournament standings</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
