import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import Toolbar from "./_components/toolbar";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "shinshi-pit",
  description: "Created by Shinshi",
};

const font = Rubik({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn("relative flex flex-col bg-neutral-900 dark:bg-neutral-900", font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="shintion-theme-2"
        >
          <Header />
          <main className="pt-6 flex-grow">
            <Toaster position="bottom-center" />
            {children}
          </main>
          <Toolbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
