import React,{useState} from 'react';
import {Text,View, TouchableOpacity , StyleSheet, TextInput} from 'react-native';


const Notdem =({navigation})=> { 
    const [a, setA] = useState();
    const [Output, setOutput] = useState();
  const sum=()=>{
    if(a==0){
      setOutput(1);
    }else if(a==1 ){
      setOutput(0);
    }
    else{
      alert('invalid input');
    }
}
return(
<View style={{flex:1}}>
    <Text style={styles.text} >NOT GATE</Text>
<View style={{flexDirection:'row'}}>
    <Text style={styles.text1}>A =</Text>
    <TextInput
    style={[styles.lineInput,{borderBottomWidth:2,borderColor:'#008B8B',fontSize:20}]}
    onChangeText={(text) => setA(text)}     //  value={number}
    //placeholder="useless placeholder"
    keyboardType="phone-pad"
          />
 </View>
<TouchableOpacity style={styles.buttonStyle}  onPress={() => sum()}>
    <Text style={styles.text2}>
    OUTPUT
    </Text >
</TouchableOpacity >
    <Text style={[styles.text1,{paddingTop:35}]}>
    OUTPUT O = {Output}
    </Text>
</View>

)};
const styles=StyleSheet.create({
  text:{
    fontWeight :'bold',
    paddingTop : 35,
    paddingBottom: 50,
    marginLeft : 90,
    fontSize : 35,
    color : '#008B8B',
},
lineInput:{
marginLeft:20,
marginTop : 15,
marginRight:20,
height : 60,
flex: 0.8,
borderBottomWidth:1,
},

text1: {
    fontWeight :'bold',
    marginLeft: 10,
    marginTop : 30,  
    paddingBottom : 25,
    fontSize : 30,
    color : '#008B8B',
},
text2:{
    fontWeight:'bold',
    color:'white',
    fontSize:22
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
 export default Notdem;