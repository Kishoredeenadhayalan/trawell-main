import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      <div
        className={`transition-opacity duration-700 ${loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"
          }`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
