import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";
import { cn } from "@/lib/utils";

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kasun's Portfolio",
  description: "Designer and Problem Solver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // Apply the font variable and base background color
        className={cn(
          "min-h-screen bg-[#1d1c20] font-sans antialiased",
          poppins.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}