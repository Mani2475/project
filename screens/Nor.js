import React from 'react';
import {View , Text , StyleSheet,ScrollView , TouchableOpacity,Image} from 'react-native';
const Nor=({navigation})=>{
    return(
        <ScrollView>    
<View style={styles.container}>
<Text style={styles.text} >NOR GATE</Text>
<Text style={styles.text1}>

A high output (1) result if both the inputs to the gate are low (0);
if one or both inputs is high (1) , a low output (0) results.
NOR is the result of the negative of the OR operator     </Text>
<View >
    <Image
style={styles.img}
source={require('../assets/Nor.png')} />
</View>
<View>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Nordem')}>
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
    paddingTop : 40,
    paddingBottom: 10,
    fontSize : 35,
    color : '#008B8B',
},
text1: {
    fontWeight :'bold',
    marginLeft: 10,
    paddingBottom : 15,
    fontSize : 22,
    justifyContent : 'center',
    alignItems : 'center',
    alignContent : 'center',
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
    width : 350 , 
    height: 90, 
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
    export default Nor;