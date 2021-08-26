import React from 'react';
import {View , Text , StyleSheet,ScrollView , TouchableOpacity,Image} from 'react-native';
const Combination =({navigation})=>{
    return(
        <View>
        <Text style={styles.text}>COMBINATIONAL LOGIC </Text>
        <Text style={styles.text1}>
        
       There are memory less Digital logic circut whose output at any instant in time depends only on the 
       Combination of its inputs.
            </Text>
              <View>
              <View >
    <Image
style={styles.img}
source={require('../assets/Combination.png')} />
</View>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Alufunction')}>
          <Text style={styles.textbutton}>
          ALU FUNCTIONS
          </Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Datatransmission')}>
          <Text style={styles.textbutton}>
          DATA TRANSMISSION
          </Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Displaydecoder')}>
          <Text style={styles.textbutton}>
          DISPLAY DECODER
          </Text>
          </TouchableOpacity>

        </View> 
        </View>
            )};
            const styles = StyleSheet.create({
                text:{
            fontWeight :'bold',
            alignSelf:'center',
            alignSelf:'center',
            fontSize : 25,
            paddingTop:35,
            color : '#008B8B',
                },
            text1: {
            fontWeight :'bold',
            alignSelf:'center',
            fontSize : 22,
            paddingTop:20,
            paddingBottom:50,
            color : '#008B8B',
        },
        img:{
    
            marginTop : 25,
            marginBottom : 25,
            width : 335 , 
            height: 90, 
            alignSelf : 'center',
        },
        button:{
                marginTop:10,
                paddingTop:10,
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
                alignSelf:'center',
              },
            })  
            export default Combination;