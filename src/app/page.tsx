import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Organizations from "@/components/Organizations";
import Education from "@/components/Education";
import SkillGrid from "@/components/SkillGrid";
import CountryMap from "@/components/MapLoader";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Approach />
        <Experience />
        <Projects />
        <Organizations />
        <Education />
        <SkillGrid />
        <CountryMap />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
