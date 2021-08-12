/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 import linking from './src/container/linking';

 import Home from './src/container/home';
 import Profile from './src/container/profile';


 const Stack = createStackNavigator();

 const RootStack = () =>{
   return(
    <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: 'Welcome' }}
    />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
   )
 }

 const App = () => {

   return (
     <NavigationContainer 
     
     linking = {linking}
     >

<RootStack />
     </NavigationContainer>
      
   );
 };

 const styles = StyleSheet.create({
  
  
 });

 export default App;
