import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/colors'
import OnBoardingModal from '../../../components/OnBoardingModal';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

const SplashThree = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
      <View style={{ alignSelf: 'flex-end', top: 50, right: 30 }}>
        <TouchableOpacity>
          <Text style={{ color: COLORS.lightGrey, fontFamily: 'Inter_18pt-Regular', fontSize: 14 }}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image source={require('../../../assets/images/OnBoarding/patients.jpg')} resizeMode='cover' style={{ width: 360, height: 360 }} />
      </View>

      <OnBoardingModal text={'Consult only with a doctor you trust'} two={true} onPress={()=> navigation.navigate('SplashFour')}  />
    </SafeAreaView>

  )
}

export default SplashThree

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
    position: 'relative'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
 
})
