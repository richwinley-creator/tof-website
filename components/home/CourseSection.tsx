import Link from 'next/link'
import Image from 'next/image'

const courses = [
  {
    id: 1,
    name: 'Wildfire Golf Club',
    role: 'Practice Round',
    date: 'Saturday, Sept 20',
    description: 'Arnold Palmer designed Palmer Course. Desert golf at its finest with wide fairways and strategic bunkering.',
    image: '/images/courses/wildfire.jpg',
    slug: 'wildfire-course-preview',
  },
  {
    id: 2,
    name: 'Grayhawk Golf Club',
    role: 'Rounds 1 & 2',
    date: 'Sunday & Monday, Sept 21-22',
    description: 'The Raptor Course - a Tom Fazio masterpiece that has hosted PGA Tour events.',
    image: '/images/courses/grayhawk.jpg',
    slug: 'grayhawk-course-preview',
  },
  {
    id: 3,
    name: 'Camelback Golf Club',
    role: 'Final Round',
    date: 'Tuesday, Sept 23',
    description: 'The Padre Course in Paradise Valley. Where the Black Jacket will be decided.',
    image: '/images/courses/camelback.jpg',
    slug: 'camelback-course-preview',
  },
]

export default function CourseSection() {
  return (
    <section className="section-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-masters-dark mb-4">
            The Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three world-class Scottsdale courses await
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/news/${course.slug}`}
              className="card group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-masters-gold text-masters-dark text-xs font-bold px-3 py-1 rounded">
                    {course.role}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-masters-gold text-sm font-medium mb-2">
                  {course.date}
                </div>
                <h3 className="text-xl font-serif font-bold text-masters-dark mb-3 group-hover:text-masters-green transition-colors duration-200">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {course.description}
                </p>
                <div className="mt-4 text-masters-green font-medium text-sm group-hover:text-masters-gold transition-colors duration-200">
                  View Course Details →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/schedule"
            className="btn-primary inline-block"
          >
            View Full Schedule
          </Link>
        </div>
      </div>
    </section>
  )
}
