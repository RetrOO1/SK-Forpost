import React from "react";
import "../styles/PanelChair.css";

const PanelChair = () => {
    return(
        <div className="panel">
            <div className="line">
                    <div className="line_style"></div>
                </div>
                <div className="point">
                    <div className="point_style"></div>
                </div>
            <div className="container">
                
                <p className="p1">Многолетний опыт позволяет работать в сложных условиях и<br/>гарантированно сдавать объект строго в утвержденный срок</p>
                <div className="img_container">
                    <img src="https://i.postimg.cc/qvfhLhmm/rounded-in-photoretr.jpg" alt="#"/>
                    <div className="img_text">
                        <p className="p2">При подписании договора мы оговариваем конкретный день начала и завершения работ, поэтому вне зависимости от погодных условий, ситуации на дорогах, или других факторов, мы сдадим проект в условленный день</p>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelChair