import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {/* Padding for Navbar */}
        <div className="mt-28 pb-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
