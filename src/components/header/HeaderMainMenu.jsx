import React from 'react';
import {Hidden} from '@material-ui/core';
import Submenu from '../submenu/Submenu';
import {NavItem} from '../navitem/NavItem';

export const MainMenu = ({items}) => (
    <>
        {items.map(link => <NavItem key={link.href} {...link}/>)}
    </>
);

export const HeaderMainMenu = ({items}) => (
    <>
        <Submenu submenuItems={items} switchIcon={'Menu'}/>
        <Hidden smDown><MainMenu items={items}/></Hidden>
    </>
);

