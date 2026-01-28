import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Tournament of Friends',
  description: 'Photo gallery showcasing memories from Tournament of Friends events.',
}

// Placeholder gallery data - will be replaced with Supabase data
const galleryImages = [
  { id: 1, year: 2024, caption: 'Black Jacket Ceremony 2024' },
  { id: 2, year: 2024, caption: 'Tournament Group Photo' },
  { id: 3, year: 2024, caption: 'First Tee Shot' },
  { id: 4, year: 2024, caption: 'Awards Dinner' },
  { id: 5, year: 2023, caption: 'Black Jacket Ceremony 2023' },
  { id: 6, year: 2023, caption: 'On the Course' },
  { id: 7, year: 2023, caption: 'Putting Green Practice' },
  { id: 8, year: 2023, caption: 'Group Celebration' },
  { id: 9, year: 2022, caption: 'Black Jacket Ceremony 2022' },
  { id: 10, year: 2022, caption: 'Tournament Action' },
  { id: 11, year: 2022, caption: 'Driving Range' },
  { id: 12, year: 2022, caption: 'Evening Reception' },
]

const years = [...new Set(galleryImages.map((img) => img.year))].sort((a, b) => b - a)

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Memories from Tournament of Friends through the years
          </p>
        </div>
      </section>

      {/* Year Filter */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="container-main py-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-gray-600 font-medium">Filter by Year:</span>
            <button className="px-4 py-2 bg-masters-green text-white font-medium rounded">
              All
            </button>
            {years.map((year) => (
              <button
                key={year}
                className="px-4 py-2 bg-gray-100 text-masters-dark font-medium rounded hover:bg-masters-gold hover:text-masters-dark transition-colors"
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-white">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="aspect-square bg-masters-green/10 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-masters-green/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-masters-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                {/* Caption */}
                <div className="mt-3">
                  <p className="font-medium text-masters-dark">{image.caption}</p>
                  <p className="text-sm text-masters-gold">{image.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload CTA */}
      <section className="section-green">
        <div className="container-main text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Share Your Photos
          </h2>
          <p className="text-gray-200 mb-6 max-w-lg mx-auto">
            Have photos from a Tournament of Friends event? Share them with the community!
          </p>
          <a
            href="/contact"
            className="btn-gold inline-block"
          >
            Contact Us to Submit Photos
          </a>
        </div>
      </section>
    </>
  )
}
