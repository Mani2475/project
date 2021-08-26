import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
const Sequential = ({navigation}) => {
    return(
<View>
<Text style={styles.text}>SEQUENTIAL LOGIC CIRCUTS</Text>
<Text style={styles.text1}>

These circuts use Flip flop as memory element and in which there output is dependent on the input state.
    </Text>
      <View>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Sr')}>
  <Text style={styles.textbutton}>
  S-R FLIP FLOP
  </Text>
  </TouchableOpacity>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Dflip')}>
  <Text style={styles.textbutton}>
  D FLIP FLOP
  </Text>
  </TouchableOpacity> 
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Jk')}>
  <Text style={styles.textbutton}>
  J-K FLIP FLOP
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Tflipflop')}>
  <Text style={styles.textbutton}>
  T FLIP FLOP 
  </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Masterjk')}>
  <Text style={styles.textbutton}>
  MASTER J-K FLIP FLOP
  </Text>
  </TouchableOpacity>

</View> 
</View>
    )};
    const styles = StyleSheet.create({
        text:{
    fontWeight :'bold',
    paddingTop :30,
    alignSelf:'center',
    fontSize : 25,
    color : '#008B8B',
        },
    text1: {
    fontWeight :'bold',
    alignSelf:'center',
    paddingTop:20,
    paddingBottom: 30,
    fontSize : 23,
    color : '#008B8B',
},
button:{
        marginTop:15,
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
        alignItems : 'center'
      },


    })  
    export default Sequential;