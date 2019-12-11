import React, {useState} from 'react';
import {Tabs, Tab, Typography} from '@material-ui/core';

import ItChart from './components/ItChart';
import ItTable from './components/ItTable';
import ItLSTable from './components/ItLsTable';

const TabContent = ({index, data, lsData}) => {
    const minY = index === 3 ? Math.min(...data.map(item => item['resume'])) : 0;
    switch (index) {
        case  0:
            return <ItLSTable data={lsData}/>;
        case  1:
            return <ItTable data={data}/>;
        case  2:
            return <ItChart data={data} columns={['total', 'remote']} chartTitle={'График по количеству вакансий'}/>;
        case  3:
            return <ItChart data={data} columns={['resume']} minY={minY} chartTitle={'График по количеству резюме'}/>;
        default:
    }
    return <Typography color='primary' variant='caption'>Нет данных</Typography>;
};

const AppIt = ({data, lsData}) => {
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
                <Tab label="Таблица по умолчанию"/>
                <Tab label="Вакансии"/>
                <Tab label="Резюме"/>
            </Tabs>
            <TabContent index={activeTab} data={[...data, ...lsData]} lsData={lsData}/>
        </>
    );
};

export default AppIt;