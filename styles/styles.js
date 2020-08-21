import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainBody: {
    backgroundColor: '#fffcf2',
    minHeight: "100%"
  },
  nav: {
    width: '100%',
  },
  body: {
    backgroundColor: '#fffcf2',
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
  bar: {
    backgroundColor: '#3e517a',
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
    backgroundColor: '#3e517a6c',
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
    color: '#fffcf2',
  },
  container: {
    flex: 1,
    backgroundColor: '#fffcf2',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24
  },
  button: {
    paddingVertical: 10,
    width: '100%',
    backgroundColor: '#3e517a6c',
    borderBottomWidth: 1,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  centre: {
    textAlign: "center",
    fontSize: 30,
    textTransform: "capitalize",
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
    width: 100,
    backgroundColor: 'green'

  }
});

export default styles;