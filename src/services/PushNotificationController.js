import {PermissionsAndroid, Platform} from 'react-native';

import {API_BASE_URL} from './apiServices';
// import DeviceContext from '../AppContexts/DeviceContext';
import messaging from '@react-native-firebase/messaging';
import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

const PushNotificationController = () => {
  const navigation = useNavigation();
  const {setDeviceToken} = useContext(DeviceContext);

  const initializeNotification = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 13) {
      try {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        await handleNotificationPermission();
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    } else if (Platform.OS === 'ios') {
      try {
        await handleNotificationPermission();
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    }
  };

  const handleNotificationPermission = async () => {
    const authorizationStatus = await messaging().requestPermission();

    if (
      authorizationStatus == messaging.AuthorizationStatus.AUTHORIZED ||
      authorizationStatus == messaging.AuthorizationStatus.PROVISIONAL
    ) {
      const token = await messaging().getToken();
      setDeviceToken(token);

      messaging().onNotificationOpenedApp(remoteMessage => {

        const messageData = remoteMessage.data;

        if (messageData.type == 'chat') {
          navigation.navigate('ChatMessages', {
            profileImage: messageData.profileImage,
            studentFirstName: messageData.fullName,
            studentLastName: '',
            userID: messageData.userID,
            role: messageData.role,
          });
        }

        if (messageData.type == 'group-chat') {
          navigation.navigate('GroupMessages', {
            profileImage: messageData.profileImage,
            studentFirstName: messageData.fullName,
            userID: messageData.userID,
            studentLastName: '',
            role: '',
          });
        }
      });

      messaging().onMessage(async remoteMessage => {
      });
    }
  };

  initializeNotification();

  messaging().setBackgroundMessageHandler(async remoteMessage => {
  });
};

export default PushNotificationController;
