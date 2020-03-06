import {useContext, useEffect} from 'react';

import {UserContext} from '../contexts/user/UserContext';
import {useLocalStorage} from '../hooks/customHooks';
import {useUser} from '../hooks/userHooks';
import {API_PATH, DATA_SOURCE_TOKEN_NAME, LS_TOKEN, LS_TOKEN_EXPIRATION, LS_TOKEN_REFRESH} from '../constants';
import {getUserFromResponse} from '../functions';

export const UserChecker = ({children}) => {
    const [, dispatch] = useContext(UserContext);
    const [{response: getProfileResponse, error: getProfileError}, doGetProfile] = useUser(API_PATH.GET_USER);
    const [token, setToken] = useLocalStorage(LS_TOKEN);
    const [tokenExpirationDate, setTokenExpirationDate] = useLocalStorage(LS_TOKEN_EXPIRATION);
    const [, setTokenRefresh] = useLocalStorage(LS_TOKEN_REFRESH);

    useEffect(() => {
        if (!token) {
            dispatch({type: 'LOGOUT'});
            return;
        } else {
            const expirationDate = new Date(tokenExpirationDate);
            const difference = (new Date()) - expirationDate;
            if (difference >= 0) {
                dispatch({type: 'LOGOUT'});
                setToken('');
                setTokenExpirationDate('');
                setTokenRefresh('');
                return;
            } else {
            }
        }

        dispatch({type: 'LOADING'});
        const params = {[DATA_SOURCE_TOKEN_NAME]: token};
        doGetProfile({
            method: 'post',
            params: params
        });

    }, [doGetProfile, dispatch, token, tokenExpirationDate, setToken, setTokenExpirationDate, setTokenRefresh]);

    useEffect(() => {
        if (!getProfileResponse) {
            return;
        }
        dispatch({type: 'LOGIN', payload: getUserFromResponse(getProfileResponse)});
    }, [getProfileResponse, dispatch]);

    useEffect(() => {
        if (!getProfileError) {
            return;
        }
        dispatch({type: 'ERROR', payload: getProfileError});
    }, [getProfileError, dispatch]);

    return children;
};

