import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footet";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/app/(auth)/providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPA1Cluj",
  description: "",
  icons: {
    icon: '/ipa_logo_edit.png',
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={cn("bg-secondary", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Providers>
            <div className="h-full">
              <Navbar />
              <div className="hidden md:flex mt-20 ml-2 border-r-2 border-primary/10 w-28 pr-2 flex-col fixed inset-y-0">
                <Sidebar />
              </div>

              <div> {children}</div>
              <Toaster />
              {/* <Footer /> */}
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
