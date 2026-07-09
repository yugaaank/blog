import Navbar from "@/app/components/Navbar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-x min-h-screen">
      <Navbar />
      <main className="p-8 py-16">{children}</main>
    </div>
  );
}
