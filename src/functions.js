import {APP_ROOT, IT_COLUMNS, LOCAL_STORAGE, LS_FLAG, TASKS} from './constants';

export const taskSearch = (href) => {
    const result = Object.entries(TASKS).find(task => APP_ROOT + task[1].href === href);
    return Array.isArray(result)  ? result[0] : 'MAIN';
};

const allFieldsPresent = (item, columns = IT_COLUMNS) => (columns.every(column => item[column]));

export const getDataFromLocalStorage  = () => {
    const storageData = localStorage.getItem(LOCAL_STORAGE) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE)) : [];
    return storageData.filter(item => allFieldsPresent(item));
};

export const saveDataToLocalStorage = (items) => {
    let result = null;
    try {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(items.filter(item => item[LS_FLAG])));
    } catch (err) {
        result = err.message;
    }
    return result;
};

export const isData = (data) => (data && Array.isArray(data) && data.length > 0);

export const isValidIndex = (index, testedArray) => (((index >= 0) && (index < testedArray.length)));