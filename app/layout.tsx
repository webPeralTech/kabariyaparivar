import type { Metadata } from "next";
import { Audiowide, Work_Sans, Noto_Serif_Gujarati, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-worksans",
  display: "swap",
});

const notoSerifGu = Noto_Serif_Gujarati({
  subsets: ["gujarati", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-serif-gu",
  display: "swap",
});

const notoSansGu = Noto_Sans_Gujarati({
  subsets: ["gujarati", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-gu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kabariya Parivar | Mataji Madh | Randal Maa – Khodal Mataji | Savarkundla",
  description: "Kabariya Lauva Patel Kuldevi Ma Randal Maa – Khodal Mataji Madh at Savarkundla, Dist. Amreli, Gujarat, India. Official portal for Live Darshan, Donation, Events, and History.",
  keywords: ["Kabariya Parivar", "Randal Maa", "Khodal Mataji", "Savarkundla", "Mataji Madh", "Amreli", "Lauva Patel"],
  authors: [{ name: "Kabariya Parivar Madh Trust" }],
  icons: {
    icon: [
      { url: "/kabariya%20logo/1000544246.jpg" },
      { url: "/icon.png" },
    ],
    shortcut: "/kabariya%20logo/1000544246.jpg",
    apple: "/kabariya%20logo/1000544246.jpg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Kabariya Parivar | Mataji Madh | Savarkundla",
    description: "Official portal for Kabariya Lauva Patel Parivar and Mataji Madh at Savarkundla, Gujarat.",
    type: "website",
    locale: "en_IN",
    images: ["/kabariya%20logo/1000544246.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${audiowide.variable} ${workSans.variable} ${notoSerifGu.variable} ${notoSansGu.variable}`}
    >
      <body>
        <LanguageProvider>
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
