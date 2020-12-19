import { MDXProvider } from "@mdx-js/react";
import dayjs from "dayjs";

import SiteHeader from "components/SiteHeader";
import ArticleFooter from "components/ArticleFooter";
import SiteFooter from "components/SiteFooter";
import CustomLink from "components/CustomLink";

const components = {
  a: CustomLink,
};

function BlogPost({ frontMatter, children }) {
  const { title, date, excerpt } = frontMatter;
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 xl:max-w-3xl xl:px-0">
      <div style={{ minHeight: "calc(100vh - 123px)" }}>
        <SiteHeader meta={{ title, description: excerpt }} />
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
          <div className="prose max-w-none pt-10 pb-8">
            <MDXProvider components={components}>{children}</MDXProvider>
          </div>
        </article>
        <ArticleFooter postData={frontMatter} />
      </div>
      <SiteFooter />
    </main>
  );
}

export default BlogPost;
