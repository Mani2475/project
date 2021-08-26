import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { out } from 'react-native/Libraries/Animated/Easing';
const Datatransmissiondem = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [s, setS] = useState();
  const [Output, setOutput] = useState();
  const mux = () => {
    if (s == 0) {
      setOutput(a);
    } else if (s == 1) {
      setOutput(b);
    } else {
      alert('invalid input');
    }
  }
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Text style={styles.text} >2*1 MULTIPLEXER </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text1}>A =</Text>

          <TextInput
            style={[styles.lineInput, { borderBottomWidth: 2, borderColor: '#008B8B', fontSize: 20 }]}
            onChangeText={(text) => setA(text)}
            keyboardType='phone-pad'
          />

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text1}>B =</Text>
          <TextInput
            style={[styles.lineInput, { borderBottomWidth: 2, borderColor: '#008B8B', fontSize: 20 }]}
            onChangeText={(text) => setB(text)}
            keyboardType='phone-pad'
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text1}>S =</Text>

          <TextInput
            style={[styles.lineInput, { borderBottomWidth: 2, borderColor: '#008B8B', fontSize: 20 }]}
            onChangeText={(text) => setS(text)}
            keyboardType='phone-pad'
          />

        </View>


        <TouchableOpacity style={styles.buttonStyle} onPress={() => mux()}>
          <Text style={styles.text2}>
            OUTPUT
          </Text >
        </TouchableOpacity>
        <Text style={[styles.text1, { paddingTop: 15 }]} >
          Output  = {Output}
        </Text>

      </View>
    </ScrollView>

  )
};
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 20,
    alignSelf: 'center',
    fontSize: 35,
    color: '#008B8B',
  },
  lineInput: {
    marginLeft: 30,
    marginTop: 5,
    marginRight: 20,
    height: 60,
    flex: 0.8,
    borderBottomWidth: 3,
  },
  text1: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 20,
    paddingBottom: 20,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: '#008B8B',
  },
  text2: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22
  },
  buttonStyle: {
    marginTop: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    backgroundColor: '#008B8B',
    borderRadius: 10,
    borderWidth: 1,
    alignContent: 'center'
  },

});
export default Datatransmissiondem;