"use client";

import Link from "next/link";

import Menu, { MenuItem } from "../menu/menu";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Menu>
      <MenuItem>
        <Link href="../about">
          <span
            className={`p-2 lg:px-4 md:mx-2 text-gray-400 rounded hover:bg-gray-200 hover:cursor-pointer hover:text-gray-700 dark:hover:bg-gray-300 dark:hover:text-black transition-colors duration-300 ${
              pathname == "/about" ? "font-bold" : ""
            } `}
          >
            About
          </span>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link href="../members">
          <span
            className={`p-2 lg:px-4 md:mx-2 text-gray-400 rounded hover:bg-gray-200 hover:cursor-pointer hover:text-gray-700 dark:hover:bg-gray-300 dark:hover:text-black transition-colors duration-300 ${
              pathname == "/explore" ? "font-bold" : ""
            }`}
          >
            Members
          </span>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link href="../shows">
          <span
            className={`p-2 lg:px-4 md:mx-2 text-graay-700 dark:text-white md:text-center md:border md:border-solid border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-700 dark:hover:bg-white hover:cursor-pointer hover:text-white dark:hover:text-black transition-colors duration-300 mt-1 md:mt-0 md:ml-1`}
          >
            Shows
          </span>
        </Link>
      </MenuItem>
    </Menu>
  );
}
