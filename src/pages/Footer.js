import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TweenLite } from 'gsap/all';

function Footer(props) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const text6 = document.querySelector('.hello1');
    text6.innerHTML = text6.innerText.split('').map((char, i) => `<div class="char6">${char}</div>`).join('');
    const text7 = document.querySelector('.hello2');
    text7.innerHTML = text7.innerText.split('').map((char, i) => `<div class="char7">${char}</div>`).join('');

    gsap.from(".char6", {
      duration: .8,
      opacity: 0,
      y: 40,
      skewY: 20,
      ease: "circ.out",
      stagger: .2,
      scrollTrigger: {
        trigger: ".hello1",
        start: "top 75%",
        end: "bottom center",
        scrub: 1,
      },
    });
    gsap.from(".char7", {
      duration: .8,
      opacity: 0,
      y: 40,
      skewY: 20,
      ease: "circ.out",
      stagger: -.2,
      scrollTrigger: {
        trigger: ".hello2",
        start: "top 90%",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);
  

  useEffect(() => {
    gsap.to("#my-svg", {
      strokeDashoffset: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#my-svg",
        start: 'top 90%',
        scrub: 1,
      },
    });
    gsap.to("#my-svg2", {
      strokeDashoffset: 0,
      duration: 4,
      scrollTrigger: {
        trigger: "#my-svg2",
        start: 'top 90%',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className='main-three'>
      <div className='rip-two' />
      <div className='me-wrapper'>
        <div className='me-content'>
          <div className='hello1'>Contact</div>
          <div className='hello2'> Me</div>
        </div>
      </div>
      <div className='line-arrow'>
        <svg id="my-svg" stroke-dasharray="1670" stroke-dashoffset="1500" width="831" height="229" viewBox="0 0 831 229" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
          <path strokeWidth="4px" d="M830 21C812.667 90 736.6 228 571 228C405.4 228 373 1.00001 195 1.00001C87 1.00001 1 60 1 178" stroke="white" className='bg-transparent' />
        </svg>
        <div className='arrow'>
          <svg width="69" id="my-svg2" stroke-dasharray="1500" stroke-dashoffset="1500" height="56" viewBox="0 0 69 56" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
            <path d="M0.5 1L24 54.5C38 38.3333 66.5 6.3 68.5 7.5" stroke="white" className='bg-transparent' strokeWidth="4px" />
          </svg>
        </div>
      </div>
      <div className='divider' />
      <div className='locations-wrapper'>
        <div className='locations-content'>
          <a
            href='https://www.linkedin.com/in/cooper-edmondson/'
            className='animate1'
            onMouseEnter={props.textEnter}
            onMouseLeave={props.textLeave}>
            LinkedIn
          </a>
          <a
            href='mailto:cooperedmondson0115@gmail.com'
            className='animate2'
            onMouseEnter={props.textEnter}
            onMouseLeave={props.textLeave}>
            Email
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer