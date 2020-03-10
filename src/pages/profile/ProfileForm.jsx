import React, {useContext, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Button, TextField, Typography} from '@material-ui/core';

import {Loader} from '../../components/components';
import {useLocalStorage} from '../../hooks/customHooks';
import {useUser} from '../../hooks/userHooks';
import {UserContext} from '../../contexts/user/UserContext';
import {
    API_PATH, DATA_SOURCE_TOKEN_EXPIRATION, DATA_SOURCE_TOKEN_NAME, LS_TOKEN, LS_TOKEN_EXPIRATION
} from '../../constants';
import {getUserFromResponse} from '../../functions';
import {ROUTES} from '../../routes';


export const ProfileForm = ({info}) => {
    const [displayName, setDisplayName] = useState(info['displayName'] || '');
    const [formError, setFormError] = useState(null);
    const [touched, setTouched] = useState(false);
    const [token, setToken] = useLocalStorage(LS_TOKEN);
    const [, setTokenExpiration] = useLocalStorage(LS_TOKEN_EXPIRATION);
    const [, dispatch] = useContext(UserContext);
    const [ok, setOk] = useState(false);
    const [{isLoading: profileIsUpdating, response: profileResponse, error: profileError}, updateProfile] = useUser(API_PATH.UPDATE_USER);

    const errorMessage = 'Все поля должны быть заполнены!';

    useEffect(() => {
        if (!profileResponse) {
            return;
        }
        if (profileResponse[DATA_SOURCE_TOKEN_NAME] && profileResponse[DATA_SOURCE_TOKEN_EXPIRATION]) {
            setToken(profileResponse[DATA_SOURCE_TOKEN_NAME]);
            setTokenExpiration(profileResponse[DATA_SOURCE_TOKEN_EXPIRATION]);
        }
        dispatch({type: 'LOGIN', payload: getUserFromResponse(profileResponse)});
        setOk(true);
    }, [profileResponse, setToken, setTokenExpiration, dispatch]);

    const onInputChange = (value, setter) => setter(value);

    const onSubmit = (evt) => {
        evt.preventDefault();
        const ok = (displayName.trim().length > 0);
        setFormError(ok ? null : errorMessage);
        setTouched(true);
        if (ok) {
            const params = {[DATA_SOURCE_TOKEN_NAME]: token, displayName: displayName, returnSecureToken: true};
            updateProfile({
                method: 'post',
                params: params
            });
        }
    };

    if (ok) {
        return <Redirect to={ROUTES.IT.href}/>
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <Typography variant='h6'>Изменение данных пользователя</Typography>
                <TextField
                    required autoFocus={true} id='displayName' name='displayName' label={'Имя пользователя'}
                    value={displayName} fullWidth
                    margin='normal'
                    error={touched && displayName.trim().length <= 0}
                    onChange={(evt) => onInputChange(evt.target.value, setDisplayName)}/>

                <Button variant={'contained'} color={'primary'} onClick={onSubmit} fullWidth
                        title={'Сохранить изменения'}>
                    сохранить
                </Button>

                <Typography variant={'caption'} color={'error'}>{formError}</Typography>
            </form>
            {profileIsUpdating && <Loader message={'Обновление профиля...'}/>}
            {profileError && <Typography variant={'caption'} color={'error'}>{profileError}</Typography>}
        </>
    );
};