import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f363c',
    paddingTop: 20,  
    padding:15
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
  buttonNew:{
    width: 60,
    height: 60,
    
    position: 'absolute',   
    bottom:30,        
    backgroundColor: '#F92e6a',
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center'    
  }  
});


export default styles