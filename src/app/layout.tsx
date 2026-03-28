import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowgentX — AI Agent Orchestration Platform",
  description:
    "Build, deploy, and manage AI agents that automate real work. Connect to any LLM, integrate with your systems, and maintain full control.",
  keywords: ["AI agents", "agent orchestration", "LLM", "automation", "enterprise AI"],
  openGraph: {
    title: "FlowgentX — AI Agent Orchestration Platform",
    description: "Build AI agents that actually get work done.",
    url: "https://flowgentx.com",
    siteName: "FlowgentX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-dark-800 antialiased">{children}</body>
    </html>
  );
}
