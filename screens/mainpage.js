import React from 'react';
import { View , Text,StyleSheet,TouchableOpacity,BackHandler} from 'react-native';
const Main = ({navigation}) =>{
    return(
<View style={styles.container}>
<Text style={styles.text}>It is an Android Application for Digital Logic Design 
    course.The user can get basic information , demostrate the functionality 
    and simlate logic gates , combinational and logic circut
    </Text>
  <View>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Logicgates')}>
  <Text style={styles.textbutton}>
  LOGICS GATES
  </Text>
  </TouchableOpacity>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Combination')}>
  <Text style={styles.textbutton}>
  COMINATIONAL LOGIC CIRCUT
  </Text>
  </TouchableOpacity> 
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Sequential')}>
  <Text style={styles.textbutton}>
  SEQUENTIAL LOGIC CIRCUT
  </Text>
  </TouchableOpacity>
</View>    
        </View>
          )};
const styles = StyleSheet.create({
    container : {
    flex : 1,
},
text: {
    fontWeight :'bold',
    paddingBottom : 20,
    padding:10,
    fontSize : 25,
    justifyContent : 'center',
    alignItems : 'center',
    alignContent : 'center',
    color : '#008B8B',
    margin:15
},
button:{
        marginTop:20,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        alignItems:'center',
        backgroundColor:'#008B8B',
        borderRadius:10,
        borderWidth:2,
},
 textbutton:{
        fontWeight:'bold',
        color:'white',
        fontSize:22,
        justifyContent :'center',
        alignItems : 'center'
      },

        });


  

export default Main;
