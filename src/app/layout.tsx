import type { Metadata } from "next";
import React from 'react';
import "./globals.scss";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['cyrillic', 'latin']
});

export const metadata: Metadata = {
  title: "SpaceWeb",
  description: "Создание веб-сайтов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={montserrat.className}>
      <body>
        <div className={'app'}>
            {children}
        </div>
      </body>
    </html>
  );
}
