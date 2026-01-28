import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Sample article data - will be replaced with Supabase data
const articles: Record<string, {
  title: string
  date: string
  category: string
  content: string[]
}> = {
  '2025-registration-open': {
    title: '2025 Tournament Registration Now Open',
    date: 'January 15, 2025',
    category: 'Announcement',
    content: [
      'We are thrilled to announce that registration for the 10th annual Tournament of Friends is now open. This milestone event promises to be our most memorable tournament yet.',
      'The 2025 tournament marks a decade of friendship, competition, and the pursuit of the prestigious Black Jacket. Over the years, we have seen incredible displays of skill, sportsmanship, and the enduring bonds that make this tournament special.',
      'Registration is limited to ensure an intimate experience for all participants. Early registration is recommended as spots fill quickly each year.',
      'Stay tuned for more details about the tournament location, dates, and special events planned for our 10th anniversary celebration.',
    ],
  },
  '2024-tournament-recap': {
    title: '2024 Tournament Recap: A Historic Finish',
    date: 'October 20, 2024',
    category: 'Recap',
    content: [
      'The 2024 Tournament of Friends delivered one of the most exciting finishes in our history. Going into the final round, three competitors were tied for the lead, setting up a dramatic conclusion.',
      'The conditions were challenging, with gusty winds testing even the most experienced players. But through it all, the spirit of camaraderie that defines Tournament of Friends shone through.',
      'Congratulations to our newest Black Jacket winner, who earned the honor through exceptional play and unwavering composure under pressure.',
      'Thank you to all participants, volunteers, and supporters who made the 2024 tournament a success. We cannot wait to see you all again next year.',
    ],
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    return {
      title: 'Article Not Found | Tournament of Friends',
    }
  }

  return {
    title: `${article.title} | Tournament of Friends`,
    description: article.content[0],
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/news"
              className="inline-flex items-center text-masters-gold hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-masters-dark bg-masters-gold px-2 py-1 rounded">
                {article.category}
              </span>
              <span className="text-gray-300">
                {article.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image Placeholder */}
            <div className="aspect-video bg-masters-green/10 rounded-lg flex items-center justify-center mb-8">
              <svg className="w-24 h-24 text-masters-green/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share */}
            <div className="border-t pt-8 mt-12">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Share this article</span>
                <div className="flex gap-4">
                  <button className="w-10 h-10 bg-masters-green/10 rounded-full flex items-center justify-center text-masters-green hover:bg-masters-green hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-masters-green/10 rounded-full flex items-center justify-center text-masters-green hover:bg-masters-green hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="container-main">
          <h2 className="text-2xl font-serif font-bold text-masters-dark mb-8 text-center">
            More News
          </h2>
          <div className="text-center">
            <Link href="/news" className="btn-primary inline-block">
              View All News
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
