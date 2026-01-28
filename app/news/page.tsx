import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'News | Tournament of Friends',
  description: 'Latest news and updates from the Tournament of Friends.',
}

// News articles - will be replaced with Supabase data
const newsArticles = [
  {
    id: 1,
    title: 'TOF 2026 Registration Now Open',
    excerpt: 'The wait is over! Registration is officially open for TOF 2026 in Scottsdale, Arizona. Mark your calendars for September 20-23, 2026 and secure your spot in what promises to be our best tournament yet.',
    date: 'January 28, 2026',
    slug: 'tof-2026-registration-open',
    category: 'Announcement',
    image: '/images/courses/camelback.jpg',
  },
  {
    id: 2,
    title: 'Course Preview: Wildfire Golf Club',
    excerpt: 'Our practice round destination features the Arnold Palmer designed Palmer Course. Set against the stunning McDowell Mountains, Wildfire offers desert golf at its finest with wide fairways and strategic bunkering.',
    date: 'January 25, 2026',
    slug: 'wildfire-course-preview',
    category: 'Course Preview',
    image: '/images/courses/wildfire.jpg',
  },
  {
    id: 3,
    title: 'Course Preview: Grayhawk Golf Club',
    excerpt: 'The Raptor Course at Grayhawk will host Rounds 1 & 2. This Tom Fazio masterpiece has welcomed PGA Tour events and offers championship conditions that will test every aspect of your game.',
    date: 'January 22, 2026',
    slug: 'grayhawk-course-preview',
    category: 'Course Preview',
    image: '/images/courses/grayhawk.jpg',
  },
  {
    id: 4,
    title: 'Course Preview: Camelback Golf Club',
    excerpt: 'The Padre Course at Camelback will host our final round where the Black Jacket will be decided. Set in Paradise Valley with Camelback Mountain as the backdrop, this is where champions are crowned.',
    date: 'January 20, 2026',
    slug: 'camelback-course-preview',
    category: 'Course Preview',
    image: '/images/courses/camelback.jpg',
  },
  {
    id: 5,
    title: 'The Black Jacket Legacy: 11 Years Strong',
    excerpt: 'In 2015, eight friends came together with a vision: create a tournament that celebrates Black excellence in golf. What started as a friendly competition has grown into a brotherhood that spans the country.',
    date: 'January 15, 2026',
    slug: 'black-jacket-legacy',
    category: 'Feature',
    image: null,
  },
  {
    id: 6,
    title: 'What to Pack for Scottsdale',
    excerpt: 'September in the Sonoran Desert means warm days and perfect golf weather. Here is everything you need to know about preparing for TOF 2026, from gear to attire to sun protection.',
    date: 'January 10, 2026',
    slug: 'what-to-pack-scottsdale',
    category: 'Guide',
    image: null,
  },
]

const categories = [...new Set(newsArticles.map((a) => a.category))]

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            News
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Stories and updates from Tournament of Friends
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b">
        <div className="container-main py-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-4 py-2 bg-masters-green text-white font-medium rounded">
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-gray-100 text-masters-dark font-medium rounded hover:bg-masters-gold hover:text-masters-dark transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="card group"
              >
                {/* Article Image */}
                <div className="h-48 bg-masters-dark relative overflow-hidden">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-masters-dark to-masters-green flex items-center justify-center">
                      <span className="text-masters-gold font-serif text-4xl font-bold">TOF</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-masters-gold bg-masters-gold/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-serif font-bold text-masters-dark mb-3 group-hover:text-masters-green transition-colors duration-200">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 text-masters-green font-medium text-sm group-hover:text-masters-gold transition-colors duration-200">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-green">
        <div className="container-main text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-200 mb-6 max-w-lg mx-auto">
            Subscribe to receive the latest news and announcements from Tournament of Friends.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-masters-dark focus:outline-none focus:ring-2 focus:ring-masters-gold"
            />
            <button type="submit" className="btn-gold">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
