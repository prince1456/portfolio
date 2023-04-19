import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { DM_Sans, Space_Grotesk, Poppins, Monoton } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.css";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
  display: "swap",
});
const monoton = Monoton({
  subsets: ["latin"],
  variable: "--monoton",
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  display: "swap",
  weight: ["100", "400", "500", "700"],
});
const dmSans = DM_Sans({
  variable: "--dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter()
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main
          className={`overflow-hidden ${spaceGrotesk.variable} ${dmSans.variable} ${poppins.variable} ${monoton.variable}`}
        >
          <AnimatePresence mode="wait"  
            initial={true} 
            onExitComplete={() => window.scrollTo(0, 0)}>
            <Component {...pageProps} key={router.asPath}/>
          </AnimatePresence>
        </main>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
