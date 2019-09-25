import {colorArray, DEFAULT_COLOR} from './theme';
import {sample} from 'lodash';

export const getRandomColor = () => (
    Array.isArray(colorArray) && colorArray.length > 0 ?
        sample(colorArray) :
        DEFAULT_COLOR
);