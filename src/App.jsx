import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
