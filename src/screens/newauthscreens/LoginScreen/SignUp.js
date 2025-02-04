import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField'
import PasswordInput from '../../../components/PasswordInput'
import CustomButton from '../../../components/CustomButton'
import SocialField from '../../../components/SocialField'
import Done from '../../../assets/images/Done.svg'
import CheckBox from '../../../assets/images/Checkbox.svg'
import CheckBox2 from '../../../assets/images/Checkbox2.svg'
import { lightTheme, darkTheme } from '../../../redux/theme/theme'
import { useSelector } from 'react-redux'
import Entypo from 'react-native-vector-icons/Entypo';
import { Checkbox } from 'react-native-paper';
import { apiRequest } from '../../../services/apiServices'

const { width, height } = Dimensions.get('window')


const SignUp = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const [checked, setChecked] = useState(false)
    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(userName, password, email)

    const handleRegister = () => {
        const payload = {
            userName: userName,
            email: email,
            password: password
        }
        userRegisteration(payload)
    }

    const userRegisteration = async (payload) => {
        const resp = await apiRequest._registerUser(payload)
        console.log('registeration..................', resp.data)
        if (resp?.status >= 200 && resp?.status < 300) {
            setModalVisible(true)
        }
        else {

        }

    }


    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: currentTheme.background }]}>
            <StatusBar barStyle={currentTheme.statusBar} translucent={true} backgroundColor="transparent" />
            <View style={{ flexDirection: 'row', marginTop: 50, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-thin-left' size={20} color={currentTheme.primary} />
                </TouchableOpacity>
                <View style={{ left: 140 }}>
                    <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 16 }} >Sign Up</Text>
                </View>
            </View>
            <View style={styles.container}>
                <InputField name={'user'} placeholder={'Enter your name'} value={userName} onChangeText={(t) => setUserName(t)} />
                <InputField name={'mail'} placeholder={'Enter your email'} value={email} onChangeText={(t) => setEmail(t)} />
                <PasswordInput placeholder={'Enter your Password'} value={password} onChangeText={(t) => setPassword(t)} />
            </View>

            <View style={{ paddingHorizontal: 25, marginTop: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <TouchableOpacity onPress={() => setChecked(!checked)}>
                        {
                            checked ? <CheckBox2 width={30} height={30} />
                                :
                                <CheckBox width={30} height={30} />
                        }
                    </TouchableOpacity> */}
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        uncheckedColor={COLORS.lightGrey}
                        color={COLORS.greenColor}
                    />
                    <View style={{ marginHorizontal: 6, left: 3 }}>
                        <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Regular' }}>
                            I agree to the medisectors <Text style={{ color: currentTheme.greenColor }}>Terms of Service </Text>
                            &</Text>
                        <Text style={{ color: currentTheme.greenColor, top: 2 }}>Privacy Policy</Text>
                    </View>


                </View>
            </View>

            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <CustomButton title={'Sign Up'} style={{ width: width * 0.9 }} onPress={handleRegister} />
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Poppins-Regular', top: 1 }}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{ color: currentTheme.greenColor, fontFamily: 'Poppins-Regular', left: 4 }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>



            <Modal
                animationType='fade'
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                transparent={true}
            >
                <StatusBar translucent backgroundColor={currentTheme.modalOverlay} barStyle="dark-content" />

                <View style={{ height: '100%', position: 'absolute', width: '100%', backgroundColor: currentTheme.modalOverlay, alignItems: 'center' }}>
                    <View style={{ alignSelf: 'center', width: '89%', backgroundColor: currentTheme.socialField, height: '50%', padding: 30, borderRadius: 20, alignItems: 'center', top: 200 }}>
                        <Done width={100} height={100} style={{ top: 40 }} />
                        <View style={{ top: 80 }}>
                            <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 20, textAlign: 'center' }}>Success</Text>
                            <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 16, textAlign: 'center', top: 6 }}>Your account has been successfully registered</Text>

                        </View>
                        <CustomButton title={'Login'} style={{ top: 110, width: 200 }} onPress={() => navigation.navigate('SignIn')} />

                    </View>

                </View>

            </Modal>
        </SafeAreaView>

    )
}

export default SignUp

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