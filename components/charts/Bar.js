import React, { useState, useEffect } from 'react';

import { View, Text, Dimensions } from 'react-native'
import { BarChart } from 'react-native-chart-kit';

import { format } from 'date-fns';


function Bar(props) {

  const { sensor, data } = props
  console.log("Bar -> data", data);

  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);


  function formateData() {
    const labels = [];
    const result = [];
    // const skip = []
    data.forEach((reading, index) => {
      if (reading.sum === null) {
        // skip.push(index)
        reading.sum = 0
      }
      result.push(parseFloat(reading.sum));
      console.log("formateData Bar -> result", result);
      labels.push(format(new Date(reading.time), "ha"));
    });
    const datas = {
      labels: labels,
      datasets: [
        {
          
          data: result,
          // hidePointsAtIndex: skip,
        }
      ],
      barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
    };
    setDataset(datas);
    setTimeout(() => {

      setLoading(false);
    }, 150);
  };

  useEffect(() => {
    if (data !== null || data !== undefined) {
      formateData();
    };
  }, [data]);

  if (loading) {
    return (
      <Text> loading</Text>
    )
  } else {

    return (

      <View>
        <BarChart
          data={dataset}
          width={(Dimensions.get('window').width) - 5}
          height={400}
          verticalLabelRotation={90}
          fromZero={true}
          showValuesOnTopOfBars={true}
          showBarTops={false}
          chartConfig={{
            backgroundGradientFrom: '#fffcf2',
            backgroundGradientTo: '#fffcf2',
            fillShadowGradient: '#3e517a',
            fillShadowGradientOpacity: 1,
            barPercentage: .3,
            decimalPlaces: 1,
            color: (opacity = 1) => `black`,
            style: {
              padding: 1,
              margin: 0,
            }
          }}
        />
      </View>
    );
  }
};

export default Bar