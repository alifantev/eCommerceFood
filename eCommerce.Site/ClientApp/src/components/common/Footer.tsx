import * as React from 'react';
import '../../styles/style.scss';
import appStoreIcon from '../../content/img/icons/appStore-logo.svg';
import googlePlayIcon from '../../content/img/icons/googlePlay_logo.svg';
import fbLogo from '../../content/img/icons/Facebook-logo.png';
import vkLogo from '../../content/img/icons/vk_logo.png';
import ytLogo from '../../content/img/icons/youtube-logo.png';

export default class Footer extends React.Component<any, any>{
    
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__top footer__text">
                        <div className="footer_logo">фастфуд</div>
                        <div className="footer__menu">
                            <nav className="menu__row">
                                <a href="" className="menu__link">меню</a>
                                <a href="" className="menu__link">акции</a>
                                <a href="" className="menu__link">доставка</a>
                                <a href="" className="menu__link">контакты</a>
                            </nav>
                        </div>
                    </div>
                    <div className="footer__bottom footer__text">
                        <div className="footer__about">
                            Ресторан и доставка еды
                        </div>
                        <div className="footer__phone">
                            <p><a className="phone-link" href="tel:123-456-7890">123-456-7890</a></p>
                            <p>прием заказов</p>
                        </div>
                        <div className="footer__social">
                            <a href="https://vk.com/" target="blank">
                                <img className="social-icon" src={vkLogo} />
                            </a>
                            <a href="https://facebook.com/" target="blank">
                                <img className="social-icon"src={fbLogo} />
                            </a>
                            <a href="https://youtube.com/" target="blank">
                                <img className="social-icon" src={ytLogo} />
                            </a>
                        </div>
                        <div className="footer__mobile">
                            <a href="https://www.apple.com/ru/app-store/" target="blank">
                                <img className="mobile-icon" src={appStoreIcon} />
                            </a>
                            <a href="https://play.google.com/" target="blank">
                                <img className="mobile-icon" src={googlePlayIcon}/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}