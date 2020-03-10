import React, {useEffect, useState} from 'react';
import {Button, TextField, Typography} from '@material-ui/core';
import {MobileDatePicker as DatePicker} from '@material-ui/pickers';
import useForm from 'react-hook-form';

import {IT_COLUMNS_ERRORS} from '../../constants';

const getCurrentDate = () => {
    return new Date();
};

const isError = (errors, fieldName) => (!!(errors && errors[fieldName]));

const getErrorMessages = (errors) => (
    Object.keys(errors).map(key => IT_COLUMNS_ERRORS[key] || '').join(', ')
);

const stringifyDate = (date) => (
    (date.getFullYear() + '-' +
    (date.getMonth()+ 1).toString().padStart(2, '0') + '-' +
    date.getDate().toString().padStart(2, '0')).slice(0, 10)
);

export const Form = ({edited = null, onSave}) => {
    const {register, handleSubmit, errors} = useForm();
    const [date, setDate] = useState(getCurrentDate());

    useEffect(() => {
        setDate(edited ? edited['date'] : getCurrentDate());
    }, [edited]);

    const onSubmit = element => {
        const el = edited ? {...element, date: stringifyDate(date), id: edited['id']} : {...element, date: stringifyDate(date)};
        onSave(el);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <DatePicker value={date}  name={'date'} id='date' onChange={(dd) => setDate(dd)}/>
            <TextField name='total' inputRef={register({required: true, min: 0})} error={isError(errors, 'total')}
                       defaultValue={edited ? edited['total'] : ''}
                       autoFocus margin='dense' id='total' label='Всего вакансий' type='number' fullWidth/>
            <TextField name='remote' inputRef={register({required: true, min: 0})} error={isError(errors, 'remote')}
                       defaultValue={edited ? edited['remote'] : ''}
                       margin='dense' id='remote' label='Удаленка' type='number' fullWidth/>
            <TextField name='resume' inputRef={register({required: true, min: 0})} error={isError(errors, 'resume')}
                       defaultValue={edited ? edited['resume'] : ''}
                       margin='dense' id='resume' label='Резюме' type='number' fullWidth/>
            <Typography variant='caption' color='error' style={{marginBottom: '10px'}}>
                {getErrorMessages(errors)}
            </Typography>
            <Button type='submit' color='primary' variant='contained' fullWidth title='сохранить и закрыть'>
                сохранить
            </Button>
        </form>
    );
};