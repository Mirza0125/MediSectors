import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField'
import CustomButton from '../../../components/CustomButton'
import PasswordInput from '../../../components/PasswordInput'
import Done from '../../../assets/images/Done.svg'
import { darkTheme, lightTheme } from '../../../redux/theme/theme'
import { useSelector } from 'react-redux'
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window')

const ResetPassword = () => {
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
            </View>
            <View style={styles.container}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 24 }}>Create New Password</Text>
                    <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 16, marginTop: 6 }}>Create your new password to login</Text>
                </View>
                <View style={{ marginTop: 40, alignSelf: 'center' }}>
                    <PasswordInput placeholder={'Create Password'} />
                    <PasswordInput placeholder={'Confirm Password'} />
                </View>

            </View>
            <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
                <CustomButton title={'Create Password'} style={{ width: width * 0.9 }} onPress={() => setModalVisible(true)} />
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
                            <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 16, textAlign: 'center', top: 6 }}>You have successfully reset your password.</Text>

                        </View>
                        <CustomButton title={'Login'} style={{ top: 110, width: 200 }} onPress={() => navigation.navigate('SignIn')} />

                    </View>

                </View>

            </Modal>
        </SafeAreaView>

    )
}

export default ResetPassword

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
        position: 'relative'
    },
    container: {
        paddingHorizontal: 18,
        paddingTop: 40
    }
})