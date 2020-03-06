import React, {useContext, useState} from 'react';
import {Tabs, Tab, Typography} from '@material-ui/core';

import ItChart from '../../components/chart/ItChart';
import ItTable from '../../components/table/ItTable';
import ItLSTable from '../../components/table/ItLsTable';

import {defaultData} from './it';
import {DataContext} from '../../contexts/data/DataContext';

const TabContent = ({index, data}) => {
    const minY = index === 3 ? Math.min(...data.map(item => item['resume'])) : 0;
    switch (index) {
        case  0:
            return <ItLSTable/>;
        case  1:
            return <ItTable data={data}/>;
        case  2:
            return <ItChart data={data} columns={['total', 'remote']} chartTitle={'График по количеству вакансий'}/>;
        case  3:
            return <ItChart data={data} columns={['resume']} minY={minY} chartTitle={'График по количеству резюме'}/>;
        case  4:
            return <Typography>Печальная правда</Typography>
        default:
    }
    return <Typography color='primary' variant='caption'>Нет данных</Typography>;
};

export const IT = () => {
    const [activeTab, setActiveTab] = useState(0);
    const {dbData} = useContext(DataContext);
    const onTabChange = (evt, newActive) => {
        setActiveTab(newActive);
    };
    return (
        <>
            <Tabs
                value={activeTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={onTabChange}
            >
                <Tab label="Изменение данных"/>
                <Tab label="Таблица"/>
                <Tab label="Вакансии"/>
                <Tab label="Резюме"/>
                <Tab label="Итоги"/>
            </Tabs>
            <TabContent index={activeTab} data={[...defaultData, ...dbData]} dbData={dbData}/>
        </>
    );
};