import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import ListItem from "../components/ListItem";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements';

import avatar from "../../assets/avatar.jpeg";
import api from '../service/api';

export default function Index({ navigation }) {

  const [user, setUser] = useState('');
  const [materias, setMaterias] = useState('');

  async function listaMaterias() {
    const materias = await api.get('/materia');
    if(materias.status == 200) {
      setMaterias(materias.data);
    } else {
      let msgError = response.data;
      console.log(msgError.mensagem);
    }
  }

  useEffect(() => {
    if(!materias) {
      listaMaterias()
    }
    AsyncStorage.getItem('@user').then(user => {
      user = JSON.parse(user);
      if(!user) {
        navigation.navigate("Login");
      } else {
        setUser(user);
      }
    })
  })

  function notas(materiaid) {
    navigation.navigate('Notas', {
      materia: materiaid
    });
  }

  function faltas(materiaid) {
    navigation.navigate('Faltas', {
      materia: materiaid
    });
  }

  function logoff() {
    AsyncStorage.removeItem('@user');
    navigation.navigate("Login")
  }

  function settings() {
    navigation.navigate("Usuario")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={avatar} style={[styles.avatar]}></Image>
        </View>
        <View>
          <Text style={styles.name}>Leonardo Conrrado Jorge</Text>
          <Text style={styles.text}>Matrícula: {user.ra}</Text>
          <Text style={styles.text}>leonardo3849@edu.faccar.com.br</Text>
        </View>
        <View style={styles.areaLogout}>
          <Icon onPress={logoff} style={styles.logout} name='logout' />
          <Icon onPress={settings} style={styles.config} name='cog' type='font-awesome' />  
        </View>
      </View>
      <View style={styles.list}>
        <FlatList 
          style={styles.listItens}
          data = {materias}
          keyExtractor = {item => item._id}
          renderItem = {
            ({item}) => (
              <ListItem
                data = {item}
                handleLeft = { () => { notas(item._id) }}
                handleRight = { () => { faltas(item._id) }}
              />
            )
          }
          ItemSeparatorComponent = {() => <Separator/>}
        />
        </View>
    </View>
  );
}

const Separator = () => <View style={{flex: 1, height: 2, backgroundColor:'#ddd', }}></View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    paddingVertical: 10,
    marginLeft: 10,
    width: "100%",
    alignItems: "center"
  },
  name: {
    fontSize: 20,
    flexDirection: "row"
  },
  text: {
    fontSize: 12,
    color: "#000"
  },
  areaLogout: {
    width: 80,
    height: 50,
    marginTop: 10,
  },
  logout: {
    paddingBottom: 10
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
    marginLeft: 20
  },
  listItens: {
    marginTop: 20
  },
  list: {
    width: '100%',
  }
});
