import React, { useState, useEffect } from 'react';

import { View, Text, Dimensions } from 'react-native'
import { BarChart } from 'react-native-chart-kit';

import { format } from 'date-fns';


function Bar(props) {

  const { data, period } = props

  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);


  function getLabelFormate(date) {
    switch (parseInt(period)) {
      case 1:
        return format(new Date(date), "ha");
      case 7:
        return format(new Date(date), "iiii");
      case 30:
        return format(new Date(date), "dd");
      case 365:
        return format(new Date(date), "MMM");
      default:
        break;
    };
  };

  
  function formateData() {
    const labels = [];
    const result = [];
    data.forEach((reading) => {
      if (reading.sum === null) {
        reading.sum = 0
      }
      result.push(parseFloat(reading.sum));
      labels.push(getLabelFormate(reading.time));
    });

    const datas = {
      labels: labels,
      datasets: [
        {
          data: result,
        }
      ],
      barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
    };
    return datas
    // setDataset(datas);

  };

  useEffect(() => {
    let isCancelled = false;
    const getData = () => {
      try {
          const data = formateData();
          if (!isCancelled) {
            setDataset(data);
          }
      } catch (error) {
        console.error("chart formate data: ", error.message);
      }
    }
    if (data !== null || data !== undefined) {
      getData();
      setTimeout(() => {
        setLoading(false);
      }, 150);
    };
    return () => {
      isCancelled = true;
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