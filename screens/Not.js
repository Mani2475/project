import React from 'react';
import { View, Stylesheet, Text, ScrollView, StyleSheet, Image,TouchableOpacity } from 'react-native';
const Not =({navigation})=>{
return(
<ScrollView >    
    <Text style={styles.text}> NOT GATE </Text>
    <Text style={styles.text1}>
        It gives only one output which is negative value of the crossponding input.
        When the input is forced to low value it gives high value at the output 
        and vice-versa.
    </Text>
    <View >
        <Image style={styles.img} source={require('../assets/Not.png')} />
    </View>
    <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Notdem')}>
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
        alignSelf : 'center',
        paddingTop : 35,
        paddingBottom : 20,
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
        marginBottom : 10,
        width : 355 , 
        height:90,
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
})
export default Not;