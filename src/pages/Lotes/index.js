import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Alert } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { TextInput } from "react-native-gesture-handler";
import ListItem from '../../components/Lotes/ListItem';
import tblimo from '../../services/sqlite/Tblimo'



export default function Lotes({ navigation }) {
  const [dados, setDados] = useState([]);
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState('');   
 
  useEffect(() => {
    if (searchText == '') {
     tblimo.all().then(items => {setDados(items), setList(items)})    
    } else {
      setList(dados.filter(item => (item.imosql.toLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1)));
    }
  }, [dados,searchText]);


  const handleOrderClick = () => {
    let newList = [...dados];
    newList.sort((a, b) => (a.imosql > b.imosql ? 1 : b.imosql > a.imosql ? -1 : 0));
    setList(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um lote"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={32}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("Novo Lote")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


