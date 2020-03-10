import React, {useRef, useEffect} from 'react';
import {Chart} from 'chart.js';

import {Typography, Divider} from '@material-ui/core';

import {CHART_CANVAS} from './chartconstants';
import {getChartOptions} from './chartfunctions';

Chart.defaults.global.animation.duration = 555;

const MUILineChart = ({chart, setChart, data = [], chartTitle, chartFooter, onLegendClick, minY = 0}) => {
        const canvas = useRef(null);

        useEffect(() => {

            const drawChart = () => {
                if (!chart) {
                    const ctx = canvas.current.getContext('2d');
                    setChart(new Chart(ctx, data));
                }
            };

            drawChart();
        }, [chart, setChart, data]);

        useEffect(() => {
            if (chart) {
                chart.data.labels = [...data.data.labels];
                chart.data.datasets = [...data.data.datasets];
                chart.options= getChartOptions(minY);
                chart.update();
            }
        }, [chart, data, minY, setChart]);


        useEffect(() => {

            const onPointClick = (evt, item) => {
                if (item && item.length >= 0 && item[0]) {
                    onLegendClick(parseInt(item[0]['_index'], 10));
                }
            };

            if (chart && !chart.options['onClick']) {
                chart.options['onClick'] = onPointClick;
            }

        }, [onLegendClick, chart]);

        return (
            <>
                <Typography variant={'h6'}>{chartTitle}</Typography>
                <canvas ref={canvas} id={CHART_CANVAS.id} width={CHART_CANVAS.width} height={CHART_CANVAS.height}></canvas>
                <Divider/>
                <Typography>{chartFooter}</Typography>
            </>
        );
    }
;

export default MUILineChart;