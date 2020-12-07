import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkMdx from "remark-mdx";
import remark from "remark";
import { truncate } from "lodash";
import visit from "unist-util-visit";
import removeImports from "remark-mdx-remove-imports";
import removeExports from "remark-mdx-remove-exports";

/**
 * Set of all Markdown node types which, when encountered, generate an extra to
 * separate text.
 *
 * @type {Set<string>}
 */
const SpaceMarkdownNodeTypesSet = new Set([
  `paragraph`,
  `heading`,
  `tableCell`,
  `break`,
]);

function getExcerptPlain(markdownAst, pruneLength = 160, excerptSeparator) {
  const excerptNodes = [];
  let isBeforeSeparator = true;

  visit(
    markdownAst,
    (node) => isBeforeSeparator,
    (node) => {
      if (excerptSeparator && node.value === excerptSeparator) {
        isBeforeSeparator = false;
      } else if (node.type === `text` || node.type === `inlineCode`) {
        excerptNodes.push(node.value);
      } else if (node.type === `image`) {
        excerptNodes.push(node.alt);
      } else if (SpaceMarkdownNodeTypesSet.has(node.type)) {
        // Add a space when encountering one of these node types.
        excerptNodes.push(` `);
      }
    }
  );

  const excerptText = excerptNodes.join(``).trim();

  if (excerptSeparator && !isBeforeSeparator) {
    return excerptText;
  }

  return truncate(excerptText, {
    length: pruneLength,
    omission: `…`,
  });
}

const postDirectory = path.join(process.cwd(), "pages/blog");

export async function getAllPosts() {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = await Promise.all(
    fileNames.map(async (filename) => {
      const slug = filename.replace(".mdx", "");
      const fullPath = path.join(postDirectory, filename);

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      let excerpt = data.excerpt;

      await remark()
        .use(remarkMdx)
        .use(removeExports)
        .use(removeImports)
        .use(() => (tree) => {
          if (!excerpt) {
            excerpt = getExcerptPlain(tree);
          }
        })
        .process(content);

      return {
        slug,
        ...data,
        excerpt,
        date: data.date.toISOString(),
      };
    })
  );
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}
