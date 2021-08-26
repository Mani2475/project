import React from 'react';
import { View, Stylesheet, Text, ScrollView, StyleSheet, Image,TouchableOpacity } from 'react-native';
const or =({navigation})=>{
return(
<ScrollView >    
    <Text style={styles.text}> OR GATE </Text>
    <Text style={styles.text1}>
        A logical OR operation has a high output (1) if one or both the input to the
        gate are(1). if neither input is high , a low output (0) result.
    </Text>
    <View >
        <Image style={styles.img} source={require('../assets/or.png')} />
    </View>
    <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('ordem')}>
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
        paddingTop : 35,
        paddingBottom : 20,
        alignSelf:'center',
        fontSize : 35,
        color : '#008B8B',
    },
    text1: {
        fontWeight :'bold',
        marginLeft: 10,
        paddingBottom : 15,
        fontSize : 23,
        color : '#008B8B',
    },
    text2:{
        fontWeight:'bold',
        color:'white',
        fontSize:22,
    },
    img:{
    
        marginTop : 25,
        marginBottom : 30,
        width : 350 , 
        height:90,
        alignSelf:'center',
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
export default or;