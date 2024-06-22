"use client";

import Link from "next/link";
import { PropsWithChildren, useEffect } from "react";

interface NavItemProps {
  href: string;
}

export const NavItem = ({
  href,
  children,
}: PropsWithChildren<NavItemProps>) => {
  return (
    <li
      className="px-6 hover:underline sm:text-center"
      onClick={() => {
        var body = document.querySelector("body");
        if (body) {
          body.style.position = "static";
        } else {
          console.log("can't find body");
        }
      }}
    >
      <Link href={href} className="sm:block sm:py-2">
        {children}
      </Link>
    </li>
  );
};
