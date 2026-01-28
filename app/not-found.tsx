import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-masters-gold text-8xl font-serif font-bold mb-4">404</div>
        <h1 className="text-3xl font-serif font-bold text-masters-dark mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for might have been moved or doesn&apos;t exist.
          Let&apos;s get you back on the fairway.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link
            href="/leaderboard"
            className="bg-gray-100 text-masters-dark px-6 py-3 font-semibold hover:bg-gray-200 transition-colors"
          >
            View Leaderboard
          </Link>
        </div>
      </div>
    </div>
  )
}
