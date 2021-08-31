import React, { useState, useEffect } from "react";
import { SafeAreaView, View,  FlatList } from "react-native";
import styles from "./style";

import { getLotes } from "../../services/getLotes";
import ListItem from '../../components/Dados/ListItem'

export default function Dados() {
  const [dados, setDados] = useState([]);

  function fetchDados(){
    getLotes()
    .then(res => setDados(res))
  }
  useEffect(() => {
    fetchDados();   
  }, [dados]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>  
      <FlatList
        data={dados}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={(item) => item.atleta_id}        
      />
      </View>     
    </SafeAreaView>
  )
}


