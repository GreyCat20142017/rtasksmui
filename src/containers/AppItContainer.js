import React, {useEffect, useState, useContext} from 'react';

import IT from '../pages/it/IT';
import {DEFAULT_IT_URL} from '../constants';

const AppItContainer = () => {
    const [data, setData] = useState([]);
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
            <IT data={data} lsData={[]}/>
            <p>{error}</p>
        </>
    );
};

export default AppItContainer;