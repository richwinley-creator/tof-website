import Link from 'next/link'

export default function BlackJacketSection() {
  return (
    <section className="section-green">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="bg-white/10 aspect-square md:aspect-[4/3] flex items-center justify-center rounded-lg">
            <div className="text-center p-8">
              <svg className="w-24 h-24 mx-auto text-masters-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <p className="text-white/60 text-sm">Black Jacket Photo</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              The <span className="text-masters-gold">Black Jacket</span> Tradition
            </h2>
            <p className="text-gray-200 mb-6 text-lg">
              Inspired by golf&apos;s most prestigious tradition, the Tournament of Friends awards the winner with the coveted Black Jacket, symbolizing excellence, sportsmanship, and the bonds of friendship that define our tournament.
            </p>
            <p className="text-gray-200 mb-8">
              Each year, the reigning champion has the honor of presenting the jacket to the new winner in a ceremony that celebrates not just victory, but the camaraderie that makes this tournament special.
            </p>
            <Link
              href="/winners"
              className="btn-gold inline-block"
            >
              View Past Winners
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
