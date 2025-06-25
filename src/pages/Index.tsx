import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Application from "@/components/Application";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Schedule />
      <Testimonials />
      <Application />
    </div>
  );
};

export default Index;
