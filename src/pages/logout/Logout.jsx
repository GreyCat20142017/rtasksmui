import React, {useContext, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {ROUTES} from '../../routes';
import {UserContext} from '../../contexts/user/UserContext';
import {useLocalStorage} from '../../hooks/customHooks';
import {LS_TOKEN, LS_TOKEN_EXPIRATION, LS_TOKEN_REFRESH} from '../../constants';

export const Logout = () => {
    const [, dispatch] = useContext(UserContext);
    const [, setToken] = useLocalStorage(LS_TOKEN);
    const [, setTokenExpiration] = useLocalStorage(LS_TOKEN_EXPIRATION);
    const [, setTokenRefresh] = useLocalStorage(LS_TOKEN_REFRESH);

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        let unmounted = false;
        if (!unmounted) {
            setToken('');
            setTokenExpiration('');
            setTokenRefresh('');
        }
        dispatch({type: 'LOGOUT'});
        setRedirect(true);
        return () => {
            unmounted = true;
        };
    }, [dispatch, setToken, setTokenExpiration, setTokenRefresh]);

    return (
        redirect ? <Redirect to={ROUTES.MAIN.href}/> : null
    );
};