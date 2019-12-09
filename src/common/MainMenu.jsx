import React from 'react';
import {Button} from '@material-ui/core';
import {A} from 'hookrouter';
import {TASKS_ORDER} from '../constants';

const MainMenu = ({classes, active, setActive}) => (
    <>
        {TASKS_ORDER.map((item, ind) =>
            <A className={TASKS_ORDER[ind]['href'] === active ? classes.active : classes.normal}
               href={TASKS_ORDER[ind]['href']} key={ind}
               title={TASKS_ORDER[ind]['comment']}>
                <Button color='inherit' title={TASKS_ORDER[ind]['comment'] || ''}
                        onClick={() => setActive(TASKS_ORDER[ind]['href'])}>
                    {TASKS_ORDER[ind]['title']}
                </Button>
            </A>
        )}
    </>
);

export default MainMenu;