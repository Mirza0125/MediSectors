import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreens/home/HomeScreen';
import ChatScreen from '../screens/homescreens/home/ChatScreen';
import ApointmentScreen from '../screens/homescreens/home/ApointmentScreen';
import ProfileScreen from '../screens/homescreens/home/ProfileScreen';
import {COLORS} from '../services/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

export default function BottomNavigationScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          overflow: 'hidden',
          height: Platform.OS === 'ios' ? 92 : 78,
          backgroundColor: COLORS.white,
          paddingHorizontal:20,
          borderTopColor:'white'
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home"
              size={30}
              color={focused ? COLORS.greenColor : COLORS.lightGrey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="chat"
              size={30}
              color={focused ? COLORS.greenColor : COLORS.lightGrey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Apointment"
        component={ApointmentScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="calendar"
              size={24}
              solid
              color={focused ? COLORS.greenColor : COLORS.lightGrey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={focused ? COLORS.greenColor : COLORS.lightGrey}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
