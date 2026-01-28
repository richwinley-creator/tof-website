'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Article {
  id: string
  title: string
  slug: string
  status: 'draft' | 'published'
  publishedAt: string | null
  createdAt: string
}

const initialArticles: Article[] = [
  {
    id: '1',
    title: '2025 Tournament Registration Now Open',
    slug: '2025-registration-open',
    status: 'published',
    publishedAt: '2025-01-15',
    createdAt: '2025-01-14',
  },
  {
    id: '2',
    title: '2024 Tournament Recap: A Historic Finish',
    slug: '2024-tournament-recap',
    status: 'published',
    publishedAt: '2024-10-20',
    createdAt: '2024-10-18',
  },
  {
    id: '3',
    title: '2025 Course Announcement (Draft)',
    slug: '2025-course-announcement',
    status: 'draft',
    publishedAt: null,
    createdAt: '2025-01-20',
  },
]

export default function NewsAdminPage() {
  const [articles, setArticles] = useState<Article[]>(initialArticles)
  const [showEditor, setShowEditor] = useState(false)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)

  const [formData, setFormData] = useState({
    title: '',
    content: '',
  })

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter((a) => a.id !== id))
    }
  }

  const handleToggleStatus = (id: string) => {
    setArticles(
      articles.map((a) =>
        a.id === id
          ? {
              ...a,
              status: a.status === 'published' ? 'draft' : 'published',
              publishedAt: a.status === 'draft' ? new Date().toISOString().split('T')[0] : null,
            }
          : a
      )
    )
  }

  const handleSave = () => {
    if (!formData.title.trim()) {
      alert('Please enter a title')
      return
    }

    if (editingArticle) {
      // Update existing
      setArticles(
        articles.map((a) =>
          a.id === editingArticle.id
            ? { ...a, title: formData.title }
            : a
        )
      )
    } else {
      // Create new
      const newArticle: Article = {
        id: Date.now().toString(),
        title: formData.title,
        slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        status: 'draft',
        publishedAt: null,
        createdAt: new Date().toISOString().split('T')[0],
      }
      setArticles([newArticle, ...articles])
    }

    setShowEditor(false)
    setEditingArticle(null)
    setFormData({ title: '', content: '' })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-masters-dark text-white">
        <div className="container-main py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-300 hover:text-white">
                ← Back to Dashboard
              </Link>
              <h1 className="text-xl font-serif font-bold">News Management</h1>
            </div>
            <Link href="/news" className="text-gray-300 hover:text-white text-sm">
              View News →
            </Link>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        {/* Actions */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-600">
              {articles.filter((a) => a.status === 'published').length} published,{' '}
              {articles.filter((a) => a.status === 'draft').length} drafts
            </p>
          </div>
          <button
            onClick={() => {
              setShowEditor(true)
              setEditingArticle(null)
              setFormData({ title: '', content: '' })
            }}
            className="bg-masters-green text-white px-6 py-2 rounded hover:bg-opacity-90"
          >
            + New Article
          </button>
        </div>

        {/* Editor Modal */}
        {showEditor && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
              <div className="p-6">
                <h2 className="text-xl font-serif font-bold text-masters-dark mb-6">
                  {editingArticle ? 'Edit Article' : 'New Article'}
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                      placeholder="Enter article title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      rows={10}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-masters-green"
                      placeholder="Write your article content here..."
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Markdown formatting is supported.
                    </p>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={handleSave}
                      className="bg-masters-green text-white px-6 py-2 rounded hover:bg-opacity-90"
                    >
                      Save Article
                    </button>
                    <button
                      onClick={() => {
                        setShowEditor(false)
                        setEditingArticle(null)
                      }}
                      className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles List */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Title</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 w-32">Status</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 w-40">Date</th>
                <th className="px-6 py-4 text-center font-semibold text-gray-700 w-48">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-masters-dark">{article.title}</p>
                    <p className="text-sm text-gray-500">/news/{article.slug}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                        article.status === 'published'
                          ? 'bg-masters-green/10 text-masters-green'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600 text-sm">
                    {article.publishedAt || article.createdAt}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => {
                          setEditingArticle(article)
                          setFormData({ title: article.title, content: '' })
                          setShowEditor(true)
                        }}
                        className="text-masters-green hover:text-masters-dark text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleToggleStatus(article.id)}
                        className="text-masters-gold hover:text-masters-dark text-sm"
                      >
                        {article.status === 'published' ? 'Unpublish' : 'Publish'}
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
