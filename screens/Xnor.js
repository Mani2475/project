import React from 'react';
import {View , Text , StyleSheet,ScrollView , TouchableOpacity,Image} from 'react-native';
const xnor=({navigation})=>{
    return(
        <ScrollView>    
<View style={styles.container}>
<Text style={styles.text} >XNOR GATE</Text>
<Text style={styles.text1}>

The output of an XNOR gate is true when all of its inputs are true or when all of its
 inputs are false.if some of its inputs are true and others are false , then 
 the output of XNOR gate is false.   </Text>
<View >
    <Image
style={styles.img}
source={require('../assets/Xnor.png')} />
</View>
<View>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Xnordem')}>
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
    paddingTop : 35,
    paddingBottom: 15,
    alignSelf:'center',
    fontSize : 35,
    color : '#008B8B',
},
text1: {
    fontWeight :'bold',
    marginLeft: 10,
    paddingBottom : 15,
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
    justifyContent : 'center',
    alignSelf:'center',
    marginBottom : 20,
    width : 350, 
    height: 90, 
    alignContent:'center',
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
},

    });
    export default xnor;