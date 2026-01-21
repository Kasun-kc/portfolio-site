import Hero from "./(sections)/hero/Hero";
import About from "./(sections)/about/About";
import Services from "./(sections)/services/Services";
import Designs from "./(sections)/designs/Designs";
import Projects from "./(sections)/projects/Projects";
import Contact from "./(sections)/contact/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MobileNav />
      <Hero />
      <About />
      <Services />
      <Designs />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
