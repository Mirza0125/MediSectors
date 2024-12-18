import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../../services/colors';
import {SVG_IMAGES} from '../../../services/images';
import Button from '../../customcompoents/newComponents/Button';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const {width, height} = Dimensions.get('window');

const SplashTwo = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const backAction = () => {
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{marginTop: 70, alignItems: 'center'}}>
          <Image
            source={require('../../../assets/images/Home/Headline.png')}
            resizeMode="contain"
            style={{width: 350, height: 50, alignSelf: 'center'}}
          />
          <Text
            style={{
              color: 'rgba(128, 141, 158, 1)',
              fontFamily: 'Urbanist-Regular',
              fontSize: 15,
            }}>
              {t('splash_t1')}
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: -34}}>
          {/* <SVG_IMAGES.Splash /> */}
          <Image
            source={require('../../../assets/images/Home/SplashImg.png')}
            resizeMode="contain"
            style={{
              width: width * 1,
              height: height * 0.65,
              position: 'relative',
              marginTop: -68,
            }}
          />
          <Image
            source={require('../../../assets/images/Home/SplashImg2.png')}
            resizeMode="contain"
            style={{
              width: 450,
              height: 230,
              position: 'absolute',
              marginTop: 90,
            }}
          />
        </View>
        <View style={{marginTop: -90}}>
          <Button
            title={`${t('splash_t2')}`}
            press={() => navigation.navigate('OnBoardingOne')}
            textStyle={{fontFamily: 'Poppins-Medium', fontSize: 16}}
          />
          <Button
            title={`${t('splash_t3')}`}
            style={{backgroundColor: 'rgba(11, 11, 11, 1)', marginTop: 20}}
            press={() => navigation.navigate('SignIn')}
            textStyle={{fontFamily: 'Poppins-Medium', fontSize: 16}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashTwo;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});
