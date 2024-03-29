import React from "react";
import '../styles/PanelKaska.css'

const PanelKaska = () => {
    return(
        <div className="panel_one">
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
    )
}

export default PanelKaska