import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casas Rurales",
  description: "Encuentra las mejores casas rurales para tus vacaciones",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <header className="site-header">
          <h1>
              <span aria-hidden="true">🛏️</span>
              <span>Casas Rurales</span>
          </h1>
        </header>

        {children}
      </body>
    </html>
  );
}
