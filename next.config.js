const withMdxEnhanced = require("next-mdx-enhanced");
const remarkPrism = require("remark-prism");

module.exports = withMdxEnhanced({
  layoutPath: "templates",
  remarkPlugins: [remarkPrism],
  rehypePlugins: [],
  usesSrc: false,
  defaultLayout: true,
})();
