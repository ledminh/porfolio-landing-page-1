"use client";

import { ArrowDownIcon, BurgerIcon, CloseIcon } from "@/assets/icons";
import { mainMenu, cvHref } from "@/data";
import Link from "next/link";

import { useState } from "react";

export default function MainNav() {
  const [shown, setShown] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShown(!shown)}
        className="block md:hidden w-10 h-10"
        aria-label="Toggle menu"
      >
        {shown ? <CloseIcon /> : <BurgerIcon />}
      </button>
      <nav
        className={`
        ${shown ? "flex" : "hidden"}
      flex-col justify-start items-start gap-4
      border border-yellow-800 p-4 rounded-lg
      absolute right-0 bg-white w-48
      md:flex md:flex-row md:justify-between md:items-center md:border-transparent md:p-0 md:static md:w-auto md:bg-transparent md:gap-6`}
      >
        <ul className="flex gap-6 font-bold flex-col md:flex-row">
          {mainMenu.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="border-b-2 border-transparent hover:border-yellow-800 transition-colors duration-300 ease-in-out"
              >
                {item.text.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={cvHref}
          className="bg-yellow-800 text-white px-2 py-1 font-bold flex justify-between items-center gap-2 rounded-lg"
        >
          <span>Download CV</span>
          <div className="w-6 h-6">
            <ArrowDownIcon />
          </div>
        </Link>
      </nav>
    </div>
  );
}
