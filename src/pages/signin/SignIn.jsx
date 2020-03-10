import React, {useContext, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Typography} from '@material-ui/core';

import {Loader, AuthForm} from '../../components/components';
import {useUser} from '../../hooks/userHooks';
import {useLocalStorage} from '../../hooks/customHooks';
import {UserContext} from '../../contexts/user/UserContext';
import {getUserFromResponse} from '../../functions';
import {ROUTES} from '../../routes';
import {
    API_PATH,
    DATA_SOURCE_TOKEN_EXPIRATION,
    DATA_SOURCE_TOKEN_NAME, DATA_SOURCE_TOKEN_REFRESH, DATA_SOURCE_TOKEN_REFRESH_NAME,
    LS_TOKEN,
    LS_TOKEN_EXPIRATION, LS_TOKEN_REFRESH
} from '../../constants';


export const SignIn = (props) => {

    const [{isLoading, response, error}, doFetch] = useUser(API_PATH.LOGIN);
    const [{response: refreshResponse}] = useUser(API_PATH.REFRESH_TOKEN);
    const [, setToken] = useLocalStorage(LS_TOKEN);
    const [, setTokenExpiration] = useLocalStorage(LS_TOKEN_EXPIRATION);
    const [, setTokenRefresh] = useLocalStorage(LS_TOKEN_REFRESH);
    const [{isLoggedIn}, dispatch] = useContext(UserContext);
    const [old, setOld] = useState('');

    useEffect(() => {
        if (!response) {
            return;
        }
        const expirationDate = new Date(new Date().getTime() + response[DATA_SOURCE_TOKEN_EXPIRATION] * 1000);
        setToken(response[DATA_SOURCE_TOKEN_NAME]);
        setTokenRefresh(response[DATA_SOURCE_TOKEN_REFRESH_NAME])
        setTokenExpiration(expirationDate);
        dispatch({type: 'LOGIN', payload: getUserFromResponse(response)});
    }, [response, setToken, setTokenExpiration, setTokenRefresh, dispatch]);

    const onLogin = ({email, password, returnSecureToken}) => {
        setOld(email);
        doFetch({
            method: 'post',
            params: {email, password, returnSecureToken}
        });
    };

    useEffect(() => {
        if (!refreshResponse) {
           return;
        }
            const expirationDate = new Date(new Date().getTime() + refreshResponse[DATA_SOURCE_TOKEN_EXPIRATION] * 1000);
            setToken(refreshResponse[DATA_SOURCE_TOKEN_NAME]);
            setTokenRefresh(refreshResponse[DATA_SOURCE_TOKEN_REFRESH])
            setTokenExpiration(expirationDate);
        }
    , [refreshResponse, setToken, setTokenExpiration, setTokenRefresh]);

    return (
        <Container maxWidth={'sm'}>
            {isLoggedIn && <Redirect to={ROUTES.IT.href}/>}
            {isLoading ?
                <Loader message={'Вход в систему...'}/> :
                <AuthForm isSignUp={false} onSuccess={onLogin} old={old}/>
            }
            {error && <Typography variant={'caption'} color={'error'}>{error}</Typography>}
        </Container>
    );
};