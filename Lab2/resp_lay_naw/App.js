import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomePage from './App/Home';
import Page1 from './App/Page1';
import Page2 from './App/Page2';
import Page3 from './App/Page3';

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: 'rgba(102, 178, 255, 0.9)' }} >
        <Stack.Screen name="Home" component={HomePage} 
          options={{ 
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size}/>
            ),
          }} 
        />
        <Stack.Screen name="Page1" component={Page1} 
          options={{ 
            tabBarLabel: 'Spread syntax',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size}/>
            ),
          }} 
        />
        <Stack.Screen name="Page2" component={Page2} 
          options={{  
            tabBarLabel: 'Rest parameters',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="window-restore" color={color} size={size}/>
            ),
            }}
          />
        <Stack.Screen name="Page3" component={Page3} 
          options={{ 
            tabBarLabel: 'useState',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="lighthouse" color={color} size={size}/>
            ),
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
