import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen.js';

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import ModalSlideScreen from './src/screens/ModalSlideScreen.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ModalFadeScreen from './src/screens/ModalFadeScreen.js';
import ScrollViewScreen from './src/screens/ScrollViewScreen.js';
import ModalNoneScreen from './src/screens/ModalNoneScreen.js';
import SectionListScreen from './src/screens/SectionListScreen.js';
import FlatListScreen from './src/screens/FlatListScreen.js';


const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();


function TabsNavigatorModals() {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Modal Slide" component={ModalSlideScreen} />
      <Tabs.Screen name="Modal Fade" component={ModalFadeScreen} />
      <Tabs.Screen name="Modal None" component={ModalNoneScreen} />
    </Tabs.Navigator>
  );
}

function TabsNavigatorScrolls() {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
      <Tabs.Screen name="ScrollView" component={ScrollViewScreen} />
      <Tabs.Screen name="FlatList" component={FlatListScreen} />
      <Tabs.Screen name="SectionList" component={SectionListScreen} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HOME" component={HomeScreen} />
        <Drawer.Screen name="MODAIS" component={TabsNavigatorModals} />
        <Drawer.Screen name="SCROLLS" component={TabsNavigatorScrolls} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
