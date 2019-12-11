import React, {useContext} from 'react';
import useForm from 'react-hook-form';

import {Button, TextField, Typography} from '@material-ui/core';
import {isData, isValidIndex, saveDataToLocalStorage} from '../../functions';
import {IT_COLUMNS_ERRORS, LS_FLAG} from '../../constants';
import LSContext from '../../LSContext';

const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
};

const getEdited = (data, index, field) => (isData(data) && isValidIndex(index, data) ? data[index][field] || '' : '');

const isError = (errors, fieldName) => (!!(errors && errors[fieldName]));

const getErrorMessages = (errors) => (
    Object.keys(errors).map(key =>  IT_COLUMNS_ERRORS[key] || '').join(', ')
);

const Form = ({edited = null, onDialogClose}) => {
    const {register, handleSubmit, errors} = useForm();
    const {lsData, setLsData} = useContext(LSContext);

    const getStateAfterCreate = (element) => (
        [...lsData, {...element, [LS_FLAG]: true}]
    );

    const getStateAfterEdit = (element, edited) => {
        const newData = [...lsData];
        newData[edited.index] = {...element, [LS_FLAG]: true};
        return newData;
    };

    const onSubmit = element => {
        const newData = edited ? getStateAfterEdit(element, edited) : getStateAfterCreate(element);
        setLsData(newData);
        saveDataToLocalStorage(newData);
        onDialogClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField name='date' inputRef={register({required: true})} error={isError(errors, 'date')}
                       defaultValue={edited ? getEdited(lsData, edited.index, 'date') : getCurrentDate()}
                       margin='dense' id='date' type='date' fullWidth/>
            <TextField name='total' inputRef={register({required: true, min: 0})} error={isError(errors, 'total')}
                       defaultValue={edited ? getEdited(lsData, edited.index, 'total') : ''}
                       autoFocus margin='dense' id='total' label='Всего вакансий' type='number' fullWidth/>
            <TextField name='remote' inputRef={register({required: true, min: 0})}  error={isError(errors, 'remote')}
                       defaultValue={edited ? getEdited(lsData, edited.index, 'remote') : ''}
                       margin='dense' id='remote' label='Удаленка' type='number' fullWidth/>
            <TextField name='resume' inputRef={register({required: true, min: 0})}  error={isError(errors, 'resume')}
                       defaultValue={edited ? getEdited(lsData, edited.index, 'resume') : ''}
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


export default Form;