import {CHART_COLORS} from './chartconstants';

// const isDigit = (str) => (str.match(/[0-9]/));
//
// const getDark = (colors) => (colors.map(color =>
//         (color.substring(0, color.lastIndexOf(',')) + ', 1)'))
// );

export const transformToChartData = (sourceData) => {
    return ({
        type: 'line',
        data: sourceData,
        options: {
            maintainAspectRatio: true,
            scales: {
                yAxes: [{
                    ticks: {beginAtZero: true}
                }]
            }
        }
    });
};

export const dayMonth = (strDate) => {
    const dateArray = strDate.split('-');
    return dateArray.length === 3 ? dateArray[2] + '.' + dateArray[1] + '.' + dateArray[0] : ''
};

export const getPreparedData = (data) => {

    const datasets = [
        {
            label: 'Всего',
            data: data.map(row => row.total),
            opacity: 0.5,
            backgroundColor: CHART_COLORS[0]
        },
        {
            label: 'Удаленка',
            data: data.map(row => row.remote),
            backgroundColor: CHART_COLORS[1]
        }
    ];

    const chartData = {
        labels: data.map(row => [dayMonth(row.date) + ':',  row.resume , 'резюме']),
        datasets: datasets
    };

    return ({
        data: chartData,
        type: 'line',
        options: {
            maintainAspectRatio: true,
            pointHoverRadius: 10,
            scales: {
                yAxes: [{
                    ticks: {beginAtZero: true}
                }]
            }
        }
    });
};

export const NF = new Intl.NumberFormat('ru-RU');