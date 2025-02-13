import { Octokit } from '@octokit/core'
import dayjs from 'dayjs'
import { NextResponse } from 'next/server'

// レスポンスの型
export type Contributions = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: [
          {
            contributionDays: [
              {
                date: string
                contributionCount: number
              },
            ]
          },
        ]
      }
    }
  }
}

// 最終的に描画時に利用するデータの型
export type MyContributes = {
  values: number[]
}

// メインとなる関数
export async function GET(
  request: Request,
  { params }: { params: { userName: string } },
) {
  const { userName } = await params

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const now = dayjs().format('YYYY-MM-DDTHH:mm:ss')
  const sixMonthBefore = dayjs()
    .subtract(6, 'month')
    .format('YYYY-MM-DDTHH:mm:ss')

  const query = `
    query contributions ($userName:String!, $now:DateTime!, $sixMonthBefore:DateTime!) {
      user(login: $userName) {
        contributionsCollection(to: $now, from: $sixMonthBefore) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `

  const contributions = await octokit.graphql<Contributions>(query, {
    userName,
    now,
    sixMonthBefore,
  })

  let contributionCount: number[] = []
  contributions.user.contributionsCollection.contributionCalendar.weeks.forEach(
    (week) => {
      week.contributionDays.forEach((contributionDay) => {
        contributionCount.push(contributionDay.contributionCount)
      })
    },
  )

  return NextResponse.json({
    values: contributionCount,
  })
}
