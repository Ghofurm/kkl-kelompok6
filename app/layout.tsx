import type { Metadata, Viewport } from "next";
import { Literata } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/data/trip";
import { siteUrl } from "@/data/site-url";

const literata = Literata({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-literata",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.title} · ${site.subtitle}`,
    template: `%s · ${site.title}`,
  },
  description: site.description,
  applicationName: site.title,
  authors: [{ name: site.group }],
  keywords: ["KKL", "Informatika UPGRIS", "Bali", "jurnal perjalanan", "2026"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: `${site.title} · ${site.subtitle}`,
    description: site.description,
    siteName: site.title,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Kartu perjalanan Bali Trip Journal dengan foto Pura Ulun Danu Beratan.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.title} · ${site.subtitle}`,
    description: site.description,
    images: ["/og.jpg"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#121917",
  colorScheme: "dark light",
};

const bootScript = `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='light'?'#ded7c5':'#121917')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={literata.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <a className="skip-link" href="#isi">
          Langsung ke isi
        </a>
        <SiteHeader />
        <main id="isi">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
