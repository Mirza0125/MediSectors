// import 'react-native-gesture-handler';
// // import 'react-native-reanimated';

// import {KeyboardAvoidingView, Platform, StatusBar, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// // import {ToastProvider} from 'react-native-toast-notifications';
// import Toast from 'react-native-toast-message';
// import {PersistGate} from 'redux-persist/integration/react';
// // import AppDataContext from './src/AppContexts/AppDataContext';
// // import AppIntroContext from './src/AppContexts/AppIntroContext';
// // import BadwordContext from './src/AppContexts/BadwordContext';
// import {COLORS} from './src/services/colors';
// // import DeviceContext from './src/AppContexts/DeviceContext';
// // import LoaderScreen from './src/screens/customcompoents/LoaderScreen';
// // import LoadingContext from './src/AppContexts/LoadingContext';
// import MainStackNavigator from './src/routers/StackNavigator';
// import {NavigationContainer, DarkTheme} from '@react-navigation/native';
// // import NotificationCountContext from './src/AppContexts/NotificationCountContext';
// // import OnlineUserContext from './src/AppContexts/OnlineUserContext';
// // import PushNotificationController from './src/services/PushNotificationController';
// // import UserContext from './src/AppContexts/UserContext';
// import {apiRequest} from './src/services/apiServices';
// import {Provider} from 'react-redux';
// import {store} from './src/redux/Store';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {persistor} from './src/redux/Store';
// import {Button, Menu, Divider, PaperProvider} from 'react-native-paper';
// import '@react-native-firebase/app';
// import './firebase'
// // import { setCustomText } from 'react-native-global-props';

// function App() {
//   const [isLoading, setLoading] = useState(false);
//   const [deviceToken, setDeviceToken] = useState('');
//   const [userDetails, setUserDetails] = useState({});
//   const [onlineUserList, setOnlineUserList] = useState([]);
//   const [badwords, setBadwords] = useState([]);
//   const [notificationCount, setNotificationCount] = useState({
//     unreadChat: '',
//     unreadDoc: '',
//     unreadGroupChat: '',
//     unreadNoti: '',
//   });
//   const [homeData, setHomeData] = useState({
//     upcomingMeeting: [],
//     pastMeetings: [],
//     dateMeetings: [],
//     assignedTeachers: [],
//     freeLessons: [],
//     recentDocuments: [],
//     studentList: [],
//   });
//   const [introlSteps, setIntroSteps] = useState({
//     headerLesson: false,
//     headerNotification: false,
//     homeUpcomingMeetings: false,
//     homeAssignedTeachers: false,
//     homeFreeLessons: false,
//     homeRecentDocuments: false,
//     HomeReferCard: false,
//     tabHomeIcon: false,
//     tabMeetingIcon: false,
//     tabChatsIcon: false,
//     tabDocumentIcon: false,
//     tabProfileIcon: false,
//   });

//   const customTextProps = {
//     style: {
//       fontFamily: 'Poppins-Regular',
//     },
//   };

//   useEffect(() => {
//     getBadWords();
//     setCustomText(customTextProps);
//   }, []);

//   const getBadWords = async () => {
//     const resp = await apiRequest._getBadWords();
//     if (resp?.status) {
//       const names = resp?.data.map(item => item.name);
//       setBadwords(names);
//     }
//   };


//   return (
//     <>
//       <PaperProvider>
//         <GestureHandlerRootView>
//           <KeyboardAvoidingView
//             style={{flex: 1}}
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//             <NavigationContainer independent="true" theme={DarkTheme}>
//               <StatusBar
//                 barStyle={'light-content'}
//                 backgroundColor={COLORS.backgroundColor}
//               />
//               <LoadingContext.Provider value={{isLoading, setLoading}}>
//                 <NotificationCountContext.Provider
//                   value={{notificationCount, setNotificationCount}}>
//                   <BadwordContext.Provider value={{badwords, setBadwords}}>
//                     <AppIntroContext.Provider
//                       value={{introlSteps, setIntroSteps}}>
//                       <DeviceContext.Provider
//                         value={{deviceToken, setDeviceToken}}>
//                         <UserContext.Provider
//                           value={{userDetails, setUserDetails}}>
//                           <AppDataContext.Provider
//                             value={{homeData, setHomeData}}>
//                             <OnlineUserContext.Provider
//                               value={{onlineUserList, setOnlineUserList}}>
//                               <LoaderScreen />
//                               <Provider store={store}>
//                                 <PersistGate
//                                   loading={null}
//                                   persistor={persistor}>
//                                   <MainStackNavigator />
//                                 </PersistGate>
//                               </Provider>
//                               <PushNotificationController />
//                             </OnlineUserContext.Provider>
//                           </AppDataContext.Provider>
//                         </UserContext.Provider>
//                       </DeviceContext.Provider>
//                     </AppIntroContext.Provider>
//                   </BadwordContext.Provider>
//                 </NotificationCountContext.Provider>
//               </LoadingContext.Provider>
//             </NavigationContainer>
//             <Toast ref={ref => Toast.setRef(ref)} />
//           </KeyboardAvoidingView>
//         </GestureHandlerRootView>
//       </PaperProvider>
//     </>
//   );
// }

// export default App;


import { View, Text } from 'react-native'
import React from 'react'
import MainStackNavigator from './src/routers/StackNavigator'

const App = () => {
  return (
    <MainStackNavigator />
  )
}

export default App