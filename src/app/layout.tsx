import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import Aside from "./ui/components/aside";
import Footer from "./ui/components/footer";
import Header from "./ui/components/header";
import Hamburger from "./ui/components/hamburger";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"], // Optional: specify font weights
  style: ["normal"], // Optional: specify font styles
});

export const metadata: Metadata = {
  title: "Rosa's Blog",
  description: "My blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oxygen.className} bg-zinc-950 bg-gradient-sphere  text-zinc-100 flex flex-row`}
      >
        {/* <Aside /> */}
        <main className="h-screen flex flex-col w-screen">
          <Header />
          <Hamburger />
          <div className="flex-1">{children}</div>
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
