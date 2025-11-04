import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "@/app/globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "The Thirteenth Psalm | A Horror Tale",
  description:
    "An original horror story told through an immersive, atmospheric web experience."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="font-body bg-abyss-950 text-neutral-100">{children}</body>
    </html>
  );
}
