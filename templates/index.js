function BlogPost({ frontMatter, children }) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <main className="prose">{children}</main>
    </div>
  );
}

export default BlogPost;
