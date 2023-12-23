import React, {useState} from 'react'
import dataa from "../assets/DATA.json"
import DataTable from 'react-data-table-component'
// import {PieChart, Pie, Tooltip, Cell} from "recharts"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

function generateRandomRgb(quant: number){
    let aux = []
    

    for(let i=0;i<quant;i=i+1){
        let x = Math.floor(Math.random()*255)
        let y = Math.floor(Math.random()*255)
        let z = Math.floor(Math.random()*255)
        aux.push('rgba('+x.toString()+','+y.toString()+','+z.toString()+',1)')
        console.log('pushing color')
        console.log(aux)
    }
    return aux
}

const Graph = () => {

    const data = {
        labels: dataa.map(
            (item) => (
                item.name + ' ' + item.surname
            )
        ),
        datasets: [
            {
            label: 'hours of work done',
            data: dataa.map(
                (item) => (
                    Number(item.participation)
                )
            ),
            backgroundColor: generateRandomRgb(Object.keys(dataa).length),
            borderColor: [
                'rgba(255, 255, 255, 0)'
            ],
            borderWidth: 0,
            },
        ],
        };
    console.log('gulugugu')
    console.log(data.labels.length)
    return (
        <><Pie data={data} /></>
    )
}
export default Graph