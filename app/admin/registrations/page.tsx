'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Registration {
  id: string
  name: string
  email: string
  phone: string
  ghinNumber: string
  handicap: number
  registeredAt: string
  paymentStatus: 'pending' | 'paid' | 'refunded'
  shirtSize: string
}

const initialRegistrations: Registration[] = [
  { id: '1', name: 'John Smith', email: 'john@email.com', phone: '555-0101', ghinNumber: '1234567', handicap: 8.2, registeredAt: '2025-01-15', paymentStatus: 'paid', shirtSize: 'L' },
  { id: '2', name: 'Mike Johnson', email: 'mike@email.com', phone: '555-0102', ghinNumber: '2345678', handicap: 12.5, registeredAt: '2025-01-16', paymentStatus: 'paid', shirtSize: 'XL' },
  { id: '3', name: 'David Williams', email: 'david@email.com', phone: '555-0103', ghinNumber: '3456789', handicap: 6.8, registeredAt: '2025-01-17', paymentStatus: 'pending', shirtSize: 'M' },
  { id: '4', name: 'Chris Brown', email: 'chris@email.com', phone: '555-0104', ghinNumber: '4567890', handicap: 14.1, registeredAt: '2025-01-18', paymentStatus: 'paid', shirtSize: 'L' },
  { id: '5', name: 'James Davis', email: 'james@email.com', phone: '555-0105', ghinNumber: '5678901', handicap: 10.3, registeredAt: '2025-01-19', paymentStatus: 'pending', shirtSize: 'XL' },
]

export default function RegistrationsAdmin() {
  const [registrations, setRegistrations] = useState<Registration[]>(initialRegistrations)
  const [filter, setFilter] = useState<'all' | 'paid' | 'pending'>('all')

  const handleUpdatePayment = (id: string, status: 'pending' | 'paid' | 'refunded') => {
    setRegistrations(registrations.map(r =>
      r.id === id ? { ...r, paymentStatus: status } : r
    ))
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this registration?')) {
      setRegistrations(registrations.filter(r => r.id !== id))
    }
  }

  const filteredRegistrations = registrations.filter(r => {
    if (filter === 'all') return true
    return r.paymentStatus === filter
  })

  const paidCount = registrations.filter(r => r.paymentStatus === 'paid').length
  const pendingCount = registrations.filter(r => r.paymentStatus === 'pending').length

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
              <h1 className="text-xl font-serif font-bold">Tournament Registrations</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-masters-green">{registrations.length}</div>
            <div className="text-gray-500 text-sm">Total Registrations</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-green-600">{paidCount}</div>
            <div className="text-gray-500 text-sm">Paid</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-masters-gold">{pendingCount}</div>
            <div className="text-gray-500 text-sm">Pending Payment</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-gray-400">{24 - registrations.length}</div>
            <div className="text-gray-500 text-sm">Spots Remaining</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-masters-green text-white' : 'bg-white text-gray-700'}`}
          >
            All ({registrations.length})
          </button>
          <button
            onClick={() => setFilter('paid')}
            className={`px-4 py-2 rounded ${filter === 'paid' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'}`}
          >
            Paid ({paidCount})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded ${filter === 'pending' ? 'bg-masters-gold text-masters-dark' : 'bg-white text-gray-700'}`}
          >
            Pending ({pendingCount})
          </button>
        </div>

        {/* Registrations Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Contact</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">GHIN</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Handicap</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Shirt</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Registered</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Payment</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRegistrations.map((reg) => (
                  <tr key={reg.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{reg.name}</td>
                    <td className="px-4 py-3">
                      <div className="text-sm">{reg.email}</div>
                      <div className="text-sm text-gray-500">{reg.phone}</div>
                    </td>
                    <td className="px-4 py-3 text-center font-mono text-sm">{reg.ghinNumber}</td>
                    <td className="px-4 py-3 text-center font-bold text-masters-green">{reg.handicap.toFixed(1)}</td>
                    <td className="px-4 py-3 text-center">{reg.shirtSize}</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-600">{reg.registeredAt}</td>
                    <td className="px-4 py-3 text-center">
                      <select
                        value={reg.paymentStatus}
                        onChange={(e) => handleUpdatePayment(reg.id, e.target.value as 'pending' | 'paid' | 'refunded')}
                        className={`px-2 py-1 rounded text-sm font-medium border-0 ${
                          reg.paymentStatus === 'paid'
                            ? 'bg-green-100 text-green-700'
                            : reg.paymentStatus === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="refunded">Refunded</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDelete(reg.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredRegistrations.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No registrations found.
          </div>
        )}

        {/* Export */}
        <div className="mt-6 flex justify-end">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
            Export to CSV
          </button>
        </div>
      </div>
    </div>
  )
}
