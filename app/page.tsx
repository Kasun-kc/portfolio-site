import Hero from "./(sections)/hero/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {/* Other sections will go here later, e.g., <About /> */}
      <section id="about" className="h-screen bg-neutral-900 text-white p-20">
        Temporary About Section for scrolling testing
      </section>
    </main>
  );
}
