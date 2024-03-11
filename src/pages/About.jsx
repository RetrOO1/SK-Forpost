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
                
            </div>
        </div>
    )
}

export default About