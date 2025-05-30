import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';
import { Navbar } from '@/components/Navbar';
import SocialSidebar from '@/components/ui/SocialSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ads Premiere',
  description: 'Expert digital marketing solutions to grow your business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <LanguageProvider>
            <Navbar />
            {children}
            <SocialSidebar />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
