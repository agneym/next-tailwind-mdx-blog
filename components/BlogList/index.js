import Link from "next/link";

import BlogListItem from "./BlogListItem";

function BlogList({ allPostsData }) {
  return (
    <ul className="divide-y divide-gray-200">
      {allPostsData.map((post) => (
        <li className="py-12" key={post.__resourcePath}>
          <Link href={`/blog/${post.__resourcePath.replace(/\.mdx$/, "")}`}>
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
