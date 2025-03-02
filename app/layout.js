import { Lato } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});


const playFair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  // metadataBase: new URL("https://rosiesassistedliving.com"),
  title: "Rosie's Assisted Living | Exceptional Care, Meaningful Living",
  description: "A home designed for the well-being and peace of mind of your loved ones. Personalized care in a warm and secure environment.",
  keywords: [
    "assisted living",
    "elderly care",
    "senior living",
    "senior care",
    "personalized care",
    "24/7 professional care",
    "residential care",
    "luxury facilities",
    "wellness programs"
  ],
  openGraph: {
    title: "Rosie's Assisted Living | Exceptional Care, Meaningful Living",
    description: "A home designed for the well-being and peace of mind of your loved ones. Personalized care in a warm and secure environment.",
    // url: "https://rosiesassistedliving.com",
    siteName: "Rosie's Assisted Living",
    images: [
      {
        url: "/openGraph.jpg",
        width: 1200,
        height: 630,
        alt: "Rosie's Assisted Living facility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // alternates: {
  //   canonical: "https://rosiesassistedliving.com",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Senior Living",
  applicationName: "Rosie's Assisted Living",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Rosie's Assisted Living" }],
  creator: "Rosie's Assisted Living",
  publisher: "Rosie's Assisted Living",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.position": "33.4942;-111.9261", // Approximate Scottsdale coordinates
    "geo.region": "US-AZ",
    "geo.placename": "Scottsdale, Arizona",
    "og:locality": "Scottsdale",
    "og:region": "Arizona",
    "og:country-name": "United States",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${playFair.variable} antialiased`}
      >
        <Navbar />
        <main className="text-base text-navyBlue font-lato mt-[64px] nav:mt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
