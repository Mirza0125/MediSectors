import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, Dimensions, ViewComponent } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Logo2 from '../../../assets/images/logo2.svg'
import ToggleSwitch from 'toggle-switch-react-native'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../../redux/theme/Actions'
import { lightTheme, darkTheme } from '../../../redux/theme/theme'

const { width, height } = Dimensions.get('window')

const StartScreen = () => {
    const navigation = useNavigation()
    const [isOn, setIsOn] = useState(false)
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;


    const toggle = () => {
        setIsOn(!isOn)
        dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'))
    }



    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: currentTheme.background }]}>
            <StatusBar barStyle={currentTheme.statusBar} translucent={true} backgroundColor="transparent" />
            <View style={{ top: 40, alignSelf: 'flex-end', right: 20 }}>
                <ToggleSwitch
                    isOn={isOn}
                    onColor={currentTheme.greenColor}
                    offColor={currentTheme.lightGrey}
                    size="medium"
                    onToggle={toggle}
                />

                
            </View>
            <View style={styles.container}>
                <Logo2 width={100} height={100} />
                <Text style={{ color: currentTheme.greenColor, fontSize: 22, fontFamily: 'Montserrat-ExtraBold', top: 10 }}>MediSectors</Text>
                <View style={{ marginTop: 40, marginHorizontal: 70 }}>
                    <Text style={{ color: currentTheme.primary, fontFamily: 'Inter_18pt-Bold', fontSize: 22, textAlign: 'center' }}>Let’s get started!</Text>
                    <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Inter_18pt-Regular', fontSize: 16, textAlign: 'center', top: 10 }}>Login to enjoy the features we’ve provided, and stay healthy!</Text>
                </View>
                <View style={{ marginTop: 60 }}>
                    <CustomButton title={'Login'} onPress={() => navigation.navigate('SignIn')} />
                    <CustomButton title={'Sign Up'} style={{ backgroundColor: currentTheme.white }} textStyle={{ color: currentTheme.greenColor }} onPress={() => navigation.navigate('SignUp')} />
                </View>
            </View>
        </SafeAreaView>

    )
}

export default StartScreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        top: height * 0.23

    }
})