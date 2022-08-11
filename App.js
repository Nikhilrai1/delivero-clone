import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestuarantScreen from './screens/RestuarantScreen';
import { Provider } from 'react-redux'
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestuarantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen}  options={{presentation: "modal", headerShown: false}}/>
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}