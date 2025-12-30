import Hero from "./(sections)/hero/Hero";
import About from "./(sections)/about/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
    </main>
  );
}
