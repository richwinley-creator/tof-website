import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leaderboard | Tournament of Friends',
  description: 'Live tournament standings and scores for the Tournament of Friends.',
}

// This would come from Supabase/database in production
// Chairman sets this URL in the admin panel
const golfGeniusUrl: string = '' // e.g., 'https://www.golfgenius.com/pages/1234567'

export default function LeaderboardPage() {
  const hasGolfGenius = golfGeniusUrl.length > 0

  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-12">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Leaderboard
          </h1>
          <p className="text-xl text-gray-200">
            TOF 2026 Scottsdale
          </p>
          {hasGolfGenius && (
            <div className="mt-4 flex justify-center items-center gap-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-masters-gold text-masters-dark text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Live via Golf Genius
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Leaderboard Content */}
      <section className="section-white">
        <div className="container-main">
          {hasGolfGenius ? (
            /* Golf Genius Embed - Auto-updates from their system */
            <div className="max-w-6xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <iframe
                  src={golfGeniusUrl}
                  width="100%"
                  height="800"
                  frameBorder="0"
                  className="w-full"
                  title="Golf Genius Leaderboard"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Scores powered by Golf Genius • Updates automatically
              </p>
            </div>
          ) : (
            /* No Tournament Active State */
            <div className="max-w-lg mx-auto text-center py-12">
              <div className="w-24 h-24 bg-masters-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-masters-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif font-bold text-masters-dark mb-4">
                Tournament Not Yet Started
              </h2>
              <p className="text-gray-600 mb-6">
                Live scoring will be available once the tournament begins on September 20th, 2026.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                Scores will be tracked via the Golf Genius app and displayed here automatically.
              </p>
              <Link href="/schedule" className="btn-primary inline-block">
                View Tournament Schedule
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Historical Results Link */}
      <section className="bg-gray-50 py-12">
        <div className="container-main text-center">
          <p className="text-gray-600 mb-4">
            Looking for past tournament results?
          </p>
          <Link href="/winners" className="text-masters-green font-semibold hover:text-masters-gold transition-colors">
            View Black Jacket Winners →
          </Link>
        </div>
      </section>
    </>
  )
}
