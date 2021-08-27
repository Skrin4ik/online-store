import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner';
import firebase from '../../utils/fb-config';
import ProductCard from '../ProductCard';

const SearchList = ({ value }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        firebase
            .database()
            .ref()
            .once('value')
            .then(snap => setData(snap.val()));
    }, []);

    const allData = data && Object.values(data)
                                .map(products => products.data)
                                .filter(Boolean)
                                .flat(Infinity)
                                .filter(el => el.name.toUpperCase().includes(value.toUpperCase()))

    const isData = allData && allData.length > 0;

    if(!data) {
        return <Spinner />
    }

    return (
        <div className="cards cards-menu">
            {isData ? allData?.map(card => {
                return <ProductCard key={card.id} {...card}/>
            }): <h2>К сожалению, поиск не дал результатов</h2>}

        </div>
    )

}

export default SearchList;