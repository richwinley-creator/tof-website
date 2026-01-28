'use client'

import { useState } from 'react'

// Invite code for closed group registration
const VALID_INVITE_CODE = 'TOF2026'

export default function RegisterPage() {
  const [inviteCode, setInviteCode] = useState('')
  const [inviteVerified, setInviteVerified] = useState(false)
  const [inviteError, setInviteError] = useState('')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ghinNumber: '',
    handicap: '',
    shirtSize: '',
    dietaryRestrictions: '',
    specialRequests: '',
  })

  const handleVerifyInvite = (e: React.FormEvent) => {
    e.preventDefault()
    if (inviteCode.toUpperCase() === VALID_INVITE_CODE) {
      setInviteVerified(true)
      setInviteError('')
    } else {
      setInviteError('Invalid invite code. Contact a TOF member for access.')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Submit to Supabase
    console.log('Form submitted:', formData)
    alert('Registration submitted! We will contact you with confirmation details.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-20">
        <div className="container-main text-center">
          <span className="inline-block bg-masters-gold text-masters-dark px-4 py-1 text-sm font-semibold uppercase tracking-wider mb-6">
            TOF 2026 Scottsdale
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Register Now
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Secure your spot for Scottsdale, Arizona • September 20-23, 2026
          </p>
        </div>
      </section>

      {/* Registration Info */}
      <section className="bg-gray-50 py-8">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="text-masters-gold font-serif font-bold text-2xl">Sep 20-23</div>
              <div className="text-gray-600 text-sm">Tournament Dates</div>
            </div>
            <div className="text-center p-4">
              <div className="text-masters-gold font-serif font-bold text-2xl">Scottsdale</div>
              <div className="text-gray-600 text-sm">Arizona</div>
            </div>
            <div className="text-center p-4">
              <div className="text-masters-gold font-serif font-bold text-2xl">3 Courses</div>
              <div className="text-gray-600 text-sm">Championship Golf</div>
            </div>
          </div>
        </div>
      </section>

      {/* Invite Code Verification */}
      {!inviteVerified && (
        <section className="section-white">
          <div className="container-main">
            <div className="max-w-md mx-auto">
              <div className="bg-white p-8 shadow-lg rounded-lg text-center">
                <div className="w-16 h-16 bg-masters-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-masters-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-bold text-masters-dark mb-4">
                  Members Only
                </h2>
                <p className="text-gray-600 mb-6">
                  Tournament of Friends is a private event. Enter your invite code to register.
                </p>
                <form onSubmit={handleVerifyInvite} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={inviteCode}
                      onChange={(e) => setInviteCode(e.target.value)}
                      placeholder="Enter invite code"
                      className="w-full px-4 py-3 border border-gray-300 rounded text-center text-lg tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-masters-green"
                    />
                  </div>
                  {inviteError && (
                    <p className="text-red-600 text-sm">{inviteError}</p>
                  )}
                  <button type="submit" className="w-full btn-primary">
                    Verify Code
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-6">
                  Don&apos;t have a code? Contact a current member for an invitation.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Registration Form */}
      {inviteVerified && (
      <section className="section-white">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-xl font-serif font-bold text-masters-dark mb-6 pb-2 border-b">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    />
                  </div>
                </div>
              </div>

              {/* Golf Information */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-xl font-serif font-bold text-masters-dark mb-6 pb-2 border-b">
                  Golf Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ghinNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      GHIN Number *
                    </label>
                    <input
                      type="text"
                      id="ghinNumber"
                      name="ghinNumber"
                      required
                      value={formData.ghinNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                      placeholder="e.g., 1234567"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Your handicap will be verified via GHIN
                    </p>
                  </div>
                  <div>
                    <label htmlFor="handicap" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Handicap Index
                    </label>
                    <input
                      type="text"
                      id="handicap"
                      name="handicap"
                      value={formData.handicap}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                      placeholder="e.g., 12.5"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-xl font-serif font-bold text-masters-dark mb-6 pb-2 border-b">
                  Additional Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="shirtSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Shirt Size
                    </label>
                    <select
                      id="shirtSize"
                      name="shirtSize"
                      value={formData.shirtSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    >
                      <option value="">Select size</option>
                      <option value="S">Small</option>
                      <option value="M">Medium</option>
                      <option value="L">Large</option>
                      <option value="XL">X-Large</option>
                      <option value="XXL">XX-Large</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-2">
                      Dietary Restrictions
                    </label>
                    <input
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                      placeholder="e.g., Vegetarian, Gluten-free"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests or Comments
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={4}
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                    />
                  </div>
                </div>
              </div>

              {/* Entry Fee Notice */}
              <div className="bg-masters-gold/10 p-6 rounded-lg">
                <h3 className="font-semibold text-masters-dark mb-2">Entry Fee Information</h3>
                <p className="text-gray-600 text-sm">
                  The entry fee covers green fees, cart rental, tournament gifts, and the awards dinner.
                  Payment instructions will be sent via email after registration is confirmed.
                </p>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-12 py-4 text-lg"
                >
                  Submit Registration
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  By registering, you agree to the Tournament of Friends rules and code of conduct.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      )}

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="container-main">
          <h2 className="text-2xl font-serif font-bold text-masters-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white p-6 shadow">
              <h3 className="font-semibold text-masters-dark mb-2">Do I need a GHIN number?</h3>
              <p className="text-gray-600">Yes, all participants must have a valid GHIN handicap to compete. This ensures fair competition for all skill levels.</p>
            </div>
            <div className="bg-white p-6 shadow">
              <h3 className="font-semibold text-masters-dark mb-2">What is included in the entry fee?</h3>
              <p className="text-gray-600">The entry fee covers all rounds of golf, cart rental, tournament gifts, and the awards dinner. Accommodations are not included.</p>
            </div>
            <div className="bg-white p-6 shadow">
              <h3 className="font-semibold text-masters-dark mb-2">Can I get a refund?</h3>
              <p className="text-gray-600">Refunds are available up to 30 days before the tournament. After that, your spot may be transferred to another player.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
