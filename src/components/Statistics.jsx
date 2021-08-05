import React from "react";
import { Bar } from 'react-chartjs-2';
export const Statistics = ({ lastDays, eventElements, days }) => {
    return(
        <div className="stat-container">
            <Bar 
            data={{
                labels: lastDays.map((day) => day.text),
                datasets: [{
                    label: lastDays.map(day => day.event.text),
                    data: lastDays.map((day) => day.event.reduce((acc, cur) => acc + cur.time, 0)),
                    // data: lastDays.filter(item => item.event).map((day) => day.event.time),
                    backgroundColor: [
                        'rgb(240, 22, 84)',
                        'rgb(21, 221, 235)',
                        'rgb(247, 230, 0)',
                        'rgb(0, 253, 97)',
                        'rgb(247, 151, 26)',
                        'rgb(4, 71, 255)'
                    ]
                }]
            }}
                height={400}
                width={600}
            />
        </div>    
    )
}