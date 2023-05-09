import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Mono, Montserrat } from "next/font/google";

const spaceMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-mono",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${spaceMono.variable + " " + montserrat.variable} font-sans`}
    >
      <Component {...pageProps} />
    </div>
  );
}
