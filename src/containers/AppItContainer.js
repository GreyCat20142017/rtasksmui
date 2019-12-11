import React, {useEffect, useState, useContext} from 'react';

import AppIt from '../apps/it/AppIt';
import {DEFAULT_IT_URL} from '../constants';
import LSContext from '../LSContext';

const AppItContainer = () => {
    const [data, setData] = useState([]);
    const {lsData} = useContext(LSContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        fetch(DEFAULT_IT_URL)
            .then(res => res.json()).then(result => {
                setData([...result]);
        })
            .catch(error => {
                setError('Произошла ошибка при получении данных по умолчанию');
                setData([]);
            });
    }, [setData, setError]);

    return (
        <>
            <AppIt data={data} lsData={lsData}/>
            <p>{error}</p>
        </>
    );
};

export default AppItContainer;