import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit1 = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Danijela Divjak",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${outfit1.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
