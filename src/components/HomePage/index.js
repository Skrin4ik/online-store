import React, {useState} from 'react';
import { connect } from 'react-redux';
import BannerList from '../BannerList';
import RestaurantList from '../RestaurantList';
import SearchInput from '../SearchInput';
import SearchList from '../SearchList';

const HomePage = ({ userData }) => {

    const { login } = userData;
    const [searchStr, setSearchStr] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchStr(value);
    }

    return (
        <>
            <BannerList />
            <section className="restaurants">
                <div className="section-heading">
                    <h2 className="section-title"> Рестораны </h2>
                    {login && <SearchInput searchStr={searchStr} onChange={handleChange}/>}
                </div>

                {searchStr ? <SearchList value={searchStr} /> : <RestaurantList />}
                
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state
    }
}

const WrappedComponent = connect(mapStateToProps)(HomePage);

export default WrappedComponent;