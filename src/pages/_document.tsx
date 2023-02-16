import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Minecraft" />
        <meta name="description" content="Minecraft clone" />
        <meta name="keywords" content="Minecraft, Sandbox" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
