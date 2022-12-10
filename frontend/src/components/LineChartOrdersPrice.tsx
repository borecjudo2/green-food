import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Orders sum price($) per month',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , "August" , "September", "October", "November", "December"];

export const data = {
    labels,
    datasets: [
        {
            label: 'Orders sum price($)',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};

export function LineChartOrdersPrice() {
    return <Line options={options} data={data} />;
}
