const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "templates",
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  defaultLayout: true,
})();
