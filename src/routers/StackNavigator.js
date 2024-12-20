import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import AuthNavigator from './AuthNavigator';
// import DashboardNavigator from './DashboardNavigator';
import { useSelector } from 'react-redux'; 
import { NavigationContainer } from '@react-navigation/native';
import SplashOne from '../screens/newauthscreens/SplashScreens/SplashOne';
import SplashTwo from '../screens/newauthscreens/SplashScreens/SplashTwo';
import SplashThree from '../screens/newauthscreens/SplashScreens/SplashThree';
import SplashFour from '../screens/newauthscreens/SplashScreens/SplashFour';
import StartScreen from '../screens/newauthscreens/LoginScreen/StartScreen';
import SignIn from '../screens/newauthscreens/LoginScreen/SignIn';

const Stack = createStackNavigator();


const MainStackNavigator = () => {
  // const auth = useSelector(state => state.auth);
  // console.log('token.............', auth)
  return (
    // auth.token ? <DashboardNavigator /> : <AuthNavigator />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='SplashOne' component={SplashOne} />
        <Stack.Screen name='SplashTwo' component={SplashTwo} />
        <Stack.Screen name='SplashThree' component={SplashThree} />
        <Stack.Screen name='SplashFour' component={SplashFour} />
        <Stack.Screen name='StartScreen' component={StartScreen} />
        <Stack.Screen name='SignIn' component={SignIn} />





      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
