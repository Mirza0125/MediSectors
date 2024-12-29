import React from 'react';
import { StyleSheet, Platform, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreens/home/HomeScreen';
import ChatScreen from '../screens/homescreens/ChatScreen';
import ApointmentScreen from '../screens/homescreens/Apointments/ApointmentScreen';
import ProfileScreen from '../screens/homescreens/Profile/ProfileScreen';
import { COLORS } from '../services/colors';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../redux/theme/theme';

const Tab = createBottomTabNavigator();

export default function BottomNavigationScreen() {
  const theme = useSelector(state => state.theme.theme)
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

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
          backgroundColor: currentTheme.navBar, // Set background color
          paddingHorizontal: 20,
          borderTopColor: currentTheme.navBar, // Match border color to avoid lines
          borderTopWidth: 0, // Remove the border line on top of the tab bar
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
        },
        
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/ProfileActive.png')
                  : require('../assets/images/Profile.png')
              }
              style={{ width: 25, height: 25 }}
              resizeMode='contain'
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
