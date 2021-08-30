import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../service/api';

export default function Notas({navigation, route}) {
  
  const materia = route.params;
  const [user, setUser] = useState('');
  const [notas, setNotas] = useState('');

  async function getData() {
    const notas = await api.get('/nota');
    if (notas.status === 200) {
      setNotas(notas.data);
    } else {
      setNotas(notas.data);
      alert(notas.data.message); 
    }
  }

  useEffect(() => {
    if (!notas) {
      getData();
    }
    AsyncStorage.getItem('@user').then(user => {
      if (!user) {
        navigation.navigate('Login');
      } else {
        setUser(JSON.parse(user));
      }
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>NOTAS</Text>
      </View>
      <View>
        <Text>
        {
          notas &&
          notas.map((data) => {
            if (data.subject === materia.materia) {
              return <Text key={data._id}>{data.period} - {data.result}</Text>
            }
          })
        }
        </Text>
      </View>
    </SafeAreaView>  
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