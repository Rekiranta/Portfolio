import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Syne, Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teemu Rekiranta | Cloud & DevOps Engineer",
  description:
    "Portfolio of Teemu Rekiranta - Junior Cloud and DevOps Engineer specializing in AWS, Google Cloud, CI/CD, Terraform, and modern infrastructure automation. Based in Helsinki, Finland.",
  keywords: [
    "Cloud Engineer",
    "DevOps",
    "AWS",
    "Google Cloud",
    "Terraform",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Python",
    "Infrastructure as Code",
    "Helsinki",
    "Finland",
  ],
  authors: [{ name: "Teemu Rekiranta" }],
  openGraph: {
    title: "Teemu Rekiranta | Cloud & DevOps Engineer",
    description:
      "Building cloud-native solutions and automating infrastructure. 23+ hands-on projects in DevOps, data pipelines, and cloud engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teemu Rekiranta | Cloud & DevOps Engineer",
    description:
      "Building cloud-native solutions and automating infrastructure. 23+ hands-on projects.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased scroll-smooth">
        {children}
      </body>
    </html>
  );
}
