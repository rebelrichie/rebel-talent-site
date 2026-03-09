import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-rebel-black text-white">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
