import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnalystSection from "@/components/AnalystSection";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AnalystSection />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
