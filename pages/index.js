import Head from "next/head";

import SiteHeader from "components/SiteHeader";
import MainHeader from "components/MainHeader";
import BlogList from "components/BlogList";
import { getAllPosts } from "scripts/getPosts";

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Mindless Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-4xl m-auto">
        <SiteHeader />
        <main>
          <MainHeader />
          <BlogList allPostsData={allPostsData} />
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = await getAllPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
