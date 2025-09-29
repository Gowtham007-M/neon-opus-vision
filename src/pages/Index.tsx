import { Hero } from "@/components/Hero";
import { EventDetails } from "@/components/EventDetails";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventDetails />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
