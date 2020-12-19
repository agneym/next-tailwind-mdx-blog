import dayjs from "dayjs";
import Head from "next/head";

import SiteHeader from "components/SiteHeader";
import SiteFooter from "components/Footer";

import blogConfig from "blog.config";

function BlogPost({ frontMatter, children }) {
  const { title, date, excerpt } = frontMatter;
  return (
    <>
      <Head>
        <title>
          {title} - {blogConfig.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={excerpt ?? blogConfig.description} />
      </Head>
      <main className="max-w-2xl mx-auto px-4 sm:px-6 xl:max-w-3xl xl:px-0">
        <div style={{ minHeight: "calc(100vh - 123px)" }}>
          <SiteHeader />
          <article>
            <header className="pt-6 xl:pb-10 text-center">
              <dl className="space-y-10">
                <dt className="sr-only">Published on</dt>
                <dd className="text-base leading-6 font-medium text-gray-500">
                  <time dateTime={+date}>
                    {dayjs(date).format("MMMM D, YYYY")}
                  </time>
                </dd>
              </dl>
              <div className="space-y-1 text-center">
                <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  {title}
                </h1>
              </div>
            </header>
            <div className="prose max-w-none pt-10 pb-8">{children}</div>
          </article>
        </div>
        <SiteFooter />
      </main>
    </>
  );
}

export default BlogPost;
