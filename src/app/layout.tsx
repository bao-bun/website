import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "baobun",
  description: "an easy-to-use giveaways bot in beta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="darkreader-lock" />
        <meta
          name="keywords"
          content="bao bot, baobun, baobun bot, bao discord bot, giveaway bot, giveaway discord bot, giveaways discord bot, baobun discord bot"
        />
        <meta name="theme-color" content="#f7c0d0" />
      </head>

      <body
        className={`${inter.className} bg-[#0e0d0f] text-white flex flex-col antialiased w-screen overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
