import { StyleSheet } from 'react-native';

const chartStyles = StyleSheet.create({
  //   mainBody: {
  //     backgroundColor: '#fffcf2',
  //     minHeight: "100%"
  //   },
  //   nav: {
  //     width: '100%',
  //   },
  //   body: {
  //     backgroundColor: '#fffcf2',
  //     display: 'flex',
  //     flexDirection: 'row',
  //     justifyContent: 'space-around',
  //     padding: 5,
  //     marginBottom: 50,
  //   },
  //   textStyle: {
  //     fontSize: 30,
  //     textTransform: "capitalize",
  //   },
  //   header: {
  //     fontSize: 40,
  //     fontWeight: '700',
  //     marginBottom: 10,
  //     textAlign: 'center',
  //     textTransform: "capitalize",
  //   },
  //   bar: {
  //     backgroundColor: '#3e517a',
  //     display: "flex",
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     padding: 10,
  //     fontSize: 30,
  //   },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'flex-end',
  },
  active: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    
    backgroundColor: 'green',
  },

  inactive: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    backgroundColor: 'red'
  },
buttonText: {
  textTransform: "capitalize",

}



});

export default chartStyles;