import React from 'react';
import { v4 } from 'uuid';
import useData from '../../custom-hooks/useData';
import RestaurantCard from '../RestaurantCard';
import Spinner from '../Spinner';

const RestaurantList = () => {

    const data = useData('partners');

    if(!data) {
        return <Spinner />
    }

    return (
        <div className="cards cards-restaurants">
            {data?.map(restaurant => {
                return <RestaurantCard key={v4()} {...restaurant}/>
            })}
        </div>
    )
}

export default RestaurantList;