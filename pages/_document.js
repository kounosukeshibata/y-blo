import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://embed.zenn.studio/js/listen-embed-event.js"
            async
          ></script>
          {/* 他のカスタムフォントをここに追加 */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
