import BlogListItem from "./BlogListItem";

function BlogList({ allPostsData }) {
  return (
    <ul className="divide-y divide-gray-200">
      {allPostsData.map((post) => (
        <li className="py-12" key={post.slug}>
          <BlogListItem postData={post} />
        </li>
      ))}
    </ul>
  );
}

export default BlogList;
