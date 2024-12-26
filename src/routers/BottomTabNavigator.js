import React from 'react';
import {StyleSheet, Platform, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreens/home/HomeScreen';
import ChatScreen from '../screens/homescreens/ChatScreen';
import ApointmentScreen from '../screens/homescreens/ApointmentScreen';
import ProfileScreen from '../screens/homescreens/ProfileScreen';
import {COLORS} from '../services/colors';

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
          paddingHorizontal: 20,
          borderTopColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/HomeActive.png') // Active image
                  : require('../assets/images/Home.png') // Inactive image
              }
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/MessageActive.png')
                  : require('../assets/images/Message.png')
              }
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Apointment"
        component={ApointmentScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/CalendarActive.png')
                  : require('../assets/images/Calendar.png')
              }
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/images/ProfileActive.png')
                  : require('../assets/images/Profile.png')
              }
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30, 
    height: 30, 
    resizeMode: 'contain',
  },
});
