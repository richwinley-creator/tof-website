'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Post {
  id: string
  title: string
  content: string
  date: string
}

const recentPosts: Post[] = [
  { id: '1', title: 'TOF 2026 Registration Open', content: 'Registration is now open for Scottsdale...', date: 'Jan 15' },
  { id: '2', title: '2025 Tournament Recap', content: 'What an incredible tournament...', date: 'Oct 20' },
]

export default function NewsAdminPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [alsoEmail, setAlsoEmail] = useState(true)
  const [posting, setPosting] = useState(false)
  const [posted, setPosted] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [posts, setPosts] = useState<Post[]>(recentPosts)

  const handlePost = async () => {
    if (!title.trim() || !content.trim()) {
      alert('Please enter a title and message')
      return
    }

    setPosting(true)

    try {
      // Send to API (which handles email if enabled)
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
          sendEmail: alsoEmail,
        }),
      })

      const result = await response.json()

      // Add to posts (in production, save to Supabase)
      const newPost: Post = {
        id: Date.now().toString(),
        title: title.trim(),
        content: content.trim(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      }
      setPosts([newPost, ...posts])

      // Show success
      setPosted(true)
      setEmailSent(result.emailSent)
      setTitle('')
      setContent('')
      setTimeout(() => {
        setPosted(false)
        setEmailSent(false)
      }, 4000)
    } catch (error) {
      console.error('Error posting:', error)
      alert('Error posting. Please try again.')
    } finally {
      setPosting(false)
    }
  }

  const handleDelete = (id: string) => {
    if (confirm('Delete this post?')) {
      setPosts(posts.filter(p => p.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simple Header */}
      <header className="bg-masters-dark text-white">
        <div className="px-4 py-4">
          <Link href="/admin" className="text-masters-gold text-lg font-bold">
            ← Back
          </Link>
          <h1 className="text-2xl font-bold text-center mt-2">Post News</h1>
        </div>
      </header>

      <div className="px-4 py-6 max-w-xl mx-auto">
        {/* Success Message */}
        {posted && (
          <div className="bg-green-100 text-green-800 p-4 rounded-2xl text-center mb-6">
            <p className="text-lg font-bold">✓ Posted to website!</p>
            {emailSent && (
              <p className="text-sm mt-1">✓ Email sent to all members</p>
            )}
          </div>
        )}

        {/* Compose Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-masters-dark mb-4">
            New Announcement
          </h2>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-lg font-bold text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Registration Reminder"
              className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-lg font-bold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste your email or type your message here..."
              rows={6}
              className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 resize-none"
            />
          </div>

          {/* Tip */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4">
            <p className="text-sm text-yellow-800">
              <strong>Tip:</strong> Just copy your email and paste it here!
            </p>
          </div>

          {/* Also Email Toggle */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={alsoEmail}
                onChange={(e) => setAlsoEmail(e.target.checked)}
                className="w-6 h-6 text-blue-600 rounded"
              />
              <div>
                <span className="font-bold text-blue-800 text-lg">Also email all members</span>
                <p className="text-sm text-blue-600">Members will receive this as an email too</p>
              </div>
            </label>
          </div>

          {/* Post Button */}
          <button
            onClick={handlePost}
            disabled={posting}
            className="w-full bg-purple-600 text-white py-5 rounded-2xl font-bold text-xl shadow-lg active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {posting ? 'Posting...' : alsoEmail ? 'Post & Email Members' : 'Post to Website'}
          </button>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-bold text-lg text-masters-dark mb-4">Recent Posts</h3>
          <div className="space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-masters-dark truncate">{post.title}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="ml-4 text-red-500 font-bold text-lg px-3 py-1"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* View News Link */}
        <div className="mt-6 text-center">
          <Link
            href="/news"
            className="inline-block bg-white text-masters-dark px-6 py-3 rounded-xl font-bold shadow-md"
          >
            View News Page →
          </Link>
        </div>
      </div>
    </div>
  )
}
