import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/colors'
import OnBoardingModal from '../../../components/OnBoardingModal';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../../../redux/theme/theme';

const { width, height } = Dimensions.get('window')

const SplashThree = () => {
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme.theme)
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor : currentTheme.background}]}>
      <StatusBar barStyle={currentTheme.statusBar} translucent={true} backgroundColor="transparent" />
      <View style={{ alignSelf: 'flex-end', top: 50, right: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate('StartScreen')}>
          <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 14 }}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image source={require('../../../assets/images/OnBoarding/patients.png')} resizeMode='cover' style={{ width: 360, height: 360 }} />
      </View>

      <OnBoardingModal text={'Consult only with a doctor you trust'} two={true} onPress={() => navigation.navigate('SplashFour')} />
    </SafeAreaView>

  )
}

export default SplashThree

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

})
