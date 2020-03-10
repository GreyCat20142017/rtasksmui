import React, {useContext, useEffect, useState} from 'react';
import {AppBar, Chip, Container, Toolbar} from '@material-ui/core';

import {Submenu, HeaderMainMenu, MUIIcon} from '../components';
import {UserContext} from '../../contexts/user/UserContext';
import {HIDE_WHEN, ROUTES} from '../../routes';
import {getUserInfo} from '../../functions';

const getMenuByRoutes = (userSubmenu = false, isLoggedIn = false) => (
    Object.keys(ROUTES).filter(key => (!!(ROUTES[key]['userSubmenu']) === userSubmenu &&
        ROUTES[key]['hide'] !== (isLoggedIn ? HIDE_WHEN.AUTH : HIDE_WHEN.NOT_AUTH))).map(key =>
        ({
            ...ROUTES[key],
            href: ROUTES[key].href,
            text: ROUTES[key]['title'] || ROUTES[key]['label'],
            key: ROUTES[key].href
        }))
);

export const Header = () => {
    const [{currentUser, isLoggedIn}] = useContext(UserContext);
    const [mainMenu, setMainMenu] = useState([]);
    const [userMenu, setUserMenu] = useState([]);

    useEffect(() => {
        setMainMenu(getMenuByRoutes(false, isLoggedIn));
        setUserMenu(getMenuByRoutes(true, isLoggedIn));
    }, [isLoggedIn]);

    return (
        <AppBar position='static'>
            <Toolbar>
                <Container style={{display: 'flex', alignItems: 'center'}}>
                    <HeaderMainMenu items={mainMenu}/>
                    <div style={{marginLeft: 'auto'}}>
                        <Submenu submenuItems={userMenu} switchIcon={'More'}/>
                        <Chip variant={'outlined'} style={{color: 'white'}}
                              avatar={<MUIIcon icon={'User'}/>}
                              label={getUserInfo(currentUser)}/>
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
