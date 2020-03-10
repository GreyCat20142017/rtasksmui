import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

import {useFetch} from '../../hooks/customHooks';
import {API_PATH, AXIOS_TIMEOUT, LS_TOKEN} from '../../constants';

const getTransformedResponse = (obj) => {
    const result = {};
    const notTransform = ['id', 'date'];
    Object.keys(obj).forEach(key => {
        result[key] = (notTransform.indexOf(key) !== -1 ? obj[key] : parseInt(obj[key]));
    });
    return result;
};

const getToken = () => (localStorage.getItem(LS_TOKEN) || '');

export const DataContext = createContext(null);

export const DataContextProvider = ({children}) => {
    const [dbData, setDbData] = useState([]);
    const [edited, setEdited] = useState(null);
    const [err, setErr] = useState(null);
    const [{isLoading, response, error}, doFetch] = useFetch();

    useEffect(() => {
        if (response) {
            const res = Object.keys(response).map(key => (getTransformedResponse({...response[key], id: key})));
            setDbData(res);
        }
    }, [response]);

    useEffect(() => {
        doFetch({method: 'get', url: API_PATH.GET_DATA});
    }, [doFetch]);

    const createPoint = async (el) => {
        const url = API_PATH.GET_DATA;
        setErr(null);
        try {
            const response = await axios.post(url, {...el}, {
                timeout: AXIOS_TIMEOUT,
                params: {'auth': getToken()}
            });
            const newPoint = {...el, id: response.data.name};
            setDbData([...dbData, newPoint]);
        } catch (e) {
            setErr('Ошибка при создании новой точки: ' + e.message);
        }
    };

    const updatePoint = async (el) => {
        const url = API_PATH.BASE_URL + el['id'] + '.json';
        setErr(null);
        try {
            await axios.put(url, {...el}, {
                timeout: AXIOS_TIMEOUT,
                params: {'auth': getToken()}
            });
            setDbData(dbData.map(item => (item['id'] === el['id'] ? el : item)));
        } catch (e) {
            setErr('Ошибка при изменении данных  по id=' + el['id'] + ': ' + e.message);
        }
    };

    const deletePoint = async (ind) => {
        const id = dbData[ind]['id'];
        const url = API_PATH.BASE_URL + id + '.json';
        setErr(null);
        try {
            await axios.delete(url, {
                timeout: AXIOS_TIMEOUT,
                params: {'auth': getToken()}
            });
            setDbData(dbData.filter(item => (item['id'] !== id)));
        } catch (e) {
            setErr('Ошибка при удалении точки с id=' + id + ': ' + e.message);
        }
    };

    const editPoint = async (ind) => {
        const id = dbData[ind]['id'];
        const url = API_PATH.BASE_URL + id + '.json';
        setErr(null);
        try {
            const response = await axios.get(url, {timeout: AXIOS_TIMEOUT});
            const res = response.data;
            setEdited({...res, id: id, date: new Date(res['date'])});
        } catch (e) {
            setErr('Ошибка при получении данных  по id=' + id);
        }
    };

    return (
        <DataContext.Provider value={{
            isLoading, error, dbData, setDbData, err, edited, setEdited,
            createPoint, updatePoint, deletePoint, editPoint
        }}>
            {children}
        </DataContext.Provider>
    );
};