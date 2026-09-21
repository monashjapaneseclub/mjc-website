import type { AppProps } from "next/app";
import "focus-visible"; // Import the polyfill
import "../src/app/globals.css"; // Import global styles (if any)

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
