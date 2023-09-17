import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import Navbar from "./navbars/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No Parking Players",
  description:
    "The No Parking Players are Carnegie Mellon University's premier improv comedy troupe. We perform monthly shows at the University Center and host improv workshops and classes for students of all skill levels.",
  icons: ["/brand/logoLight.webp"],
};

// TODO: Update to support dynamic headers
export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <div className={`min-h-screen pb-20 bg-white dark:bg-black px-4`}>
      <main className={``}>
        <Toaster />
        <Navbar />
        <div className="h-20" />
        {children}
      </main>
    </div>
  );
}
