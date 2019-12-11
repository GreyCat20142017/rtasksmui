import React from 'react';
import {Typography, Divider} from '@material-ui/core';

const AppMain = () => (
    <>
        <Typography color='primary'>IT-CHART</Typography>
        <Typography variant='caption'>IT-CHART - таблица и графики. Данные по умолчанию берутся из json-файла.
            Кроме этого можно добавлять новые данные с сохранением в LocalStorage.
            Добавляемые пользователем данные можно изменять и удалять.
        </Typography>
        <Typography variant='caption'>Число точек графика задается в параметрах пагинации. При клике на точку графика -
            вывыодятся
            детальные данные во всплывающей подсказке.
        </Typography>
        <Divider/>
        <Typography color='primary'>FIGURES</Typography>
        <Typography variant='caption'>FIGURES - просто небольшая задача с drag-and-drop и MUI</Typography>
    </>
);

export default AppMain;