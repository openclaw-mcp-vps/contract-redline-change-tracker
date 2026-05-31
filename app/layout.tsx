import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contract Redline & Change Tracker",
  description: "Track and highlight contract changes during negotiations. Compare versions, annotate changes, and generate summaries for legal review."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a1302b92-4357-48e1-a893-a628af4a60e4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
