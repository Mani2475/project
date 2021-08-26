import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { out } from 'react-native/Libraries/Animated/Easing';
const Displaydecoderdem = () => {
  const [A, setA] = useState();
  const [B, setB] = useState();
  const [C, setC] = useState();
  const [D, setD] = useState();
  const [a, seta] = useState();
  const [b, setb] = useState();
  const [c, setc] = useState();
  const [d, setd] = useState();
  const [e, sete] = useState();
  const [f, setf] = useState();
  const [g, setg] = useState();
  const Display = () => {
    if (A == 0 && B == 0 && C == 0 && D == 0) {
      seta(1); setb(1); setc(1); setd(1); sete(1);  setf(1); setg(0); //0
    } else if (A == 0 && B == 0 && C == 0 && D == 1) {
      seta(0); setb(1); setc(1); setd(0); sete(0);  setf(0); setg(0); //1
    } else if (A == 0 && B == 0 && C == 1 && D == 0) {
      seta(1); setb(1); setc(0); setd(1); sete(1);  setf(0); setg(1); //2
    }else if(A == 0  && B == 0 && C == 1 && D == 1) {
      seta(1);  setb(1); setc(1); setd(1); sete(0); setf(0); setg(1); //3
    } else if (A == 0 && B == 1 && C == 0 && D == 0) {
      seta(0); setb(1); setc(1); setd(0); sete(0);  setf(1); setg(1); //4
    }else if(A == 0  && B == 1 && C == 0 && D == 1) {
      seta(1);  setb(0); setc(1); setd(1); sete(0);  setf(1); setg(1); //5
    } else if(A == 0  && B == 1 && C == 1 && D == 0) {
      seta(1);  setb(0); setc(1); setd(1); sete(1); setf(1); setg(1); //6
    }else if(A == 0  && B == 1 && C == 1 && D == 1) {
      seta(1);  setb(1); setc(1); setd(0); sete(0);  setf(0); setg(0); //7
    }else if(A == 1  && B ==0 && C == 0 && D == 0) {
      seta(1);  setb(1); setc(1); setd(1); sete(1);  setf(1); setg(1); //8
    }else if(A == 1  && B ==0 && C == 0 && D == 1) {
      seta(1);  setb(1); setc(1); setd(1); sete(0);  setf(1); setg(1); //9
    }else if(A == 1  && B ==0 && C == 1 && D == 0) {
      seta(1);  setb(1); setc(1); setd(0); sete(1);  setf(1); setg(1); //A
    }else if(A == 1  && B ==0 && C == 1 && D == 1) {
      seta(1);  setb(1); setc(1); setd(1); sete(1);  setf(1); setg(1); //B
    }else if(A == 1  && B ==1 && C == 0 && D == 0) {
      seta(1);  setb(0); setc(0); setd(1); sete(1);  setf(1); setg(0); //C
    }else if(A == 1  && B ==1 && C == 0 && D == 1) {
      seta(1);  setb(1); setc(1); setd(1); sete(1);  setf(1); setg(0); //D
    }else if(A == 1  && B ==1 && C == 1 && D == 0) {
      seta(1);  setb(0); setc(0); setd(1); sete(1);  setf(1); setg(1); //E
    }else if(A == 1  && B ==1 && C == 1 && D == 1) {
      seta(1);  setb(0); setc(0); setd(0); sete(1);  setf(1); setg(1); //F
    }else {
      alert('invalid input');
    }
  }
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Text style={styles.text} > 7 Segment Display </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text1}>A =</Text>

          <TextInput
            style={styles.lineInput}
            onChangeText={(text) => setA(text)}
            keyboardType='phone-pad'
          />

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text1}>B =</Text>
          <TextInput
            style={styles.lineInput}
            onChangeText={(text) => setB(text)}
            keyboardType='phone-pad'
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text1}>C =</Text>

          <TextInput
            style={styles.lineInput}
            onChangeText={(text) => setC(text)}
            keyboardType='phone-pad'
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text1}>D =</Text>

          <TextInput
            style={styles.lineInput}
            onChangeText={(text) => setD(text)}
            keyboardType='phone-pad'
          />

        </View>


        <TouchableOpacity style={styles.buttonStyle} onPress={() => Display()}>
          <Text style={styles.text2}>
            OUTPUT
          </Text >
        </TouchableOpacity>
        <Text style={styles.text1} >
          a  = {a}
        </Text>
        <Text style={styles.text1} >
          b  = {b}
        </Text><Text style={styles.text1} >
          c  = {c}
        </Text><Text style={styles.text1} >
          d  = {d}
        </Text><Text style={styles.text1} >
          e  = {e}
        </Text><Text style={styles.text1} >
          f  = {f}
        </Text><Text style={styles.text1} >
          g  = {g}
        </Text>

      </View>
    </ScrollView>

  )
};
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    paddingTop: 5,
    alignSelf: 'center',
    fontSize: 35,
    color: '#008B8B',
  },
  lineInput: {
    marginLeft: 30,
    marginRight: 20,
    height: 35,
    flex: 0.8,
    fontSize: 13,
    borderBottomWidth: 2,
    borderColor: '#008B8B',
  },
  text1: {
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15,
    fontSize: 20,
    color: '#008B8B',
  },
  text2: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22
  },
  buttonStyle: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    backgroundColor: '#008B8B',
    borderRadius: 10,
    borderWidth: 1,
  },

});
export default Displaydecoderdem;