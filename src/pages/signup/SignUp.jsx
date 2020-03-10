import React, {useContext, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Typography} from '@material-ui/core';

import {Loader, AuthForm} from '../../components/components';
import {UserContext} from '../../contexts/user/UserContext';
import {useLocalStorage} from '../../hooks/customHooks';
import {getUserFromResponse} from '../../functions';
import {useUser} from '../../hooks/userHooks';
import {ROUTES} from '../../routes';
import {
    API_PATH,
    DATA_SOURCE_TOKEN_EXPIRATION,
    DATA_SOURCE_TOKEN_NAME,
    LS_TOKEN,
    LS_TOKEN_EXPIRATION
} from '../../constants';

export const SignUp = (props) => {

    const [{isLoading, response, error}, doFetch] = useUser(API_PATH.REGISTER);
    const [, setToken] = useLocalStorage(LS_TOKEN);
    const [, setTokenExpiration] = useLocalStorage(LS_TOKEN_EXPIRATION);
    const [{isLoggedIn}, dispatch] = useContext(UserContext);
    const [old, setOld] = useState('');

    useEffect(() => {
        if (!response) {
            return;
        }
        const expirationDate = new Date(new Date().getTime() + response[DATA_SOURCE_TOKEN_EXPIRATION] * 1000);
        setToken(response[DATA_SOURCE_TOKEN_NAME]);
        setTokenExpiration(expirationDate);
        dispatch({type: 'LOGIN', payload: getUserFromResponse(response)});
    }, [response, setToken, setTokenExpiration, dispatch]);

    const onSignUp = (user) => {
        setOld(user.email);
        doFetch({
            method: 'post',
            params: user
        });
    };

    return (
        <Container maxWidth={'sm'}>
            {isLoggedIn && <Redirect to={ROUTES.IT.href}/>}
            {isLoading ?
                <Loader message={'Регистрация пользователя...'}/> :
                <AuthForm isSignUp={true} onSuccess={onSignUp} old={old}/>
            }
            {error && <Typography variant={'caption'} color={'error'}>{error}</Typography>}
        </Container>
    );
};
