import React from "react";
import '../styles/AboutPage.css'
import Slider from "../components/UI/Slider_carousel/Slider";
import PanelKaska from "../components/PanelKaska";
import PanelChair from "../components/PanelChair";


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
            <div className="about">
                <div className="circle">
                    <svg className="external_circle" width="625" height="562" viewBox="0 0 625 562" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="498.25" cy="64" r="497.5" stroke="#0D5B00" />
                    </svg>
                    <svg className="internal_circle" width="588" height="525" viewBox="0 0 588 525" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="461.25" cy="64" r="460.5" fill="url(#paint0_linear_2_377)" stroke="#128100" />
                        <defs>
                            <linearGradient id="paint0_linear_2_377" x1="922.25" y1="63.9999" x2="57.0518" y2="63.9999" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#71AD31" />
                            <stop offset="1" stop-color="#71AD31" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="text__one">
                    <h1>Оказываем полный спектр услуг </h1>
                    <h1>проектирования и строительства</h1>
                    <p>Мы делаем ставку не на большое количество заказов, </p>
                    <p>а на профессиональный подход к их выполнению,</p>
                    <p>что позволило нам заработать репутацию надежного</p>
                    <p>и добросовестного бизнес-партнера</p>
                </div>
                <Slider/>
                <PanelKaska/>
                <PanelChair/>
            </div> 
        </div>
    )
}

export default About