import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Coverage } from "./components/Coverage";
import { StackSection } from "./components/StackSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-ink font-sans text-zinc-300 antialiased">
      <Nav />
      <main id="top" className="mx-auto max-w-6xl px-5">
        <Hero />
        <Work />
        <Coverage />
        <StackSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
