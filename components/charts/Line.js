import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit'

import { format } from 'date-fns';

function Line(props) {
  const { sensor, data, period } = props
  // console.log("Line -> data", data);

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
    // console.log("line formateData ", data)
    const labels = [];
    const result = [];
    data.forEach((reading) => {
      if (reading.value === null) {
        reading.value = 0
      }
      result.push(parseFloat(reading.value));
      labels.push(getLabelFormate(reading.time));
    });
      const datas = {
        labels: labels,
        datasets: [
          {
            stroleWidth: 2,
            data: result,
          }
        ]
      };
      return datas
  };

  useEffect(() => {
    setLoading(true);
    let isCancelled = false;
    const getData = () => {
      try {
        const dataInfo = formateData();
        // console.log("getData -> data", dataInfo);
        if (!isCancelled) {
          setDataset(dataInfo)
          setTimeout(() => {
            setLoading(false);
          }, 150);
        }
      } catch (error) {
        console.error("chart formate data: ", error.message);
      }
    };
    if (data !== null || data !== undefined) {
      getData()
    };
    return () => {
      isCancelled = true;
    };
  }, [data]);

  // useEffect(()=> {
  //   console.log("dataa eefect ", data)
  // })

  if (loading) {
    return (<Text> Loading </Text>)
  }
  return (
    <View>

      <LineChart
        data={dataset}
        width={(Dimensions.get('window').width) - 5}
        height={400}
        withOuterLines={true}
        withShadow={false}
        xAxisInterval={'3'}
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
  );
};

export default Line