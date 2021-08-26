import React,{Component} from 'react';
import { View, Text,Button,StyleSheet,TouchableOpacity,Image,StatusBar} from 'react-native';
import Home from './home';
function SplashScreen({navigation}) {
  setTimeout(()=>{
    navigation.replace('Home');
    //navigation.navigate('Home');
  },3000);
  return (
    <View style={myStyle.container}>
      <StatusBar hidden={true} />
      <Text style={myStyle.welcome}>Welcome !</Text>
      <Text style={myStyle.txt1}>BIIT DLD SIMULATOR</Text>
      <Image style={myStyle.img} source={require('../assets/a.jpeg')}></Image>
      <Text style={myStyle.txt2}>Loading . . .</Text>
    </View>
  );
}
export default SplashScreen;
const myStyle=StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#008B8B'
  },
  welcome:{
    fontSize:40,
    color:'black',
    fontWeight:'bold'
  },
    img:{
    width:200,
    height:200,
    borderRadius:130,
    resizeMode: "cover",
    borderColor:'black',
    marginLeft:20,
    borderWidth:1,
    marginTop:15
  },
  txt1:{
    fontSize:23,
    color:'black',
    marginTop:10,
    fontFamily:'arial',
  },
  txt2:{
    fontSize:30,
    color:'black',
    marginTop:30,
    fontFamily:'arial',
    //fontStyle:'italic'
  }
})