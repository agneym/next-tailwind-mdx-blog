import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "pages/blog");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const fullPath = path.join(postDirectory, filename);

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, excerpt } = matter(fileContents, {
      excerpt: true,
    });

    return {
      slug,
      excerpt,
      ...data,
      date: data.date.toISOString(),
    };
  });
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}
