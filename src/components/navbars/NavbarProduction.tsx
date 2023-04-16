import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import Menu, { MenuItem } from "../menu/menu";

const NavbarProduction: NextPage = () => {
  const router = useRouter();

  return (
    <Menu>
      <MenuItem>
        <Link href="../about">
          <span
            className={`p-2 lg:px-4 md:mx-2 text-gray-400 rounded hover:bg-gray-200 hover:cursor-pointer hover:text-gray-700 dark:hover:bg-gray-100 dark:hover:text-black transition-colors duration-300 ${
              router.pathname == "/about" ? "font-bold" : ""
            } `}
          >
            About
          </span>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link href="../members">
          <span
            className={`p-2 lg:px-4 md:mx-2 text-gray-400 md:text-center border border-transparent rounded hover:text-white hover:cursor-pointer hover:bg-blue-400 dark:hover:text-black transition-colors duration-300 ${
              router.pathname == "/explore" ? "font-bold" : ""
            }`}
          >
            Members
          </span>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link href="../shows">
          <span
            className={`p-2 lg:px-4 md:mx-2 text-blue-500 md:text-center md:border md:border-solid border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-300 rounded-lg hover:bg-blue-500 hover:cursor-pointer hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1`}
          >
            Shows
          </span>
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default NavbarProduction;
