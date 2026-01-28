import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Black Jacket Winners | Tournament of Friends',
  description: 'Honor roll of all Black Jacket winners throughout Tournament of Friends history.',
}

const winners = [
  { year: 2024, name: 'Champion Name', location: 'Course Name, City, State', score: '-5' },
  { year: 2023, name: 'Champion Name', location: 'Course Name, City, State', score: '-3' },
  { year: 2022, name: 'Champion Name', location: 'Course Name, City, State', score: '-4' },
  { year: 2021, name: 'Champion Name', location: 'Course Name, City, State', score: '-2' },
  { year: 2020, name: 'Tournament Cancelled', location: 'COVID-19 Pandemic', score: '-' },
  { year: 2019, name: 'Champion Name', location: 'Course Name, City, State', score: '-6' },
  { year: 2018, name: 'Champion Name', location: 'Course Name, City, State', score: '-1' },
  { year: 2017, name: 'Champion Name', location: 'Course Name, City, State', score: '-4' },
  { year: 2016, name: 'Champion Name', location: 'Course Name, City, State', score: '-3' },
  { year: 2015, name: 'Champion Name', location: 'Course Name, City, State', score: '-2' },
]

export default function WinnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Black Jacket Winners
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            The legends who have earned golf&apos;s most prestigious honor among friends
          </p>
        </div>
      </section>

      {/* Current Champion */}
      <section className="section-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-masters-gold text-masters-dark px-4 py-1 text-sm font-semibold uppercase tracking-wider mb-6">
              Defending Champion
            </span>
            <div className="bg-masters-green/5 p-8 md:p-12 rounded-lg">
              {/* Champion photo placeholder */}
              <div className="w-40 h-40 bg-masters-green/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-20 h-20 text-masters-green/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-masters-dark mb-2">
                {winners[0].name}
              </h2>
              <p className="text-masters-gold text-2xl font-serif font-bold mb-2">
                {winners[0].year} Champion
              </p>
              <p className="text-gray-600">
                {winners[0].location}
              </p>
              <p className="text-masters-green font-bold text-xl mt-4">
                Winning Score: {winners[0].score}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Winners List */}
      <section className="bg-gray-50 py-16">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold text-masters-dark mb-8 text-center">
            All-Time Winners
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-masters-green text-white grid grid-cols-12 gap-4 p-4 font-semibold">
                <div className="col-span-2">Year</div>
                <div className="col-span-4">Champion</div>
                <div className="col-span-4">Location</div>
                <div className="col-span-2 text-right">Score</div>
              </div>
              {/* Winners */}
              {winners.map((winner, index) => (
                <div
                  key={winner.year}
                  className={`grid grid-cols-12 gap-4 p-4 items-center ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } ${winner.year === 2020 ? 'text-gray-400 italic' : ''}`}
                >
                  <div className="col-span-2 font-serif font-bold text-masters-green text-lg">
                    {winner.year}
                  </div>
                  <div className="col-span-4 font-semibold">
                    {winner.name}
                  </div>
                  <div className="col-span-4 text-gray-600 text-sm">
                    {winner.location}
                  </div>
                  <div className="col-span-2 text-right font-bold text-masters-gold">
                    {winner.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-green">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif font-bold text-masters-gold">10</div>
              <div className="text-gray-200 mt-2">Years of Competition</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-masters-gold">9</div>
              <div className="text-gray-200 mt-2">Tournaments Held</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-masters-gold">-6</div>
              <div className="text-gray-200 mt-2">Best Winning Score</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-masters-gold">100+</div>
              <div className="text-gray-200 mt-2">Total Participants</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
