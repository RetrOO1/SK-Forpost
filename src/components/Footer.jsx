import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="logo__name">
                <img src="https://sun9-73.userapi.com/impg/aXdjhq9WoJDP-k8cHlRhms6N7CIkrJVzHwkx-g/BrJOnR1JFhQ.jpg?size=37x32&quality=96&sign=f985c8c7eecebd4c5d26f34ae7dc3cba&type=album" alt="logo" />
                <h1>ООО СК "ФОРПОСТ"</h1>
            </div>
            <div className="line"></div>
            <div className="navig__contacts">
                <div className="navig">
                    <h1>НАВИГАЦИЯ</h1>
                    <p>О компании</p>
                    <p>Отзывы</p>
                </div>
                <div className="contacts">
                    <h1>КОНТАКТЫ</h1>
                    <p>Телефон: 8-800-555-35-35</p>
                    <p>sk.forpost@mail.ru</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer