import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { motion } from 'framer-motion';
import Mouse from '../assets/Mouse.png'
import Lighthouse from '../assets/Donnie.gif'

function Landing(props) {
  gsap.registerPlugin(ScrollTrigger);


  return (
    <div className="main-1">
      

      <div className='menu-wrapper'>
        <div className=''>

        </div>
      </div>


      <div className='introduction-wrapper'>
        <div className='introduction-content'>
          <div className='introduction'>
            <div className='introduction-span-one'>Cooper</div>
            <span className='introduction-span-two'>Edmondson</span>
          </div>
        </div>
      </div>


      <div className='scroll-wrapper' >
        <div className='scroll-content'>
          <p className='center-this'>
            <span>⍝</span>
            <span>⍝</span>
          </p>
          <span className='scroll-text'onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>  [ SCROLL DOWN ]</span>
        </div>
      </div>


      <div className='lighthouse-wrapper'>
        <div className='lighthouse-content'>
          <img src={Lighthouse} className="lighthouse"/>
        </div>
      </div>

    </div>

  )
}

export default Landing