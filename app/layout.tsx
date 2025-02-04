import type { Metadata } from "next";
import { Italiana, Mitr } from "next/font/google";
import "./globals.css";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

const mitr = Mitr({
  variable: "--font-mitr",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kopi Sari Rasa",
  description: "Warung Kopi Sari Rasa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${italiana.variable} ${mitr.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
