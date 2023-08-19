"use client";

import { useEffect, useState } from "react";
import SidebarKnowledge from "./Sidebar";

export default function SidebarPopper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hide, setHide] = useState(false);
  const conatinerName = "sidebar-container";
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [childContainer, setChildContainer] = useState<HTMLElement | null>(
    null
  );
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (window.innerWidth < 778) {
        setIsSmallScreen(true);
        setHide(true);
      } else {
        setIsSmallScreen(false);
        setHide(false);
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    const newChildContainer = document.getElementById(conatinerName);
    if (newChildContainer && isSmallScreen) {
      newChildContainer.onclick = (e) => {
        e.stopPropagation();
        setTimeout(() => {
          setHide(true);
        }, 1000);
      };
    }
  }, [isSmallScreen]);

  return (
    <div className="">
      {
        // plus sign on small screen
        isSmallScreen && hide && (
          <div
            className="p-2 rounded-full bg-green-400/50 font-bold text-center m-2"
            onClick={() => setHide(false)}
          >
            +
          </div>
        )
      }
      {
        // plus sign on small screen
        isSmallScreen && !hide && (
          <div
            className="p-2 rounded-full bg-red-500/50 font-bold text-center m-2"
            onClick={() => setHide(true)}
          >
            +
          </div>
        )
      }
      <div className={`${hide && "invisible"}`} id={conatinerName}>
        {children}
      </div>
    </div>
  );
}
