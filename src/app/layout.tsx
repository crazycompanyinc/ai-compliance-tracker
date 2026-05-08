import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Compliance Tracker — Automated EU AI Act & GDPR Compliance",
  description: "Automated compliance monitoring for EU AI Act, GDPR, and emerging AI regulations. Real-time risk scores, auto-documentation, and audit-ready reports.",
  keywords: ["AI compliance", "EU AI Act", "GDPR", "AI governance", "AI regulation", "compliance automation"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
