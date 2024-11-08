import type { Metadata } from "next";
import { pretendard } from "@/app/assets/fonts/font_collection";
import "@/app/assets/css/globals.css"

export const metadata: Metadata = {
  title: "Parallel GPT",
  description: "Generated by next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>{children}</body>
    </html>
  );
}
