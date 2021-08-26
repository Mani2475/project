import React from 'react';
import {View , Text , StyleSheet,ScrollView , TouchableOpacity,Image} from 'react-native';
const Jk=({navigation})=>{
    return(
        <ScrollView>    
<View style={styles.container}>
<Text style={styles.text} >J-K FLIP FLOP</Text>
<Text style={styles.text1}>

The JK flip flop is basically a gated SR flip-flop with the addition of a clock input circuitry that prevents 
the illegal or output condition that can occur when both inputs S ans R are equal to logic level "1".
    </Text>
<View >
    <Image
style={styles.img}
source={require('../assets/Jk.png')} />
</View>
<View>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Jkdem')}>
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
    export default Jk;