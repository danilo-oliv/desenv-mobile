
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import ModalFadeScreen from '../screens/ModalFadeScreen.js';
import ScrollViewScreen from '../screens/ScrollViewScreen.js';
import ModalNoneScreen from '../screens/ModalNoneScreen.js';
import ModalSlideScreen from '../screens/ModalSlideScreen.js';

import LoginScreen from '../screens/LoginScreen.js';
import RegisterScreen from '../screens/RegisterScreen.js';
import HomeScreen from '../screens/HomeScreen.js';

import FormScreen from '../screens/FormScreen.js';
import ListScreen from '../screens/ListScreen.js';

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();


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
    </Tabs.Navigator>
  );
}

function DrawerNavigator(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="HOME" component={HomeScreen} />
      <Drawer.Screen name="MODAIS" component={TabsNavigatorModals} />
      <Drawer.Screen name="SCROLLS" component={TabsNavigatorScrolls} />
      <Drawer.Screen name="FORMULARIO" component={FormScreen} />
      <Drawer.Screen name="List" component={ListScreen} />
    </Drawer.Navigator>
  )
}




export default function AppNavigator(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="HOME" component={DrawerNavigator}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}