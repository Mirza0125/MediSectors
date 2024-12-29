import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField'
import PasswordInput from '../../../components/PasswordInput'
import CustomButton from '../../../components/CustomButton'
import SocialField from '../../../components/SocialField'
import Done from '../../../assets/images/Done.svg'
const { width, height } = Dimensions.get('window')
import { lightTheme, darkTheme } from '../../../redux/theme/theme'
import { useSelector } from 'react-redux'
import Entypo from 'react-native-vector-icons/Entypo';

const SignIn = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
        <SafeAreaView style={[styles.safeArea,{backgroundColor:currentTheme.background}]}>
            <StatusBar barStyle={currentTheme.statusBar} translucent={true} backgroundColor="transparent" />
            <View style={{ flexDirection: 'row', marginTop: 50, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                   <Entypo name='chevron-thin-left' size={20} color={currentTheme.primary} />
                </TouchableOpacity>
                <View style={{ left: 150 }}>
                    <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 16 }} >Login</Text>
                </View>
            </View>
            <View style={styles.container}>
            <InputField name={'mail'} placeholder={'Enter your email'} />
            <PasswordInput placeholder={'Enter your Password'} />
                <View style={{ alignSelf: 'flex-end' }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('ForgetPassword')}>
                        <Text style={{ color: currentTheme.greenColor, fontFamily: 'Poppins-Medium' }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 40 }}>

                    <CustomButton title={'Login'} style={{ width: width * 0.9 }} onPress={() => setModalVisible(true)} />
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 14 }}>
                        <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Poppins-Regular', top: 1 }}>
                            Don’t have an account?
                        </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                            <Text style={{ color: currentTheme.greenColor, fontFamily: 'Poppins-Regular', left: 4 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 38 }}>
                    <View style={{ width: 160, height: 0.5, backgroundColor: currentTheme.lightGrey }}></View>
                    <Text style={{ color: currentTheme.lightGrey, marginHorizontal: 10 }}>OR</Text>
                    <View style={{ width: 160, height: 0.5, backgroundColor: currentTheme.lightGrey }}></View>
                </View>

                <View style={{ marginTop: 25 }}>
                    <SocialField text={'Sign in with Google'} img={currentTheme.googleIcon} />
                    <SocialField text={'Sign in with Apple'} img={currentTheme.appleIcon} />
                    <SocialField text={'Sign in with Facebook'} img={currentTheme.facebookIcon} />

                </View>

            </View>
            <Modal
                animationType='fade'
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                transparent={true}
            >

                <View style={{ height: '100%', position: 'absolute', width: '100%', backgroundColor: currentTheme.modalOverlay, alignItems: 'center' }}>
                    <View style={{ alignSelf: 'center', width: '89%', backgroundColor: currentTheme.socialField, height: '50%', padding: 30, borderRadius: 20, alignItems: 'center', top: 200 }}>
                        <Done width={100} height={100} style={{ top: 40 }} />
                        <View style={{ top: 80 }}>
                            <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 20, textAlign: 'center' }}>Yeay! Welcome Back</Text>
                            <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 16, textAlign: 'center', top: 6 }}>Once again you login successfully into medidoc app</Text>

                        </View>
                        <CustomButton title={'Go to home'} style={{ top: 110, width: 200 }} onPress={()=>navigation.navigate('Home')} />

                    </View>

                </View>

            </Modal>
        </SafeAreaView>

    )
}

export default SignIn

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
        paddingTop: 40
    }
})