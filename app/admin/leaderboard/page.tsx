'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminLeaderboard() {
  const [golfGeniusUrl, setGolfGeniusUrl] = useState('')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    // In production, this would save to Supabase
    console.log('Saving Golf Genius URL:', golfGeniusUrl)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simple Header */}
      <header className="bg-masters-dark text-white">
        <div className="px-4 py-4">
          <Link href="/admin" className="text-masters-gold text-lg font-bold">
            ← Back
          </Link>
          <h1 className="text-2xl font-bold text-center mt-2">Leaderboard</h1>
        </div>
      </header>

      <div className="px-4 py-6 max-w-xl mx-auto">
        {/* Step by Step Instructions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-masters-dark mb-4 text-center">
            Connect Golf Genius
          </h2>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-bold text-lg">Set up tournament</p>
                <p className="text-gray-600">Create your event in Golf Genius app</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-bold text-lg">Copy leaderboard URL</p>
                <p className="text-gray-600">From your Golf Genius portal</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-bold text-lg">Paste it below</p>
                <p className="text-gray-600">Scores update automatically!</p>
              </div>
            </div>
          </div>
        </div>

        {/* URL Input - Big and Easy */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <label className="block text-xl font-bold text-masters-dark mb-4">
            Golf Genius URL
          </label>
          <input
            type="url"
            value={golfGeniusUrl}
            onChange={(e) => setGolfGeniusUrl(e.target.value)}
            placeholder="Paste URL here..."
            className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-500"
          />
          <p className="text-gray-500 mt-3 text-center">
            Example: golfgenius.com/pages/12345
          </p>
        </div>

        {/* Big Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-green-600 text-white py-5 rounded-2xl font-bold text-xl shadow-lg active:scale-95 transition-transform"
        >
          {saved ? '✓ Saved!' : 'Save'}
        </button>

        {/* Success Message */}
        {saved && (
          <div className="mt-4 bg-green-100 text-green-800 p-4 rounded-xl text-center text-lg font-bold">
            ✓ Leaderboard connected!
          </div>
        )}

        {/* Preview */}
        {golfGeniusUrl && (
          <div className="mt-6 bg-white rounded-2xl shadow-lg p-4">
            <h3 className="font-bold text-lg text-center mb-4">Preview</h3>
            <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
              <iframe
                src={golfGeniusUrl}
                width="100%"
                height="400"
                frameBorder="0"
                className="w-full"
                title="Leaderboard Preview"
              />
            </div>
          </div>
        )}

        {/* View Leaderboard Link */}
        <div className="mt-6 text-center">
          <Link
            href="/leaderboard"
            className="inline-block bg-white text-masters-dark px-6 py-3 rounded-xl font-bold shadow-md"
          >
            View Live Leaderboard →
          </Link>
        </div>

        {/* Help */}
        <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
          <p className="font-bold text-lg text-center mb-2">Need help?</p>
          <p className="text-center text-gray-600">
            Contact Golf Genius support or visit their help docs
          </p>
          <div className="mt-4 text-center">
            <a
              href="https://docs.golfgenius.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold text-lg"
            >
              Golf Genius Help →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
