import Head from "next/head";

import SiteHeader from "components/SiteHeader";
import MainHeader from "components/MainHeader";
import BlogList from "components/BlogList";
import SiteFooter from "components/SiteFooter";

import blogConfig from "blog.config";
import { frontMatter } from "./blog/*.mdx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{blogConfig.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={blogConfig.description} />
      </Head>
      <div className="max-w-4xl m-auto">
        <SiteHeader />
        <main>
          <MainHeader />
          <BlogList allPostsData={frontMatter} />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
