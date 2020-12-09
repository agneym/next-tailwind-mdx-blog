import Head from "next/head";

import SiteHeader from "components/SiteHeader";
import MainHeader from "components/MainHeader";
import { getAllPosts } from "scripts/getPosts";

export default function Home({ allPostsData }) {
  console.log({ allPostsData });

  return (
    <div>
      <Head>
        <title>Mindless Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-2xl m-auto">
        <SiteHeader />
        <main>
          <MainHeader />
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
