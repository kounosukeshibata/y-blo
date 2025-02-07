import { fetchGithubArticles, fetchGithubRepoMeta } from '@/lib/getArticle'
import { Article } from '@/types/Article'
import htmlKatex from 'rehype-katex'
import { remark } from 'remark'
import gfm from 'remark-gfm'
import html from 'remark-html'
import math from 'remark-math'
import { ArticleResponse } from '../types/Response'

export async function getPostsData() {
  const zennArticlesMetaData: ArticleResponse[] = await fetchGithubRepoMeta(
    'https://api.github.com/repos/kounosukeshibata/zenn-content/contents/articles/',
  )

  const zennArticlesFileDatas: Article[] = await (async (
    zennArticlesMetaData,
  ) => {
    if (
      Array.isArray(zennArticlesMetaData) &&
      zennArticlesMetaData.length > 0
    ) {
      return await Promise.all(
        zennArticlesMetaData
          .filter((article) => article.name.endsWith('.md'))
          .map(async (article: ArticleResponse) => {
            return fetchGithubArticles(
              'https://api.github.com/repos/kounosukeshibata/zenn-content/contents/articles/',
              article.name,
            )
          }),
      ).then((results) =>
        results.filter((result): result is Article => result !== undefined),
      )
    }
    return []
  })(zennArticlesMetaData)
  console.log('Githubからのデータフェッチを終了')

  const removeFalsyDatas = zennArticlesFileDatas.filter(Boolean)

  return removeFalsyDatas
}

export function getSortedPostsData(articles: Article[]): Article[] {
  if (Array.isArray(articles) && articles.length > 0) {
    console.log('getSortedPostsData()を実行')
    return articles.sort((a, b) => {
      if (a.published_at === b.published_at) {
        return 0
      }
      if (a.published_at < b.published_at) {
        return 1
      } else {
        return -1
      }
    })
  }
  return []
}

export async function getHtmlContent(article: Article) {
  const processedContent = await remark()
    .use(math)
    .use(htmlKatex)
    .use(html)
    .use(gfm)
    .process(article.content)
  const contentHtml = processedContent.toString()
  return {
    ...article,
    content: contentHtml,
  }
}
