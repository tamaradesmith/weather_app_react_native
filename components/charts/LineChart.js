import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import * as d3 from "d3";
import { Svg, G, Line, Rect } from 'react-native-svg'

// import { format } from 'date-fns';

function LineChart(props) {
  const { sensor, data } = props

  const margin = { top: 20, right: 20, bottom: 10, left: 50 },
    svgWidth = 400,
    svgHeight = 400,
    width = svgWidth - margin.left - margin.right,
    height = svgHeight - margin.top - margin.bottom;

  const format = d3.timeFormat("  %I %p")
  
  // X Axis
  const xDomain = data.map(item => item.time);
  const xRange = [0, width];

  const x = d3.scalePoint()
    .domain(xDomain)
    .range(xRange)
    .padding(1);

  // Y Axis

  const yDomain = [0, d3.max(data, d => d.value)];
  const yRange = [0, height]

  const y = d3.scaleLinear()
    .domain(yDomain)
    .range(yRange);

  return (
    <View>

      <ScrollView>


        <Svg width={svgWidth} height={svgHeight} style={{ backgroundColor: "grey" }}>

          <G y={height}>

            <Line
              x1={0}
              x2={width}
              y1='2'
              y2='2'
              stroke="purple"
              strokeWidth="0.5"
            />

            {data.map(item => (
              <Rect
                key={'bar' + item.time}
                x={x(item.time) - (5 / 2)}
                y={y(item.value) * -1}
                width={5}
                height={y(item.value)}
                fill='blue'
              />
            ))}

            {/* labels */}<View style={{display: 'flex', flexDirection: 'row'}}>

            {data.map(item => (
              <Text
                key={'label' + item.time}
                fontSize="8"
                x={x(format(new Date(item.time)))}
                y={height}
                textAnchor="middle">
                {format(new Date(item.time))}
              </Text>
            ))}
            </View>

          </G>

        </Svg>
      </ScrollView>
    </View>
  );
};

export default LineChart;