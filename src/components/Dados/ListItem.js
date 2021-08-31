import React from 'react';
import { StyleSheet,View,Text} from 'react-native';


const ListItem = ({data}) => { 
  return (      
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.apelido}</Text> 
        <Text style={styles.itemP2}>{data.nome}</Text> 
      </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingTop: 15,
    paddingBottom: 15,
  },
  itemPhoto: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  itemInfo: {
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 5
  },
  itemP2: {
    fontSize: 18,
    color: '#999999',
  },
  botoes: {
    flexDirection: 'row',
    paddingLeft: 20,
    padding: 10,
    position: 'absolute',
    right: 5
  },
});

export default ListItem;
