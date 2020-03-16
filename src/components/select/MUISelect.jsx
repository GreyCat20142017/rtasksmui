import React, {useState} from 'react';
import {FormControl, Select, MenuItem, Typography} from '@material-ui/core';
import {FILTER_ALL} from '../../constants';
import {getFormattedMonth} from '../chart/chartfunctions';

export const MUISelect = ({items, callback = null}) => {
    const [value, setValue] = useState(items.length > 0 ? items[0] : null);

    const onSelectChange = (evt) => {
        const newValue = evt.target.value
        setValue(newValue);
        if (callback) {
            callback(newValue);
        }
    };

    return (
        items && items.length ?
            <FormControl variant='outlined' size={'small'} style={{marginTop: '1rem'}}>
                <Select title={'Выбор периода для графика'}
                        labelId='months-select-label'
                        id='months-select'
                        value={value}
                        onChange={onSelectChange}>
                    {items.map((item, ind) =>
                        <MenuItem key={ind} value={item}>
                            {item === FILTER_ALL ? item : getFormattedMonth(item)}
                        </MenuItem>
                    )}
                </Select>
            </FormControl> :
            <Typography variant={'caption'}>нет данных</Typography>
    )
};