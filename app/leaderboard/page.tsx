import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leaderboard | Tournament of Friends',
  description: 'Live tournament standings and scores for the Tournament of Friends.',
}

// Sample leaderboard data - will be replaced with Supabase data
const leaderboardData = [
  { position: 1, name: 'Player One', handicap: 8.2, r1: 72, r2: 71, r3: null, total: 143, toPar: -1 },
  { position: 2, name: 'Player Two', handicap: 12.5, r1: 75, r2: 70, r3: null, total: 145, toPar: 1 },
  { position: 3, name: 'Player Three', handicap: 6.8, r1: 73, r2: 73, r3: null, total: 146, toPar: 2 },
  { position: 4, name: 'Player Four', handicap: 14.1, r1: 78, r2: 69, r3: null, total: 147, toPar: 3 },
  { position: 5, name: 'Player Five', handicap: 10.3, r1: 74, r2: 74, r3: null, total: 148, toPar: 4 },
  { position: 6, name: 'Player Six', handicap: 9.7, r1: 76, r2: 73, r3: null, total: 149, toPar: 5 },
  { position: 7, name: 'Player Seven', handicap: 11.2, r1: 77, r2: 73, r3: null, total: 150, toPar: 6 },
  { position: 8, name: 'Player Eight', handicap: 15.4, r1: 79, r2: 72, r3: null, total: 151, toPar: 7 },
]

function formatToPar(toPar: number): string {
  if (toPar === 0) return 'E'
  if (toPar > 0) return `+${toPar}`
  return toPar.toString()
}

function getToParColor(toPar: number): string {
  if (toPar < 0) return 'text-red-600'
  if (toPar === 0) return 'text-masters-dark'
  return 'text-masters-dark'
}

export default function LeaderboardPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-12">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Leaderboard
          </h1>
          <p className="text-xl text-gray-200">
            2025 Tournament of Friends
          </p>
          <div className="mt-4 flex justify-center items-center gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-masters-gold text-masters-dark text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Live
            </span>
            <span className="text-gray-300 text-sm">
              Round 2 in Progress
            </span>
          </div>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="section-white">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            {/* Tournament Info */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Tournament</div>
                  <div className="font-serif font-bold text-masters-dark">2025 TOF</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Course</div>
                  <div className="font-serif font-bold text-masters-dark">TBD</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Par</div>
                  <div className="font-serif font-bold text-masters-dark">72</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Rounds</div>
                  <div className="font-serif font-bold text-masters-dark">3</div>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white shadow-lg overflow-hidden rounded-lg overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-masters-green text-white">
                    <th className="px-4 py-3 text-left font-semibold w-16">Pos</th>
                    <th className="px-4 py-3 text-left font-semibold">Player</th>
                    <th className="px-4 py-3 text-center font-semibold w-20">HDCP</th>
                    <th className="px-4 py-3 text-center font-semibold w-16">R1</th>
                    <th className="px-4 py-3 text-center font-semibold w-16">R2</th>
                    <th className="px-4 py-3 text-center font-semibold w-16">R3</th>
                    <th className="px-4 py-3 text-center font-semibold w-20">Total</th>
                    <th className="px-4 py-3 text-center font-semibold w-20">To Par</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((player, index) => (
                    <tr
                      key={player.name}
                      className={`border-b border-gray-100 ${
                        index === 0 ? 'bg-masters-gold/10' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="px-4 py-4">
                        <span className={`font-bold ${index === 0 ? 'text-masters-gold' : 'text-masters-dark'}`}>
                          {player.position}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="font-semibold text-masters-dark">{player.name}</span>
                      </td>
                      <td className="px-4 py-4 text-center text-gray-600">
                        {player.handicap.toFixed(1)}
                      </td>
                      <td className="px-4 py-4 text-center">{player.r1}</td>
                      <td className="px-4 py-4 text-center">{player.r2 ?? '-'}</td>
                      <td className="px-4 py-4 text-center">{player.r3 ?? '-'}</td>
                      <td className="px-4 py-4 text-center font-bold">{player.total}</td>
                      <td className={`px-4 py-4 text-center font-bold ${getToParColor(player.toPar)}`}>
                        {formatToPar(player.toPar)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Net scores shown • HDCP = GHIN Handicap Index • E = Even Par</p>
            </div>
          </div>
        </div>
      </section>

      {/* No Active Tournament State (hidden for now) */}
      {false && (
        <section className="section-white">
          <div className="container-main text-center">
            <div className="max-w-lg mx-auto">
              <div className="w-24 h-24 bg-masters-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-masters-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif font-bold text-masters-dark mb-4">
                No Active Tournament
              </h2>
              <p className="text-gray-600 mb-8">
                Check back during our next tournament to see live scores and standings.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Historical Results Link */}
      <section className="bg-gray-50 py-12">
        <div className="container-main text-center">
          <p className="text-gray-600 mb-4">
            Looking for past tournament results?
          </p>
          <a href="/winners" className="text-masters-green font-semibold hover:text-masters-gold transition-colors">
            View Black Jacket Winners →
          </a>
        </div>
      </section>
    </>
  )
}
