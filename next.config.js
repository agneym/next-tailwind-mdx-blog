const withMdxEnhanced = require("next-mdx-enhanced");
const remarkPrism = require("remark-prism");
const remarkImages = require("remark-images");
const remarkBehead = require("remark-behead");

module.exports = withMdxEnhanced({
  layoutPath: "templates",
  remarkPlugins: [
    remarkPrism,
    remarkImages,
    [remarkBehead, { after: 0, depth: 1 }],
  ],
  rehypePlugins: [],
  usesSrc: false,
  defaultLayout: true,
})();
