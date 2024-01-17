import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import StyledComponentsRegistry from '@/src/lib/sc-registry';

const openSans = Open_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-openSans'
});

export const metadata: Metadata = {
  title: 'WeMovies - Seu site oficial de filmes',
  description: 'Você encontra aqui os melhores filmes e séries para assistir'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={openSans.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
