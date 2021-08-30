import React, { useState, useRef } from "react";
import { Button, View, Text, TouchableOpacity, TextInput } from "react-native";
//import {TextInput } from 'react-native-paper';
import database from '../../config/firebase.js'
import styles from "./styles";
import { TextInputMask } from 'react-native-masked-text'



export default function NovoProprietario({ navigation, route }) {

  const [imoid, setImoid] = useState(route.params.id)
  const [dpnome, setDpnome] = useState(null);
  const [dpcpf, setDpcpf] = useState(null);
  const cpfRef = useRef(null);

  function verificaCpf() {
    const unmask = cpfRef?.current.getRawValue();
    const cpfIsValid = cpfRef?.current.isValid();

    if (cpfIsValid === false) {
      alert('CPF é Inválido!!');
      return false;
    }
  }
  function addLote() {
    if (verificaCpf() === false) {
      return
    }
    database.collection('tbldp').add({
      imoid: imoid,
      dpcpf: dpcpf,
      dpnome: dpnome
    })
    navigation.navigate("Lotes");
  }

  return (
    <View style={styles.container}>
      <View style={{padding:5}}>
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
            addLote()
          }}
        >
          <Text style={styles.iconButton}>Save</Text>
        </TouchableOpacity>

    </View>
  )
}