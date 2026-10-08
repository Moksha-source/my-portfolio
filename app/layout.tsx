import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/profileCard";

export const metadata: Metadata = {
  title: "Moksha | Software Developer",
  description: "Personal portfolio of Moksha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">

        <main className="min-h-screen p-4 md:p-8">

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">

            {/* LEFT PROFILE */}
            <ProfileCard />

            {/* RIGHT SIDE */}
            <section className="bg-white border border-gray-border rounded-3xl overflow-hidden">

              <Navbar />

              <div className="px-6 md:px-10 lg:px-12">
                {children}
              </div>

            </section>

          </div>

        </main>

      </body>
    </html>
  );
}