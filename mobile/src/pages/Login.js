import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Crypto from 'expo-crypto';

import api from '../service/api';
import logo from '../../assets/logo.png';

export default function Login({navigation}) {

  const [ra, setRa] = useState("2019073849"); //defino o valor padrão
  const [pwd, setPwd] = useState("09102000");

  async function formSubmit() {

      await api.post('/user/validation',{
        ra, pwd
      })
      .then(response => {
        if(response.status === 200){
          AsyncStorage.setItem('@user', JSON.stringify(response.data)); //armazena o user na memória como uma string
          // const value = await AsyncStorage.getItem('@user'); //pega o user
          navigation.navigate('Index');
        }
      })
      .catch(error => console.log(error))
    
  }

  return (
    <SafeAreaView style= {style.container}>
      <Image source={logo}></Image>
      <View style= {style.form}>
        <Text style= {style.label}>Registro Acadêmico</Text>
        <TextInput style={style.input} 
          placeholder="Informe seu RA" 
          placeholderTextColor="#888" 
          keyboardType="numeric"
          maxLength={10}
          value={ra}
          onChangeText={setRa}
          />

        <Text style= {style.label}>Senha</Text>
        <TextInput style={style.input} 
          placeholder="Informe sua senha" 
          placeholderTextColor="#888" 
          secureTextEntry={true}
          maxLength={10}
          value={pwd}
          onChangeText={setPwd}
        />

        <TouchableOpacity onPress={formSubmit} style={style.button}>
          <Text style={style.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 80,
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 50,
    fontSize: 18
  },
  label:{
    fontSize:18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
    color: "#555"
  },
  button: {
    backgroundColor: "#3259a8",
    marginTop: 20,
    borderRadius: 10,
    textAlign: "center",
    padding: 4
  },
  textButton: {
    color: '#FFF',
    fontSize: 30,
    textAlign: "center"
  }
});