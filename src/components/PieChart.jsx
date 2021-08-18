import { ResponsivePie } from "@nivo/pie"
import React,{ useState, useEffect } from "react"
import { useSelector } from "react-redux";


export const PieChart = () => {
    
    const [updateAllEvents, setupdateAllEvents] = useState([]);
    const eventElements = useSelector(store => store.setEvent);
    console.log(eventElements);
    
    let holderColor = {}
    let holder = {};
    useEffect(() => {
    
        eventElements.forEach(function(item) {
          if (holder.hasOwnProperty(item.name)) {
            holder[item.name] = holder[item.name] + item.time;
          } else {
            holder[item.name] = item.time;
            holderColor[item.name] = item.color
          }
          
        });
        console.log(holder);
        let updateArr = [];
        
        for (let name in holder) {
          updateArr.push({ name: name, value: holder[name], color: holderColor[name] });
        }
        
        setupdateAllEvents(updateArr)
    },[eventElements])


    return(
        <div className="pie-chart">
        <ResponsivePie
        data={
            updateAllEvents.map(event => {
                return{
                    "id": event.name,
                    "label": event.name,
                    "value": event.value,
                    "color": event.color
                  }
            })
        }
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={updateAllEvents.map(event => event.color)}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={
            updateAllEvents.map(event => {
                return{
                    match: {
                        id: event.name
                    },
                    id: 'clean'
                }
            })
        }
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    </div>
    )
}