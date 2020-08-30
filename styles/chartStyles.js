import { StyleSheet } from 'react-native';

const main = '#3e517a';
const shadow = '#3e517a6c'
const secondary = '#fffcf2';

const chartStyles = StyleSheet.create({
  header:{
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    flex: 1,
    textAlign: 'center',
    textTransform: "capitalize",
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'flex-end',
    // borderWidth: 1,
  },
  active: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: main,
    borderColor: main,
    maxHeight: 45,
  },

  inactive: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: shadow,
    borderColor: main,
    maxHeight: 45,
  },
  buttonText: {
    textTransform: "capitalize",
    color: secondary,
  },
  periodDiv: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 5,
    // borderWidth: 1,
  },
  periodButtonActive: {
    backgroundColor: main,
    padding: 5,
  },
  periodButton: {
    backgroundColor: shadow,
    padding: 5,

  },


});

export default chartStyles;