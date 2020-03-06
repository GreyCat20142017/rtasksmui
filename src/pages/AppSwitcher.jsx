import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Paper} from '@material-ui/core';

import {ROUTES} from '../routes';
import {IT, Logout, Main, NotFound, Profile, SignIn, SignUp} from '../pages/pages';

const AppSwitcher = ({classes}) => {
    return (
        <Paper className={classes.paperMain}>
            <h3>Rtasks c использованием Material-UI</h3>
            <Switch>
                <Route path={ROUTES.MAIN.href} exact component={Main}/>
                <Route path={ROUTES.SIGN_IN.href} component={SignIn}/>
                <Route path={ROUTES.SIGN_UP.href} component={SignUp}/>
                <Route path={ROUTES.PROFILE.href} component={Profile}/>
                <Route path={ROUTES.LOGOUT.href} component={Logout}/>
                <Route path={ROUTES.IT.href} component={IT}/>
                <Route component={NotFound}/>
            </Switch>
        </Paper>
    );
};

export default AppSwitcher;