import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField'
import CustomButton from '../../../components/CustomButton'
import { darkTheme, lightTheme } from '../../../redux/theme/theme'
import { useSelector } from 'react-redux'
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window')

const ForgetPassword = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState(true)
    const [phone, setPhone] = useState(false)

    const toggle = () => {
        setEmail(false)
        setPhone(true)
    }
    const toggle2 = () => {
        setEmail(true)
        setPhone(false)
    }

    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
        <SafeAreaView style={[styles.safeArea,{backgroundColor:currentTheme.background}]}>
            <StatusBar barStyle={currentTheme.statusBar} translucent={true} backgroundColor="transparent" />
            <View style={{ flexDirection: 'row', marginTop: 50, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                   <Entypo name='chevron-thin-left' size={20} color={currentTheme.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: currentTheme.primary, fontFamily: 'Inter_18pt-Bold', fontSize: 24 }}>Forgot Your Password?</Text>
                    <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Inter_18pt-Regular', fontSize: 16, marginTop: 6 }}>Enter your email or your phone number, we will send you confirmation code</Text>
                </View>
                <View style={{ marginTop: 30, alignSelf: 'center' }}>
                    <View
                        style={{
                            width: width * 0.9,
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: currentTheme.inputFieldBorder,
                            backgroundColor: currentTheme.inputField,
                            borderRadius: 30,
                            height: 60,
                            marginVertical: 16,
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity onPress={toggle2}>
                            <View style={{ width: 160, height: 48, backgroundColor: email ? currentTheme.toggleColor : 'transparent', alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                                <Text style={{ color: email ? currentTheme.greenColor : currentTheme.lightGrey, fontFamily: 'Inter_18pt-Regular', fontSize: 14 }}>Email</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggle}>
                            <View style={{ width: 160, height: 48, backgroundColor: phone ? currentTheme.toggleColor : 'transparent', alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                                <Text style={{ color: phone ? currentTheme.greenColor : currentTheme.lightGrey, fontFamily: 'Inter_18pt-Regular', fontSize: 14 }}>Phone</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {
                        email ? <InputField name={'mail'} placeholder={'Enter your email'} />
                            :
                            <InputField name={'phone'} placeholder={'Enter your phone'} />
                    }

                </View>
            </View>
            <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                <CustomButton title={'Reset Password'} style={{ width: width * 0.9 }} onPress={() => navigation.navigate('VerificationScreen')} />
            </View>
        </SafeAreaView>

    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative'
    },
    container: {
        paddingHorizontal: 25,
        paddingTop: 40
    }
})