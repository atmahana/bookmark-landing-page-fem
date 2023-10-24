import { Nav } from "./components/navigation/Index.jsx";
import { Hero } from "./components/Hero.jsx";
import { Features } from "./components/Features.jsx";
import { Extensions } from "./components/Extensions.jsx";
import { FAQ } from "./components/FAQ.jsx";
import { ContactForm } from "./components/ContactForm.jsx";
import { Footer } from "./components/Footer.jsx";

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
