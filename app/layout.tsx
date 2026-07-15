import type { Metadata } from "next";
import { JetBrains_Mono, Geist, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimatedFavicon from "@/app/components/AnimatedFavicon";
import { DotPattern } from "@/components/ui/dot-pattern";

const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "optional" });
const geist = Geist({ subsets: ["latin"], display: "optional" });
const merriweather = Merriweather({ subsets: ["latin"], display: "optional" });

export const metadata: Metadata = {
  title: "Yugank Rathore",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrains.className}>
      <body className="flex flex-col min-h-screen">
        <AnimatedFavicon />
        <Navbar />
        <main className="relative flex-1 px-4 md:px-[20%] flex">
          <DotPattern color="#444" spacing={16} dotSize={1} absolute staggered layers={3} />
          <div className="relative border-x flex-1 bg-bg z-10">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}