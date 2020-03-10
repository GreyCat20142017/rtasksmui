import React, {useContext, useState, useMemo} from 'react';
import {Tabs, Tab, Typography} from '@material-ui/core';

import {ItChart, ItResult, ItTable, ItLSTable} from '../../components/parts';
import {DataContext} from '../../contexts/data/DataContext';
import {defaultData} from './it';

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
            return <ItResult data={data}/>
        default:
    }
    return <Typography color='primary' variant='caption'>Нет данных</Typography>;
};

const IT = () => {
    const [activeTab, setActiveTab] = useState(0);
    const {dbData} = useContext(DataContext);
    const onTabChange = (evt, newActive) => {
        setActiveTab(newActive);
    };

    const sortedData = useMemo(() => (
        [...defaultData, ...dbData].sort((a, b) => (a['date'] > b['date'] ? 1 : -1))
    ), [dbData]);

    return (
        <>
            <Tabs
                value={activeTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={onTabChange}
            >
                <Tab label="Данные"/>
                <Tab label="Таблица"/>
                <Tab label="Вакансии"/>
                <Tab label="Резюме"/>
                <Tab label="Итоги"/>
            </Tabs>
            <TabContent
                index={activeTab}
                data={sortedData}
                dbData={dbData}/>
        </>
    );
};

export default React.memo(IT);