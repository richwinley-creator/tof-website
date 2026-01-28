import Link from 'next/link'

const featuredNews = [
  {
    id: 1,
    title: '2024 Tournament Recap: A Historic Finish',
    excerpt: 'The 2024 Tournament of Friends delivered unforgettable moments as competitors battled for the coveted Black Jacket.',
    date: 'October 15, 2024',
    slug: '2024-tournament-recap',
    image: '/images/placeholder-golf.jpg',
  },
  {
    id: 2,
    title: '2025 Registration Now Open',
    excerpt: 'Secure your spot in the 10th annual Tournament of Friends. Limited spots available for this milestone event.',
    date: 'January 1, 2025',
    slug: '2025-registration-open',
    image: '/images/placeholder-golf.jpg',
  },
  {
    id: 3,
    title: 'Black Jacket Ceremony Tradition',
    excerpt: 'Learn about the prestigious Black Jacket ceremony and what it means to earn this honor among friends.',
    date: 'December 10, 2024',
    slug: 'black-jacket-tradition',
    image: '/images/placeholder-golf.jpg',
  },
]

export default function FeaturedNews() {
  return (
    <section className="section-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-masters-dark mb-4">
            Latest News
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest from Tournament of Friends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredNews.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="card group"
            >
              {/* Placeholder image */}
              <div className="h-48 bg-masters-green/10 flex items-center justify-center">
                <svg className="w-16 h-16 text-masters-green/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-masters-gold text-sm font-medium mb-2">
                  {article.date}
                </div>
                <h3 className="text-xl font-serif font-bold text-masters-dark mb-3 group-hover:text-masters-green transition-colors duration-200">
                  {article.title}
                </h3>
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

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="btn-primary inline-block"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}
