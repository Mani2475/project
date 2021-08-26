import React from 'react';
import {View , Text , StyleSheet,ScrollView , TouchableOpacity,Image} from 'react-native';
const andgates=({navigation})=>{
    return(
        <ScrollView>    
<View style={styles.container}>
<Text style={styles.text} >AND GATE</Text>
<Text style={styles.text1}>

The AND gate is a basic digital logic gate that implements logical conjunction - 
it behaves according to the truth table to the right. 
A HIGH output (1) results only if all the inputs to the AND gate are HIGH (1)
    </Text>
<View >
    <Image
style={styles.img}
source={require('../assets/b.jpg')} />
</View>
<View>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('anddem')}>
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
    paddingTop : 25,
    alignSelf :'center',
    fontSize : 35,
    color : '#008B8B',
    paddingBottom : 10,
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
    marginBottom : 25,
    width : 355 , 
    height: 90, 
    alignSelf : 'center',
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
    export default andgates;