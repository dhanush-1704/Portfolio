import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}