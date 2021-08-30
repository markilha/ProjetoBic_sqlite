import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { EdgeInsetsPropType } from 'react-native';
import { View, Text, TextInput } from 'react-native';
import database from "../../config/firebase";
import styles from '../DetalheProp/styles';
//import { TextInput } from 'react-native-paper';


export default function DetalheProp({ navigation, route }) {
  const [dpcpf, setDepcpf] = useState(route.params.dpcpf);
  const [dpnome, setDepnome] = useState(route.params.dpnome);
  const id = route.params.id;

  function editProp(dpcpf, dpnome) {
    database.collection('tbldp').doc(id).update({
      dpcpf: dpcpf,
      dpnome: dpnome
    });
    navigation.navigate("Lista de Proprietários")
  }


  return (
    <View style={styles.container}>

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