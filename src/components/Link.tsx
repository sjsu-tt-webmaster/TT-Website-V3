"use client";

import clsx from "clsx";
import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  className?: string;
  active: boolean;
  href: string;
  children: ReactNode;
}

const Link = ({ className, active, href, children }: LinkProps) => {
  return (
    <NextLink
      className={clsx(
        className,
        "rounded px-4 py-2 text-sm transition",
        active ? "bg-darkRed" : "bg-gray-700 hover:opacity-75"
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export default Link;
