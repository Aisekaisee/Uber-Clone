import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatScreen from './screens/EatScreen';
import { Provider } from 'react-redux';
import store from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown:false
            }}
            />
            <Stack.Screen 
            name="MapScreen"
            component={MapScreen}
            options={{
              headerShown:false
            }}
            />
            <Stack.Screen 
            name="EatScreen"
            component={EatScreen}
            options={{
              headerShown:false
            }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
