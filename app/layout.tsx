import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.className} bg-bg text-fg`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 px-[20%]">
          <div className="border-x min-h-full">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}