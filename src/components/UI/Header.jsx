import React from 'react'
import "../../styles/Header.css"
import HeaderButton from './Button/HeaderButton'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <div className="header__content">
                <div className="header__logo">
                    <img src='https://sun9-73.userapi.com/impg/aXdjhq9WoJDP-k8cHlRhms6N7CIkrJVzHwkx-g/BrJOnR1JFhQ.jpg?size=37x32&quality=96&sign=f985c8c7eecebd4c5d26f34ae7dc3cba&type=album' alt=''></img>
                </div>
                <div className="header__menu">
                    <Link to="/about">О компании</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/objects">Объекты</Link>
                    <Link to="/contacts">Контакты</Link>
                
                </div>
                <div className="header__button">
                    <HeaderButton/>
                </div>
            </div>
        </header>
    )
}

export default Header