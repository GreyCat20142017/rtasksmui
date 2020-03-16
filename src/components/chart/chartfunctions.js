import {CHART_COLORS} from './chartconstants';
import {DICTIONARY, FILTER_ALL, LABELS_LIMIT} from '../../constants';
import {MDB_COLOR} from '../../theme';
import {isValidIndex} from '../../functions';

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
            (row, ind) =>
                ((ind === 0) || (ind === (data.length - 1))) ? [dayMonth(row.date) + ':', row.resume, 'резюме'] : '') : '',
        datasets: datasets
    };

    return ({
        data: chartData,
        type: 'line',
        options: getChartOptions(minY)
    });
};

export const NF = new Intl.NumberFormat('ru-RU');

export const getLabelIndexes = (data) => {
    const limitFactor = data.length > LABELS_LIMIT ? Math.ceil(data.length / 3) : 1;
    const result = (limitFactor === 1) ? null :
        [...data.map((item, ind) => (ind % limitFactor === 0) ? ind : -1).filter(item => (item !== -1)),
            data.length - 1
        ];
    return result;
};

export const getFormattedMonth = (yearMonth, withDay = false) => {
    const options =  withDay ? {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    } : {
        year: 'numeric',
        month: 'long'
    };

    const result = new Date(yearMonth + (withDay ? '' : '-01')).toLocaleString('ru', options);
    return result.replace(' г.', '');
};

export const getMonths = (data) => {
    const months = data.reduce((res, item) => {
        const month = item['date'].slice(0, 7);
        if (!res[month]) {
            res[month] = month;
        }
        return res
    }, {});
    return [FILTER_ALL, ...Object.keys(months).map(key => months[key])]
};

export const getSlicedData = (data, [first, last], filter = FILTER_ALL) => (filter === FILTER_ALL ?
        (isValidIndex(first - 1, data) && isValidIndex(last - 1, data) ?
            data.slice(first - 1, last) : [...data]) :
        data.filter(item => item['date'].slice(0, 7) === filter)
);

export const getComment = (data, [first, last], filter) => (
    (filter === FILTER_ALL ?
        isValidIndex(first - 1, data) && isValidIndex(last - 1, data) ?
            `Выбрано: период с ${data[first - 1]['date']} по ${data[last - 1]['date']}. Количество точек: ${last - first + 1}` :
            '' :
        `Выбрано: ${getFormattedMonth(filter)}. Количество точек: ` + data.filter(item => item['date'].slice(0, 7) === filter).length)
);
