"use client";

import { Transition } from "@headlessui/react";
import clsx from "clsx";
import NextLink from "next/link";
import { Fragment, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { 
    name: "Brothers", 
    path: "/brothers", 
    subRoutes: [
      { name: "Actives", path: "/brothers/actives" },
      { name: "Alumni", path: "/brothers/alumni" },
      { name: "Chairs", path: "/brothers/chairs" },
    ]
  },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

interface LinkProps {
  className?: string;
  active: boolean;
  href: string;
  children: ReactNode;
}

function Link({ className, active, href, children }: LinkProps) {
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
}

const Header = function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isBrothersOpen, setIsBrothersOpen] = useState(false);

  return (
    <header className="fixed inset-0 z-20 mx-auto flex h-16 items-center justify-between rounded-lg bg-gray-800 px-4 text-white">
      <div className="flex items-center space-x-4">
        <Image src="/tt.png" alt="logo" width={40} height={40} className="w-10 h-10 object-contain" />
        <h1 className="text-xl font-semibold">&Theta;&Tau; | &Omega;&Epsilon; Chapter</h1>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-2">
          {ROUTES.map(({ path, name, subRoutes }) => (
            <li
              key={name}
              className="relative"
              onMouseEnter={() => subRoutes && setIsBrothersOpen(true)}
              onMouseLeave={() => subRoutes && setIsBrothersOpen(false)}
            >
              <Link active={pathname === path} href={path}>
                {name}
              </Link>
              {subRoutes && isBrothersOpen && (
                <div className="absolute left-0 mt-1 w-40 rounded-lg bg-gray-700 p-2 shadow-lg">
                  <ul>
                    {subRoutes.map(({ name, path }) => (
                      <li key={name}>
                        <Link className="block px-4 py-2 text-sm hover:bg-gray-600" active={pathname === path} href={path}>
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <button className="md:hidden" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <svg
          className={clsx("h-8 w-8 transition", { "rotate-90": isOpen })}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        as={Fragment}
        show={isOpen}
      >
        <nav className="absolute inset-x-0 -bottom-2 translate-y-full rounded-lg bg-gray-800 p-4 transition md:hidden">
          <ul className="flex flex-col items-stretch space-y-4">
            {ROUTES.map(({ path, name, subRoutes }) => (
              <li key={name} onClick={() => setIsOpen(false)}>
                <Link className="block text-center" active={pathname === path} href={path}>
                  {name}
                </Link>
                {subRoutes && (
                  <ul className="ml-4 space-y-2">
                    {subRoutes.map(({ name, path }) => (
                      <li key={name}>
                        <Link className="block text-center text-sm" active={pathname === path} href={path}>
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Transition>
    </header>
  );
};

export default Header;
