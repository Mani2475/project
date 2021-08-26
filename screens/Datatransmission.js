import React from 'react';
import {View , Text , StyleSheet,ScrollView , TouchableOpacity,Image} from 'react-native';
const Datatransmission=({navigation})=>{
    return(
        <ScrollView>    
<View style={styles.container}>
<Text style={styles.text} >DATA TRANSMISSION</Text>
<Text style={styles.text1}>

In Data transmission the most commomy used combinational circut are de-multiplexers.
A multiplexer logic circut accepts the several data inputs and passes one of them throuh the output at a time
    </Text>
<View >
    <Image
style={styles.img}
source={require('../assets/Data.png')} />
</View>
<View>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Datatransmissiondem')}>
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
    width : 350 , 
    height: 185, 
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
    export default Datatransmission;