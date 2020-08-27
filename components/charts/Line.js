import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit'

import { format } from 'date-fns';

function Line(props) {
  const { sensor, data } = props

  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);

  // const line = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  //   datasets: [
  //     {
  //       data: [20, 45, 28, 80, 99, 43],
  //       strokeWidth: 2, // optional
  //     },
  //   ],
  // }


  function formateData() {
    const labels = [];
    const result = [];
    const skip = []
    data.forEach((reading, index) => {
      if (reading.value === null) {
        skip.push(index)
        reading.value = 0
      } else {
        
      }
      // reading.value = (reading.value === null )? 0 : reading.value;
      result.push(parseFloat(reading.value));
      labels.push(format(new Date(reading.time), "ha"));
    });
    const datas = {
      labels: labels,
      datasets: [
        {
          stroleWidth: 2,
          data: result,
          hidePointsAtIndex: skip,
        }
      ]
    };
    setDataset(datas);
    console.log("formateData -> datas", datas.datasets);
    setTimeout(() => {

      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    if (data !== null || data !== undefined) {
      formateData();
    };
  }, [data]);

  if (loading) {
    return (
      <Text> Loading </Text>
    )
  } else {
    return (
      <View>
        <LineChart
          data={dataset}
          width={(Dimensions.get('window').width) - 5}
          height={400}
          // yAxisLabel={'de'}
          // yAxisInterval={1}
          //  xAxisInterval={5}
          withShadow={false}
          verticalLabelRotation={90}
          withInnerLines={false}
          withDots={false}
          yLabelsOffset={25}
          chartConfig={{
            backgroundGradientFrom: '#fffcf2',
            backgroundGradientTo: '#fffcf2',
            decimalPlaces: 0,
            color: (opacity = 1) => `#3e517a`,
            style: {
              padding: 1,
              margin: 0,
            }
          }}
          bezier
          style={{
            borderRadius: 16
          }}
        />
      </View>

      // <View>
      //   <LineChart
      //   // data={data}
      //   width={Dimensions.get('window').width}
      //   height={400}
      //   yAxisLabel = {'deg'}


      //   />
      // </View>
    );
  }
};

export default Line