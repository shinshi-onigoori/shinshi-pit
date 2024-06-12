import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "shinshi-pit",
  description: "Created by Shinshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 dark:bg-neutral-900 w-full">
        <Header />
        <main className="h-full mt-[107px]">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="shintion-theme-2"
          >
            <Toaster position="bottom-center" />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
