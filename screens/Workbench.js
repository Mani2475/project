import React from 'react';
import { View , Text,StyleSheet,TouchableOpacity,BackHandler} from 'react-native';
const Workbench = ({navigation}) =>{
    return(
<View style={styles.container}>
<Text style={[styles.text ,{ alignSelf :'center'}]}>Work Bench
    </Text>
  <View>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('DragTest')}>
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
    paddingBottom : 40,
    padding: 50,
    fontSize : 40,
    color : '#008B8B',
    margin:15
},
button:{
        marginTop:30,
        padding : 15,
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
      },

        });


  

export default Workbench;
