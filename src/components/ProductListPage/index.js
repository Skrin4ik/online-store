import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProductList from '../ProductList';

const ProductListPage = ({ userData }) => {

    const { login } = userData;
    
    if(!login) {
        return <Redirect to="/error-product-list" />
    }

    return <ProductList />
}

const mapStateToProps = (state) => {
    return {
        userData: state
    }
}

const WrappedComponent = connect(mapStateToProps)(ProductListPage)

export default WrappedComponent;