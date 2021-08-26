import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
const Logicgates = ({navigation}) => {
    return(
<View>
<Text style={styles.text}>LOGIC GATES</Text>
<Text style={styles.text1}>

Logic gates  are the basic building blocks of any digital system.
 It is an electronic circuit having one or more than one input and only one output. 
The relationship between the input and the output is based on a certain logic. 
Based on this, logic gates are named as AND gate, OR gate, NOT gate etc.
    </Text>
      <View>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('andgates')}>
  <Text style={styles.textbutton}>
  AND
  </Text>
  </TouchableOpacity>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('or')}>
  <Text style={styles.textbutton}>
  OR
  </Text>
  </TouchableOpacity> 
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Not')}>
  <Text style={styles.textbutton}>
  NOT
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Nand')}>
  <Text style={styles.textbutton}>
  NAND
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Nor')}>
  <Text style={styles.textbutton}>
  NOR
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Xor')}>
  <Text style={styles.textbutton}>
  XOR
  </Text>
  </TouchableOpacity >
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Xnor')} >
  <Text style={styles.textbutton}>
  XNOR
  </Text>
  </TouchableOpacity>
</View> 
</View>
    )};
    const styles = StyleSheet.create({
        text:{
    fontWeight :'bold',
    alignSelf:'center',
    margin: 10,
    fontSize : 25,
    color : '#008B8B',
        },
    text1: {
    fontWeight :'bold',
    margin: 10,
    fontSize : 18,
    justifyContent : 'center',
    alignItems : 'center',
    alignContent : 'center',
    color : '#008B8B',
},
button:{
        marginTop:5.5,
        paddingTop:8,
        paddingBottom:10,
        marginLeft:30,
        marginRight:30,
        alignItems:'center',
        backgroundColor:'#008B8B',
        borderRadius:10,
        borderWidth:2,
},
 textbutton:{
        fontWeight:'bold',
        color:'white',
        fontSize:22,
        justifyContent :'center',
        alignItems : 'center'
      },


    })  
    export default Logicgates;