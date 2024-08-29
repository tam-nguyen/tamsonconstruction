import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./sidebar";
import { logo, tamsonlogo } from "@public";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { route: "/", title: "Home", isActive: router.route === "/" },
    {
      route: "/contact",
      title: "Contact",
      isActive: router.route === "/contact",
    },
    // {
    //   route: "/",
    //   title: "Confidentiality policy",
    //   isActive: router.route === "/policy",
    // },
    // {
    //   route: "/about-us",
    //   title: "About us",
    //   isActive: router.route === "/about",
    // },
    // { route: "/blog", title: "Blog", isActive: router.route === "/blog" },
  ];

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="layout sticky top-0 z-50 flex h-[75px] items-center justify-end bg-white md:relative lg:justify-center">
      <Link href="/" className="absolute left-3 sm:left-8 xl:left-0">
        <Image src={tamsonlogo} alt="logo" width={75} height={60} priority />
      </Link>

      <div className="hidden items-center space-x-6 md:flex">
        {navLinks.map(({ route, title, isActive }) => {
          return (
            <Link
              href={route}
              key={route}
              className={`hover:navLinkActive relative text-[18px] font-normal ${
                isActive ? "navLinkActive" : ""
              }`}
            >
              {title}
            </Link>
          );
        })}
      </div>

      <div className="md:hidden" onClick={toggle}>
        {isOpen ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>

      <Sidebar navLinks={navLinks} toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
