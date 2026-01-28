'use client'

import { useState } from 'react'
import Link from 'next/link'

// Sample member data - will be replaced with Supabase data
const members = [
  { id: '1', firstName: 'Member', lastName: 'One', city: 'Atlanta', state: 'GA', handicap: 8.2, memberSince: 2015, blackJackets: 2 },
  { id: '2', firstName: 'Member', lastName: 'Two', city: 'Charlotte', state: 'NC', handicap: 12.5, memberSince: 2016, blackJackets: 1 },
  { id: '3', firstName: 'Member', lastName: 'Three', city: 'Houston', state: 'TX', handicap: 6.8, memberSince: 2015, blackJackets: 0 },
  { id: '4', firstName: 'Member', lastName: 'Four', city: 'Chicago', state: 'IL', handicap: 14.1, memberSince: 2017, blackJackets: 1 },
  { id: '5', firstName: 'Member', lastName: 'Five', city: 'Los Angeles', state: 'CA', handicap: 10.3, memberSince: 2018, blackJackets: 0 },
  { id: '6', firstName: 'Member', lastName: 'Six', city: 'Dallas', state: 'TX', handicap: 9.7, memberSince: 2016, blackJackets: 0 },
  { id: '7', firstName: 'Member', lastName: 'Seven', city: 'Miami', state: 'FL', handicap: 11.2, memberSince: 2019, blackJackets: 1 },
  { id: '8', firstName: 'Member', lastName: 'Eight', city: 'Washington', state: 'DC', handicap: 15.4, memberSince: 2017, blackJackets: 0 },
  { id: '9', firstName: 'Member', lastName: 'Nine', city: 'New York', state: 'NY', handicap: 7.9, memberSince: 2020, blackJackets: 0 },
  { id: '10', firstName: 'Member', lastName: 'Ten', city: 'Philadelphia', state: 'PA', handicap: 13.6, memberSince: 2018, blackJackets: 0 },
  { id: '11', firstName: 'Member', lastName: 'Eleven', city: 'Detroit', state: 'MI', handicap: 16.2, memberSince: 2021, blackJackets: 0 },
  { id: '12', firstName: 'Member', lastName: 'Twelve', city: 'Phoenix', state: 'AZ', handicap: 8.8, memberSince: 2019, blackJackets: 0 },
]

export default function MemberDirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'handicap' | 'memberSince'>('name')

  const filteredMembers = members
    .filter((member) =>
      `${member.firstName} ${member.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${member.city}, ${member.state}`.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.lastName.localeCompare(b.lastName)
      if (sortBy === 'handicap') return a.handicap - b.handicap
      if (sortBy === 'memberSince') return a.memberSince - b.memberSince
      return 0
    })

  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-16">
        <div className="container-main">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/members"
                className="inline-flex items-center text-masters-gold hover:text-white transition-colors mb-4"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Dashboard
              </Link>
              <h1 className="text-3xl md:text-4xl font-serif font-bold">
                The Brotherhood
              </h1>
              <p className="text-gray-300 mt-2">
                {members.length} Members Strong
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="container-main py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by name or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
              />
            </div>
            <div className="flex gap-2">
              <span className="text-gray-600 text-sm self-center">Sort by:</span>
              <button
                onClick={() => setSortBy('name')}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  sortBy === 'name' ? 'bg-masters-green text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Name
              </button>
              <button
                onClick={() => setSortBy('handicap')}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  sortBy === 'handicap' ? 'bg-masters-green text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Handicap
              </button>
              <button
                onClick={() => setSortBy('memberSince')}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  sortBy === 'memberSince' ? 'bg-masters-green text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Seniority
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Grid */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Photo placeholder */}
                <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
                  <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  {member.blackJackets > 0 && (
                    <div className="absolute top-3 right-3 bg-masters-gold text-masters-dark px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {member.blackJackets}x Champion
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-lg text-masters-dark">
                    {member.firstName} {member.lastName}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {member.city}, {member.state}
                  </p>
                  <div className="mt-3 flex justify-between items-center text-sm">
                    <div>
                      <span className="text-gray-500">Handicap</span>
                      <p className="font-bold text-masters-green">{member.handicap.toFixed(1)}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500">Member Since</span>
                      <p className="font-bold text-masters-dark">{member.memberSince}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No members found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-masters-green text-white py-12">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif font-bold text-masters-gold">{members.length}</div>
              <div className="text-gray-300 text-sm">Total Members</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-masters-gold">
                {new Set(members.map(m => m.state)).size}
              </div>
              <div className="text-gray-300 text-sm">States Represented</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-masters-gold">
                {(members.reduce((sum, m) => sum + m.handicap, 0) / members.length).toFixed(1)}
              </div>
              <div className="text-gray-300 text-sm">Avg Handicap</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-masters-gold">
                {members.filter(m => m.blackJackets > 0).length}
              </div>
              <div className="text-gray-300 text-sm">Black Jacket Winners</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
