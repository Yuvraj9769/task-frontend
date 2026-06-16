import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/components/QueryProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catering Search",
  description: "Search and filter caterers by name and price per plate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background relative selection:bg-primary/20 selection:text-primary">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="pointer-events-none fixed left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 opacity-50 blur-[120px] rounded-full"></div>
        <QueryProvider>
          <div className="relative z-0 flex min-h-full flex-col">
            {children}
          </div>
        </QueryProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
