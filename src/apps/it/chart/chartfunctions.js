import {CHART_COLORS} from './chartconstants';
import {DICTIONARY, LABELS_LIMIT} from '../../../constants';
import {MDB_COLOR} from '../../../theme';

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
    return dateArray.length === 3 ? dateArray[2] + '.' + dateArray[1] + '.' + dateArray[0] : '';
};

export const getTranslate = (word, dictionary = DICTIONARY) => (dictionary[word] ? dictionary[word] : word);

const getChartDatasets = (data, columns) => {
    const datasets = [];
    columns.forEach((column, ind) => {
        datasets.push(
            {
                label: getTranslate(column),
                data: data ? data.map(row => row[column]) : [],
                opacity: (ind === 0) ? 0.5 : 1,
                backgroundColor: CHART_COLORS[ind] ? CHART_COLORS[ind] : MDB_COLOR
            }
        );
    });
    return datasets;
};

export const getChartOptions = (minY) => ({
    maintainAspectRatio: true,
    pointHoverRadius: 10,
    scales: {
        yAxes: [{
            ticks: {min: minY}
        }]
    }
});

export const getPreparedData = (data, columns, minY = 0) => {

    const datasets = getChartDatasets(data, columns);

    const chartData = {
        labels: data ? data.map(
            row => data.length > LABELS_LIMIT ? '' : [dayMonth(row.date) + ':', row.resume, 'резюме']) : [],
        datasets: datasets
    };

    return ({
        data: chartData,
        type: 'line',
        options: getChartOptions(minY)
    });
};

export const NF = new Intl.NumberFormat('ru-RU');