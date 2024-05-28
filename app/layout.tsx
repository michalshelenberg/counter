import IntroductionHeader from "@/components/introduction-header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Counter++",
  description: "Simple counter completely free, without any ads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-dvh bg-black text-white antialiased`}
      >
        <IntroductionHeader />
        {children}
      </body>
    </html>
  );
}
