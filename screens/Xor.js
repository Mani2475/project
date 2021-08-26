import React from 'react';
import {View , Text , StyleSheet,ScrollView , TouchableOpacity,Image} from 'react-native';
const xor=({navigation})=>{
    return(
        <ScrollView>    
<View style={styles.container}>
<Text style={styles.text} >XOR GATE</Text>
<Text style={styles.text1}>

An XOR gate implements an exclusive or , that us a true output results if one
 and only one of the inputs to the gate is True.
    </Text>
<View >
    <Image
style={styles.img}
source={require('../assets/Xor.png')} />
</View>
<View>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Xordem')}>
    <Text style={styles.text2}>
    DEMONSTRATION
    </Text >
    </TouchableOpacity>
</View>    
</View>
</ScrollView>
)};
//STYLES
    const styles = StyleSheet.create({
container:{
    flex : 1,
    margin:10
},
text:{
    fontWeight :'bold',
    alignSelf:'center',
    paddingTop : 35,
    paddingBottom:10,
    fontSize : 35,
    color : '#008B8B',
},
text1: {
    fontWeight :'bold',
    marginLeft: 10,
    paddingBottom : 30,
    fontSize : 22,
    color : '#008B8B',
},
text2:{
    fontWeight:'bold',
    color:'white',
    fontSize:22
},
img:{
    
    marginTop : 25,
    marginBottom : 30,
    width : 350, 
    height: 90, 
    alignSelf:'center',
},
buttonStyle:{
    marginTop:50,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    alignItems:'center',
    backgroundColor:'#008B8B',
    borderRadius:10,
    borderWidth:1,
    alignContent:'center'
},

    });
    export default xor;