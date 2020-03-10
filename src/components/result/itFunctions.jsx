export const defaultByMonth = {
    points: 0,
    minTotal: 0,
    maxTotal: 0,
    minResume: 0,
    maxResume: 0,
    firstDate: {date: '', total: 0, resume: 0},
    lastDate: {date: '', total: 0, resume: 0}
};
export const calculatedColumns = ['month', 'days', 'resumeByDay', 'resumeByPeriod'];
const getMin = (prev, next, emptyValue = 0) => ((prev !== emptyValue) && (prev < next) ? prev : next);
const getMax = (prev, next) => ((prev > next) ? prev : next);
const getAverage = (days, objMonth) => (days === 0 ? 0 : Math.floor((objMonth['lastDate']['resume'] - objMonth['firstDate']['resume']) / days));
const getTransformedMonth = (objMonth) => {
    const result = {};
    const days = (new Date(objMonth['lastDate']['date']) - new Date(objMonth['firstDate']['date'])) / 3600 / 1000 / 24;
    Object.keys(objMonth).filter(key => ((key !== 'firstDate') && (key !== 'lastDate'))).forEach(
        item => result[item] = objMonth[item]
    );
    result['firstDate'] = objMonth['firstDate']['date'].slice(-2);
    result['lastDate'] = objMonth['lastDate']['date'].slice(-2);
    result['days'] = days;
    result['resumeByDay'] = getAverage(days, objMonth);
    result['resumeByPeriod'] = (objMonth['lastDate']['resume'] - objMonth['firstDate']['resume']);
    return result;
}
export const getTotalData = (data) => {

    const byMonthInfo = data.reduce((res, item) => {
        const month = item['date'].slice(0, 7);
        res[month] = res[month] ? {...res[month]} : {...defaultByMonth};
        res[month]['points'] = res[month]['points'] + 1;
        res[month]['maxTotal'] = getMax(res[month]['maxTotal'], item['total']);
        res[month]['maxResume'] = getMax(res[month]['maxResume'], item['resume']);
        res[month]['minTotal'] = getMin([month]['minTotal'], item['total']);
        res[month]['minResume'] = getMin(res[month]['minResume'], item['resume']);
        if (item['date'] === getMin(res[month]['firstDate']['date'], item['date'], '')) {
            res[month]['firstDate'] = {date: item['date'], total: item['total'], resume: item['resume']}
        }
        if (item['date'] === getMax(res[month]['lastDate']['date'], item['date'], '')) {
            res[month]['lastDate'] = {date: item['date'], total: item['total'], resume: item['resume']}
        }
        return res;
    }, {});

    const result = Object.keys(byMonthInfo)
        .map(month => ({
            month: month,
            ...getTransformedMonth(byMonthInfo[month])
        }));
    return result;
};