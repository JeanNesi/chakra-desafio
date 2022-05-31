import Document, { Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return(
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
          <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
    </Html>
    )
  }
}