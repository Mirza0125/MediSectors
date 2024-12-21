import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image, StatusBar, } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../../services/colors'
import { SVG_IMAGES } from '../../../services/images'
import Logo from '../../../assets/images/logo.svg'

const { width, height } = Dimensions.get('window')

const SplashOne = (props) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate('SplashTwo');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <Logo  width={130} height={130}  />
        <Text style={{color:COLORS.white, fontSize:26, fontFamily:'Montserrat-ExtraBold', top:10}}>MediSectors</Text>
      </View>
    </SafeAreaView>
  )
}

export default SplashOne

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor : COLORS.greenColor,
    alignItems:'center'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: height*0.35
  }


})