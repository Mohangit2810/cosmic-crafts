import About from "../components/About";
import Best from "../components/Best";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Best />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
