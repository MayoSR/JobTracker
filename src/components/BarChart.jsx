import React from 'react';
import { Bar } from 'react-chartjs-2';

function genRandomData() {
    let arr = []
    for (let i = 0; i < 12; i++) {
        arr.push(
            parseInt(Math.random() * 100) % 30
        )
    }
    return arr
}

const data = (props) => {
    return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: props.label,
                data: genRandomData(),
                backgroundColor: [
                    `rgba(${props.colorR}, ${props.colorG}, ${props.colorB}, 0.2)`,
                ],
                borderColor: [
                    `rgba(${props.colorR}, ${props.colorG}, ${props.colorB}, 1)`,
                ],
                borderWidth: 1,
            },
        ],
    }
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const BarChart = (props) => (

    <Bar data={() => data(props)} options={options} />
);

export default BarChart;