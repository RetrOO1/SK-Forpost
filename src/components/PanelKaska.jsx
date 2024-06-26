import React from "react";
import '../styles/PanelKaska.css'

const PanelKaska = () => {
    return(
        <div className="panel_one">
            {/* <div className="img_container">
                <div className="border_img">
                    <svg className="external_border_img" width="650" height="686" viewBox="0 0 650 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="306.25" cy="343" r="342.5" stroke="url(#paint0_linear_28_644)" />
                    <defs>
                        <linearGradient id="paint0_linear_28_644" x1="649.25" y1="343" x2="107.383" y2="343" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="0.0001" stop-color="white" />
                        <stop offset="1" stop-color="white" />
                        </linearGradient>
                    </defs>
                    </svg>
                    <svg className="internal_border_img" width="534" height="534" viewBox="0 0 534 534" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="267.25" cy="267" r="263.732" transform="rotate(54.6528 267.25 267)" stroke="url(#paint0_linear_28_645)" stroke-width="6" />
                    <defs>
                        <linearGradient id="paint0_linear_28_645" x1="533.982" y1="267" x2="112.602" y2="267" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                    </svg>
                    <img src="https://i.postimg.cc/8zPzWWR8/image-5.png" alt="" />
                </div>
            </div> */}
            <div className="text_one">
                <div className="year">
                    <p className="one">2003</p>
                    <p className="two">Год основания компании</p>
                </div>
                <div className="objects">
                    <p className="one">237 </p>
                    <p className="two">Объектов было<br />спроектировано и построено</p>   
                </div>
                <div className="peoples">
                    <p className="one">300</p>
                    <p className="two">Человек - команда из<br />профессиональных специалистов</p>
                </div>
                <div className="technics">
                    <p className="one">Больше 50</p>
                    <p className="two"> единиц техники находится в<br />собственности компании</p>
                </div>
            </div>
        </div>
    )
}

export default PanelKaska