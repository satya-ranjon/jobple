import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import MinLayout from "@/components/layout/minLayout";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <MinLayout>{children}</MinLayout>
      </body>
    </html>
  );
}
