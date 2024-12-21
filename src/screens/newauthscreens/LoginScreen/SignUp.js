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

const { width, height } = Dimensions.get('window')


const SignUp = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const [checked, setChecked] = useState(false)
    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
        <SafeAreaView style={[styles.safeArea,{backgroundColor:currentTheme.background}]}>
            <StatusBar barStyle={currentTheme.statusBar} translucent={true} backgroundColor="transparent" />
            <View style={{ flexDirection: 'row', marginTop: 50, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                   <Entypo name='chevron-thin-left' size={20} color={currentTheme.primary} />
                </TouchableOpacity>
                <View style={{ left: 140 }}>
                    <Text style={{ color: currentTheme.primary, fontFamily: 'Inter_18pt-Bold', fontSize: 16 }} >Sign Up</Text>
                </View>
            </View>
            <View style={styles.container}>
                <InputField name={'user'} placeholder={'Enter your name'} />
                <InputField name={'mail'} placeholder={'Enter your email'} />
                <PasswordInput placeholder={'Enter your Password'} />
            </View>

            <View style={{ paddingHorizontal: 25, marginTop: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setChecked(!checked)}>
                        {
                            checked ? <CheckBox2 width={30} height={30} />
                                :
                                <CheckBox width={30} height={30} />
                        }
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: 10, left: 7 }}>
                        <Text style={{ color: currentTheme.primary, fontFamily: 'Inter_18pt-Regular' }}>
                            I agree to the medisectors <Text style={{ color: currentTheme.greenColor }}>Terms of Service</Text> and <Text style={{ color: currentTheme.greenColor, }}>Privacy Policy</Text>
                        </Text>
                    </View>


                </View>
            </View>

            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <CustomButton title={'Sign Up'} style={{ width: width * 0.9 }} onPress={() => setModalVisible(true)} />
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Inter_18pt-Regular', top: 1 }}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{ color: currentTheme.greenColor, fontFamily: 'Inter_18pt-Regular', left: 4 }}>Sign In</Text>
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
                    <View style={{ alignSelf: 'center', width: '89%', backgroundColor: currentTheme.white, height: '50%', padding: 30, borderRadius: 20, alignItems: 'center', top: 200 }}>
                        <Done width={100} height={100} style={{ top: 40 }} />
                        <View style={{ top: 80 }}>
                            <Text style={{ color: currentTheme.primary, fontFamily: 'Inter_18pt-Bold', fontSize: 20, textAlign: 'center' }}>Success</Text>
                            <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Inter_18pt-Regular', fontSize: 16, textAlign: 'center', top: 6 }}>Your account has been successfully registered</Text>

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
        paddingHorizontal: 25,
        paddingTop: 40
    }
})