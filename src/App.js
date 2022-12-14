import React, { useEffect, useRef, useState } from "react";
import Spinner from "./components/spinner/Spinner";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import BackToTop from "./components/button/BackToTop";
import LocomotiveScroll from "locomotive-scroll";
// import Particles from "./components/Particles";

function App() {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <>
      <AnimatePresence>{loading ? null : <Spinner />}</AnimatePresence>
      <AnimatePresence>
        <main
          // data-scroll-container
          ref={containerRef}
          id="main"
          className="container"
        >
          {/* <Particles /> */}
          <Navbar />
          <Header />
          <About />
          <Projects />
          <Contact />
          <BackToTop />
        </main>
      </AnimatePresence>
    </>
  );
}

export default App;
