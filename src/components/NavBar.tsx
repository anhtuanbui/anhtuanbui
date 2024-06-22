"use client";

import Image from "next/image";
import burgerBarIcon from "../../public/assets/icons/burger-bar.png";
import xIcon from "../../public/assets/icons/close.png";
import logo from "../../public/assets/icons/star.png";
import { NavItem } from "./NavItem";

import { Drawer } from "vaul";
import Link from "next/link";

export const NavBar = () => {
  const navItems = [
    {
      url: "/",
      text: "Home",
    },
    {
      url: "#projects",
      text: "Projects",
    },
    {
      url: "#about",
      text: "About",
    },
  ];
  return (
    <nav className="bg-[#FBF8F2] fixed w-screen z-40">
      <div className="container mx-auto flex items-center py-2 px-8 sm:px-2 sm:justify-between">
        <div id="logo">
          <Link href="/">
            <Image src={logo} alt="logo" width={50} height={50} />
          </Link>
        </div>
        <div id="nav-link" className="ml-10 sm:ml-2">
          <ul className="flex sm:flex-col sm:hidden">
            {navItems.map((navItem, i) => {
              return (
                <NavItem href={navItem.url} key={i}>
                  {navItem.text}
                </NavItem>
              );
            })}
          </ul>
        </div>
        <div id="hamburger-menu" className="hidden sm:block mr-2">
          <Drawer.Root direction="right" disablePreventScroll={true}>
            <Drawer.Trigger asChild>
              <Image
                src={burgerBarIcon}
                alt="burger bar icon"
                className="w-8 cursor-pointer"
              ></Image>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
              <Drawer.Title>Navigation bar</Drawer.Title>
              <Drawer.Content
                className="bg-white flex flex-col h-full w-[300px] fixed bottom-0 right-0 z-50"
                aria-describedby={"navbar"}
              >
                <Drawer.Close asChild>
                  <div className="flex justify-end">
                    <Image
                      src={xIcon}
                      alt="x icon"
                      className="w-6 m-4 cursor-pointer"
                    ></Image>
                  </div>
                </Drawer.Close>
                <ul className="mt-4">
                  {navItems.map((navItem, i) => {
                    return (
                      <NavItem href={navItem.url} key={i}>
                        {navItem.text}
                      </NavItem>
                    );
                  })}
                </ul>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </nav>
  );
};
