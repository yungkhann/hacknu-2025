import Link from "next/link";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Icons } from ".";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const links = [
  {
    name: "Agenda",
    href: "#agenda",
  },
  {
    name: "Partners",
    href: "#partners",
  },
  {
    name: "About",
    href: "#about",
  },
];

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "600",
});

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "600",
});

const Header = () => {

  return (
    <header className="flex items-center justify-between px-6 h-20 border-b-[1px] border-solid border-b-[rgba(40, 40, 40, 0.30)] bg-navbar-color">
      <div>
      <Link href={'/'}>
        <Icons.hacknu />
      </Link>
      </div>
      <ul
        className={cn(
          "hidden items-center gap-x-6 md:flex",
          IBMPlexSans.className
        )}
      >
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="p-6 active:border-b-primary-green active:border-b-3 no-underline hover:border-b-primary-green hover:border-b-3 hover:text-primary-green transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/register">
        <Button
          variant={"hacknu"}
          size={"xlg"}
          className={cn("relative font-semibold", IBMPlexMono.className)}
        >
          <Icons.barCode className="absolute top-1 left-1" />
          REGISTER
          <span className="uppercase pb-0 text-white text-opacity-30 text-[10px] absolute bottom-[1px] mix-blend-difference right-1 font-normal">
            0x800f081f
          </span>
        </Button>
      </Link>
    </header>
  );
};

export default Header;
