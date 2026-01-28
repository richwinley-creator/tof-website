'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Player {
  id: string
  name: string
  handicap: number
  scores: {
    r1: number | null
    r2: number | null
    r3: number | null
  }
}

// Sample players - will be replaced with Supabase data
const initialPlayers: Player[] = [
  { id: '1', name: 'Player One', handicap: 8.2, scores: { r1: 72, r2: 71, r3: null } },
  { id: '2', name: 'Player Two', handicap: 12.5, scores: { r1: 75, r2: 70, r3: null } },
  { id: '3', name: 'Player Three', handicap: 6.8, scores: { r1: 73, r2: 73, r3: null } },
  { id: '4', name: 'Player Four', handicap: 14.1, scores: { r1: 78, r2: 69, r3: null } },
  { id: '5', name: 'Player Five', handicap: 10.3, scores: { r1: 74, r2: null, r3: null } },
  { id: '6', name: 'Player Six', handicap: 9.7, scores: { r1: 76, r2: null, r3: null } },
]

export default function ScoreEntryPage() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers)
  const [selectedRound, setSelectedRound] = useState<'r1' | 'r2' | 'r3'>('r2')
  const [editingPlayer, setEditingPlayer] = useState<string | null>(null)
  const [editScore, setEditScore] = useState<string>('')

  const handleSaveScore = (playerId: string) => {
    const score = parseInt(editScore, 10)
    if (isNaN(score) || score < 50 || score > 150) {
      alert('Please enter a valid score between 50 and 150')
      return
    }

    setPlayers(
      players.map((p) =>
        p.id === playerId
          ? { ...p, scores: { ...p.scores, [selectedRound]: score } }
          : p
      )
    )
    setEditingPlayer(null)
    setEditScore('')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-masters-dark text-white">
        <div className="container-main py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-300 hover:text-white">
                ← Back to Dashboard
              </Link>
              <h1 className="text-xl font-serif font-bold">Score Entry</h1>
            </div>
            <Link href="/" className="text-gray-300 hover:text-white text-sm">
              View Site →
            </Link>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        {/* Tournament Info */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-serif font-bold text-masters-dark">
                2025 Tournament of Friends
              </h2>
              <p className="text-gray-600">Course: TBD • Par: 72</p>
            </div>
            <div className="flex gap-2">
              {(['r1', 'r2', 'r3'] as const).map((round) => (
                <button
                  key={round}
                  onClick={() => setSelectedRound(round)}
                  className={`px-4 py-2 rounded font-medium transition-colors ${
                    selectedRound === round
                      ? 'bg-masters-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Round {round.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm text-masters-gold">
            Currently editing: Round {selectedRound.slice(1)}
          </p>
        </div>

        {/* Score Entry Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-masters-green text-white">
                <th className="px-6 py-4 text-left font-semibold">Player</th>
                <th className="px-6 py-4 text-center font-semibold w-24">HDCP</th>
                <th className="px-6 py-4 text-center font-semibold w-24">R1</th>
                <th className="px-6 py-4 text-center font-semibold w-24">R2</th>
                <th className="px-6 py-4 text-center font-semibold w-24">R3</th>
                <th className="px-6 py-4 text-center font-semibold w-24">Total</th>
                <th className="px-6 py-4 text-center font-semibold w-32">Action</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => {
                const total =
                  (player.scores.r1 || 0) +
                  (player.scores.r2 || 0) +
                  (player.scores.r3 || 0)
                const rounds =
                  (player.scores.r1 ? 1 : 0) +
                  (player.scores.r2 ? 1 : 0) +
                  (player.scores.r3 ? 1 : 0)

                return (
                  <tr
                    key={player.id}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-6 py-4 font-semibold">{player.name}</td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {player.handicap.toFixed(1)}
                    </td>
                    <td
                      className={`px-6 py-4 text-center ${
                        selectedRound === 'r1' ? 'bg-masters-gold/10' : ''
                      }`}
                    >
                      {editingPlayer === player.id && selectedRound === 'r1' ? (
                        <input
                          type="number"
                          value={editScore}
                          onChange={(e) => setEditScore(e.target.value)}
                          className="w-16 px-2 py-1 border rounded text-center"
                          autoFocus
                        />
                      ) : (
                        player.scores.r1 ?? '-'
                      )}
                    </td>
                    <td
                      className={`px-6 py-4 text-center ${
                        selectedRound === 'r2' ? 'bg-masters-gold/10' : ''
                      }`}
                    >
                      {editingPlayer === player.id && selectedRound === 'r2' ? (
                        <input
                          type="number"
                          value={editScore}
                          onChange={(e) => setEditScore(e.target.value)}
                          className="w-16 px-2 py-1 border rounded text-center"
                          autoFocus
                        />
                      ) : (
                        player.scores.r2 ?? '-'
                      )}
                    </td>
                    <td
                      className={`px-6 py-4 text-center ${
                        selectedRound === 'r3' ? 'bg-masters-gold/10' : ''
                      }`}
                    >
                      {editingPlayer === player.id && selectedRound === 'r3' ? (
                        <input
                          type="number"
                          value={editScore}
                          onChange={(e) => setEditScore(e.target.value)}
                          className="w-16 px-2 py-1 border rounded text-center"
                          autoFocus
                        />
                      ) : (
                        player.scores.r3 ?? '-'
                      )}
                    </td>
                    <td className="px-6 py-4 text-center font-bold">
                      {rounds > 0 ? total : '-'}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {editingPlayer === player.id ? (
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => handleSaveScore(player.id)}
                            className="bg-masters-green text-white px-3 py-1 rounded text-sm hover:bg-opacity-90"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => {
                              setEditingPlayer(null)
                              setEditScore('')
                            }}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setEditingPlayer(player.id)
                            setEditScore(
                              player.scores[selectedRound]?.toString() || ''
                            )
                          }}
                          className="bg-masters-gold text-masters-dark px-3 py-1 rounded text-sm hover:bg-opacity-90"
                        >
                          Edit Score
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-between items-center">
          <p className="text-gray-600 text-sm">
            Scores are saved automatically and will appear on the live leaderboard.
          </p>
          <div className="flex gap-4">
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300">
              Export Scores
            </button>
            <button className="bg-masters-green text-white px-6 py-2 rounded hover:bg-opacity-90">
              Update Handicaps
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
