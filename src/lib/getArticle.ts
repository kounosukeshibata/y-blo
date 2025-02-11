import matter from 'gray-matter'

export async function fetchGithubRepoMeta(url: string) {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    })
    if (!res.ok) {
      throw `ステータスコードエラー：${res.status}`
    } else {
      return res.json()
    }
  } catch (err) {
    console.log(`repofetchデータの処理中にエラー：${err}`)
  }
}

export async function fetchGithubArticles(url: string, fileName: string) {
  try {
    const res = await fetch(url + fileName, {
      headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` },
    })
    console.log(`Fetching URL: ${url}${fileName} の処理を開始`)
    if (!res.ok) {
      throw `ステータスコードエラー : ${res.status}`
    } else {
      const data = await res.json()
      console.log('GitHubリポジトリからデータを取得')
      const buffer = Buffer.from(data.content, 'base64')
      const fileContents = buffer.toString('utf-8')
      console.log('データをutf-8に変換')
      const matterResult = matter(fileContents)
      console.log('データをmd形式に変換')

      if (!matterResult.data.published) {
        return
      }

      return {
        id: fileName.replace(/\.md$/, ''),
        ...(matterResult.data as {
          title: string
          emoji: string
          type: string
          topics: string[]
          published: boolean
          published_at: string
        }),
        content: matterResult.content,
        from: 'Zenn',
      }
    }
  } catch (err) {
    console.log(`contentfetchデータの処理中にエラー: ${err}`)
  }
}
