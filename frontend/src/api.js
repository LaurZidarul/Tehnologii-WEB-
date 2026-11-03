
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export async function fetchActivities() {
  const response = await fetch(`${API_URL}/activities`)

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`)
  }

  return response.json()
}
