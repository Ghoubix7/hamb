import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Promotions from "../components/Promotions";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Menu />
      <Promotions />
      <About />
      <Reviews />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
