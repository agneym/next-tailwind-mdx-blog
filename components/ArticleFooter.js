import blogConfig from "blog.config";

const getTwitterLink = () => {
  const mainLink = "https://twitter.com/intent/tweet";
  const params = new URLSearchParams();
  params.append("text", `Check out this article`);
  params.append("url", "");
  params.append("via", blogConfig.twitterUsername);
  return `${mainLink}?${params.toString()}`;
};

function ArticleFooter({ postData }) {
  return (
    <div className="flex justify-between items-center mt-4 mb-6">
      <div className="w-44">
        <a
          href={getTwitterLink()}
          target="_blank"
          className="block bg-blue-400 flex items-center justify-center hover:shadow-md h-12"
        >
          <img src="/social/share-twitter.svg" alt="Share on Twitter" />
        </a>
      </div>
      <div className="w-44">
        <a
          href="https://www.buymeacoffee.com/agney"
          target="_blank"
          className="bg-green-500	flex items-center justify-center px-4 py-2 block hover:shadow-md h-12"
        >
          <img src="/social/bmc.svg" alt="Buy me a Coffee" />
        </a>
      </div>
    </div>
  );
}

export default ArticleFooter;
