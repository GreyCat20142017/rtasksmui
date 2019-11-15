import {APP_ROOT,  TASKS} from './constants';

export const taskSearch = (href) => {
    const result = Object.entries(TASKS).find(task => APP_ROOT + task[1].href === href);
    return Array.isArray(result)  ? result[0] : 'MAIN';
};