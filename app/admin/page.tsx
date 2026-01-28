'use client'

import { useState } from 'react'
import Link from 'next/link'

// Admin dashboard - protected route (will add auth later)
export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Stats placeholder
  const stats = {
    totalMembers: 45,
    registeredFor2025: 18,
    pendingPayments: 3,
    publishedArticles: 12,
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
          <h1 className="text-2xl font-serif font-bold text-masters-dark mb-6 text-center">
            Admin Login
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setIsAuthenticated(true)
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
              />
            </div>
            <button type="submit" className="w-full btn-primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-masters-dark text-white">
        <div className="container-main py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-serif font-bold">TOF Admin</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-300 hover:text-white text-sm">
                View Site →
              </Link>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-gray-300 hover:text-white text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 shadow rounded-lg">
            <div className="text-3xl font-bold text-masters-green">{stats.totalMembers}</div>
            <div className="text-gray-600 text-sm">Total Members</div>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <div className="text-3xl font-bold text-masters-green">{stats.registeredFor2025}</div>
            <div className="text-gray-600 text-sm">2025 Registrations</div>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <div className="text-3xl font-bold text-masters-gold">{stats.pendingPayments}</div>
            <div className="text-gray-600 text-sm">Pending Payments</div>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <div className="text-3xl font-bold text-masters-green">{stats.publishedArticles}</div>
            <div className="text-gray-600 text-sm">Published Articles</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/admin/scores"
            className="bg-masters-green text-white p-6 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            <h2 className="text-xl font-serif font-bold mb-2">Score Entry</h2>
            <p className="text-gray-200 text-sm">Enter and manage tournament scores</p>
          </Link>
          <Link
            href="/admin/news"
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-serif font-bold text-masters-dark mb-2">Manage News</h2>
            <p className="text-gray-600 text-sm">Create and edit news articles</p>
          </Link>
          <Link
            href="/admin/members"
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-serif font-bold text-masters-dark mb-2">Members</h2>
            <p className="text-gray-600 text-sm">View and manage member accounts</p>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-serif font-bold text-masters-dark mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">New registration: John Smith</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <span className="bg-masters-green/10 text-masters-green px-2 py-1 rounded text-sm">
                Registration
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">Payment received: Mike Johnson</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
              <span className="bg-masters-gold/10 text-masters-gold px-2 py-1 rounded text-sm">
                Payment
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">News article published</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">
                Content
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
