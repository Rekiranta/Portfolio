import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teemu Rekiranta | Junior Cloud & DevOps Engineer",
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
  ],
  authors: [{ name: "Teemu Rekiranta" }],
  openGraph: {
    title: "Teemu Rekiranta | Junior Cloud & DevOps Engineer",
    description:
      "Building cloud-ready solutions and automating infrastructure. 23+ hands-on projects in DevOps, data pipelines, and cloud engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teemu Rekiranta | Junior Cloud & DevOps Engineer",
    description:
      "Building cloud-ready solutions and automating infrastructure. 23+ hands-on projects.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0f1a] text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
