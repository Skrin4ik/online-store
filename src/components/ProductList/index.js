import React from 'react';
import { useParams } from 'react-router';
import useData from '../../custom-hooks/useData';
import Spinner from '../Spinner';
import ProductCard from '../ProductCard';

const ProductList = () => {
   
    const { id } = useParams();
    const data = useData(id);
    const minPrice = Math.min.apply(null, data?.data.map(element => element.price));

    if(!data) {
        return <Spinner/>
    }

    return (
        <section className="menu">
            <div className="section-heading">
                <h2 className="section-title restaurant-title">{data.partnerName}</h2>
                <div className="card-info">
                    <div className="rating">
                        4.5
                    </div>
                    <div className="price">От {minPrice} UAH</div>
                    <div className="category">{data.category}</div>
                </div>
            </div>
            <div className="cards cards-menu">
                {data.data.map(card => <ProductCard key={card.id} {...card} />)}
            </div>
        </section>
    )
}

export default ProductList;