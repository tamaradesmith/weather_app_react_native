import { StyleSheet } from 'react-native';

const main = '#3e517a';
const shadow = '#3e517a6c'
const secondary = '#fffcf2';


const styles = StyleSheet.create({
  mainBody: {
    backgroundColor: secondary,
    minHeight: "100%"
  },
  nav: {
    width: '100%',
  },
  body: {
    backgroundColor: secondary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    marginBottom: 50,
  },
  textStyle: {
    fontSize: 30,
    textTransform: "capitalize",
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: "capitalize",
  },
  homeHeader: {
    fontSize: 40,
    color: main,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: "capitalize",
  },
  bar: {
    backgroundColor: main,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    fontSize: 30,
  },
  text: {
    textAlign: 'right'
  },
  menu: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    display: "flex",
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: shadow,
  },
  menuItem: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    width: "100%"
  },
  navBarText: {
    fontSize: 20,
    color: secondary,
  },
  container: {
    flex: 1,
    backgroundColor: secondary,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24
  },
  button: {
    paddingVertical: 10,
    width: '100%',
    backgroundColor: shadow,
    borderBottomWidth: 1,
    alignSelf: "center",
  },
  buttonText: {
    color: secondary,
    textAlign: 'center',
    fontSize: 18,
  },
  centre: {
    textAlign: "center",
    fontSize: 30,
    textTransform: "capitalize",
    marginVertical: 10,
  },
  userText: {
    textAlign: "center",
    fontSize: 30,
    color: main,
    textTransform: "capitalize",
    marginVertical: 8,
  },
  textField: {
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    width: '75%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  labelField: {
    fontSize: 24,
    textTransform: "capitalize",
    alignSelf: 'center',
  },
  buttonSubmit: {
    paddingVertical: 10,
    marginTop: 15,
    width: '70%',
    backgroundColor: main,
    borderBottomWidth: 1,
    alignSelf: "center",
  },
  error: {
    color: 'red',
    fontSize: 24,
    textAlign:'center',
  }
});

export default styles;