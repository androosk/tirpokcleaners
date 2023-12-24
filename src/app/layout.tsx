import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "../components/nav-bar";
import "./globals.css";
import Footer from "../components/nav-footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tirpok Cleaners",
  description: "More than just a cleaners!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex flex-col min-h-screen`}>
        <NavBar />
        {children}
        <Footer />
      </body>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          height: "100%",
          width: "100%",
          objectFit: "fill",
          zIndex: "-1",
        }}
      >
        <source src="/images/clothes.mp4" type="video/mp4" />
      </video>
    </html>
  );
}
