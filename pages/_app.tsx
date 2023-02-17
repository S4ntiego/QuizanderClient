import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 10000,
    },
  },
});

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

export default function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={pageProps.session}>
          <RWBProvider>{getLayout(<Component {...pageProps} />)}</RWBProvider>
          <Analytics />
        </SessionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
