import React from 'react';
import { Text, View ,StyleSheet,Image, TouchableOpacity,BackHandler} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
<View style={styles.img}>
<Image 
style={{width : 150 , height: 150}}
source={require('../assets/ab.jpg')} 
/>
</View>
    <TouchableOpacity style={styles.buttonStyle} 
        onPress={()=>{navigation.navigate('Main')}}
    >
    <Text style={styles.text}>
    TUTORIALS
    </Text >
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate('Workbench')}}>
    <Text style={styles.text}>
    SIMULATE
    </Text >
    </TouchableOpacity>

    
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>BackHandler.exitApp()}>
    <Text style={styles.text}>
    EXIT
    </Text >
    </TouchableOpacity>
    </View>
  )};
const styles= StyleSheet.create({
container : {
    flex : 1,
},
buttonStyle:{
    marginTop:20,
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
text:{
    fontWeight:'bold',
    color:'white',
    fontSize:22,
    },
img:{
    marginTop : 100,
    justifyContent : 'center',
    alignItems : 'center',
  marginBottom : 10,
}
  
});




export default Home;