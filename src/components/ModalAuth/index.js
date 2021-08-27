import React, { useState } from 'react';

const ModalAuth = ({ onClose, onLogIn }) => {

    const [state, setState] = useState({
        login: '',
        password: '',
        card: []
    })

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogIn(state);
        onClose();
    }


    return (
        <div className="modal-auth">
            <div className="modal-dialog modal-dialog-auth">
                <button className="close-auth" onClick={onClose}>&times;</button>
                <form onSubmit={handleSubmit}>
                    <fieldset className="modal-body">
                        <legend className="modal-title">Авторизация</legend>
                        <label className="label-auth">
                            <span>Логин</span>
                            <input name="login" type="text" value={state.login} onChange={handleChange}/>
                        </label>
                        <label className="label-auth">
                            <span>Пароль</span>
                            <input name="password" type="password" value={state.password} onChange={handleChange}/>
                        </label>
                    </fieldset>

                    <div className="modal-footer">
                        <div className="footer-buttons">
                            <button className="button button-primary button-login">Войти</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalAuth;