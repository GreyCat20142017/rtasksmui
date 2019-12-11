import React, {useContext, useState} from 'react';
import {Button, Divider} from '@material-ui/core';
import {Add} from '@material-ui/icons';

import MUITable from '../../../common/table/MUITable';
import {IT_COLUMNS, ROWS_LIMIT} from '../../../constants';
import FormDialog from '../../../components/form/FormDialog';

import LSContext from '../../../LSContext';
import {saveDataToLocalStorage} from '../../../functions';

const ItLSTable = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [edited, setEdited] = useState(null);
    const {lsData, setLsData} = useContext(LSContext);

    const onDelete = (ind) => {
        const newData = lsData.filter((item, index) => index !== ind);
        setLsData(newData);
        saveDataToLocalStorage(newData);
    };

    const onEdit = (ind) => {
        setEdited({index: ind});
        setIsFormOpen(true);
    };

    return (
        <>
            <Divider/>
            <Button onClick={() => setIsFormOpen(true)} title='Добавить'><Add/></Button>
            <MUITable data={lsData} columns={IT_COLUMNS}
                      aligns={{'total': 'right', 'remote': 'right', 'resume': 'right'}}
                      rowsLimit={ROWS_LIMIT} size={'small'}
                      actions={
                          {
                              delete: {title: 'удалить', icon: 'Delete', onCallback: onDelete},
                              edit: {title: 'изменить', icon: 'Edit', onCallback: onEdit}
                          }
                      }/>

            <FormDialog isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} edited={edited} setEdited={setEdited}/>
        </>
    );
};

export default ItLSTable;