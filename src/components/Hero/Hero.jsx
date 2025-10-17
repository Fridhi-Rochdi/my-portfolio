import React, { Suspense } from 'react'; 
import './Hero.css';
import Speech from './Speech';
import { motion } from 'framer-motion';
import Bacg from './Bacg';
import { Canvas } from '@react-three/fiber';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left section">
                <motion.h1
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="hero-title">
                    Hey There
                    <br />
                    <span>I'm Rochdi Fridhi!</span>
                </motion.h1>

                <motion.div 
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }} 
                    className="desc"
                >
                    
                    <h2>Computer Science Engineering</h2>
                    <div className="introduction">
                    <p>
                        I am a driven Computer Science Engineering student with a strong foundation in Competitive Programming, Software Development, Data Analysis, and Machine Learning.
                    </p>
                    <div className="download">
                        <a href="RochdiFridhi_CV.pdf" download="RochdiFridhi_CV.pdf">
                            <i className="bi bi-download"></i><span className='download-des'>Download CV</span>
                        </a>
                    </div>
                    </div>
                </motion.div>
                <a href="#Services" className="arrow-link">
                    <i className="bi bi-chevron-double-down"></i>
                </a>
            </div>

            <div className="right-hero section">
                <Speech />
                <a href="#contact">
                    <div className="circular-text">
                        <svg width="150" height="150" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" fill="pink" />
                            <defs>
                                <path id="circlePathInner" d="M 100,100 m -65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0" />
                            </defs>
                            <text fontSize="14" fontFamily="Arial" fill="black">
                                <textPath href="#circlePathInner" startOffset="0%">Hire Now •</textPath>
                            </text>
                            <text fontSize="14" fontFamily="Arial" fill="black">
                                <textPath href="#circlePathInner" startOffset="40%">Contact Me •</textPath>
                            </text>
                        </svg>
                        <div className="arrow-container">
                            <svg width="30" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2v20m-6-6 6 6 6-6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
            <div className="bg">
                <Suspense fallback="loading..">
                    <Canvas>
                        <Bacg />
                    </Canvas>
                </Suspense>

                <div className="heroImg">
                    <img src="favicon.png" alt="Hero" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
