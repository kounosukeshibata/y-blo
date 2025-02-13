'use client'

import type { MyContributes } from '@/app/api/contributions/[userName]/route'
import { useContributions } from '@/hooks/useContributes'
import { useEffect, useState } from 'react'

const GithubContributions = () => {
  // 取得したコミット数の配列データを管理するステート
  const [myContributes, setMyContributes] = useState<MyContributes>()

  // カスタムフックを代入
  const { getContributions } = useContributions()

  const YEAR = new Date().getFullYear()

  // 描画時に一度、カスタムフックにユーザー名を渡しデータを取得、それをステートにセットする
  useEffect(() => {
    ;(async () => {
      const data = await getContributions('kounosukeshibata')
      setMyContributes(data)
    })()
  }, [getContributions])

  /**
   * GitHubの草の色を決める関数
   * @param count APIで取得したコミット数
   * @returns opacityのCSS
   */
  const createColorClass = (count: number) => {
    if (count === 0) {
      return 'bg-gray-200' // 曖昧な色
    } else if (count <= 3) {
      return 'bg-red-200' // 明るい色
    } else if (count <= 6) {
      return 'bg-red-400' // 通常の色
    } else if (count <= 9) {
      return 'bg-red-600' // ダークカラー
    } else {
      return 'bg-red-800' // ブラック
    }
  }

  return (
    <div className="max-w-full mx-auto p-4 rounded bg-white">
      <div className="flex flex-col items-center">
        {!myContributes
          ? 'XX'
          : myContributes!.values.reduce((sum, item) => sum + item, 0)}{' '}
        contributions in {YEAR} (from GitHub API)
      </div>
      <div className="flex flex-col items-center">
        {' '}
        {/* 中央寄せ */}
        {myContributes && myContributes.values.length > 0 ? (
          <div className="flex flex-col w-full">
            {' '}
            {/* 幅を全体に設定 */}
            {/* 7行（曜日）を作成 */}
            {Array.from({ length: 7 }).map((_, dayIndex) => (
              <div key={dayIndex} className="flex justify-center w-full">
                {' '}
                {/* 横中央寄せ、幅を全体に */}
                {/* 各曜日に対する26週間のコントリビューションデータを表示 */}
                {Array.from({ length: 26 }).map((_, weekIndex) => {
                  const contributionIndex = weekIndex * 7 + dayIndex // 各曜日のインデックスを計算
                  const count = myContributes.values[contributionIndex] || 0 // データがない場合は0にする
                  return (
                    <div
                      key={weekIndex}
                      className="flex flex-col items-center w-8"
                    >
                      {' '}
                      {/* 各パネルの幅を設定 */}
                      <div
                        className={`w-2 h-2 sm:w-4 sm:h-4 m-0.5 sm:m-1 ${createColorClass(count)}`}
                      ></div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        ) : (
          <div>データがありません</div>
        )}
      </div>
    </div>
  )
}

export default GithubContributions
