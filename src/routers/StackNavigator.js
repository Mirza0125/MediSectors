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
import SignUp from '../screens/newauthscreens/LoginScreen/SignUp';
import ForgetPassword from '../screens/newauthscreens/ForgetPasswordScreens/ForgetPassword';
import VerificationCodeScreen from '../screens/newauthscreens/ForgetPasswordScreens/VerificationCodeScreen';
import ResetPassword from '../screens/newauthscreens/ForgetPasswordScreens/ResetPassword';
import BottomNavigationScreen from './BottomTabNavigator';
import TopDoctors from '../screens/homescreens/home/TopDoctors';
import FindDoctors from '../screens/homescreens/DoctorConsultation/FindDoctors';
import DoctorDetail from '../screens/homescreens/DoctorConsultation/DoctorDetail';
import Apointment from '../screens/homescreens/DoctorConsultation/Apointment';
import Articles from '../screens/homescreens/home/Articles';
import Pharmacy from '../screens/homescreens/Pharmacy/Pharmacy';
import MedicineDetails from '../screens/homescreens/Pharmacy/MedicineDetails';
import MyCart from '../screens/homescreens/Pharmacy/MyCart';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Ambulance from '../screens/homescreens/Ambulance/Ambulance';
import { lightTheme, darkTheme } from '../redux/theme/theme';

const Stack = createStackNavigator();


const MainStackNavigator = () => {
  // const auth = useSelector(state => state.auth);
  // console.log('token.............', auth)
   const theme = useSelector(state => state.theme.theme)
      const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
    // auth.token ? <DashboardNavigator /> : <AuthNavigator />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: { backgroundColor: currentTheme.background },
        headerMode: 'screen',
        headerBackTitle: ' ',
        headerBackTitleStyle: {
          color: currentTheme.background,
          backgroundColor : currentTheme.background
        },
      }}>
        <Stack.Screen name='SplashOne' component={SplashOne} />
        <Stack.Screen name='SplashTwo' component={SplashTwo} />
        <Stack.Screen name='SplashThree' component={SplashThree} />
        <Stack.Screen name='SplashFour' component={SplashFour} />
        <Stack.Screen name='StartScreen' component={StartScreen} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
        <Stack.Screen name='VerificationScreen' component={VerificationCodeScreen} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='Home' component={BottomNavigationScreen} />
        <Stack.Screen name='TopDoctors' component={TopDoctors} />
        <Stack.Screen name='FindDoctor' component={FindDoctors} />
        <Stack.Screen name='DoctorDetails' component={DoctorDetail} />
        <Stack.Screen name='Apointment' component={Apointment} />
        <Stack.Screen name='Articles' component={Articles} />
        <Stack.Screen name='Pharmacy' component={Pharmacy} />
        <Stack.Screen name='MedicineDetails' component={MedicineDetails} />
        <Stack.Screen name='MyCart' component={MyCart} />
        <Stack.Screen name='Ambulance' component={Ambulance} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
