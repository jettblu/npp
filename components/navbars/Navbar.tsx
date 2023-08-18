"use client";

import Link from "next/link";

import Menu, { MenuItem } from "../menu/menu";
import { usePathname } from "next/navigation";
import {
  BLUE_THREAD,
  GOLD_THREAD,
  GREEN_THREAD,
  HIGHLANDS_SKY_BLUE,
  SCOTS_ROSE,
} from "@/constants/colors";

export default function Navbar() {
  const pathname = usePathname();
  const defaultBgColor = "rgba(255,255,255,0)";
  return (
    <Menu>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:divide-x-2 md:divide-gray-900">
        <MenuItem hexColor="#ebeced">
          <Link href="/learn">
            <div
              className="h-full md:px-6 md:pt-5 rounded-md md:rounded-none"
              style={{
                background: `radial-gradient(${defaultBgColor} 30%, ${GOLD_THREAD} 100%)`,
              }}
            >
              Learn
            </div>
          </Link>
        </MenuItem>
        <MenuItem hexColor="#ebeced">
          <Link href="/members">
            <div
              className="h-full md:px-6 md:pt-5 rounded-md md:rounded-none"
              style={{
                background: `radial-gradient(${defaultBgColor} 10%, ${SCOTS_ROSE} 100%)`,
              }}
            >
              Members
            </div>
          </Link>
        </MenuItem>
        <MenuItem hexColor="#ebeced">
          <Link href="/shows">
            <div
              className={`h-full md:px-6 md:pt-5 rounded-md md:rounded-none`}
              style={{
                background: `radial-gradient(${defaultBgColor} 10%, ${GREEN_THREAD} 100%)`,
              }}
            >
              Shows
            </div>
          </Link>
        </MenuItem>
      </div>
    </Menu>
  );
}
