import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ModalAuth from '../ModalAuth';
import Portal from '../Portal';
import { logIn, logOut } from '../../redux-store/actions';
import ModalCart from '../ModalCart';


const Header = ({ userData, dispatch }) => {

    const { login } = userData;
    const history = useHistory();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalCartOpen, setIsModalCartOpen] = useState(false);

    const handleModalOpen = () => setIsModalOpen(!isModalOpen);

    const handleLogIn = (data) => {
        dispatch(logIn(data));
        history.push('/');
    }

    const handleLogOut = () => {
        dispatch(logOut());
    }

    const handleModalCartOpen = () => {
        setIsModalCartOpen(!isModalCartOpen);
    }

    return (
        <div className="container">
            <header className="header">
                <Link to="/" className="logo">
                    <img src={require('./../../assets/img/icon/logo.svg').default} alt="logo"/>
                </Link>
                <label className="address">
                    <input type="text" className="input input-address" placeholder="Адрес доставки" />
                </label>

                {!!login && <>
                
                <span className="user-name">{login}</span>
                
                <button className="button button-cart" onClick={handleModalCartOpen}>
                    <span className="button-cart-svg"></span>
                    <span className="button-text">Корзина</span>
                </button>

                <button className="button button-primary button-out" onClick={handleLogOut}>
                    <span className="button-text">Выйти</span>
                    <span className="button-out-svg"></span>
                </button>
                </>}

                {!login && <button className="button button-primary button-auth" onClick={handleModalOpen}>
                    <span className="button-auth-svg"></span>
                    <span className="button-text">Войти</span>
                </button>}
            </header>

            {isModalOpen && <Portal><ModalAuth onClose={handleModalOpen} onLogIn={handleLogIn}/></Portal>}
            {isModalCartOpen && <Portal><ModalCart onClose={handleModalCartOpen} login={login}/></Portal>}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state
    }
}

const WrappedHeader = connect(mapStateToProps)(Header)

export default WrappedHeader;