import * as React from 'react';
import productImg from '../../content/img/roll.jpg';
import '../../styles/style.scss';

interface IProps{
}

interface IState{
}

export default class MenuItem extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        
        this.state = {};
    }
    
    render() {
        return (
            <div className="menu__item">
                <div className="menu__column">
                    <div className="item__img">
                        <img src={productImg} alt="какое то название ролла"/>
                    </div>
                    <div className="item__title">Название продукта</div>
                    <div className="item__description">
                        <p>
                            Три холодных, три запеченных и три
                            жареных ролла и еще большее разнообразие вкусов. Состав: Филадельфия с
                            огурцом, Калифорния Нью Стайл, Владивосток, Запеченный с тунцом, Дальний
                            Восток, Моцарелла запеченный, Везувий, Жареный с мидиями, Жареный с
                            лососем New.
                        </p>
                        <p className="item__weight">Вес: 735 грамм</p>
                    </div>
                    <div className="item__price">
                        <div className="price__row">
                            <div className="price__info">179 ₽</div>
                            <div className="to-cart__btn">
                                <a href="" className="btn__link">в корзину</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}