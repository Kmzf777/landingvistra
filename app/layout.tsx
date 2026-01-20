import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FacebookPixel from "@/components/facebook-pixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sua Landing Page Profissional em Minutos | Vistra",
  description: "Tenha seu site profissional com painel administrativo e sem mensalidades. De R$ 500 por R$ 39,90. Oferta por tempo limitado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <FacebookPixel />
      </body>
    </html>
  );
}
