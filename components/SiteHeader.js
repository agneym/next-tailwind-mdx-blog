import { Hash } from "react-feather";
import Link from "next/link";
import Head from "next/head";

import blogConfig from "blog.config";

function Header({ meta }) {
  const title = meta?.title
    ? `${meta.title} - ${blogConfig.title}`
    : blogConfig.title;
  const description = meta?.description ?? blogConfig.description;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="description" content={description} />
        <meta name="twitter:site" content={`${blogConfig.twitterUsername}`} />
        <link
          rel="me"
          href={`https://twitter.com/${blogConfig.twitterUsername}`}
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <header className="pt-8 pb-8 flex items-center">
        <Link href="/">
          <a className="flex items-center">
            <span className="mr-2">
              <Hash color="#D72638" />
            </span>
            <h1 className="text-xl font-medium" style={{ color: "#140F2D" }}>
              Mindless Blog
            </h1>
          </a>
        </Link>
      </header>
    </>
  );
}

export default Header;
