import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { trackPageview, load } from "fathom-client";
import { Router } from "next/router";
import { useEffect } from "react";

import Layout from "../components/Layout";

// Record a pageview when route changes
Router.events.on("routeChangeComplete", (as, routeProps) => {
  if (!routeProps.shallow) {
    trackPageview();
  }
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    load("UZDNVPUX", {
      includedDomains: ["www.noparkingplayers.com", "noparkingplayers.COM"],
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
