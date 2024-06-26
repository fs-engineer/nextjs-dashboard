import '@/app/ui/styles/global.css';
import { inter } from '@/app/ui/fonts/fonts';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
