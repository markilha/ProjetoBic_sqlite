import { StyleSheet } from 'react-native'

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242425',
    },
    input: {
      flex: 1,
      height: 50,
      backgroundColor: '#363636',
      margin: 30,
      borderRadius: 5,
      fontSize: 19,
      paddingLeft: 15,
      paddingRight: 15,
      color: '#FFFFFF',
    },
    searchArea: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    orderButton: {
      width: 32,
      marginRight: 30,
    },
    list: {
      flex: 1,
    },
    buttonNewTask: {
      width: 60,
      height: 60,
      position: "absolute",
      bottom: 30,
      right: 20,
      backgroundColor: "#F92e6a",
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center"
    },
    iconButton: {
      color: "#ffffff",
      fontSize: 25,
      fontWeight: "bold",
    },
  });
  
export default styles

