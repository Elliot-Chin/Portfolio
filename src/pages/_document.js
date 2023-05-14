import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&display=swap" rel="stylesheet" />
        <link rel="icon" type='image/jpg' href="./images/EC.jpg" />


        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0MH67YDFQN" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0MH67YDFQN');
          `
          }} />



      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
