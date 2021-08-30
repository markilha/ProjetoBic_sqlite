import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
//import {TextInput } from 'react-native-paper';
import tblimo from '../../services/sqlite/Tblimo'
import styles from "./style";
import { TextInputMask } from 'react-native-masked-text'



export default function NovoLote({ navigation }, props) {

  const [imosql, setImosql] = useState(null);
  const [imomun, setImomun] = useState(null);
  const [imobai, setImobai] = useState(null);
  const [imoend, setImoend] = useState(null);
  const [imonum, setImonum] = useState(null);
  const [imogeo, setImogeo] = useState(null);

  function addLote() {
    tblimo.insert( {
      imogeo: imogeo,
      imosql: imosql,
      imomun: imomun,
      imobai: imobai,
      imoend: imoend,
      imonum: imonum
    })
    .then( id => console.log('Lote inserido com o imoid: '+ id) )
    .catch( err => console.log(err) )

    navigation.navigate("Lotes");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.label}>Imogeo</Text>
      <TextInput
        style={styles.input}
        value={imogeo}
        onChangeText={text => setImogeo(text)}
      />

      <Text style={styles.label}>Setor - Quadra - Lote</Text>
      <TextInputMask
        type={'custom'}
        style={styles.input}
        value={imosql}
        onChangeText={text => setImosql(text)}
        options={{
          mask: '***-***-*****'
        }}
      />

      <Text style={styles.label}>Município</Text>
      <TextInput
        style={styles.input}
        value={imomun}
        onChangeText={text => setImomun(text)}
      />

      <Text style={styles.label}>Bairro</Text>
      <TextInput
        style={styles.input}
        value={imobai}
        onChangeText={text => setImobai(text)}
      />

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addLote()
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>

    </View>
  )
}