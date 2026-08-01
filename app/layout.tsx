import { Lora, Geist } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import "./globals.css";

// Configure Lora for Headings (Mapped to match globals.css)
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Configure Geist for Body Text (Mapped to match globals.css)
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Optional: Added basic metadata for your site
export const metadata = {
  title: "Whaleora | Personal Safety Hub",
  description: "Learn. Prepare. Stay Safe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${lora.variable}`}>
      {/* 
        Removed 'font-sans' because our globals.css now strictly handles 
        the body font mapping using the --font-body variable.
        Kept 'antialiased' for premium font rendering. 
      */}
      <body className="antialiased">
        {/* Wrap your children in the CartProvider */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}