import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.header}>
        <Text style={styles.title}>Kolegiji</Text>
        <Image style={styles.tinyLogo} source={require("./assets/ffos.png")} />
        </View>

        <View style={styles.kolegiji}>
          <TouchableOpacity style={styles.square}></TouchableOpacity>
          <Text style={styles.kolegij}>Upravljanje znanjem</Text>
        </View>


        <View style={styles.kolegiji}>
          <TouchableOpacity style={styles.square}></TouchableOpacity>
          <Text style={styles.kolegij}>Programiranje 3</Text>
        </View>

        <View style={styles.kolegiji}>
          <TouchableOpacity style={styles.square}></TouchableOpacity>
          <Text style={styles.kolegij}>Dizajn korisničkog sučelja</Text>
        </View>

       
      

      <Button title="Unesi" onPress={() => Alert.alert("Button pressed")} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  header: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flexDirection: 'row',
    
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  kolegiji: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',

  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#25667a',
    borderRadius: 5,
    marginRight: 15,
  },
  kolegij: {
    fontSize: 17,
  },
  tinyLogo: {

    width: 50,
    height: 50,
    marginRight: 15,
    marginLeft: 15
  }, 
});
