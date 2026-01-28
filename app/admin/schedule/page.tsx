'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ScheduleEvent {
  id: string
  time: string
  event: string
  location: string
  description: string
}

interface DaySchedule {
  day: string
  date: string
  events: ScheduleEvent[]
}

interface Pairing {
  id: string
  teeTime: string
  players: string[]
}

const initialSchedule: DaySchedule[] = [
  {
    day: 'Thursday',
    date: '',
    events: [
      { id: '1', time: '2:00 PM', event: 'Check-in Opens', location: 'Hotel Lobby', description: 'Pick up welcome bag' },
      { id: '2', time: '4:00 PM', event: 'Practice Round', location: 'Course', description: 'Optional practice' },
      { id: '3', time: '7:00 PM', event: 'Welcome Dinner', location: 'Restaurant', description: 'Kick-off dinner' },
    ],
  },
  {
    day: 'Friday',
    date: '',
    events: [
      { id: '4', time: '7:00 AM', event: 'Breakfast', location: 'Hotel', description: 'Buffet breakfast' },
      { id: '5', time: '8:30 AM', event: 'Round 1', location: 'Course', description: 'Tournament begins' },
      { id: '6', time: '2:00 PM', event: 'Lunch', location: 'Clubhouse', description: 'Post-round lunch' },
    ],
  },
  {
    day: 'Saturday',
    date: '',
    events: [
      { id: '7', time: '7:00 AM', event: 'Breakfast', location: 'Hotel', description: 'Buffet breakfast' },
      { id: '8', time: '8:30 AM', event: 'Round 2', location: 'Course', description: 'Tournament continues' },
      { id: '9', time: '7:00 PM', event: 'Group Dinner', location: 'Restaurant', description: 'Brotherhood dinner' },
    ],
  },
  {
    day: 'Sunday',
    date: '',
    events: [
      { id: '10', time: '7:00 AM', event: 'Breakfast', location: 'Hotel', description: 'Buffet breakfast' },
      { id: '11', time: '8:30 AM', event: 'Final Round', location: 'Course', description: 'Championship round' },
      { id: '12', time: '6:00 PM', event: 'Awards Dinner', location: 'Ballroom', description: 'Black Jacket ceremony' },
    ],
  },
]

const initialPairings: Pairing[] = [
  { id: '1', teeTime: '8:30 AM', players: ['Player 1', 'Player 2', 'Player 3', 'Player 4'] },
  { id: '2', teeTime: '8:42 AM', players: ['Player 5', 'Player 6', 'Player 7', 'Player 8'] },
  { id: '3', teeTime: '8:54 AM', players: ['Player 9', 'Player 10', 'Player 11', 'Player 12'] },
  { id: '4', teeTime: '9:06 AM', players: ['Player 13', 'Player 14', 'Player 15', 'Player 16'] },
  { id: '5', teeTime: '9:18 AM', players: ['Player 17', 'Player 18', 'Player 19', 'Player 20'] },
  { id: '6', teeTime: '9:30 AM', players: ['Player 21', 'Player 22', 'Player 23', 'Player 24'] },
]

export default function ScheduleAdmin() {
  const [activeTab, setActiveTab] = useState<'schedule' | 'pairings'>('schedule')
  const [schedule, setSchedule] = useState<DaySchedule[]>(initialSchedule)
  const [pairings, setPairings] = useState<Pairing[]>(initialPairings)
  const [selectedRound, setSelectedRound] = useState(1)

  const [editingEvent, setEditingEvent] = useState<{ dayIndex: number; event: ScheduleEvent } | null>(null)
  const [editingPairing, setEditingPairing] = useState<Pairing | null>(null)

  const handleSaveEvent = (dayIndex: number, updatedEvent: ScheduleEvent) => {
    const newSchedule = [...schedule]
    const eventIndex = newSchedule[dayIndex].events.findIndex(e => e.id === updatedEvent.id)
    if (eventIndex >= 0) {
      newSchedule[dayIndex].events[eventIndex] = updatedEvent
    }
    setSchedule(newSchedule)
    setEditingEvent(null)
  }

  const handleSavePairing = (updatedPairing: Pairing) => {
    setPairings(pairings.map(p => p.id === updatedPairing.id ? updatedPairing : p))
    setEditingPairing(null)
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
              <h1 className="text-xl font-serif font-bold">Schedule & Pairings</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-6 py-2 rounded font-medium ${
              activeTab === 'schedule'
                ? 'bg-masters-green text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Event Schedule
          </button>
          <button
            onClick={() => setActiveTab('pairings')}
            className={`px-6 py-2 rounded font-medium ${
              activeTab === 'pairings'
                ? 'bg-masters-green text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Pairings
          </button>
        </div>

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="space-y-6">
            {schedule.map((day, dayIndex) => (
              <div key={day.day} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="bg-masters-green text-white px-6 py-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-serif font-bold">{day.day}</h3>
                    <input
                      type="date"
                      value={day.date}
                      onChange={(e) => {
                        const newSchedule = [...schedule]
                        newSchedule[dayIndex].date = e.target.value
                        setSchedule(newSchedule)
                      }}
                      className="mt-1 bg-transparent border border-white/30 rounded px-2 py-1 text-sm"
                    />
                  </div>
                  <button className="text-masters-gold hover:text-white text-sm">
                    + Add Event
                  </button>
                </div>
                <div className="divide-y">
                  {day.events.map((event) => (
                    <div key={event.id} className="p-4 flex items-center gap-4">
                      {editingEvent?.event.id === event.id ? (
                        <div className="flex-1 grid grid-cols-4 gap-4">
                          <input
                            type="text"
                            value={editingEvent.event.time}
                            onChange={(e) => setEditingEvent({
                              ...editingEvent,
                              event: { ...editingEvent.event, time: e.target.value }
                            })}
                            className="px-2 py-1 border rounded"
                            placeholder="Time"
                          />
                          <input
                            type="text"
                            value={editingEvent.event.event}
                            onChange={(e) => setEditingEvent({
                              ...editingEvent,
                              event: { ...editingEvent.event, event: e.target.value }
                            })}
                            className="px-2 py-1 border rounded"
                            placeholder="Event"
                          />
                          <input
                            type="text"
                            value={editingEvent.event.location}
                            onChange={(e) => setEditingEvent({
                              ...editingEvent,
                              event: { ...editingEvent.event, location: e.target.value }
                            })}
                            className="px-2 py-1 border rounded"
                            placeholder="Location"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleSaveEvent(dayIndex, editingEvent.event)}
                              className="px-3 py-1 bg-masters-green text-white rounded text-sm"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingEvent(null)}
                              className="px-3 py-1 bg-gray-200 rounded text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="w-24 text-masters-gold font-bold">{event.time}</div>
                          <div className="flex-1">
                            <div className="font-medium">{event.event}</div>
                            <div className="text-sm text-gray-500">{event.location}</div>
                          </div>
                          <button
                            onClick={() => setEditingEvent({ dayIndex, event })}
                            className="text-masters-green hover:text-masters-gold text-sm"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pairings Tab */}
        {activeTab === 'pairings' && (
          <div>
            {/* Round Selector */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3].map((round) => (
                <button
                  key={round}
                  onClick={() => setSelectedRound(round)}
                  className={`px-4 py-2 rounded ${
                    selectedRound === round
                      ? 'bg-masters-gold text-masters-dark'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  Round {round}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-masters-green text-white px-6 py-4 flex justify-between items-center">
                <h3 className="text-lg font-serif font-bold">Round {selectedRound} Pairings</h3>
                <span className="text-sm text-gray-200">
                  {selectedRound === 1 ? 'Random draw' : 'Based on standings'}
                </span>
              </div>
              <div className="divide-y">
                {pairings.map((pairing) => (
                  <div key={pairing.id} className="p-4">
                    {editingPairing?.id === pairing.id ? (
                      <div className="space-y-3">
                        <div className="flex gap-4 items-center">
                          <label className="text-sm text-gray-600 w-20">Tee Time:</label>
                          <input
                            type="text"
                            value={editingPairing.teeTime}
                            onChange={(e) => setEditingPairing({ ...editingPairing, teeTime: e.target.value })}
                            className="px-2 py-1 border rounded w-32"
                          />
                        </div>
                        <div className="flex gap-4 items-start">
                          <label className="text-sm text-gray-600 w-20 pt-1">Players:</label>
                          <div className="flex-1 grid grid-cols-2 gap-2">
                            {editingPairing.players.map((player, idx) => (
                              <input
                                key={idx}
                                type="text"
                                value={player}
                                onChange={(e) => {
                                  const newPlayers = [...editingPairing.players]
                                  newPlayers[idx] = e.target.value
                                  setEditingPairing({ ...editingPairing, players: newPlayers })
                                }}
                                className="px-2 py-1 border rounded"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => handleSavePairing(editingPairing)}
                            className="px-4 py-1 bg-masters-green text-white rounded text-sm"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingPairing(null)}
                            className="px-4 py-1 bg-gray-200 rounded text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="w-24 text-masters-gold font-bold">{pairing.teeTime}</div>
                        <div className="flex-1 flex flex-wrap gap-2">
                          {pairing.players.map((player, idx) => (
                            <span key={idx} className="bg-gray-100 px-3 py-1 rounded text-sm">
                              {player}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => setEditingPairing(pairing)}
                          className="text-masters-green hover:text-masters-gold text-sm"
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              Tip: For Rounds 2 and 3, pairings are typically based on current standings.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
