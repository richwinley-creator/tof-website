import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tournament Schedule | Tournament of Friends 2026',
  description: 'TOF 2026 Scottsdale schedule, courses, and event itinerary.',
}

const tournamentInfo = {
  name: 'Tournament of Friends 2026',
  dates: 'September 20-23, 2026',
  location: 'Scottsdale, Arizona',
  host: 'Royal Clayton',
}

const schedule = [
  {
    day: 'Sunday',
    date: 'September 20th',
    events: [
      { time: '8:00 AM', event: 'Optional Practice Round (Ryder Cup Format)', location: 'Wildfire Golf Club', description: 'Arnold Palmer signature course - get familiar with desert golf' },
      { time: '6:30 PM', event: 'Welcome Reception', location: 'TBD', description: 'Cocktails and light appetizers' },
      { time: 'Evening', event: 'Dinner on your own', location: 'Explore Scottsdale', description: '' },
    ],
  },
  {
    day: 'Monday',
    date: 'September 21st',
    events: [
      { time: 'TBD', event: 'Round 1 - Tournament Play', location: 'Grayhawk Golf Club', description: 'First round of championship play' },
      { time: '7:00 PM', event: 'Founders Dinner', location: 'TBD', description: 'Black Jacket Champions - wear your jackets!' },
    ],
  },
  {
    day: 'Tuesday',
    date: 'September 22nd',
    events: [
      { time: 'TBD', event: 'Round 2 - Tournament Play', location: 'Grayhawk Golf Club', description: 'Second round of championship play' },
      { time: 'Evening', event: 'Dinner on your own', location: 'Explore Scottsdale', description: '' },
    ],
  },
  {
    day: 'Wednesday',
    date: 'September 23rd',
    events: [
      { time: 'Shotgun', event: 'Final Round - Tournament Play', location: 'Camelback Golf Club', description: 'Championship round - shotgun start' },
      { time: 'After Golf', event: 'Champions Closing Reception', location: 'Camelback Golf Club', description: 'Awards ceremony and Black Jacket presentation' },
    ],
  },
]

const courses = [
  {
    name: 'Wildfire Golf Club',
    description: 'The Arnold Palmer signature course uses flashed bunkers and undulated putting greens to offer a unique challenge. Awarded "Best Place to Tee Off for National Golf Month" by GlobalTravelerUSA.',
    round: 'Practice Round',
    image: '/images/courses/wildfire.jpg',
    website: 'https://www.wildfiregolf.com',
  },
  {
    name: 'Grayhawk Golf Club',
    description: 'Grayhawk Golf Club offers an unforgettable lineup of golf with Raptor and Talon leading the way as two of the best daily fee, public golf courses in Scottsdale, Arizona.',
    round: 'Rounds 1 & 2',
    image: '/images/courses/grayhawk.jpg',
    website: 'https://grayhawkgolf.com',
  },
  {
    name: 'Camelback Golf Club',
    description: 'Set amidst rolling fairways and the Camelback foothills, natural beauty, native plants, and grasses combine for a challenging round that can be as punishing as it is rewarding.',
    round: 'Final Round',
    image: '/images/courses/camelback.jpg',
    website: 'https://www.camelbackgolf.com',
  },
]

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-16">
        <div className="container-main text-center">
          <span className="inline-block bg-masters-gold text-masters-dark px-4 py-1 text-sm font-semibold uppercase tracking-wider mb-6">
            {tournamentInfo.dates}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            TOF 2026 Scottsdale
          </h1>
          <p className="text-xl text-gray-200">
            {tournamentInfo.location} • Host: {tournamentInfo.host}
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-gray-50 py-6 border-b">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <span className="text-gray-500 text-sm">Format</span>
              <p className="font-serif font-bold text-masters-dark">Net Stroke Play</p>
            </div>
            <div>
              <span className="text-gray-500 text-sm">Rounds</span>
              <p className="font-serif font-bold text-masters-dark">3 Tournament + 1 Practice</p>
            </div>
            <div>
              <span className="text-gray-500 text-sm">Yardage</span>
              <p className="font-serif font-bold text-masters-dark">6,300 - 6,500</p>
            </div>
            <div>
              <span className="text-gray-500 text-sm">Scoring</span>
              <p className="font-serif font-bold text-masters-dark">Golf Genius App</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-white">
        <div className="container-main">
          <h2 className="text-2xl font-serif font-bold text-masters-dark mb-8 text-center">
            Championship Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.map((course) => (
              <a
                key={course.name}
                href={course.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 relative">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-masters-gold text-sm font-medium">{course.round}</span>
                  <h3 className="font-serif font-bold text-lg text-masters-dark mt-1 group-hover:text-masters-gold transition-colors">
                    {course.name}
                    <svg className="inline-block w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{course.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Day by Day Schedule */}
      <section className="bg-gray-50 py-16">
        <div className="container-main">
          <h2 className="text-2xl font-serif font-bold text-masters-dark mb-8 text-center">
            Event Itinerary
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {schedule.map((day) => (
              <div key={day.day} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-masters-green text-white px-6 py-4">
                  <h3 className="text-xl font-serif font-bold">{day.day}</h3>
                  <p className="text-masters-gold text-sm">{day.date}</p>
                </div>
                <div className="divide-y">
                  {day.events.map((event, idx) => (
                    <div key={idx} className="p-4 md:p-6 flex flex-col md:flex-row md:items-start gap-4">
                      <div className="md:w-28 flex-shrink-0">
                        <span className="text-masters-gold font-bold">{event.time}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-masters-dark">{event.event}</h4>
                        <p className="text-gray-500 text-sm">{event.location}</p>
                        {event.description && (
                          <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-white">
        <div className="container-main">
          <h2 className="text-2xl font-serif font-bold text-masters-dark mb-8 text-center">
            Pricing
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-masters-green text-white rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-masters-gold font-semibold mb-4">Accommodations</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>W Hotel Scottsdale (per night)</span>
                      <span className="font-bold">$309</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-masters-gold font-semibold mb-4">Golf</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>4 Rounds of Golf</span>
                      <span className="font-bold">$809</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>3 Rounds (no practice)</span>
                      <span>$629</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/20 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span>Tournament Entry Fee</span>
                  <span className="font-bold text-xl">$400</span>
                </div>
                <p className="text-gray-300 text-sm">Includes: Prize money pool, receptions, Founders Dinner, and tournament administration</p>
              </div>
              <div className="border-t border-white/20 pt-6 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Estimated Total (4 nights + 4 rounds)</span>
                  <span className="font-bold text-2xl text-masters-gold">$2,531</span>
                </div>
              </div>
            </div>

            {/* Prize Money */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-masters-gold/10 p-6 rounded-lg">
                <div className="text-3xl font-serif font-bold text-masters-gold">$1,500</div>
                <div className="text-gray-600 mt-1">1st Place</div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-3xl font-serif font-bold text-gray-600">$1,000</div>
                <div className="text-gray-600 mt-1">2nd Place</div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-3xl font-serif font-bold text-gray-600">$500</div>
                <div className="text-gray-600 mt-1">3rd Place</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="bg-masters-gold py-12">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-masters-dark mb-4">
              Payment Deadlines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg">
                <div className="text-masters-green font-bold text-lg">March 1st</div>
                <div className="text-gray-600 mt-2">$400 Deposit Due</div>
                <p className="text-sm text-gray-500 mt-2">Non-refundable unless waitlist fills your spot</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-masters-green font-bold text-lg">July 1st</div>
                <div className="text-gray-600 mt-2">$400 Entry Fee Due</div>
                <p className="text-sm text-gray-500 mt-2">Non-refundable</p>
              </div>
            </div>
            <p className="mt-6 text-masters-dark">
              <strong>Zelle payments to:</strong> Gerard Gibbons at 404-538-2539
            </p>
          </div>
        </div>
      </section>

      {/* Rules & Important Info */}
      <section className="section-white">
        <div className="container-main">
          <h2 className="text-2xl font-serif font-bold text-masters-dark mb-8 text-center">
            Tournament Rules & Info
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-serif font-bold text-masters-dark mb-3">Rules of Play</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• USGA Rules Apply</li>
                <li>• Stroke play with GHIN Index</li>
                <li>• T-Box: 6,300 - 6,500 yards</li>
                <li>• All hazards play as lateral (1 stroke penalty)</li>
                <li>• OB: Re-tee or lateral relief (2 stroke penalty)</li>
                <li>• 65+ may play par 5s one tee up</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-serif font-bold text-masters-dark mb-3">Pace of Play</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• <strong>4 hours 10 minutes maximum</strong></li>
                <li>• Play ready golf</li>
                <li>• Slow play: 2 stroke penalty</li>
                <li>• Commissioner has sole right to amend rules</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-serif font-bold text-masters-dark mb-3">Weather</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• September in Scottsdale: Hot but manageable</li>
                <li>• Low: ~80°F / High: 98-100°F</li>
                <li>• It&apos;s a dry heat!</li>
                <li>• Bring sunscreen and stay hydrated</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-serif font-bold text-masters-dark mb-3">Transportation</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• No formal transportation provided</li>
                <li>• Rental car recommended</li>
                <li>• Uber/Lyft available</li>
                <li>• Coordinate with brothers for rides</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Black Jacket Champions */}
      <section className="bg-masters-green text-white py-12">
        <div className="container-main text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Black Jacket Champions</h2>
          <p className="text-gray-200 mb-6 max-w-lg mx-auto">
            If you&apos;ve earned the Black Jacket, bring it and wear it proudly to the Founders Dinner. You earned that!
          </p>
          <Link href="/winners" className="btn-gold inline-block">
            View Past Champions
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-white">
        <div className="container-main text-center">
          <h2 className="text-2xl font-serif font-bold text-masters-dark mb-4">Ready to Compete?</h2>
          <p className="text-gray-600 mb-6">Secure your spot in TOF 2026 Scottsdale.</p>
          <Link href="/register" className="btn-primary inline-block">
            Register Now
          </Link>
        </div>
      </section>
    </>
  )
}
