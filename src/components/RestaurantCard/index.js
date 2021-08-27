import React from 'react';
import { useHistory } from 'react-router';

const RestaurantCard = ({ image, kitchen, name, price, stars, products, time_of_delivery }) => {

    const src = require(`./../../assets/${image}`).default;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/product/${products}`);
    }

    return (
        <div className="card card-restaurant" onClick={handleClick}>
            <img src={src} alt={src} className="card-image"/>
            <div className="card-text">
                <div className="card-heading">
                    <h3 className="card-title">{name}</h3>
                    <span className="card-tag tag">{time_of_delivery} мин</span>
                </div>
                <div className="card-info">
                    <div className="rating">{stars}</div>
                    <div className="price">От {price} UAH</div>
                    <div className="category">{kitchen}</div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;