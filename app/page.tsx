import Hero from "./(sections)/hero/Hero";
import About from "./(sections)/about/About";
import Services from "./(sections)/services/Services";
import Designs from "./(sections)/designs/Designs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Services />
      <Designs />
    </main>
  );
}
