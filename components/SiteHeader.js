import { Hash } from "react-feather";

function Header() {
  return (
    <header className="pt-8 pb-8 flex items-center">
      <span className="mr-2">
        <Hash color="#D72638" />
      </span>
      <h1 className="text-xl font-medium" style={{ color: "#140F2D" }}>
        Mindless Blog
      </h1>
    </header>
  );
}

export default Header;
