import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Article data - will be replaced with Supabase data
const articles: Record<string, {
  title: string
  date: string
  category: string
  image: string | null
  content: string[]
}> = {
  'tof-2026-registration-open': {
    title: 'TOF 2026 Registration Now Open',
    date: 'January 28, 2026',
    category: 'Announcement',
    image: '/images/courses/camelback.jpg',
    content: [
      'The wait is over, brothers. Registration is officially open for TOF 2026 in Scottsdale, Arizona. Mark your calendars for September 20-23, 2026.',
      'This year we are heading to the Sonoran Desert for championship golf at three world-class courses: Wildfire Golf Club for our practice round, Grayhawk Golf Club for Rounds 1 & 2, and Camelback Golf Club for the final round where the Black Jacket will be decided.',
      'TOF 2026 promises to be our most exciting tournament yet. The desert courses will challenge every aspect of your game, from long drives to precision iron play to clutch putting on fast greens.',
      'Registration is limited to ensure an intimate experience for all participants. Contact Gerard or any founding member for the invite code. Early registration is strongly recommended as spots fill quickly each year.',
      'Start preparing now. The Black Jacket awaits.',
    ],
  },
  'wildfire-course-preview': {
    title: 'Course Preview: Wildfire Golf Club',
    date: 'January 25, 2026',
    category: 'Course Preview',
    image: '/images/courses/wildfire.jpg',
    content: [
      'Our practice round destination for TOF 2026 is Wildfire Golf Club, featuring the Arnold Palmer designed Palmer Course. This is where you will shake off the travel rust and dial in your game for the competition ahead.',
      'Located at the JW Marriott Phoenix Desert Ridge Resort & Spa, Wildfire offers desert golf at its finest. The Palmer Course features wide fairways that reward aggressive play, but strategic bunkering punishes poor decisions.',
      'The course stretches 7,145 yards from the championship tees, with dramatic elevation changes that will affect club selection. The greens are large but well-protected, and reading the subtle breaks is key to scoring.',
      'Wildfire is known for its immaculate conditions and stunning views of the surrounding desert landscape. The practice round will give everyone a chance to reconnect with the brotherhood before the competition begins.',
      'Pro tip: The desert air is thin at elevation. Your ball will fly 5-10% farther than at sea level. Adjust your club selection accordingly.',
    ],
  },
  'grayhawk-course-preview': {
    title: 'Course Preview: Grayhawk Golf Club',
    date: 'January 22, 2026',
    category: 'Course Preview',
    image: '/images/courses/grayhawk.jpg',
    content: [
      'Grayhawk Golf Club will host Rounds 1 and 2 of TOF 2026. The Raptor Course is a Tom Fazio masterpiece that has welcomed PGA Tour events and consistently ranks among the best public courses in Arizona.',
      'At 7,108 yards, the Raptor Course demands accuracy off the tee. The fairways are generous but well-bunkered, and the native desert areas that line the holes will swallow errant shots. This is target golf at its finest.',
      'The greens at Grayhawk are fast, true, and full of subtle breaks. Reading them correctly will be the difference between contending for the Black Jacket and watching from the sidelines.',
      'The course winds through the pristine Sonoran Desert with stunning views of the McDowell Mountains. But do not let the beauty distract you—every shot requires focus and commitment.',
      'Grayhawk also features one of the best practice facilities in the Southwest. Arrive early on tournament days to warm up properly.',
    ],
  },
  'camelback-course-preview': {
    title: 'Course Preview: Camelback Golf Club',
    date: 'January 20, 2026',
    category: 'Course Preview',
    image: '/images/courses/camelback.jpg',
    content: [
      'The Padre Course at Camelback Golf Club will host our final round—where the Black Jacket will be decided. Set in Paradise Valley with iconic Camelback Mountain as the backdrop, this is the stage where champions are crowned.',
      'Recently renovated, the Padre Course offers a perfect blend of challenge and playability. The layout rewards strategic thinking and course management over raw power. Local knowledge will be valuable here.',
      'The course features rolling fairways, strategically placed bunkers, and water hazards that come into play on several holes. The greens are bentgrass and typically run fast, especially in the afternoon as the desert sun bakes them.',
      'The final round pressure at Camelback will test more than your golf game—it will test your mental fortitude. The brotherhood will be watching. History will be made.',
      'Camelback is located in the heart of Paradise Valley, just minutes from world-class dining and entertainment. Plan to celebrate after the Black Jacket ceremony.',
    ],
  },
  'black-jacket-legacy': {
    title: 'The Black Jacket Legacy: 11 Years Strong',
    date: 'January 15, 2026',
    category: 'Feature',
    image: null,
    content: [
      'In 2015, eight friends came together with a vision: create a golf tournament that celebrates Black excellence, builds lasting brotherhood, and provides a world-class competitive experience. The Tournament of Friends was born.',
      'The Black Jacket tradition was inspired by the Masters green jacket, but reimagined to represent our community. The black jacket symbolizes excellence, perseverance, and the bond that unites us. Each year, the winner earns the right to wear the jacket—a symbol of being the best among brothers.',
      'What started as a friendly competition has grown into something much larger. Over 11 years, TOF has visited courses across the country, from the links of the East Coast to the desert of the Southwest. We have crowned champions, forged friendships, and created memories that last a lifetime.',
      'The founding members—the original eight—set the tone for everything that followed. Their commitment to excellence, both on and off the course, established the standards that define TOF today.',
      'As we prepare for TOF 2026 in Scottsdale, we honor those who came before us. Every champion who has worn the Black Jacket. Every member who has competed with heart and integrity. Every moment that has made this brotherhood special.',
      'The Black Jacket awaits its next owner. Who will it be?',
    ],
  },
  'what-to-pack-scottsdale': {
    title: 'What to Pack for Scottsdale',
    date: 'January 10, 2026',
    category: 'Guide',
    image: null,
    content: [
      'September in the Sonoran Desert means warm days, low humidity, and perfect golf weather. But the desert environment requires specific preparation. Here is everything you need to know about packing for TOF 2026.',
      'GOLF ATTIRE: Pack light, breathable fabrics. Performance polos and moisture-wicking shirts are essential. Light-colored clothing will help reflect the sun. All three courses have standard dress codes—collared shirts required, no denim on the course.',
      'SUN PROTECTION: This is non-negotiable. Bring a quality sunscreen (SPF 50+), a wide-brimmed hat or cap, and quality sunglasses. The desert sun is intense, even in September. Reapply sunscreen every few holes.',
      'HYDRATION: Bring a large water bottle for each round. The courses will have water stations, but staying ahead of dehydration is critical in the dry desert air. Consider electrolyte supplements.',
      'FOOTWEAR: Comfortable golf shoes with good ventilation are essential. Break them in before the tournament—blisters will ruin your round. Bring casual shoes for the evenings.',
      'EVENING ATTIRE: Pack smart casual attire for dinners and the Black Jacket ceremony. This is a celebration of brotherhood—dress accordingly.',
      'EXTRAS: Lip balm with SPF, a light jacket for air-conditioned spaces, and your favorite celebratory beverage for after the final round.',
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
            {/* Featured Image */}
            <div className="aspect-video rounded-lg overflow-hidden mb-8 relative">
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-masters-dark via-masters-green to-masters-dark flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-masters-gold font-serif text-6xl font-bold block">TOF</span>
                    <span className="text-white/60 text-sm tracking-widest mt-2 block">EST. 2015</span>
                  </div>
                </div>
              )}
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
