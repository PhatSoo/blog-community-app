import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import './global.css';
import AppProvider from '@/providers/app.provider';

export const metadata: Metadata = {
    title: 'Soo Blog',
    description: 'Share your memories & experiments',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppProvider>
                    <AntdRegistry>{children}</AntdRegistry>
                </AppProvider>
            </body>
        </html>
    );
}
