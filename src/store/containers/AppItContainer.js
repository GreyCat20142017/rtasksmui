import React, {useEffect, useState} from 'react';

import AppIt from '../../apps/it/AppIt';
import {DEFAULT_IT_URL} from '../../constants';
import {getDataFromLocalStorage} from '../../functions';

const AppItContainer = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        fetch(DEFAULT_IT_URL)
            .then(res => res.json()).then(result => {
                setData([...result, ...getDataFromLocalStorage()]);
        })
            .catch(error => {
                setError('Произошла ошибка при получении данных по умолчанию');
                setData([...getDataFromLocalStorage()]);
            });
    }, [setData, setError]);

    return (
        <>
            <AppIt data={data}/>
            <p>{error}</p>
        </>
    );
};

export default AppItContainer;