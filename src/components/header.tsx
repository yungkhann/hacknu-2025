import { Icons } from ".";
import ShapeWrapper from "./shape-wrapper";
import { Button } from "./ui/button";

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

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 h-20 border-b-[1px] border-solid border-b-[rgba(40, 40, 40, 0.30)] bg-navbar-color">
      <div>
        <Icons.hacknu />
      </div>
      <ul className="flex items-center gap-x-6">
        {links.map((link) => (
          <li key={link.name} className="">
            <a
              href={link.href}
              className="p-6 active:border-b-primary-green active:border-b-3"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <Button variant={"hacknu"} size={"xlg"} className="relative">
        <Icons.barCode className="absolute top-1 left-1"/>
        REGISTER
        <span className="uppercase pb-0 text-white text-opacity-30 text-[10px] absolute bottom-[1px] mix-blend-difference right-1 font-normal">0x800f081f</span>
      </Button>
      {/* <ShapeWrapper>
        <button className="bg-white text-black">Click me</button>
      </ShapeWrapper> */}
    </header>
  );
};

export default Header;
