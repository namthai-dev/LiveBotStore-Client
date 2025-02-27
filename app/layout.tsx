import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Locale } from '@/features/internationalization/i18n-config';
import { stackServerApp } from '@/stack';

import { Provider } from '@/components/provider';
import { Toaster } from '@/components/ui/toaster';
import { ModalProvider } from '@/components/modal-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LiveBotStore-Client',
  description: 'LiveBotStore-Client',
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: { lang: Locale };
  }>,
) {
  const params = await props.params;

  const { children } = props;

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider app={stackServerApp}>
          <Toaster />
          <ModalProvider />
          {children}
        </Provider>
      </body>
    </html>
  );
}
