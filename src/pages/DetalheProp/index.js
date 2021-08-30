import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { EdgeInsetsPropType } from 'react-native';
import { View, Text, TextInput } from 'react-native';
import styles from '../DetalheProp/styles';
import tbldp from '../../services/sqlite/Tbldp'



export default function DetalheProp({ navigation, route }) {
  const [dpgeo, setdpgeo] = useState(route.params.dpgeo);
  const [dpcpf, setDepcpf] = useState(route.params.dpcpf);
  const [dpnome, setDepnome] = useState(route.params.dpnome);
  const dpid = route.params.dpid;

  function editProp(dpcpf, dpnome) {
    tbldp.update( dpid, {
      dpcpf: dpcpf,
      dpnome: dpnome       
    } )
    .then( updated => console.log('Proprietário atualizado: '+ updated) )
    .catch( err => console.log(err) )  
    navigation.navigate("Lista de Proprietários")
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Geocódigo</Text>
      <TextInput
        style={styles.input}
        value={dpgeo}
        onChangeText={text => setdpgeo(text)}
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        value={dpcpf}
        onChangeText={text => setDepcpf(text)}
      />

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={dpnome}
        onChangeText={text => setDepnome(text)}
      />
        <View style={{top:350, left:280,padding:20 }}>
        <TouchableOpacity
          style={styles.buttonNew}
          onPress={() => {
            editProp(dpcpf, dpnome)
          }}
        >
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>   


    </View>


  );
}