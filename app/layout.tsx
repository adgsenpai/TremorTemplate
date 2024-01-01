import './globals.css';

import Nav from './nav';
import { Suspense } from 'react';

export const metadata = {
  title: 'Farm Monitor',
  description:
    'Powerful monitoring and alerting for your farm.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
