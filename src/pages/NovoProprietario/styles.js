import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
 container: { 
   flex:1,
   backgroundColor: '#2f363c',
   padding: 5,
 },
 label:{
   width:"90%", 
   marginLeft: 10,  
   fontSize:12,   
   color:"#F92E6A",
 },
 input:{
  height: 35,
  margin: 5,
  borderBottomWidth: 1,
  borderBottomColor: "#F92E6A",
  padding: 5,
  color  : "#FFF"
 },
 buttonNewTask:{
  width:60,
  height:60,
  position:"absolute",
  bottom: 30,  
  right: 20,
  backgroundColor:"#F92e6a",
  borderRadius:50,
  justifyContent:"center",
  alignItems: "center"
 },
 iconButton:{
  color:"#ffffff",
  fontSize:16,
  fontWeight:"bold",
 }

//  width:"90%",
//  marginTop:10,
//  padding:10,
//  height:50,
//  borderBottomWidth: 1,
//  borderBottomColor:"#F92E6A",
//  marginLeft:"auto",
//  marginRight:"auto"
 
});
 
export default styles