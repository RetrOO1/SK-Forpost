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

                <div className="slider">
                    <SliderCarousel />
                </div> 
                <div className="panel">
                    <div className="kaska">
                        <svg className="external_border" width="650" height="686" viewBox="0 0 650 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="306.25" cy="343" r="342.5" stroke="url(#paint0_linear_28_644)" />
                        <defs>
                            <linearGradient id="paint0_linear_28_644" x1="649.25" y1="343" x2="107.383" y2="343" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="0.0001" stop-color="white" />
                            <stop offset="1" stop-color="white" />
                            </linearGradient>
                        </defs>
                        </svg>
                        <img src="https://i.ibb.co/cY1kLkK/Image.png" alt="Image" border="0"/>
                        <svg className="internal_border" width="534" height="534" viewBox="0 0 534 534" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="267.25" cy="267" r="263.732" transform="rotate(54.6528 267.25 267)" stroke="url(#paint0_linear_28_645)" stroke-width="6" />
                        <defs>
                            <linearGradient id="paint0_linear_28_645" x1="533.982" y1="267" x2="112.602" y2="267" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                        </svg>
                    </div>
                    <div className="panel_text">
                        <p className="p_one">2003</p>
                        <p className="p_two">Год основания компании</p>
                        <p className="p_three">237 Объектов было спроектировано и построено с 2003 года</p>   
                        <p className="p_four">300 Человек - команда из профессиональных специалистов</p>
                        <p className="p_five">50 Единиц техники находится в собственности компании</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default About