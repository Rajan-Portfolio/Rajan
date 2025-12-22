import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}