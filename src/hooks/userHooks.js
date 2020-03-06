import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

import {useLocalStorage} from './customHooks';
import {BASE_URL, LS_TOKEN} from '../constants';

const getHeaders = (token) => {
    const headers = {};
    if (token) {
        // headers['Authorization'] = `Bearer ${token}`;
    } else {
        // headers['Accept'] = 'application/json';
    }
    return headers;
};

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
            headers: getHeaders(token),
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