import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import ListItem from '../../components/Proprietarios/ListItem';
import tbldp from '../../services/sqlite/Tbldp'



export default function Proprietarios({navigation}) {
  const [dados, setDados] = useState([]);
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
   // tbldp.removeTab().then(console.log("tabela excluida com sucesso"))
   
    if (searchText == '') {
      tbldp.all().then(items => {setDados(items), setList(items)}) 
    } else {
      setList(dados.filter(item => (item.dpnome.toLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1)));
    }
  }, [dados,searchText]);

  const handleOrderClick = () => {
    let newList = [...dados];
    newList.sort((a, b) => (a.dpnome > b.dpnome ? 1 : b.dpnome > a.dpnome ? -1 : 0));
    setList(newList);
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um proprietário"
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
    </SafeAreaView>
  
  );
}