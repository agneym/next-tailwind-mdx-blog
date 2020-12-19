import { Twitter, Globe } from "react-feather";

function Social({ href, icon: Icon }) {
  return (
    <a
      className="text-gray-600 hover:text-indigo-500 text-xs"
      href={href}
      target="_blank"
    >
      <Icon size={18} />
    </a>
  );
}

function Footer() {
  return (
    <footer className="py-6 text-center border-t border-teal-800 mt-6">
      <div className="">
        <h4 className="text-gray-600 tracking-medium font-medium">
          Agney Menon
        </h4>
        <div className="flex space-x-2 justify-center mt-2">
          <Social href="https://twitter.com/agneymenon" icon={Twitter} />
          <Social href="https://agney.dev" icon={Globe} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
