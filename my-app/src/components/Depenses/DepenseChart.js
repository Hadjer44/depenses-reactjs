import React from 'react';
import Chart from '../Chart/Chart';

//pour envoyer le graphique
const DepenseChart =(props) => {
    
    const chartDataPoint=[
        {label : 'jan', value: 0},
        {label : 'fev', value: 0},
        {label : 'mar', value: 0},
        {label : 'avr', value: 0},
        {label : 'mai', value: 0},
        {label : 'juin', value: 0},
        {label : 'juil', value: 0},
        {label : 'aout', value: 0},
        {label : 'sept', value: 0},
        {label : 'oct', value: 0},
        {label : 'nov', value: 0},
        {label : 'dec', value: 0},
    ];

    for(const depense of props.depenses){
        const depenseMois = depense.date.getMonth();
        chartDataPoint[depenseMois].value += depense.amount
    }
   
    return <Chart DataPoints={chartDataPoint} />
}

export default DepenseChart;