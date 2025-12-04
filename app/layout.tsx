import type { Metadata } from 'next';
import './globals.css';
import { Inter, Sora } from '@/lib/fonts';
import { SanityLive } from '@/sanity/lib/live';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Espresso',
    default: 'Espresso',
  },
  description:
    'Espresso is one of the favorite coffee spot in downtown NYC. We serves the best coffee, sell the beans and as well as provide the equipments for your needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Sora.variable} ${Inter.variable} antialiased`}>
        {/* <Header /> */}
        <main className="min-h-dvh">{children}</main>
        {/* <Footer /> */}

        <SanityLive />
      </body>
    </html>
  );
}
