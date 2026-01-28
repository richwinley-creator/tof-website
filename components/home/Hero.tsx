import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-masters-green text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container-main py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-masters-gold text-masters-dark px-4 py-1 text-sm font-semibold uppercase tracking-wider">
              2026 Tournament • Scottsdale, AZ
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            The Black Jacket Awaits
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Join us for Tournament of Friends 2026. Where Black excellence is celebrated and brotherhood is forged on the fairway.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="btn-gold text-center"
            >
              Register Now
            </Link>
            <Link
              href="/schedule"
              className="bg-transparent border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-masters-green transition-colors duration-200 text-center"
            >
              View Schedule
            </Link>
          </div>

          {/* Tournament info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-masters-gold text-4xl font-serif font-bold">Sept 20-23</div>
              <div className="text-gray-300 mt-2">Tournament Dates</div>
            </div>
            <div className="text-center">
              <div className="text-masters-gold text-4xl font-serif font-bold">Scottsdale</div>
              <div className="text-gray-300 mt-2">Arizona</div>
            </div>
            <div className="text-center">
              <div className="text-masters-gold text-4xl font-serif font-bold">3 Courses</div>
              <div className="text-gray-300 mt-2">Championship Golf</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
