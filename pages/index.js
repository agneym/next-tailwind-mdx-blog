import Head from "next/head";

import SiteHeader from "components/SiteHeader";
import MainHeader from "components/MainHeader";
import BlogList from "components/BlogList";
import SiteFooter from "components/SiteFooter";

import blogConfig from "blog.config";
import { frontMatter } from "./blog/*.mdx";

export default function Home() {
  return (
    <div className="max-w-4xl m-auto">
      <SiteHeader />
      <main>
        <MainHeader />
        <BlogList allPostsData={frontMatter} />
      </main>
      <SiteFooter />
    </div>
  );
}
