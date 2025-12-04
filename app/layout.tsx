import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teemu Rekiranta | Junior Cloud and DevOps Engineer",
  description:
    "Portfolio of Teemu Rekiranta, Junior Cloud and DevOps Engineer and IT Infrastructure student based in Helsinki."
};

export default function RootLayout(
  { children }: { children: ReactNode }
) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
