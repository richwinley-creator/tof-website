import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News | Tournament of Friends',
  description: 'Latest news and updates from the Tournament of Friends.',
}

// Sample news data - will be replaced with Supabase data
const newsArticles = [
  {
    id: 1,
    title: '2025 Tournament Registration Now Open',
    excerpt: 'Secure your spot in the 10th annual Tournament of Friends. This milestone event promises to be our best yet.',
    date: 'January 15, 2025',
    slug: '2025-registration-open',
    category: 'Announcement',
  },
  {
    id: 2,
    title: '2024 Tournament Recap: A Historic Finish',
    excerpt: 'The 2024 Tournament of Friends delivered unforgettable moments as competitors battled for the coveted Black Jacket.',
    date: 'October 20, 2024',
    slug: '2024-tournament-recap',
    category: 'Recap',
  },
  {
    id: 3,
    title: 'The Black Jacket Tradition: A Decade of Excellence',
    excerpt: 'As we approach our 10th anniversary, we look back at the tradition that defines Tournament of Friends.',
    date: 'December 1, 2024',
    slug: 'black-jacket-decade',
    category: 'Feature',
  },
  {
    id: 4,
    title: 'Meet the 2024 Champion',
    excerpt: 'An exclusive interview with our newest Black Jacket winner about their journey to victory.',
    date: 'October 25, 2024',
    slug: 'meet-2024-champion',
    category: 'Interview',
  },
  {
    id: 5,
    title: '2025 Course Announcement Coming Soon',
    excerpt: 'We are thrilled to announce that the venue for our 10th anniversary tournament will be revealed next month.',
    date: 'January 5, 2025',
    slug: '2025-course-teaser',
    category: 'Announcement',
  },
  {
    id: 6,
    title: 'Tips from Past Champions',
    excerpt: 'Former Black Jacket winners share their advice for competing in the Tournament of Friends.',
    date: 'November 15, 2024',
    slug: 'champion-tips',
    category: 'Feature',
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
                {/* Image placeholder */}
                <div className="h-48 bg-masters-green/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-masters-green/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
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
