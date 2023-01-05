import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/icon.svg" />
        <meta
          name="description"
          content="Francielle Dellamora's personal page"
        />
        <meta name="author" content="Francielle Dellamora" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
