import React from "react";
import "../styles/PanelChair.css";

const PanelChair = () => {
    return(
        <div className="panel_two">
            <div className="img2_container">
                <div className="border_img">
                    <svg className="external_border_img" width="650" height="686" viewBox="0 0 650 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="306.25" cy="343" r="342.5" stroke="url(#paint0_linear_29_1169)" />
                    <defs>
                        <linearGradient id="paint0_linear_29_1169" x1="649.25" y1="343" x2="107.383" y2="343" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                    </svg>
                    <svg className="internal_border_img" width="534" height="534" viewBox="0 0 534 534" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="267.25" cy="267" r="263.732" transform="rotate(54.6528 267.25 267)" stroke="url(#paint0_linear_29_1170)" stroke-width="6" />
                    <defs>
                        <linearGradient id="paint0_linear_29_1170" x1="533.982" y1="267" x2="112.602" y2="267" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                    </svg>
                    <img src="https://i.postimg.cc/Gm7hj2K4/Image-4.png" alt="" />
                </div>
            </div>
            <div className="text">
                <div className="part_one">
                    <p className="p_one">ТОЧНО, СТУЛ</p>
                    <p className="p_two">Многолетний опыт позволяет работать</p>
                    <p className="p_three">в сложных условиях и гарантированно</p>
                    <p className="p_four">сдавать объект строго в утвержденный<br />срок</p>
                </div>
                <div className="part_two">
                    <p className="p_five">При подписании договора мы оговариваем конкретный день начала и</p>   
                    <p className="p_six">завершения работ, поэтому вне зависимости от погодных условий, </p>
                    <p className="p_seven">ситуации на дорогах, или других факторов, мы сдадим проект в<br />условленный день</p>
                </div>
            </div>
        
        </div>
    )
}

export default PanelChair