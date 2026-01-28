import Link from 'next/link'

export default function AdminDashboard() {
  const adminSections = [
    {
      title: 'Leaderboard',
      description: 'Connect Golf Genius for live scores',
      href: '/admin/leaderboard',
      color: 'bg-green-600',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Members',
      description: 'Manage the brotherhood',
      href: '/admin/members',
      color: 'bg-blue-600',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Winners',
      description: 'Black Jacket history',
      href: '/admin/winners',
      color: 'bg-yellow-600',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'News',
      description: 'Post announcements',
      href: '/admin/news',
      color: 'bg-purple-600',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      title: 'Gallery',
      description: 'Upload photos',
      href: '/admin/gallery',
      color: 'bg-pink-600',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Settings',
      description: 'Tournament details',
      href: '/admin/tournament',
      color: 'bg-gray-600',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simple Header */}
      <header className="bg-masters-dark text-white">
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-center">Chairman Dashboard</h1>
          <p className="text-center text-gray-300 mt-1">Tournament of Friends</p>
        </div>
      </header>

      <div className="px-4 py-6 max-w-2xl mx-auto">
        {/* Welcome Banner */}
        <div className="bg-masters-green text-white p-6 rounded-2xl mb-6 text-center">
          <p className="text-xl font-bold">Welcome, Gerard</p>
          <p className="text-green-200 mt-1">TOF 2026 Scottsdale</p>
        </div>

        {/* Big, Easy Buttons */}
        <div className="grid grid-cols-2 gap-4">
          {adminSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className={`${section.color} text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center min-h-[140px] active:scale-95 transition-transform shadow-lg`}
            >
              <div className="mb-3">
                {section.icon}
              </div>
              <span className="text-xl font-bold">{section.title}</span>
              <span className="text-sm opacity-80 mt-1">{section.description}</span>
            </Link>
          ))}
        </div>

        {/* View Site Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-white text-masters-dark px-8 py-4 rounded-xl font-bold text-lg shadow-md"
          >
            View Website →
          </Link>
        </div>
      </div>
    </div>
  )
}
