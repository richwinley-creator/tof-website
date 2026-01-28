'use client'

import { useState } from 'react'
import Link from 'next/link'

interface GalleryImage {
  id: string
  year: number
  caption: string
  imageUrl: string
}

const initialImages: GalleryImage[] = [
  { id: '1', year: 2024, caption: 'Black Jacket Ceremony 2024', imageUrl: '' },
  { id: '2', year: 2024, caption: 'Tournament Group Photo', imageUrl: '' },
  { id: '3', year: 2024, caption: 'First Tee Shot', imageUrl: '' },
  { id: '4', year: 2023, caption: 'Black Jacket Ceremony 2023', imageUrl: '' },
  { id: '5', year: 2023, caption: 'On the Course', imageUrl: '' },
  { id: '6', year: 2022, caption: 'Black Jacket Ceremony 2022', imageUrl: '' },
]

export default function GalleryAdmin() {
  const [images, setImages] = useState<GalleryImage[]>(initialImages)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [filterYear, setFilterYear] = useState<number | 'all'>('all')
  const [newImage, setNewImage] = useState({
    year: new Date().getFullYear(),
    caption: '',
  })

  const years = [...new Set(images.map(img => img.year))].sort((a, b) => b - a)

  const filteredImages = filterYear === 'all'
    ? images
    : images.filter(img => img.year === filterYear)

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(images.filter(img => img.id !== id))
    }
  }

  const handleUpload = () => {
    const image: GalleryImage = {
      id: Date.now().toString(),
      year: newImage.year,
      caption: newImage.caption,
      imageUrl: '', // Would be set after actual upload
    }
    setImages([image, ...images])
    setShowUploadModal(false)
    setNewImage({ year: new Date().getFullYear(), caption: '' })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-masters-dark text-white">
        <div className="container-main py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-400 hover:text-white">
                ← Back to Dashboard
              </Link>
              <h1 className="text-xl font-serif font-bold">Manage Gallery</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <div className="flex gap-2 items-center">
            <span className="text-gray-600">Filter by year:</span>
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
              className="px-3 py-2 border rounded"
            >
              <option value="all">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <button onClick={() => setShowUploadModal(true)} className="btn-primary">
            + Upload Photos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow overflow-hidden group">
              {/* Image placeholder */}
              <div className="aspect-square bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="bg-white text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-100">
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="p-3">
                <p className="font-medium text-sm text-masters-dark truncate">{image.caption}</p>
                <p className="text-xs text-masters-gold">{image.year}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No photos found. Upload some memories!
          </div>
        )}

        <p className="text-gray-500 text-sm mt-6">
          {filteredImages.length} photo{filteredImages.length !== 1 ? 's' : ''}
          {filterYear !== 'all' ? ` from ${filterYear}` : ' total'}
        </p>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg">
            <div className="p-6">
              <h2 className="text-xl font-serif font-bold text-masters-dark mb-6">
                Upload Photos
              </h2>
              <div className="space-y-4">
                {/* Upload area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-gray-600 mb-2">Drag and drop photos here, or</p>
                  <button className="text-masters-green font-medium hover:text-masters-gold">
                    Browse files
                  </button>
                  <p className="text-xs text-gray-400 mt-2">PNG, JPG up to 10MB each</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <select
                    value={newImage.year}
                    onChange={(e) => setNewImage({ ...newImage, year: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border rounded"
                  >
                    {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Caption</label>
                  <input
                    type="text"
                    value={newImage.caption}
                    onChange={(e) => setNewImage({ ...newImage, caption: e.target.value })}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Describe the photo"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button onClick={handleUpload} className="btn-primary">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
