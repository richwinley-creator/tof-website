'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Winner {
  id: string
  year: number
  name: string
  location: string
  score: string
}

const initialWinners: Winner[] = [
  { id: '1', year: 2024, name: 'Champion Name', location: 'Course Name, City, State', score: '-5' },
  { id: '2', year: 2023, name: 'Champion Name', location: 'Course Name, City, State', score: '-3' },
  { id: '3', year: 2022, name: 'Champion Name', location: 'Course Name, City, State', score: '-4' },
  { id: '4', year: 2021, name: 'Champion Name', location: 'Course Name, City, State', score: '-2' },
  { id: '5', year: 2020, name: 'Tournament Cancelled', location: 'COVID-19 Pandemic', score: '-' },
  { id: '6', year: 2019, name: 'Champion Name', location: 'Course Name, City, State', score: '-6' },
  { id: '7', year: 2018, name: 'Champion Name', location: 'Course Name, City, State', score: '-1' },
  { id: '8', year: 2017, name: 'Champion Name', location: 'Course Name, City, State', score: '-4' },
  { id: '9', year: 2016, name: 'Champion Name', location: 'Course Name, City, State', score: '-3' },
  { id: '10', year: 2015, name: 'Champion Name', location: 'Course Name, City, State', score: '-2' },
]

export default function WinnersAdmin() {
  const [winners, setWinners] = useState<Winner[]>(initialWinners)
  const [editingWinner, setEditingWinner] = useState<Winner | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newWinner, setNewWinner] = useState<Partial<Winner>>({
    year: new Date().getFullYear(),
    name: '',
    location: '',
    score: '',
  })

  const handleSave = (winner: Winner) => {
    setWinners(winners.map(w => w.id === winner.id ? winner : w))
    setEditingWinner(null)
  }

  const handleAdd = () => {
    const winner: Winner = {
      id: Date.now().toString(),
      year: newWinner.year || new Date().getFullYear(),
      name: newWinner.name || '',
      location: newWinner.location || '',
      score: newWinner.score || '',
    }
    setWinners([winner, ...winners].sort((a, b) => b.year - a.year))
    setShowAddModal(false)
    setNewWinner({ year: new Date().getFullYear(), name: '', location: '', score: '' })
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this winner record?')) {
      setWinners(winners.filter(w => w.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-masters-dark text-white">
        <div className="container-main py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-400 hover:text-white">
                ← Back to Dashboard
              </Link>
              <h1 className="text-xl font-serif font-bold">Black Jacket Winners</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        {/* Add Button */}
        <div className="flex justify-end mb-6">
          <button onClick={() => setShowAddModal(true)} className="btn-primary">
            + Add Winner
          </button>
        </div>

        {/* Winners List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-masters-green text-white">
                <th className="px-6 py-4 text-left font-semibold w-24">Year</th>
                <th className="px-6 py-4 text-left font-semibold">Champion</th>
                <th className="px-6 py-4 text-left font-semibold">Location</th>
                <th className="px-6 py-4 text-center font-semibold w-24">Score</th>
                <th className="px-6 py-4 text-center font-semibold w-32">Actions</th>
              </tr>
            </thead>
            <tbody>
              {winners.map((winner) => (
                <tr key={winner.id} className="border-b hover:bg-gray-50">
                  {editingWinner?.id === winner.id ? (
                    <>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          value={editingWinner.year}
                          onChange={(e) => setEditingWinner({ ...editingWinner, year: parseInt(e.target.value) })}
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          value={editingWinner.name}
                          onChange={(e) => setEditingWinner({ ...editingWinner, name: e.target.value })}
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          value={editingWinner.location}
                          onChange={(e) => setEditingWinner({ ...editingWinner, location: e.target.value })}
                          className="w-full px-2 py-1 border rounded"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          value={editingWinner.score}
                          onChange={(e) => setEditingWinner({ ...editingWinner, score: e.target.value })}
                          className="w-full px-2 py-1 border rounded text-center"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => handleSave(editingWinner)}
                            className="text-masters-green hover:text-masters-gold text-sm"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingWinner(null)}
                            className="text-gray-500 hover:text-gray-700 text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 font-serif font-bold text-masters-green text-lg">
                        {winner.year}
                      </td>
                      <td className="px-6 py-4 font-semibold">{winner.name}</td>
                      <td className="px-6 py-4 text-gray-600">{winner.location}</td>
                      <td className="px-6 py-4 text-center font-bold text-masters-gold">
                        {winner.score}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-3 justify-center">
                          <button
                            onClick={() => setEditingWinner(winner)}
                            className="text-masters-green hover:text-masters-gold text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(winner.id)}
                            className="text-red-600 hover:text-red-800 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          {winners.length} tournament{winners.length !== 1 ? 's' : ''} on record
        </p>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg">
            <div className="p-6">
              <h2 className="text-xl font-serif font-bold text-masters-dark mb-6">
                Add Black Jacket Winner
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <input
                    type="number"
                    value={newWinner.year || ''}
                    onChange={(e) => setNewWinner({ ...newWinner, year: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Champion Name</label>
                  <input
                    type="text"
                    value={newWinner.name || ''}
                    onChange={(e) => setNewWinner({ ...newWinner, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={newWinner.location || ''}
                    onChange={(e) => setNewWinner({ ...newWinner, location: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    placeholder="Course Name, City, State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Winning Score (to par)</label>
                  <input
                    type="text"
                    value={newWinner.score || ''}
                    onChange={(e) => setNewWinner({ ...newWinner, score: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    placeholder="e.g., -5"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button onClick={handleAdd} className="btn-primary">
                  Add Winner
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
