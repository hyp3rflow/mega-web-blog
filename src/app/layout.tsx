import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "My Blog",
  description: "A personal blog and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-border">
          <nav className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold hover:text-accent transition-colors">
              My Blog
            </Link>
            <div className="flex gap-6">
              <Link href="/posts" className="text-muted hover:text-foreground transition-colors">
                Posts
              </Link>
              <Link href="/about" className="text-muted hover:text-foreground transition-colors">
                About
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-2xl mx-auto px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-border mt-20">
          <div className="max-w-2xl mx-auto px-6 py-6 text-center text-sm text-muted">
            &copy; 2025 My Blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
