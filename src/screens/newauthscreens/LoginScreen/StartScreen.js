import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, Dimensions, ViewComponent } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/colors'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('window')

const StartScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />

            <View style={styles.container}>
                <Image source={require('../../../assets/images/OnBoarding/logoV2.png')} resizeMode='cover' style={{ width: 100, height: 100 }} />
                <Text style={{ color: COLORS.greenColor, fontSize: 22, fontFamily: 'Montserrat-ExtraBold', top: 10 }}>MediSectors</Text>
                <View style={{marginTop:40, marginHorizontal:70}}>

                <Text style={{color : COLORS.primary, fontFamily : 'Inter_18pt-Bold', fontSize:22, textAlign:'center'}}>Let’s get started!</Text>
                <Text style={{color : COLORS.lightGrey, fontFamily : 'Inter_18pt-Regular', fontSize:16, textAlign:'center', top:10}}>Login to enjoy the features we’ve provided, and stay healthy!</Text>
                </View>
                <View style={{marginTop:60}}>
                    <CustomButton title={'Login'}  onPress={()=>navigation.navigate('SignIn')} />
                    <CustomButton title={'Sign Up'} style={{backgroundColor : COLORS.white}}  textStyle={{color : COLORS.greenColor}} />

                </View>

            </View>
        </SafeAreaView>

    )
}

export default StartScreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
        position: 'relative'
    },
    container : {
        alignItems:'center',
        justifyContent:'center',
        top : height * 0.26

    }
})