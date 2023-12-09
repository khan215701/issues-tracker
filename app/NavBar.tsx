"use client";
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classNames from "classnames";
const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b h-14 mb-5 px-5 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={classNames({
            "text-white": link.href === currentPath,
            "text-zinc-500": link.href !== currentPath,
            "hover:text-white transition-colors": true,
          })}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
