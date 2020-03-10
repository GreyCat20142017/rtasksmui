import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

import {useLocalStorage} from './customHooks';
import {BASE_URL, LS_TOKEN} from '../constants';

export const useUser = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});
    const [token] = useLocalStorage(LS_TOKEN);

    const doFetch = useCallback((options = {}) => {
        setOptions(options);
        setIsLoading(true);
    }, []);

    useEffect(() => {
        let unmounted = false;
        if (!isLoading) {
            return;
        }

        const requestOptions = {
            ...options,
            url: BASE_URL + url
        };

        axios(requestOptions)
            .then(res => {
                if (!unmounted) {
                    setResponse(res.data);
                    setIsLoading(false);
                }
            })
            .catch(error => {
                if (!unmounted) {
                    setError(error.message);
                    setIsLoading(false);
                }
            });
        return () => {
            unmounted = true;
        };
    }, [isLoading, url, options, token]);

    return [{isLoading, response, error}, doFetch];
};