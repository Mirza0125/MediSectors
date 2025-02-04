import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../../services/colors'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import PasswordInput from '../../../../components/PasswordInput'
import CustomButton from '../../../../components/CustomButton'


const { width, height } = Dimensions.get('window')



const PasswordManager = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[styles.safeArea]}>
            <LinearGradient
                style={styles.gradient}
                colors={['rgba(82, 209, 198, 1)', 'rgba(48, 173, 162, 1)']}
            >
                <View style={styles.container}>
                    <View style={{ height: 200 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity style={{ left: 18 }} onPress={() => navigation.goBack()}>
                                <Entypo name='chevron-thin-left' size={20} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={{ color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 18 }}>Password Manager</Text>
                            <View>

                            </View>

                        </View>

                        <View style={{ alignSelf: 'flex-end', bottom: 60 }}>
                            <Image source={require('../../../../assets/images/star.png')} resizeMode='cover' style={{ width: 100, height: 100 }} />
                        </View>

                    </View>



                </View>

            </LinearGradient>
            <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
                <View>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 14 }}>Current Password</Text>
                    <PasswordInput placeholder={'Enter your current password'} />
                    <View style={{ alignSelf: 'flex-end' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                            <Text style={{ color: COLORS.greenColor, fontFamily: 'Poppins-Medium' }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 16 }}>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 14 }}>New Password</Text>
                    <PasswordInput placeholder={'Enter your new password'} />

                </View>
                <View style={{ marginTop: 16 }}>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 14 }}>Confirm Password</Text>
                    <PasswordInput placeholder={'Confirm Password'} />

                </View>

                <View style={{ alignSelf: "center", marginTop: 26 }}>
                    <CustomButton title={'Update Password'} style={{ width: 300 }} />
                </View>

            </View>


        </SafeAreaView>

    )
}

export default PasswordManager

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative'
    },
    container: {
        paddingTop: 60,
    },
    gradient: {
        width: '100%',
        height: '13%',

    }
})