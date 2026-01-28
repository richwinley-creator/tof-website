/**
 * GHIN Integration Module
 *
 * This module handles fetching handicap information from GHIN.
 * Note: Uses unofficial methods since GHIN doesn't provide a public API.
 * A manual override capability is available for cases where automated lookup fails.
 */

interface GHINLookupResult {
  success: boolean
  handicapIndex?: number
  lastName?: string
  firstName?: string
  club?: string
  state?: string
  lastRevision?: string
  error?: string
}

/**
 * Lookup a golfer's handicap by GHIN number
 *
 * Note: This is a placeholder implementation. In production, you would need to:
 * 1. Use the unofficial ghin npm package (if available and working)
 * 2. Implement web scraping as a fallback
 * 3. Always have manual override capability
 */
export async function lookupGHIN(ghinNumber: string): Promise<GHINLookupResult> {
  // Validate GHIN number format (typically 7 digits)
  const cleanGHIN = ghinNumber.replace(/\D/g, '')
  if (cleanGHIN.length < 7 || cleanGHIN.length > 8) {
    return {
      success: false,
      error: 'Invalid GHIN number format. GHIN numbers are typically 7-8 digits.',
    }
  }

  try {
    // Placeholder: In production, implement actual GHIN lookup
    // Options:
    // 1. Use unofficial ghin npm package
    // 2. Web scraping from GHIN lookup page
    // 3. Partner API if available

    // For now, return a simulated response
    // TODO: Implement actual GHIN lookup
    console.log(`GHIN lookup requested for: ${cleanGHIN}`)

    return {
      success: false,
      error: 'GHIN lookup not yet implemented. Please enter handicap manually.',
    }
  } catch (error) {
    console.error('GHIN lookup error:', error)
    return {
      success: false,
      error: 'Failed to lookup GHIN number. Please try again or enter handicap manually.',
    }
  }
}

/**
 * Calculate course handicap from handicap index
 *
 * Formula: Course Handicap = Handicap Index × (Slope Rating / 113) + (Course Rating - Par)
 */
export function calculateCourseHandicap(
  handicapIndex: number,
  slopeRating: number,
  courseRating: number,
  par: number
): number {
  const courseHandicap = handicapIndex * (slopeRating / 113) + (courseRating - par)
  return Math.round(courseHandicap)
}

/**
 * Calculate net score
 */
export function calculateNetScore(grossScore: number, courseHandicap: number): number {
  return grossScore - courseHandicap
}

/**
 * Format handicap for display (always show one decimal place)
 */
export function formatHandicap(handicap: number): string {
  const prefix = handicap > 0 ? '+' : ''
  return `${prefix}${handicap.toFixed(1)}`
}
