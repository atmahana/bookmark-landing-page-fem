import { Nav } from "./components/navigation/Index";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Extensions } from "./components/Extensions";
import { FAQ } from "./components/FAQ";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Extensions />
      <FAQ />
    </>
  );
}
