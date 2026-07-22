import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "M Dhanush | AI Engineer",
    template: "%s | M Dhanush",
  },

  description:
    "AI & Data Science student at IIT Madras building production-ready AI applications, LLM systems, AI agents, machine learning pipelines, and intelligent automation.",

  keywords: [
    "M Dhanush",
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "AI Agent",
    "FastAPI",
    "Python",
    "Portfolio",
    "IIT Madras",
    "Artificial Intelligence",
    "Data Science",
    "RAG",
    "Generative AI",
  ],

  authors: [
    {
      name: "M Dhanush",
    },
  ],

  creator: "M Dhanush",

  openGraph: {
    title: "M Dhanush | AI Engineer",
    description:
      "Building production-ready AI applications using Machine Learning, LLMs and AI Agents.",
    url: "https://your-domain.vercel.app",
    siteName: "M Dhanush Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "M Dhanush | AI Engineer",
    description:
      "Building production-ready AI applications using Machine Learning, LLMs and AI Agents.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa] text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}