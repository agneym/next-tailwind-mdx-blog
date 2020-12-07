import Head from "next/head";

import { getAllPosts } from "scripts/getPosts";

export default function Home({ allPostsData }) {
  console.log({ allPostsData });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-xl">NextJS - TailwindCSS</h1>
      </main>
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
