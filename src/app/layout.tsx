import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/layout/sidebar';
import { Navbar } from '@/components/layout/navbar';
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Dashboard',
  description: 'Dashboard with sidebar navigation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <div className="flex h-screen overflow-hidden">
            <Navbar className="fixed bottom-0 left-0 right-0 z-50 flex h-16 border-t md:hidden" />
            <Navbar className="hidden md:flex" />
            <Sidebar className="hidden border-r md:flex" />
            <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
