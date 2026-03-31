import About from "../components/Landing/About";
// import Demo from "../components/Landing/Demo";
import Hero from "../components/Landing/Hero";
import Pricing from "../components/Landing/Pricing";
import Testimonials from "../components/Landing/Testimonials";

function Landing() {
  return (
    <>
      <Hero />
      <About />
      {/* <Demo /> */}
      <Pricing />
      <Testimonials />
    </>
  );
}

export default Landing;
