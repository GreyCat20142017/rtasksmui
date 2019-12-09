import React, {useState} from 'react';
import {Tabs, Tab, Typography} from '@material-ui/core';

import ItChart from './ItChart';
import ItTable from './ItTable';

const TabContent = ({index, data}) => {
    const minY = index === 2 ? Math.min(...data.map(item => item['resume'])) : 0;
    switch (index) {
        case  0:
            return <ItTable data={data}/>;
        case  1:
            return <ItChart data={data} columns={['total', 'remote']} chartTitle={'График по числу вакансий'}/>;
        case  2:
            return <ItChart data={data} columns={['resume']} minY={minY} chartTitle={'График по числу резюме'}/>;
        default:
    }
    return <Typography color='primary' variant='caption'>Нет данных</Typography>;
};

const AppIt = ({data}) => {
    const [activeTab, setActiveTab] = useState(0);
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
                <Tab label="Таблица"/>
                <Tab label="График (вакансии)"/>
                <Tab label="График (резюме)"/>
            </Tabs>
            <TabContent index={activeTab} data={data}/>
        </>
    );
};

export default AppIt;