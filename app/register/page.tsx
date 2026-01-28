'use client'

import { useState } from 'react'
import { Metadata } from 'next'

// Note: Metadata must be in a separate file for client components
// export const metadata: Metadata = {
//   title: 'Register | Tournament of Friends',
//   description: 'Register for the upcoming Tournament of Friends golf tournament.',
// }

export default function RegisterPage() {
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
            2025 Tournament
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Register Now
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Secure your spot in the 10th annual Tournament of Friends
          </p>
        </div>
      </section>

      {/* Registration Info */}
      <section className="bg-gray-50 py-8">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="text-masters-gold font-serif font-bold text-2xl">TBD</div>
              <div className="text-gray-600 text-sm">Tournament Dates</div>
            </div>
            <div className="text-center p-4">
              <div className="text-masters-gold font-serif font-bold text-2xl">$TBD</div>
              <div className="text-gray-600 text-sm">Entry Fee</div>
            </div>
            <div className="text-center p-4">
              <div className="text-masters-gold font-serif font-bold text-2xl">24</div>
              <div className="text-gray-600 text-sm">Spots Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
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
