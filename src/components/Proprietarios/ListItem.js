import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native';
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import tbldp from '../../services/sqlite/Tbldp'


function deleteProp(id) {
  Alert.alert('Excluir Proprietário', 'Deseja excluir o Proprietátio?', [
    {
      text: 'Sim',
      onPress() {
        tbldp.remove(id)
        .then( updated => console.log('Proprietario removido: '+ updated) )
        .catch( err => console.log(err) )
      }
    },
    {
      text: 'Não'
    }
  ])
}

const ListItem = ({ data, navigation }) => {
  return (
    <TouchableOpacity style={styles.item}
      onPress={() =>
        navigation.navigate("Detalhe proprietáro", {
          dpgeo: data.dpgeo,
          dpid: data.dpid,
          dpcpf: data.dpcpf,
          dpnome: data.dpnome,
        })
      }
    >
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.dpcpf} - {data.dpgeo}</Text>
        <Text style={styles.itemP2}>{data.dpnome}</Text>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={{ marginRight: 1, paddingTop: 20 }}
          onPress={() => {deleteProp(data.dpid)}}
        >
          <FontAwesome
            name="trash"
            size={23}
            color="#F92e6A"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
