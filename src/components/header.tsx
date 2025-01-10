"use client";

import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "@/components/Link";

const ROUTES = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Brothers", path: "/brothers" },
	{ name: "Events", path: "/events" },
	{ name: "Contact", path: "/contact" },
];

const Header = function Header() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed inset-0 z-20 mx-auto flex h-16 items-center justify-between bg-gray-800 px-4 text-white">
			<div className="flex items-center space-x-4">
				<Image
					src="/tt.png"
					alt="logo"
					width={40}
					height={40}
					className="w-10 h-10 object-contain"
				/>
				<h1 className="text-xl">
					&Theta;&Tau; | &Omega;&Epsilon; Chapter
				</h1>
			</div>
			<nav className="hidden md:block">
				<ul className="flex space-x-2">
					{ROUTES.map(({ path, name }) => (
						<li key={name}>
							<Link
								active={pathname.startsWith(path)}
								href={path}
							>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<button
				className="md:hidden"
				onClick={() => setIsOpen((isOpen) => !isOpen)}
			>
				<span className="sr-only">
					{isOpen ? "Close menu" : "Open menu"}
				</span>
				<svg
					className={clsx("h-8 w-8 transition", {
						"rotate-90": isOpen,
					})}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d={
							isOpen
								? "M6 18L18 6M6 6l12 12"
								: "M4 6h16M4 12h16M4 18h16"
						}
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
				as="nav"
				role="navigation"
				aria-label="Mobile navigation menu"
				show={isOpen}
			>
				<nav className="absolute inset-x-0 -bottom-2 translate-y-full rounded-lg bg-gray-800 p-4 transition md:hidden">
					<ul className="flex flex-col items-stretch space-y-4">
						{ROUTES.map(({ path, name }) => (
							<li key={name} onClick={() => setIsOpen(false)}>
								<Link
									className="block text-center"
									active={pathname.startsWith(path)}
									href={path}
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</Transition>
		</header>
	);
};

export default Header;
