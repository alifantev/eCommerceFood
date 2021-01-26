import * as React from 'react';
import bannerImg from '../../content/img/banner_01.jpg';
import '../../styles/style.scss';
import MenuItem from "./MenuItem";

interface IProps{
    
}

interface IState{
    
}

export default class ProductMenu extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        
        this.state = {};
    }
    
    getPizzaItems(){
        let content = [];
        for (var i = 0; i <=6; i++){
            content.push(<MenuItem/>);
        }
        
        return content;
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="banner">
                    <div className="container">
                        <div className="banner__body">
                            <img src={bannerImg}/>
                        </div>
                    </div>
                </div>

                <div className="category__menu">
                    <div className="container">
                        <nav className="category__list">
                            <ul className="category__items">
                                <li><a href="#pizzas" className="menu__link">Пицца</a></li>
                                <li><a href="#rolls" className="menu__link">Роллы</a></li>
                                <li><a href="" className="menu__link">Сеты</a></li>
                                <li><a href="" className="menu__link">Салаты</a></li>
                                <li><a href="" className="menu__link">Напитки</a></li>
                                <li><a href="" className="menu__link">Закуски</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="menu">
                    <div className="container">
                        <div className="menu__body">
                            <div className="menu__category" id="pizzas">пиццы</div>
                            <div className="menu__items">
                                { this.getPizzaItems() }
                            </div>

                            <div className="menu__category anchor" id="rolls">роллы</div>
                            <div className="menu__items">
                                { this.getPizzaItems() }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}