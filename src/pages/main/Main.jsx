import React from 'react';
import {Typography} from '@material-ui/core';
import Container from '@material-ui/core/Container';

export const Main = () => (
    <>
        <Container>
            <Typography color='primary'>IT-CHART</Typography>
            <Typography variant='subtitle1'>
                "Есть ли жизнь в IT" - таблица и графики.
            </Typography>
            <Typography variant='caption' component={'p'}>
                Данные по умолчанию - берутся из json-файла.
                Кроме этого, можно добавлять новые данные с сохранением в FireBase.
                Данные, добавляемые пользователем можно изменять и удалять.
            </Typography>
            <Typography variant='caption'>
                Число точек графика задается в параметрах пагинации. При клике на точку
                графика - вывыодятся детальные данные во всплывающей подсказке.
            </Typography>
        </Container>
    </>
);