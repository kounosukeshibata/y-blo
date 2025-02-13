import type { MyContributes } from '@/app/api/contributions/[userName]/route'

export interface Contributions {
  values: number[]
}

export const useContributions = () => {
  const getContributions = async (userName: string) => {
    try {
      console.log(userName)
      const response = await fetch(`/api/contributions/${userName}`)
      console.log(`チェック！！：${response}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data: Promise<MyContributes> = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching contributions:', error)
      throw error
    }
  }

  return {
    getContributions,
  }
}
