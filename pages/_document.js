import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
           src="/js/jquery.min.js"
           strategy="beforeInteractive"
         />
        <Script
           src="/js/base64.min.js"
           strategy="beforeInteractive"
         />
        <Script
           src="/js/bootstrap.min.js"
           strategy="beforeInteractive"
         />
        <Script
           src="/js/popper.min.js"
           strategy="beforeInteractive"
         />
        <Script
           src="/js/soft-design-system.min.js"
           strategy="beforeInteractive"
         />
        <Script
           src="/js/b958b52ac7.js"
           strategy="lazyOnload"
         />
        <Script
           src="/js/scrembl.js"
           strategy="lazyOnload"
         />
      </body>
    </Html>
  )
}
