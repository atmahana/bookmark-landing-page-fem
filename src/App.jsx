import { Nav } from "./components/navigation/Index";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Extensions } from "./components/Extensions";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Features />
        <Extensions />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
