import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeBasic from '../screens/homescreens/home/HomeBasic.js';
import AI_Tools from '../screens/homescreens/home/AiTools.js';
import Chats from '../screens/homescreens/home/Chats.js';
import Meetings from '../screens/homescreens/home/Meetings.js';
import AppIntroContext from '../AppContexts/AppIntroContext';
import CustomTooltip from '../screens/customcompoents/CustomTooltip';
import {FONTS} from '../services/fonts';
import {Iconify} from 'react-native-iconify';
import NotificationCountContext from '../AppContexts/NotificationCountContext.js';
import OnlineUserContext from '../AppContexts/OnlineUserContext';
import TabChatScreen from '../screens/tabs/TabChatScreen';
import TabDocsScreen from '../screens/tabs/TabDocsScreen';
import TabHomeScreen from '../screens/tabs/TabHomeScreen';
import TabMeetingsScreen from '../screens/tabs/TabMeetingsScreen';
import TabProfileScreen from '../screens/tabs/TabProfileScreen';
import UserContext from '../AppContexts/UserContext';
import UserStatus from '../services/userStatusSocket.js';
import {apiRequest} from '../services/apiServices.js';
import {scale} from 'react-native-size-matters';
import MyTabsTwo from '../screens/homescreens/home/profile/TopTabNavigationComponent.js';
import MyTabsFour from '../screens/homescreens/home/chat/TopTabsChatScreen.js';
import MyTabsFive from '../screens/homescreens/home/meetings/MeetTopTabs.js';
import { useTranslation } from 'react-i18next';

// import {COLORS} from '../services/colors';

const COLORS = {
  primary: 'white',
  // primary: '#EBBB39',
  secondary: 'rgba(255, 255, 255, 0.5)',
  headingblack: '#262626',
  black: '#011114',
  white: '#ffffff',
  grey: '#858585',
  para: '#1E1E1E',
  bgcolor: '#343434',
  placeHolderColor: '#858585',
  red: '#D42A2A',
  bgGrey: '#FCFCFC',
  philippineGray: '#8B8B8B',
};

const Tab = createBottomTabNavigator();

export default function BottomNavigationScreen() {
  const {t} = useTranslation();
  const {introlSteps, setIntroSteps} = useContext(AppIntroContext);
  const {setOnlineUserList} = useContext(OnlineUserContext);
  const {userDetails} = useContext(UserContext);
  const {
    notificationCount = {
      unreadChat: 0,
      unreadDoc: 0,
      unreadGroupChat: 0,
      unreadNoti: 0,
    },
    setNotificationCount,
  } = useContext(NotificationCountContext);

  // const {notificationCount, setNotificationCount} = useContext(
  //   NotificationCountContext,
  // );

  useEffect(() => {
    getNotificationCount();
    let isMounted = true;

    UserStatus.initializeSocket(userDetails?.userID);

    UserStatus.on('getOnlineUsers', data => {
      if (isMounted) {
        setOnlineUserList(prevList => {
          if (!prevList.includes(data.userID)) {
            return [...prevList, data.userID];
          }

          return prevList;
        });
      }
    });

    UserStatus.on('receive_notification', async data => {
      if (data.includes(userDetails.userID)) {
        getNotificationCount();
      }
    });

    UserStatus.on('getOfflineUsers', data => {
      if (isMounted) {
        setOnlineUserList(prevList =>
          prevList.filter(item => item !== data.userID),
        );
      }
    });

    return () => {
      isMounted = false;
      UserStatus.disconnect();
    };
  }, [userDetails?.userID]);

  const getNotificationCount = async () => {
    const resp = await apiRequest._getNotificationUnread();
    if (resp.status) {
      setNotificationCount(resp.data);
    } else {
      setIsUnread({
        unreadChat: '',
        unreadDoc: '',
        unreadGroupChat: '',
        unreadNoti: '',
      });
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeBasic"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          // borderTopWidth: 0.2,
          borderTopColor: '#24262F',
          overflow: 'hidden',
          height: Platform.OS == 'ios' ? 92 : 78,
          backgroundColor:'#24262F'
        },
      }}>
      <Tab.Screen
        name="HomeBasic"
        options={({navigation}) => ({
          headerShown: false,

          tabBarIcon: ({focused, color}) => (
            <CustomTooltip
              isVisible={introlSteps.tabHomeIcon}
              placement="top"
              label="This is home screen you will see upcoming meetings, assigned teachers, free lessons and recent documents here."
              onNext={{
                ...introlSteps,
                tabHomeIcon: false,
                tabMeetingIcon: true,
              }}
              onPrevious={{
                ...introlSteps,
                homeUpcomingMeetings: true,
                tabHomeIcon: false,
              }}
              children={
                <View
                  style={[
                    styles.iconFlex,
                    introlSteps.tabHomeIcon && {paddingVertical: 8},
                  ]}>
                  {focused ? (
                    <Iconify
                      focused={focused}
                      icon="solar:home-2-outline"
                      size={25}
                      color={COLORS.primary}
                    />
                  ) : (
                    <Iconify
                      focused={focused}
                      icon="solar:home-2-outline"
                      size={25}
                      color={COLORS.secondary}
                    />
                  )}

                  <Text
                    adjustsFontSizeToFit={true}
                    style={[
                      styles.tabtext,
                      {
                        color: focused ? COLORS.primary : COLORS.secondary,
                        fontFamily:  'Poppins-Medium'
                      },
                    ]}>
                    {t('home')}
                  </Text>
                </View>
              }
            />
          ),
        })}
        component={HomeBasic}
      />
      <Tab.Screen
        name="Meetings"
        options={({navigation}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <CustomTooltip
              isVisible={introlSteps.tabMeetingIcon}
              placement="top"
              label="This is meeting your will be upcoming and past meetings here."
              onNext={{
                ...introlSteps,
                tabMeetingIcon: false,
                tabChatsIcon: true,
              }}
              onPrevious={{
                ...introlSteps,
                tabHomeIcon: true,
                tabMeetingIcon: false,
              }}
              children={
                <View
                  style={[
                    styles.iconFlex,
                    introlSteps.tabMeetingIcon && {paddingVertical: 8},
                  ]}>
                  {focused ? (
                    <Iconify
                      focused={focused}
                      icon="fluent:meet-now-28-regular"
                      size={26}
                      color={COLORS.primary}
                    />
                  ) : (
                    <Iconify
                      focused={focused}
                      icon="fluent:meet-now-28-regular"
                      size={26}
                      color={COLORS.secondary}
                    />
                  )}

                  <Text
                    adjustsFontSizeToFit={true}
                    style={[
                      styles.tabtext,
                      {
                        color: focused ? COLORS.primary : COLORS.secondary,
                        fontFamily: 'Poppins-Medium'
                      },
                    ]}>
                    {t('meetings')}
                  </Text>
                </View>
              }
            />
          ),
        })}
        component={MyTabsFive}
      />
      <Tab.Screen
        name="Chat"
        options={({navigation}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <CustomTooltip
              isVisible={introlSteps.tabChatsIcon}
              placement="top"
              label="This is Chats your chats like individual and group will be here."
              onNext={{
                ...introlSteps,
                tabChatsIcon: false,
                tabDocumentIcon: true,
              }}
              onPrevious={{
                ...introlSteps,
                tabMeetingIcon: true,
                tabChatsIcon: false,
              }}
              children={
                <View
                  style={[
                    styles.iconFlex,
                    introlSteps.tabChatsIcon && {paddingVertical: 8},
                  ]}>
                  {focused ? (
                    <Iconify
                      focused={focused}
                      icon="fluent:chat-20-regular"
                      size={26}
                      color={COLORS.primary}
                    />
                  ) : (
                    <Iconify
                      focused={focused}
                      icon="fluent:chat-20-regular"
                      size={26}
                      color={COLORS.secondary}
                    />
                  )}

                  {notificationCount.unreadChat > 0 && (
                    <Text style={styles.countStyle}>
                      {notificationCount.unreadChat}
                    </Text>
                  )}

                  <Text
                    adjustsFontSizeToFit={true}
                    style={[
                      styles.tabtext,
                      {
                        color: focused ? COLORS.primary : COLORS.secondary,
                        fontFamily: 'Poppins-Medium'
                      },
                    ]}>
                    {t('chat')}
                  </Text>
                </View>
              }
            />
          ),
        })}
        component={MyTabsFour}
      />
      <Tab.Screen
        name="AiTools"
        options={({navigation}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <CustomTooltip
              isVisible={introlSteps.tabDocumentIcon}
              placement="top"
              label="This is Documents your uploaded documents will be here."
              onNext={{
                ...introlSteps,
                tabDocumentIcon: false,
                tabProfileIcon: true,
              }}
              onPrevious={{
                ...introlSteps,
                tabChatsIcon: true,
                tabDocumentIcon: false,
              }}
              children={
                <View
                  style={[
                    styles.iconFlex,
                    introlSteps.tabDocumentIcon && {paddingVertical: 8},
                  ]}>
                  {focused ? (
                    <Image source={require('../assets/images/Home/AI2.png')}  resizeMode='contain' style={{width:26, height:24}} />

                  ) : (
                    <Image source={require('../assets/images/Home/AI1.png')}  resizeMode='contain' style={{width:26, height:26}} />

                  )}

                  {notificationCount.unreadDoc > 0 && (
                    <Text style={styles.countStyle}>
                      {notificationCount.unreadDoc}
                    </Text>
                  )}

                  <Text
                    adjustsFontSizeToFit={true}
                    style={[
                      styles.tabtext,
                      {
                        color: focused ? COLORS.primary : COLORS.secondary,
                        fontFamily: 'Poppins-Medium'
                      },
                    ]}>
                   {t('Ai')}
                  </Text>
                </View>
              }
            />
          ),
        })}
        component={AI_Tools}
      />
      <Tab.Screen
        name="Profile"
        options={({navigation}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <CustomTooltip
              isVisible={introlSteps.tabProfileIcon}
              placement="top"
              label="This is Profile you manage your profile details here."
              onNext={{
                ...introlSteps,
                tabProfileIcon: false,
              }}
              onPrevious={{
                ...introlSteps,
                tabDocumentIcon: true,
                tabProfileIcon: false,
              }}
              children={
                <View
                  style={[
                    styles.iconFlex,
                    introlSteps.tabProfileIcon && {paddingVertical: 8},
                  ]}>
                  {focused ? (
                    <Image source={require('../assets/images/Home/profileActive.png')}  resizeMode='contain' style={{width:24, height:22}} />
                    // <Iconify
                    //   focused={focused}
                    //   icon="ph:user-circle-fill"
                    //   size={27}
                    //   color={COLORS.primary}
                    // />
                  ) : (
                    <Image source={require('../assets/images/Home/profile1.png')}  resizeMode='contain' style={{width:24, height:22}} />

                    // <Iconify
                    //   focused={focused}
                    //   icon="ph:user-circle-light"
                    //   size={27}
                    //   color={COLORS.secondary}
                    // />
                  )}

                  <Text
                    adjustsFontSizeToFit={true}
                    style={[
                      styles.tabtext,
                      {
                        color: focused ? COLORS.primary : COLORS.secondary,
                        fontFamily: 'Poppins-Medium', top:1
                      },
                    ]}>
                    {t('profile')}
                  </Text>
                </View>
              }
            />
          ),
        })}
        component={MyTabsTwo}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabtext: {
    fontSize: scale(8),
    textAlign: 'center',
    paddingTop: 8,
  },
  iconFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 5,
    top:5
  },
  countStyle: {
    position: 'absolute',
    top: -10,
    right: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    width: 20,
    height: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.white,
    fontSize: 12,
    fontFamily: FONTS.BalooBhai2Medium,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
});
