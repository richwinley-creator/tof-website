import { type ClassValue, clsx } from 'clsx'

/**
 * Utility function to merge class names
 * Useful for conditional classes in components
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/**
 * Format a date string for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Format a score relative to par
 */
export function formatToPar(score: number, par: number): string {
  const toPar = score - par
  if (toPar === 0) return 'E'
  if (toPar > 0) return `+${toPar}`
  return toPar.toString()
}

/**
 * Generate a URL-friendly slug from a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

/**
 * Truncate text to a specified length with ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

/**
 * Check if a date is in the past
 */
export function isPastDate(dateString: string): boolean {
  return new Date(dateString) < new Date()
}

/**
 * Check if a date is in the future
 */
export function isFutureDate(dateString: string): boolean {
  return new Date(dateString) > new Date()
}

/**
 * Sort array of objects by a date field
 */
export function sortByDate<T extends Record<string, unknown>>(
  array: T[],
  dateField: keyof T,
  order: 'asc' | 'desc' = 'desc'
): T[] {
  return [...array].sort((a, b) => {
    const dateA = new Date(a[dateField] as string).getTime()
    const dateB = new Date(b[dateField] as string).getTime()
    return order === 'desc' ? dateB - dateA : dateA - dateB
  })
}
