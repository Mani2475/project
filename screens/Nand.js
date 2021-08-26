import React from 'react';
import { View, Stylesheet, Text, ScrollView, StyleSheet, Image,TouchableOpacity } from 'react-native';
const Nand =({navigation})=>{
return(
<ScrollView >    
    <Text style={styles.text}> NAND GATE </Text>
    <Text style={styles.text1}>
        A NAND gate (NOT-AND) is a logic gate which produce an output which is
        false only if all its input are True.
    </Text>
    <View >
        <Image style={styles.img} source={require('../assets/Nand.png')} />
    </View>
    <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Nanddem')}>
        <Text style={styles.text2}>
        DEMONSTRATION
        </Text >
        </TouchableOpacity>
    </View>  

</ScrollView>
)}
const styles= StyleSheet.create({
    text:{
        fontWeight :'bold',
        paddingTop : 40,
        paddingBottom : 20,
       alignSelf :'center',
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
        marginBottom : 40,
        width : 350 , 
        height:90,
        marginLeft : 10, 
        alignSelf :'center',
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
})
export default Nand;