import Meta from "@/components/Meta";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Head } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Meta as={Head} />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
