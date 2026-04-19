import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import WhyChoose from "./components/why-choose";
import Experience from "./components/experience";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function HomeModule() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}