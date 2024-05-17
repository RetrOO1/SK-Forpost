import React from "react";
import '../styles/AboutPage.css'
import PanelKaska from "../components/PanelKaska";
import PanelChair from "../components/PanelChair";


const AboutPage = () => {
    return(
        <div>
            <div className="img">
                <img src="https://i.postimg.cc/QdXHbvry/Image.png" alt="#" />
            </div>
            <div className="about">
                {/* <div className="circle">
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
                </div> */}
                <div className="services">
                    <div className="text__one">
                        <h1>Оказываем полный спектр услуг проектирования и строительства</h1>
                        <p>Мы делаем ставку не на большое количество заказов, а на профессиональный подход к их выполнению, </p>
                        <p>что позволило нам заработать репутацию надежного</p>
                        <p>и добросовестного бизнес-партнера</p>
                    </div>
                    <div className="jobs">
                        <div className="job1">
                            <img src="https://i.postimg.cc/LsW5mXgc/Image-2.png" alt="#" />
                        </div>
                        <div className="job2">
                            <img src="https://i.postimg.cc/LsW5mXgc/Image-2.png" alt="#" />
                        </div>
                        <div className="job3">
                            <img src="https://i.postimg.cc/LsW5mXgc/Image-2.png" alt="#" />
                        </div>
                        <div className="job4">
                            <img src="https://i.postimg.cc/LsW5mXgc/Image-2.png" alt="#" />
                        </div>
                        <div className="job5">
                            <img src="https://i.postimg.cc/LsW5mXgc/Image-2.png" alt="#" />
                        </div>
                        <div className="job6">
                            <img src="https://i.postimg.cc/LsW5mXgc/Image-2.png" alt="#" />
                        </div>
                    </div>
                </div> 
                <PanelKaska/>
                
                <PanelChair/>
            </div> 
        </div>
    )
}

export default AboutPage