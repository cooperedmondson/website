import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { motion } from 'framer-motion';
import Stonk from "../assets/STONK.gif";
import TAXIDRIVER from "../assets/TAXIDRIVER.gif";
import RUFF from "../assets/RUFF.GIF";

function HorizontalGallery() {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = useRef();
    const skills = useRef();

    useEffect(() => {
        let skillSet = gsap.utils.toArray('.skill-set');

        let to = gsap.to(skillSet, {
            xPercent: () => -100 * (skillSet.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: scroller.current,
                markers: false,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                snap: 1 / (skillSet.length - 1),
                end: () => '+=' + window.innerWidth,
            },
        });

        return () => {
            to.kill();
        };
    }, []);


    return (
        <div className="overflow-hidden flex">

            <div className="overflow-hidden ">
                <div
                    id="skills"
                    ref={scroller}
                    className=" flex overflow-x-hidden text-white w-[400vw] m-0 bg-white  relative h-screen"
                >
                    <a href="https://github.com/cooperedmondson/Puppin"
                        ref={skills}
                        className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                    >
                        <div className='left-wrapper-1'>
                            <div className='left-content-1'>
                                Purely
                            </div>
                        </div>
                        <img
                            id="ruff"
                            src={RUFF}
                            alt="1st image"
                            layout="fill"
                            objectfit="contain"
                            className="max-w-[70vw] max-h-[60vh] m-auto"
                        />
                        <div className='right-wrapper-1'>
                            <div className='right-content-1'>
                                Puptonic / 2022
                            </div>
                        </div>
                    </a>
                    <a href = "https://github.com/cooperedmondson/CarCar"
                        ref={skills}
                        className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                    >
                        <div className='left-wrapper-2'>
                            <div className='left-content-2'>
                                Car
                            </div>
                        </div>
                        <img
                            id="taxi"
                            src={TAXIDRIVER}
                            alt="2ndimage"
                            layout="fill"
                            objectfit="contain"
                            className="max-w-[70vw] max-h-[60vh] m-auto"
                        />
                        <div className='right-wrapper-2'>
                            <div className='right-content-2'>
                                Car / 2022
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/cooperedmondson/stonks_api"
                        ref={skills}
                        className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                    >
                        <div className='left-wrapper'>
                            <div className='left-content'>
                                Stocks
                            </div>
                        </div>
                        <img
                            src={Stonk}
                            id='STONK'
                            alt="2ndimage"
                            layout="fill"
                            objectfit="contain"
                            className="max-w-[70vw] max-h-[60vh] m-auto"
                        />
                        <div className='right-wrapper'>
                            <div className='right-content'>
                                Api / 2022
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HorizontalGallery