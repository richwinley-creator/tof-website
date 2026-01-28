import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types - these will be generated from Supabase schema
export interface Member {
  id: string
  email: string
  first_name: string
  last_name: string
  ghin_number: string | null
  handicap_index: number | null
  handicap_updated_at: string | null
  created_at: string
}

export interface Tournament {
  id: string
  name: string
  location: string
  start_date: string
  end_date: string
  entry_fee: number
  status: 'upcoming' | 'active' | 'completed'
}

export interface Registration {
  id: string
  member_id: string
  tournament_id: string
  payment_status: string
  registered_at: string
}

export interface Score {
  id: string
  member_id: string
  tournament_id: string
  round_number: number
  gross_score: number
  net_score: number
  created_at: string
}

export interface Winner {
  id: string
  member_id: string
  tournament_id: string
  year: number
  location: string
}

export interface NewsArticle {
  id: string
  title: string
  slug: string
  content: string
  featured_image: string | null
  published_at: string | null
  status: 'draft' | 'published'
}

export interface GalleryImage {
  id: string
  tournament_id: string
  image_url: string
  caption: string | null
  year: number
}
