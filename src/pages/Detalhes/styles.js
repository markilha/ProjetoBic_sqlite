
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f363c',
    paddingTop: 20, 
    padding :20
  }, 
  label:{
    width:"90%", 
    marginLeft: 10,  
    fontSize:12,   
    color:"#F92E6A",
  },
  input:{
   height: 30,
   margin: 5,
   borderBottomWidth: 1,
   borderBottomColor: "#F92E6A",
   padding: 5,
   color  : "#FFF",
   fontSize: 20
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
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    shadowOffset: {
        height: 10,
    }
},
menu: {
    backgroundColor: '#00213B',
},
submenu: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#00213B',

}
});

export default styles