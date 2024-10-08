import type { Metadata } from "next";
import { Mulish  } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "EARNIT",
  description: "Mini App Telegram Game Earnit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
