import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator';
import { useSelector } from 'react-redux'; 

const Stack = createStackNavigator();


const MainStackNavigator = () => {
  const auth = useSelector(state => state.auth);
  // console.log('token.............', auth)
  return (
    auth.token ? <DashboardNavigator /> : <AuthNavigator />
  );
};

export default MainStackNavigator;
