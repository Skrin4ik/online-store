export const logIn = (logData) => {
    return {
        type: 'LOG_IN',
        payload: logData
    }
}

export const logOut = () => {
    return {
        type: 'LOG_OUT',
        payload: {
            login: null,
            password: null
        }
    }
}