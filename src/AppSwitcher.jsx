import React from 'react';
import {useRoutes} from 'hookrouter';

import {TASKS} from './constants';
import {routes} from './routes';
import {taskSearch} from './functions';
import NotFound from './common/NotFound';


const AppSwitcher = () => {
    const routeResult = useRoutes(routes);
    const task = taskSearch(window.location.pathname);

    return (
        <>
            <p><small>{TASKS[task]['comment']}</small></p>
            {routeResult || <NotFound/>}
        </>
    );
};

export default AppSwitcher;