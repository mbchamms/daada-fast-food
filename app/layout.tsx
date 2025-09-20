import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daada Fast Food",
  description: "Commandez vos plats en ligne",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <header className="border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-bold text-xl">Daada Fast Food</a>
            <div className="flex items-center gap-4">
              <a href="/(customer)/menu" className="hover:underline">Menu</a>
              <a href="/(auth)/login" className="hover:underline">Se connecter</a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
