import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&display=swap" rel="stylesheet" />
        <link rel="icon" type='image/jpg' href="./images/EC.jpg" />
        <meta name='description' content="Hey there, I'm a software engineer with a strong background in Java and Python, and I'm super passionate about creating innovative and user-friendly solutions that make a positive impact in the world. I'm fluent in English, Mandarin, Cantonese, and Malay, so I can communicate effectively with people from diverse cultural backgrounds. When I'm not coding, you'll probably find me hiking or curled up with a good book. If you have any inquiries, don't hesitate to contact me!" />
        <meta name='theme-color' content='#FFA500' />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0MH67YDFQN" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
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
