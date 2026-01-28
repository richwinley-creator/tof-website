'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TournamentSettings() {
  const [settings, setSettings] = useState({
    name: '2025 Tournament of Friends',
    year: '2025',
    startDate: '',
    endDate: '',
    location: '',
    courseName: '',
    courseAddress: '',
    par: '72',
    slopeRating: '',
    courseRating: '',
    entryFee: '',
    maxPlayers: '24',
    inviteCode: 'TOF2025',
    registrationOpen: true,
    hotelName: '',
    hotelAddress: '',
    hotelPhone: '',
    hotelBookingLink: '',
    hotelGroupRate: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  })

  const [saved, setSaved] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value,
    })
    setSaved(false)
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Save to Supabase
    console.log('Saving settings:', settings)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
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
              <h1 className="text-xl font-serif font-bold">Tournament Settings</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        <form onSubmit={handleSave} className="max-w-4xl mx-auto space-y-8">
          {/* Basic Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-serif font-bold text-masters-dark mb-6 pb-2 border-b">
              Tournament Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tournament Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={settings.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={settings.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={settings.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Entry Fee ($)
                </label>
                <input
                  type="number"
                  name="entryFee"
                  value={settings.entryFee}
                  onChange={handleChange}
                  placeholder="500"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Players
                </label>
                <input
                  type="number"
                  name="maxPlayers"
                  value={settings.maxPlayers}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
            </div>
          </div>

          {/* Course Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-serif font-bold text-masters-dark mb-6 pb-2 border-b">
              Course Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  name="courseName"
                  value={settings.courseName}
                  onChange={handleChange}
                  placeholder="e.g., Pebble Beach Golf Links"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Address
                </label>
                <input
                  type="text"
                  name="courseAddress"
                  value={settings.courseAddress}
                  onChange={handleChange}
                  placeholder="Full address"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Par
                </label>
                <input
                  type="number"
                  name="par"
                  value={settings.par}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slope Rating
                </label>
                <input
                  type="number"
                  name="slopeRating"
                  value={settings.slopeRating}
                  onChange={handleChange}
                  placeholder="e.g., 135"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Rating
                </label>
                <input
                  type="text"
                  name="courseRating"
                  value={settings.courseRating}
                  onChange={handleChange}
                  placeholder="e.g., 74.5"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
            </div>
          </div>

          {/* Hotel Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-serif font-bold text-masters-dark mb-6 pb-2 border-b">
              Accommodations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hotel Name
                </label>
                <input
                  type="text"
                  name="hotelName"
                  value={settings.hotelName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hotel Address
                </label>
                <input
                  type="text"
                  name="hotelAddress"
                  value={settings.hotelAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hotel Phone
                </label>
                <input
                  type="tel"
                  name="hotelPhone"
                  value={settings.hotelPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Group Rate (per night)
                </label>
                <input
                  type="text"
                  name="hotelGroupRate"
                  value={settings.hotelGroupRate}
                  onChange={handleChange}
                  placeholder="e.g., $189"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Booking Link
                </label>
                <input
                  type="url"
                  name="hotelBookingLink"
                  value={settings.hotelBookingLink}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
            </div>
          </div>

          {/* Registration Settings */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-serif font-bold text-masters-dark mb-6 pb-2 border-b">
              Registration Settings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Invite Code
                </label>
                <input
                  type="text"
                  name="inviteCode"
                  value={settings.inviteCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green font-mono uppercase"
                />
                <p className="text-sm text-gray-500 mt-1">Members need this code to register</p>
              </div>
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="registrationOpen"
                    checked={settings.registrationOpen}
                    onChange={handleChange}
                    className="w-5 h-5 text-masters-green border-gray-300 rounded focus:ring-masters-green"
                  />
                  <span className="ml-3 text-gray-700">Registration Open</span>
                </label>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-serif font-bold text-masters-dark mb-6 pb-2 border-b">
              Tournament Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={settings.contactName}
                  onChange={handleChange}
                  placeholder="Tournament Director"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={settings.contactEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={settings.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            {saved && (
              <span className="text-green-600 font-medium self-center">
                ✓ Settings saved!
              </span>
            )}
            <button type="submit" className="btn-primary px-8">
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
