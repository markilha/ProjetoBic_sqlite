

import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,       
        width: '100%',       
        backgroundColor: '#2f363c',
        padding: 15 
    },
    iconContainer: { 
        marginTop: 20,     
        width: '100%',
        height: '45%'
    },
    containerButton: {  
        flexDirection: 'column',        
        alignItems: 'center', 
        alignContent: 'center', 
        width: '45%',
        height: '70%',
        borderRadius: 30,
        margin: '3%' ,      
        backgroundColor: 'orange'    
    },
    textButton: {
        marginLeft: '10%',
        marginVertical: '10%',
        marginRight: '10%',     
        fontSize: 20,                   
        fontFamily: 'HelveticaNeue'
    },
    iconWrapper: {
        width: '35%',
        height: '40%',
        backgroundColor: '#FFF',
        borderRadius: 12,
        marginLeft: '10%',
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});