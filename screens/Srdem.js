import React,{useState} from 'react';
import {Text,View, TouchableOpacity , StyleSheet,ScrollView, TextInput} from 'react-native';
import { out } from 'react-native/Libraries/Animated/Easing';
const Srdem =()=> {
  const [S, setS] = useState();
  const [R, setR] = useState();
  const [C, setC] = useState();
  const [Q, setQ] = useState();
  const [Q2, setQ2] = useState();
const sum=()=>{
  if(C==1){
  if(S==1 && R==0 && Q==1){
    setQ(1);
    setQ2(0);
  }else if(S==0 && R==0 && Q==1){
    setQ(1);
    setQ2(0);
  }else if(S==0 && R==1 && Q==0){
    setQ(0);
    setQ2(1);
  }else if(S==0 && R==0 && Q==0){
    setQ(0);
    setQ2(1);
  }else if(S==1 && R==1 && (Q==1||Q==0)){
    setQ('X');
    setQ2('X');
  }else{
    alert('invalid input');
  }}else{
    alert('Circut not Working');
  }
}
return(
  <ScrollView>  
<View style={{flex:1}}>
    <Text style={styles.text} >CLOCKED S-R FLIP FLOP </Text>
    <View style={{flexDirection:'row'}}>
        <Text style={styles.text1}>S =</Text>
      
        <TextInput
          style={[styles.lineInput,{borderBottomWidth:2,borderColor:'#008B8B',fontSize:20}]}
          onChangeText={(text)=>setS(text)}
            keyboardType='phone-pad'
          />
        
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.text1}>CLK =</Text>
          <TextInput
            style={[styles.lineInput,{borderBottomWidth:2,borderColor:'#008B8B',fontSize:20}]}
            onChangeText={(text)=>setC(text)}
             keyboardType='phone-pad'
            />
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.text1}>R =</Text>
        <TextInput
          style={[styles.lineInput,{borderBottomWidth:2,borderColor:'#008B8B',fontSize:20}]}
          onChangeText={(text)=>setR(text)}
            keyboardType='phone-pad'
          />
        
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.text1}>Q =</Text>
        <TextInput
          style={[styles.lineInput,{borderBottomWidth:2,borderColor:'#008B8B',fontSize:20}]}
          onChangeText={(text)=>setQ(text)}
            keyboardType='phone-pad'
          />
        
        </View>

    
    <TouchableOpacity style={styles.buttonStyle} onPress={()=>sum()}>
    <Text style={styles.text2}>
    OUTPUT
    </Text >
    </TouchableOpacity>
    <Text style={styles.text1} >
    Q  = {Q}
    </Text>
    <Text style={styles.text1} >
    Q'  = {Q2}
    </Text>
    
  </View>
  </ScrollView>

)};
const styles=StyleSheet.create({
  text:{
    fontWeight :'bold',
    paddingTop : 30,
    paddingBottom: 20,
    alignSelf:'center',
    fontSize : 30,
    color : '#008B8B',
},
lineInput:{
marginLeft:30,
marginTop : 5,
marginRight:20,
height : 60,
flex: 0.8,
borderBottomWidth:3,
},
text1: {
    fontWeight :'bold',
    marginLeft: 10,
    marginTop : 20,  
    paddingBottom : 10,
    fontSize : 30,
    justifyContent : 'center',
    alignItems : 'center',
    alignContent : 'center',
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
    alignContent:'center'
},

});
 export default Srdem;