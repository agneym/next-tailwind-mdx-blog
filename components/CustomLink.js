import Link from "next/link";

/**
 * Custom regular anchor element or NextJS custom link depending on the link type passed in.
 */
function CustomLink({ children, href }) {
  return href.startsWith("/") || href === "" ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default CustomLink;
