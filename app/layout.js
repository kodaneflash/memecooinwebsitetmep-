import "./globals.css";
import Starfield from "@/components/Starfield";

export const metadata = {
  title: "DUIS - Nguyen Van Dui",
  description: "DUIS - Nguyen Van Dui on Solana",
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
