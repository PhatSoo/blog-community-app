import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import './global.css';
import AppProvider from '@/providers/app.provider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { cookies } from 'next/headers';
import { HEADERS } from '@/constants';

export const metadata: Metadata = {
    title: 'Soo Blog',
    description: 'Share your memories & experiments',
};

const RootLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const token = {
        accessToken: cookies().get(HEADERS.ACCESS_TOKEN)?.value || '',
        refreshToken: cookies().get(HEADERS.REFRESH_TOKEN)?.value || '',
    };

    return (
        <html lang="en">
            <body className={inter.className}>
                <AppProvider initialSession={token}>
                    <AntdRegistry>{children}</AntdRegistry>
                </AppProvider>
            </body>
        </html>
    );
};

export default RootLayout;
