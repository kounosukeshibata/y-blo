import { MyContributes } from '@/app/api/contributions/[userName]/route'

export interface Contributions {
  values: number[]
}

export const useContributions = () => {
  const getContributions = async (userName: string) => {
    const response = await fetch(`/api/contributions/${userName}`)
    console.log(`チェック！！：${response}`)
    const data: Promise<MyContributes> = await response.json()
    return data
  }

  return {
    getContributions,
  }
}
