function BlogPost({ children }) {
  return (
    <div>
      <main className="prose">{children}</main>
    </div>
  );
}

export default BlogPost;
