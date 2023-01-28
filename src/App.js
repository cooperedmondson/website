import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { motion } from 'framer-motion';
import Landing from './pages/Landing';
import About from './pages/About';
import HorizontalGallery from './components/HorizontalGallery';
import Footer from './pages/Footer';
function App() {

  const [cursorVariant, setCursorVariant] = useState("default");

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
    },
    section: {
      backgroundColor: "black",
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  }
  const style = {
    backgroundColor: "white",
    height: "32px",
    width: "32px",
    borderRadius: "50%",
    position: "fixed",
    top: 0,
    left: 0,
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const sectionLeave = () => setCursorVariant("section");

  const [cursorStyle, setCursorStyle] = useState(style);


  return (
    <>
      <div className='grain-effect' />
      <Landing textEnter={textEnter} textLeave={textLeave} />
      <About sectionLeave={sectionLeave} textLeave={textLeave} />
      <Footer textEnter={textEnter} textLeave={textLeave}/>
      <motion.div className='cursor'
        style={cursorStyle}
        variants={variants}
        animate={cursorVariant} />
    </>
  );
}

export default App;
