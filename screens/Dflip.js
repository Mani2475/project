import React from 'react';
import {View , Text , StyleSheet,ScrollView , TouchableOpacity,Image} from 'react-native';
const Dflip=({navigation})=>{
    return(
        <ScrollView>    
<View style={styles.container}>
<Text style={styles.text} >D FLIP FLOP</Text>
<Text style={styles.text1}>

A D (or Delay) Flip Flop (Figure 1) is a digital electronic circut used to delay the change of state of its output
signal (Q) until the next rising edge of a clock timing input signal occurs.
    </Text>
<View >
    <Image
style={styles.img}
source={require('../assets/DFlipFlop.png')} />
</View>
<View>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Dflipdem')}>
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
    fontSize : 30,
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
    
    marginTop : 20,
    marginBottom : 10,
    width : 355 , 
    height: 120, 
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
    export default Dflip;