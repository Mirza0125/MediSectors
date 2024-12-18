import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image, StatusBar, } from 'react-native'
import React,{useEffect} from 'react'
import { COLORS } from '../../../services/colors'
import { SVG_IMAGES } from '../../../services/images'

const {width, height} = Dimensions.get('window')

const SplashOne = (props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          props.navigation.navigate('SplashTwo'); 
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);
    
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <StatusBar  /> */}

    <View style={styles.container}>
        {/* <SVG_IMAGES.Splash /> */}
        <Image source={require('../../../assets/images/Home/SplashImg.png')} resizeMode='contain' style={{width:width, height:height*0.9, opacity:10, position:'relative'}} />
        <Image source={require('../../../assets/images/Home/Headline.png')} resizeMode='contain' style={{width:350, height:150, position:'absolute'}} />


    </View>
    </SafeAreaView>
  )
}

export default SplashOne

const styles = StyleSheet.create({
    safeArea : {
        flex:1,
        backgroundColor : COLORS.backgroundColor,
        position:'relative'
    },
    container : {
        alignItems:'center',
        justifyContent:'center'
    }


})