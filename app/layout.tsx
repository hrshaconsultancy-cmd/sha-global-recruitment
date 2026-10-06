import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "SHA & SHA CONSULTANCY | Global Careers", description: "Your trusted partner for international careers." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
