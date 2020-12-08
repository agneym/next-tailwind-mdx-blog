import Head from "next/head";

import Header from "components/Header";
import { getAllPosts } from "scripts/getPosts";

export default function Home({ allPostsData }) {
  console.log({ allPostsData });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-xl m-auto">
        <Header />
        <main>
          <h1 className="text-xl">NextJS - TailwindCSS</h1>
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
