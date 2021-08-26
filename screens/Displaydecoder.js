import React from 'react';
import {View , Text , StyleSheet,ScrollView , TouchableOpacity,Image} from 'react-native';
const Displaydecoder=({navigation})=>{
    return(
        <ScrollView>    
<View style={styles.container}>
<Text style={styles.text} >DATA TRANSMISSION</Text>
<Text style={styles.text1}>

A BCD to seven Segment decoder is a combinational logic circut that accepts a decimal digit in BCD (Input) and 
generates appropriate outputs for the segments to display the input decimal digit.
    </Text>
<View >
    <Image
style={styles.img}
source={require('../assets/Display.png')} />
</View>
<View>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Displaydecoderdem')}>
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
    fontSize : 32,
    color : '#008B8B',
    paddingBottom : 10,
},
text1: {
    fontWeight :'bold',
    marginLeft: 10,
    paddingBottom : 15,
    fontSize : 20,
    color : '#008B8B',
    alignSelf:'center',
},
text2:{
    fontWeight:'bold',
    color:'white',
    fontSize:22
},
img:{
    marginTop : 25,
    marginBottom : 15,
    width : 345, 
    height: 170, 
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
    export default Displaydecoder;