import React from 'react';
import {Button, Divider, Typography} from '@material-ui/core';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';

import {Form} from './Form';

export const FormDialog = ({isFormOpen = false, edited = null, onClose, onSave}) => {
    return (
        <Dialog open={isFormOpen} onClose={onClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Добавление новой точки</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography variant='caption'>
                        Все поля должны быть заполнены.
                        Данные будут добавлены в локальное хранилище. Точки по этим данным будут добавлены и к графикам.
                    </Typography>
                </DialogContentText>
                <Divider/>
                <Form edited={edited} onSave={onSave}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color='primary' fullWidth
                        title={'Закрыть без сохранения изменений. При обновлении страницы все изменения будут потеряны!'}>
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    );
};