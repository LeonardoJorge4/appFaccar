import React from 'react';
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';

import api from '../service/api';

export default function Faltas({ navigation, route }) {
  
  const [user, setUser] = useState('');
    const materia = route.params;
    const [faltas, setFaltas] = useState();

    async function listaFaltas() {
      const faltas = await api.get('/falta',{
        params: {
          Materia: materia.materia,
          User: user._id
        }
      });
      if(faltas.status == 200) {
        setFaltas(faltas.data);
      } else {
        let msgError = response.data;
        console.log(msgError.mensagem);
      }
    } 

    useEffect(() => {
      if(!faltas) {
        listaFaltas()
      }
      AsyncStorage.getItem('@user').then(user => {
        if(!user){
            navigation.navigate('Login');
        } else {
          setUser(JSON.parse(user))
        }
      }) 
    })

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>FALTAS</Text>
        </View>
        <View>
          {
            faltas &&
            faltas.map((data) => {
              if (data.materias === materia.materia) {
                return <Text key={data._id}>{data.period} - {data.result}</Text>
              }
            })
          }
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    marginTop: 60,
    marginBottom: 10,
    fontSize: 30,
    flexDirection: 'row' 
  }, 
  grades: {
    fontSize: 20,
    color: '#000'
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginTop: 0
  },
  backButton: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#05509b',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15
  },
  textBackButton: {
    fontSize: 20,
    textAlign: 'center',
    color: '#05509b'
  }
});