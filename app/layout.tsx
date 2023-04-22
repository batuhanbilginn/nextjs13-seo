import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://nextjs13-seo.vercel.app"),
  title: {
    default: "Explorer",
    template: `%s | Explorer`,
  },
  description: "Explore the latest posts from my travel blog.",
  verification: {
    google: "google-site-verification=123123123",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* Padding for Navbar */}
        <div className="pb-20 mt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
