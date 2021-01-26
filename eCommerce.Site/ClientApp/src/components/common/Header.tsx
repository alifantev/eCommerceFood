import * as React from 'react';
import '../../styles/style.scss';

export default class Header extends React.Component<any, any>{
    
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <div className="header__top header__text">
                            <div className="header__city ">Москва</div>
                            <div className="header__phone ">
                                <a className="phone-link" href="tel:123-456-7890">123-456-7890</a>
                                <span>c 12:00 до 22:00</span>
                            </div>
                            <div className="header__cart header__text">
                                <i className="far fa-shopping-cart"></i>
                                <span className="header__price">0 Р</span>
                            </div>
                        </div>
                        <div className="header__bottom">
                            <nav className="header__menu">
                                <ul className="header__list">
                                    <li><a href="/menu" className="menu__link active-link">меню</a></li>
                                    <li><a href="/bonusactions" className="menu__link">акции</a></li>
                                    <li><a href="/delivery" className="menu__link">доставка</a></li>
                                    <li><a href="/contacts" className="menu__link">контакты</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="modal-header__body header__text">
                        <div className="modal-header__top">
                            <div className="header__burger">
                                <span></span>
                            </div>
                            <div className="header__cart">
                                <i className="far fa-shopping-cart"></i>
                                <span className="header__price">0 Р</span>
                            </div>
                        </div>
                        <div className="modal-header__bottom">
                            <div className="modal-header__city">Москва</div>
                            <div className="modal-header__phone phone-link">
                                <a className="phone-link" href="tel:123-456-7890">123-456-7890</a>
                                <span>c 12:00 до 22:00</span>
                            </div>
                        </div>
                    </div>
                    <div className="modal-header__menu">
                        <ul className="modal-header__list">
                            <li><a href="/menu" className="menu__link active-link">меню</a></li>
                            <li><a href="" className="menu__link category-link">Пицца</a></li>
                            <li><a href="" className="menu__link category-link">Роллы</a></li>
                            <li><a href="" className="menu__link category-link">Сеты</a></li>
                            <li><a href="" className="menu__link category-link">Салаты</a></li>
                            <li><a href="" className="menu__link category-link">Напитки</a></li>
                            <li><a href="" className="menu__link category-link">Закуски</a></li>
                            <li><a href="/bonusactions" className="menu__link">акции</a></li>
                            <li><a href="/delivery" className="menu__link">доставка</a></li>
                            <li><a href="/contacts" className="menu__link">контакты</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }

}