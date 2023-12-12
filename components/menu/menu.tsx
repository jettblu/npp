import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  children: any;
};

const Menu: NextPage<Props> = (props) => {
  const [isMenuMobile, setMenuMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { children } = { ...props };

  // change style based on boolean
  const menuWrapperClassName = isMenuMobile
    ? "flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 h-fit rounded-lg bg-[#F2FBFE] z-20 border-sky-500 mx-2 border bg-gray-50 py-4 md:py-0 dark:bg-[#0c0c0c] md:min-h-0 text-4xl"
    : "hidden text-2xl md:flex flex-col md:flex-row md:ml-auto";

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (window.innerWidth < 778) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div className="fixed w-full z-20 top-0">
      <nav
        className={`h-20  mx-auto md:flex pt-4 md:pt-0 dark:bg-[#0c0c0c]/50 z-20 w-full border-b-2 border-gray-400 dark:border-gray-600 backdrop-blur-xl`}
      >
        {/* tasty hamburger menu */}
        <div className="flex justify-between items-center hover:cursor-pointer mr-4">
          <div onClick={() => setMenuMobile(false)}>
            <Link href="/">
              <Image
                src="/brand/logoLight.webp"
                className="ml-3"
                width={50}
                height={50}
                alt="Logo"
              />
            </Link>
          </div>
          <button
            id="nav-icon"
            onClick={() => setMenuMobile(!isMenuMobile)}
            type="button"
            className={`inline-flex ${
              isMenuMobile && "open"
            } items-center mt-2 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="bg-gray-500 dark:bg-gray-400"></span>
            <span className="bg-gray-500 dark:bg-gray-400"></span>
            <span className="bg-gray-500 dark:bg-gray-400"></span>
          </button>
        </div>
        <AnimatePresence>
          <motion.div
            id="menu"
            className={menuWrapperClassName}
            onClick={() => setMenuMobile(false)}
            animate={isMenuMobile || !isSmallScreen ? "open" : "closed"}
            variants={{
              closed: {
                scale: 0,
                opacity: 0,
                transition: {
                  type: "spring",
                  duration: 5,
                  delayChildren: 0.2,
                  staggerChildren: 0.05,
                },
              },
              open: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 0.4,
                  delayChildren: 0.2,
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </nav>
      <Link href="/shows" className="z-0">
        <div className="flex flex-row justify-center w-full bg-gradient-to-r from-purple-300 via-orange-200 to-yellow-300 z-0">
          <p className="text-xl md:text-2xl font-semibold text-black dark:text-white px-2">
            Musical Improv show tonight (Dec 12th) at 9 PM in the Studio
            Theater!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Menu;

type MenuItemProps = {
  children: any;
  hexColor?: string;
};

export function MenuItem(props: MenuItemProps) {
  const { children } = { ...props };
  const hexColor = props.hexColor ? props.hexColor : "rgba(255,255,255,0)";
  return (
    <motion.div
      variants={{
        closed: { x: -200, opacity: 0 },
        open: {
          x: 0,
          opacity: 100,
          transition: {
            type: "spring",
            duration: 0.4,
            delayChildren: 0.2,
            staggerChildren: 0.05,
          },
        },
      }}
      className="h-full brightness-105 hover:brightness-125 hover:cursor-pointer transition-all duration-500 ease-in-out px-2 md:px-0 text-center rounded-md md:rounded-none hover:saturate-100"
      // style={{
      //   backgroundColor: hexColor,
      // }}
    >
      {children}
    </motion.div>
  );
}
