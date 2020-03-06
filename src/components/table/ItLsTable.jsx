import React, {useContext, useState} from 'react';
import {Button, Divider, Typography} from '@material-ui/core';
import {Add} from '@material-ui/icons';

import FormDialog from '../form/FormDialog';
import MUITable from '../../common/table/MUITable';
import {Loader} from '../components';
import {DataContext} from '../../contexts/data/DataContext';
import {UserContext} from '../../contexts/user/UserContext';
import {IT_COLUMNS, ROWS_LIMIT} from '../../constants';

const ItLSTable = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const {dbData, isLoading, error, err, edited, setEdited,
        editPoint, createPoint, updatePoint, deletePoint} = useContext(DataContext);

    const [{isLoggedIn}] = useContext(UserContext);

    const onDelete = (ind) => {
        deletePoint(ind);
    };

    const onCreate = () => {
        setIsFormOpen(true);
    };

    const onSave = (el) => {
        if (el.hasOwnProperty('id')) {
            updatePoint(el);
        } else {
            createPoint(el);
        }
        setEdited(null);
        setIsFormOpen(false);
    };

    const onClose = () => {
        setIsFormOpen(false);
        setEdited(null);
    };

    const onEdit = (ind) => {
       editPoint(ind);
    };

    const actions = isLoggedIn ?
        {
            delete: {title: 'удалить', icon: 'Delete', onCallback: onDelete},
            edit: {title: 'изменить', icon: 'Edit', onCallback: onEdit}
        } :
        {};

    return (
        <>
            <Divider/>
            <Button onClick={onCreate}
                    title={isLoggedIn ? 'Добавить' : 'Необходимо залогиниться'}
                    disabled={!isLoggedIn}>
                <Add/>
            </Button>
            {isLoading && <Loader message={'Загрузка даннных...'}/>}
            {!isLoading && dbData && <MUITable data={dbData} columns={IT_COLUMNS}
                                               aligns={{'total': 'right', 'remote': 'right', 'resume': 'right'}}
                                               rowsLimit={ROWS_LIMIT} size={'small'}
                                               actions={actions}/>
            }
            {error && <Typography variant={'caption'} color={'error'}>{error}</Typography>}
            {err && <Typography variant={'caption'} color={'error'}>{err}</Typography>}
            <FormDialog isFormOpen={!!(isFormOpen || edited)} edited={edited} onClose={onClose} onSave={onSave}/>
        </>
    );
};

export default ItLSTable;
