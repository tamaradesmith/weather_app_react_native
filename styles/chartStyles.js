import { StyleSheet } from 'react-native';

const main = '#3e517a';
const shadow = '#3e517a6c'
const secondary = '#fffcf2';

const chartStyles = StyleSheet.create({

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
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: main,
    borderColor: main,
    
  },

  inactive: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: shadow,
    borderColor: main,
  },
  buttonText: {
    textTransform: "capitalize",
    color: secondary,
  }



});

export default chartStyles;