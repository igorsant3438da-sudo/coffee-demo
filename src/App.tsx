import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Features from "./components/Features";
import MenuPreview from "./components/MenuPreview";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Features />
        <MenuPreview />
        <Gallery />
        <Process />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
