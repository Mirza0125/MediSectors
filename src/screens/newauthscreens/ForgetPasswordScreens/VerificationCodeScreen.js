import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField'
import CustomButton from '../../../components/CustomButton'
import VerificationFields from '../../../components/VerificationFields'
import { darkTheme, lightTheme } from '../../../redux/theme/theme'
import { useSelector } from 'react-redux'
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window')

const VerificationCodeScreen = () => {
    const navigation = useNavigation()
    const [code, setCode] = useState('');
    const [otpKey, setOtpKey] = useState(0);

    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: currentTheme.background }]}>
            <StatusBar barStyle={currentTheme.statusBar} translucent={true} backgroundColor="transparent" />
            <View style={{ flexDirection: 'row', marginTop: 50, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                   <Entypo name='chevron-thin-left' size={20} color={currentTheme.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: currentTheme.primary, fontFamily: 'Inter_18pt-Bold', fontSize: 24 }}>Enter Verification Code</Text>
                    <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Inter_18pt-Regular', fontSize: 16, marginTop: 6 }}>Enter code that we have sent to your number <Text style={{ color: COLORS.primary }}>08528188*** </Text></Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <VerificationFields
                        changetext={e => {
                            setCode(e);
                        }}
                        keyProp={otpKey}
                    />


                </View>

            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <CustomButton title={'Verify'} style={{ width: width * 0.9 }} onPress={() => navigation.navigate('ResetPassword')} />
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 14 }}>
                    <Text style={{ color: currentTheme.lightGrey, fontFamily: 'Inter_18pt-Regular', top: 1 }}>
                        Didn’t receive the code?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ color: currentTheme.greenColor, fontFamily: 'Inter_18pt-Regular', left: 4 }}>Resend</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default VerificationCodeScreen

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