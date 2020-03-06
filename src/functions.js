import {APP_ROOT, IT_COLUMNS, LOCAL_STORAGE, LS_FLAG, TASKS} from './constants';
import {DATA_SOURCE_TOKEN_NAME, NONAME, PROFILE_DATE_FIELDS, PROFILE_FIELDS} from './constants';

export const getFirstUserFromResponse = (response) => (
    (response && response['users'] && (response['users'].length > 0)) ? response['users'][0] : response);

export const getUpdatedToken = (response) => {
    const user = getFirstUserFromResponse(response);
    return user ? user[DATA_SOURCE_TOKEN_NAME] : null;
};

export const getClearedUserInfo = (user) => {
    const result = {};
    if (user) {
        PROFILE_FIELDS.forEach(field => {
            result[field] = PROFILE_DATE_FIELDS.indexOf(field) >= 0 ?
                new Date(user[field] * 1000) :
                (user[field] || '');
        });
    }
    return ({...result});
}

export const getUserFromResponse = (response) => {
    const user = getFirstUserFromResponse(response);
    return getClearedUserInfo(user);
};

export const getUserInfo = (user) => {
    let result = 'Вход не выполнен';
    if (user) {
        result = user['displayName'] ? user['displayName'] : `${NONAME} ${user['email']}`;
    }
    return result;
};

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