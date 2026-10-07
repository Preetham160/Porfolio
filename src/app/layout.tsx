import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preetham S — Systems that respond",
  description: "Portfolio of Preetham S, a full-stack and generative AI systems developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
