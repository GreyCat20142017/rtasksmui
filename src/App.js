import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {AppBar, Container, Divider, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {theme} from './theme';
import {useStyles} from './App.css';
import AppSwitcher from './AppSwitcher';
import {MainMenu} from './common/MainMenu';


const App = () => {
    const classes = useStyles();
    const [active, setActive] = useState(window.location.pathname);

    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.app}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='h6' className={classes.title}>
                            Rtasks + MUI
                        </Typography>
                        <Divider className={classes.firstButton}/>
                        <MainMenu classes={classes} active={active} setActive={setActive}/>
                    </Toolbar>
                </AppBar>
                <Paper className={classes.paperMain}>
                    <h3>Rtasks c использованием Material-UI</h3>
                    <AppSwitcher/>
                </Paper>
                <AppBar position='static'>
                    <Toolbar>
                    </Toolbar>
                </AppBar>
            </Container>
        </ThemeProvider>
    );
};

export default App;