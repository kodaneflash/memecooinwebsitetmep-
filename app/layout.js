import "./globals.css";
import Starfield from "@/components/Starfield";

export const metadata = {
  title: "JIAT - Jiggly Intergalactic Ass Token",
  description: "Join the jiggle revolution! JIAT brings cosmic jiggle power from Planet Jiggletron to Solana. Intergalactic booty-powered economics and decentralized jiggle energy.",
  keywords: ["meme coin", "memecoin", "solana", "pump fun", "pumpfun", "solana meme coins", "crypto", "DeFi", "new meme coins", "solana tokens", "cryptocurrency", "blockchain", "token launch", "crypto community", "meme token"],
  authors: [{ name: "JIAT Team" }],
  creator: "JIAT Team",
  publisher: "JIAT Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jiat.fun'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "JIAT - Jiggly Intergalactic Ass Token",
    description: "Join the jiggle revolution! JIAT brings cosmic jiggle power from Planet Jiggletron to Solana. Intergalactic booty-powered economics and decentralized jiggle energy.",
    url: 'https://jiat.fun',
    siteName: 'JIAT - Jiggly Intergalactic Ass Token',
    images: [
      {
        url: '/jiat.png',
        width: 1200,
        height: 630,
        alt: 'JIAT - Jiggly Intergalactic Ass Token',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "JIAT - Jiggly Intergalactic Ass Token",
    description: "Join the jiggle revolution! JIAT brings cosmic jiggle power from Planet Jiggletron to Solana.",
    images: ['/jiat.png'],
    creator: '@jiatonsolana', // Updated Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  category: 'cryptocurrency',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Animated Space/Stars Background */}
        <Starfield
          speedFactor={0.05}
          backgroundColor="black"
          starColor={[255, 255, 255]}
          starCount={5000}
        />
        
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
