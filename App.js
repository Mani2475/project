import React from 'react';
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/mainpage';
import Home from './screens/home';
import Logicgates from './screens/logic';
import andgates from './screens/And';
import anddem from './screens/Anddem';
import or from './screens/Or';
import ordem from './screens/Ordem';
import Not from './screens/Not';
import Notdem from './screens/Notdem';
import Nand from './screens/Nand';
import Nanddem from './screens/Nanddem';
import Nor from './screens/Nor';
import Nordem from './screens/Nordem';
import Xor from './screens/Xor';
import Xordem from './screens/Xordem';
import Xnor from './screens/Xnor';
import Xnordem from './screens/Xnordem';
import Combination from './screens/Combination';
import Alufunction from './screens/Alufunction';
import Alufunctiondem from './screens/Alufunctiondem';
import Datatransmission from './screens/Datatransmission';
import Datatransmissiondem from './screens/Datatransmissiondem';
import Displaydecoder from './screens/Displaydecoder';
import Displaydecoderdem from './screens/Displaydecoderdem';
import Sequential from './screens/Sequential';
import Sr from './screens/Sr';
import Srdem from './screens/Srdem';
import Dflip from './screens/Dflip';
import Dflipdem from './screens/Dflipdem';
import Jk from './screens/Jk';
import Jkdem from './screens/Jkdem';
import Tflipflop from './screens/Tflipflop';
import Tdem from './screens/Tdem';
import Masterjk from './screens/Masterjk';
import Masterjkdem from './screens/Masterjkdem';
import SplashScreen from './screens/SplashScreen';
import DragTest from './screens/logicwork';
import Workbench from './screens/Workbench';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Main" component={Main} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Logicgates" component={Logicgates} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="andgates" component={andgates} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="anddem" component={anddem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="or" component={or} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="ordem" component={ordem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Not" component={Not} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Notdem" component={Notdem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Nand" component={Nand} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Nanddem" component={Nanddem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Nor" component={Nor} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Nordem" component={Nordem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Xor" component={Xor} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Xordem" component={Xordem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Xnor" component={Xnor} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Xnordem" component={Xnordem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Combination" component={Combination} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Alufunction" component={Alufunction} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Alufunctiondem" component={Alufunctiondem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Datatransmission" component={Datatransmission} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Datatransmissiondem" component={Datatransmissiondem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Displaydecoder" component={Displaydecoder} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Displaydecoderdem" component={Displaydecoderdem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Sequential" component={Sequential} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Sr" component={Sr} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Srdem" component={Srdem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Dflip" component={Dflip} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Dflipdem" component={Dflipdem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Jk" component={Jk} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Jkdem" component={Jkdem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Tflipflop" component={Tflipflop} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Tdem" component={Tdem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Masterjk" component={Masterjk} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Masterjkdem" component={Masterjkdem} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="Workbench" component={Workbench} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />
        <Stack.Screen name="DragTest" component={DragTest} options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008B8B' } }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const  Dldsimulator = () => { 
//   return (
// <mainpage/>

//   )};
// export default Main;