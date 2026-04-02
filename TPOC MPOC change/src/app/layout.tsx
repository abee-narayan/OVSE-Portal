import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UIDAI | OVSE Portal",
  description: "Official OVSE Registration Portal - UIDAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
