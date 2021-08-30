import React, { useState, useRef } from "react";
import {View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { TextInputMask } from 'react-native-masked-text'
import tbldp from '../../services/sqlite/Tbldp'



export default function NovoProprietario({ navigation, route }) {

  const [dpnome, setDpnome] = useState(null);
  const [dpcpf, setDpcpf] = useState(null);
  const cpfRef = useRef(null);
  const imogeo = route.params.imogeo;

  function verificaCpf() {
    const unmask = cpfRef?.current.getRawValue();
    const cpfIsValid = cpfRef?.current.isValid();

    if (cpfIsValid === false) {
      alert('CPF é Inválido!!');
      return false;
    }
  }

  function addProp() {
    if (verificaCpf() === false) {
      return
    }
    tbldp.insert( {
      dpgeo: imogeo,
      dpcpf: dpcpf,
      dpnome: dpnome      
    })
    .then( id => console.log('Proprietário inserido com o dpid: '+ id) )
    .catch( err => console.log(err) )
    navigation.navigate("Lotes");
  }

  return (
    <View style={styles.container}>
      <View style={{padding:5}}>

      <Text style={styles.label}>Geocódigo:</Text>
        <TextInput        
          style={styles.input}
          value={imogeo}
          editable = {false}
        />  
        
        <Text style={styles.label}>CPF:</Text>
        <TextInputMask 
          style={styles.input}
          type={'cpf'}
          value={dpcpf}
          onChangeText={text => setDpcpf(text)}
          ref={cpfRef}
        />
         <Text style={styles.label}>Nome:</Text>
        <TextInput        
          style={styles.input}
          value={dpnome}
          onChangeText={text => setDpnome(text)}
        />        
      </View>
      <TouchableOpacity
          style={styles.buttonNewTask}
          onPress={() => {
            addProp()
          }}
        >
          <Text style={styles.iconButton}>Save</Text>
        </TouchableOpacity>

    </View>
  )
}