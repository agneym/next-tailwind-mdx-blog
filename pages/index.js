import Head from "next/head";

import SiteHeader from "components/SiteHeader";
import MainHeader from "components/MainHeader";
import BlogList from "components/BlogList";

import { frontMatter } from "./blog/*.mdx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mindless Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-3xl m-auto">
        <SiteHeader />
        <main>
          <MainHeader />
          <BlogList allPostsData={frontMatter} />
        </main>
      </div>
    </div>
  );
}
