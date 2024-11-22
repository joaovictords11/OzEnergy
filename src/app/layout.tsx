import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AuthProvider } from "@/providers/authProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OzEnergy",
  description: "Energia limpa com qualidade e segurança",
  icons: {
    icon: "/icon-ozenergy.png",
  },
  keywords: ["OzEnergy", "Energia solar", "Placas solares"],
  openGraph: {
    title: "OzEnergy - Energia limpa com qualidade!",
    images: [`${process.env.NEXT_PUBLIC_URL}/open-graph.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
          <ToastContainer
            theme="dark"
            position="top-right"
            autoClose={3000}
            pauseOnHover
            closeOnClick
          />
        </AuthProvider>
      </body>
    </html>
  );
}
