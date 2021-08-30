
import React, { useState } from "react"
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { TextInputMask } from 'react-native-masked-text'
//import { TextInput } from 'react-native-paper';

import tblimo from '../../services/sqlite/Tblimo';
import styles from './styles';

export default function Detalhes({ navigation, route }) {

  const [imogeo, setImogeo] = useState(route.params.imogeo)
  const [imosql, setImosql] = useState(route.params.imosql)
  const [imomun, setImomun] = useState(route.params.imomun)
  const [imobai, setImobai] = useState(route.params.imobai)
  
  const id = route.params.imoid

  function editLote(imogeo,imosql, imomun, imobai) {
    tblimo.update( id, {
      imogeo: imogeo,
      imosql: imosql,
      imomun: imomun,
      imobai: imobai     
    } )
    .then( updated => console.log('Lote atualizado: '+ updated) )
    .catch( err => console.log(err) )   
    navigation.navigate("Lotes")
  }

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.label}>Geocódigo</Text>
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

      </View>


      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          editLote(imogeo,imosql, imomun, imobai)
        }}
      >
        <Text>Salvar</Text>
      </TouchableOpacity>

      
    </View>


  )
}