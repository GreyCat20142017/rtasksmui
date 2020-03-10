import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export const Footer = () => (
    <AppBar position='static'>
        <Toolbar>
            <Typography variant={'caption'}>2020</Typography>
        </Toolbar>
    </AppBar>
);