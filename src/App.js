import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {AppBar, Container, Divider, Paper, Toolbar, Typography, CssBaseline, Hidden} from '@material-ui/core';

import AppSwitcher from './AppSwitcher';
import Submenu from './components/submenu/Submenu';
import MainMenu from './common/MainMenu';
import {TASKS_ORDER} from './constants';
import {theme} from './theme';
import {useStyles} from './App.css';

const App = () => {
    const classes = useStyles();
    const [active, setActive] = useState(window.location.pathname);
    const submenuItems = TASKS_ORDER.map((item, ind) => ({
        text: item.title,
        href: item.href,
        key: ind
    }));

    return (
        <>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <Container className={classes.app}>
                    <AppBar position='static'>
                        <Toolbar>
                            <Submenu submenuItems={submenuItems} withNavLink={true} switchIcon={'Menu'}/>
                            <Typography variant='h6' className={classes.title}>
                                Rtasks + MUI
                            </Typography>
                            <Divider className={classes.firstButton}/>
                            <Hidden mdDown>
                                <MainMenu classes={classes} active={active} setActive={setActive}/>
                            </Hidden>
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
        </>
    );
};

export default App;