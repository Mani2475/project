import React from 'react';
import {View , Text , StyleSheet,ScrollView , TouchableOpacity,Image} from 'react-native';
const Masterjk=({navigation})=>{
    return(
        <ScrollView>    
<View style={styles.container}>
<Text style={styles.text} >MASTER SLAVE JK FLIP FLOP</Text>
<Text style={styles.text1}>

The Master-Slave Flip Flop is basically two gated SR flip-Flop connected together in a series configuration with the slave having
an inverted clock pulse...This feedback configuration from the slave's output to the master's input gives the characteristic
toggle of the JK flip flop.
    </Text>
<View >
    <Image
style={styles.img}
source={require('../assets/Masterjk.png')} />
</View>
<View>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Masterjkdem')}>
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
    paddingTop : 15,
    alignSelf :'center',
    fontSize : 24,
    color : '#008B8B',
    paddingBottom : 10,
},
text1: {
    fontWeight :'bold',
    alignSelf:'center',
    paddingBottom : 10,
    fontSize : 20,
    color : '#008B8B',
},
text2:{
    fontWeight:'bold',
    color:'white',
    fontSize:22
},
img:{
    
    marginTop : 10,
    width : 330 , 
    height: 190, 
    alignSelf : 'center',
},
buttonStyle:{
    marginTop:40,
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
    export default Masterjk;