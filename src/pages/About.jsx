import React from "react";
import SliderCarousel from "../components/SliderCarusel";
import '../styles/AboutPage.css'

const About = () => {
    return(
        <div>
            <div className="img">
                <img src="https://sun9-11.userapi.com/impg/Rg_augY53kNNY-2lim-F-2DHRbIKDaYJMZohfg/XpeyziTJxGA.jpg?size=2560x821&quality=96&sign=b0780eb11a36829c211b3a16fd3ec554&type=album" alt="#" />
                <div className="img__frame">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5V19.5M19.5 12H4.5" stroke="white" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5V19.5M19.5 12H4.5" stroke="white" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg> 
                </div>
            </div>
            <div className="slider">
                <SliderCarousel />
            </div> 
            <div className="year_of_create">
                <div className="kaska">
                    <img src="https://i.ibb.co/cY1kLkK/Image.png" alt="Image" border="0"/>
                </div>
                <div className="panel">
                    <svg width="1601" height="733" viewBox="0 0 1601 733" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.25" width="1600" height="733" rx="54" fill="url(#paint0_angular_28_643)" />
                        <rect x="0.25" width="1600" height="733" rx="54" fill="url(#paint1_radial_28_643)" />
                        <circle cx="306.25" cy="366" r="342.5" stroke="url(#paint2_linear_28_643)" />
                        <circle cx="306.25" cy="366" r="263.732" transform="rotate(54.6528 306.25 366)" stroke="url(#paint3_linear_28_643)" stroke-width="6" />
                        <defs>
                            <radialGradient id="paint0_angular_28_643" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.250004 394.5) rotate(0.0696473) scale(1234 1472.59)">
                            <stop stop-color="#005E15" stop-opacity="0.77" />
                            <stop offset="0.505" stop-color="#004710" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_28_643" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(800.25 389) rotate(90) scale(602 1314.05)">
                            <stop stop-color="#71AD31" />
                            <stop offset="1" stop-color="#094F33" />
                            </radialGradient>
                            <linearGradient id="paint2_linear_28_643" x1="649.25" y1="366" x2="107.383" y2="366" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="0.0001" stop-color="white" />
                            <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_28_643" x1="572.982" y1="366" x2="151.602" y2="366" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div> 
            </div>
        </div>
    )
}

export default About