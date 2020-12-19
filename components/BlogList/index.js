import Link from "next/link";
import { useMemo } from "react";

import BlogListItem from "./BlogListItem";

function BlogList({ allPostsData }) {
  const sortedPosts = useMemo(() => {
    return allPostsData.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }, [allPostsData]);
  return (
    <ul className="divide-y divide-gray-200">
      {sortedPosts.map((post) => (
        <li className="py-12" key={post.__resourcePath}>
          <Link href={`${post.__resourcePath.replace(/\.mdx$/, "")}`}>
            <a>
              <BlogListItem postData={post} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;
