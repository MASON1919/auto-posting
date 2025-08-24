// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/sidebar'; // 방금 만든 사이드바 컴포넌트를 가져옵니다.

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pixel Palette',
  description: 'AI Pixel Palette generator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <div className="flex">
          <Sidebar />
          {/* 사이드바 너비(w-64)만큼 왼쪽에 여백을 주어 컨텐츠가 겹치지 않게 합니다. */}
          <main className="flex-1 ml-64 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}