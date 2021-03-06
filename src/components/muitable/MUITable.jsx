import React, {useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, makeStyles} from '@material-ui/core';

import ActionsHeaders from './actions/ActionsHeaders';
import ActionsCells from './actions/ActionsCells';
import {getTranslate, NF} from '../chart/chartfunctions';
import {ROWS_PER_PAGE_OPTIONS} from '../../constants';
import {theme} from '../../theme';

const useStyles = () => makeStyles({
    root: {
        padding: theme.spacing(1),
        maxWidth: '100%'
    },
    tableWrapper: {
        maxHeight: '90vh',
        overflowY: 'auto',
    }
});

const isNumber = (value) => (typeof (value) === 'number');

const getFormatted = (value) => (isNumber(value) ? NF.format(value) : value);

const getCell = (row, column, rowIndex) => getFormatted((row[column]) || (column === 'id' ? rowIndex + 1 : ''));

const getAlign = (aligns = {}, column, defaultAlign) => (aligns[column] ? aligns[column] : defaultAlign);

const getHoverTitle = (row, hoverField) => (hoverField && row[hoverField] ? hoverField + ' : ' + row[hoverField] : '');

/**
 * @param actions = {'delete: {'title' : 'удалить',  icon: 'Delete', callback: }}
 */

export const MUITable = ({
                      data, columns, rowsLimit = 10, size = 'small', maxWidth = '100%',
                      hoverField = null, actions = null, aligns = {}, defaultAlign = 'left'
                  }) => {
    const classes = useStyles(maxWidth);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsLimit);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div style={{maxWidth: maxWidth}}>
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table stickyHeader aria-label="таблица" size={size}>
                        <TableHead>
                            <TableRow>
                                {columns.map((column, ind) => (
                                    <TableCell key={ind} align={getAlign(aligns, column, defaultAlign)}>
                                        {getTranslate(column)}
                                    </TableCell>
                                ))}
                                <ActionsHeaders actions={actions}/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowInd) =>
                                (
                                    <TableRow key={rowInd} title={getHoverTitle(row, hoverField)}>
                                        {columns.map((column, ind) => (
                                                <TableCell key={rowInd + '_' + ind}
                                                           align={getAlign(aligns, column, defaultAlign)}>
                                                    {getCell(row, column, rowInd + rowsPerPage * page)}
                                                </TableCell>
                                            )
                                        )}
                                        <ActionsCells actions={actions} rowInd={rowInd + rowsPerPage * page}/>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                    <TablePagination className={classes.selectRoot} size={'small'}
                                     rowsPerPageOptions={[...ROWS_PER_PAGE_OPTIONS, -1]}
                                     labelRowsPerPage={'Строк на страницу:'}
                                     component="div"
                                     count={data.length}
                                     rowsPerPage={rowsPerPage}
                                     page={page}
                                     onChangePage={handleChangePage}
                                     onChangeRowsPerPage={handleChangeRowsPerPage}/>
                </div>
            </Paper>
        </div>
    );
};