import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import LoginScreen from './screens/LoginScreen.js';
import UserStack from './navigation/UserStack.js';
import CharityStack from './navigation/CharityStack.js';


const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
                      screenOptions={{
                          headerShown: false,
                      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserStack" component={UserStack} />
        <Stack.Screen name="CharityStack" component={CharityStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
