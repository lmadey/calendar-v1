import { ResponsiveBar } from '@nivo/bar';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Select } from './Select';

export const BarChart = ({ lastDays, eventsTypes, lastDaysQuantity, setLastDaysQuantity }) => {

    const [analytics, setAnalyticts] = useState([]);
    const eventElements = useSelector(store => store.setEvent) 

    useEffect(() => {
      setAnalyticts( 
        lastDays.map(day => {
          return{
            text: day.text,
            ...Object.fromEntries(day.event.map(event => [event.name, event.time]))
          }
        })
      )
    },[lastDays])

    return(
        <>
        {eventElements.length === 0 &&
        <p className="bar-chart__paragraph">You don't have any activities yet. to see the statistics add an event.</p>}
        {eventElements.length > 0 && 
        <div className="bar-chart__wrapper">
            
            <Select 
            lastDaysQuantity={lastDaysQuantity}
            setLastDaysQuantity={setLastDaysQuantity}/>

            <div className="bar-chart__container">
                <div className="bar-chart" style={{ width: lastDaysQuantity * 40 + "px"}}>
                    <ResponsiveBar
                        data={analytics}
                        keys={eventsTypes.map(type => type.name)}
                        indexBy="text"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        groupMode="stacked"
                        padding={.6}
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        valueFormat={{ format: '', enabled: false }}
                        colors={eventsTypes.map(type => type.color)}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'fries'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'sandwich'
                                },
                                id: 'lines'
                            }
                        ]}
                        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0 ] ] }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Event Activity',
                            legendPosition: 'middle',
                            legendOffset: 32
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'hours',
                            legendPosition: 'middle',
                            legendOffset: -40
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                />
            </div>
        </div>
    </div>}
    </>
    )
}