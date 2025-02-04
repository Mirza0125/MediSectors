import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Modal, } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../../components/CustomButton'
import Logout from '../../../assets/images/Logout.svg'
import { RadioButton } from 'react-native-paper';

const { width, height } = Dimensions.get('window')

const data = [
    {
        id: 1,
        name: 'Notification Settings',
        icon: 'bell-alt',
        navigationScreen: 'Notifications'
    },
    {
        id: 2,
        name: 'Password Manager',
        icon: 'key',
        navigationScreen: 'PasswordManger'

    },
    {
        id: 3,
        name: 'Delete Account',
        icon: 'person',
        navigationScreen: 'null'

    },
]

const PaymentMethods = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false)
    const [checked, setChecked] = useState('first');

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
                            <Text style={{ color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 18 }}>Payment Methods</Text>
                            <View>

                            </View>

                        </View>

                        <View style={{ alignSelf: 'flex-end', bottom: 60 }}>
                            <Image source={require('../../../assets/images/star.png')} resizeMode='cover' style={{ width: 100, height: 100 }} />
                        </View>

                    </View>



                </View>

            </LinearGradient>
            <View style={{ paddingHorizontal: 18, paddingTop: 24 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 8, height: 60, borderTopLeftRadius: 8, backgroundColor: 'orange', borderBottomLeftRadius: 8 }}>

                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '97%', height: 60, borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'rgba(232, 232, 232, 0.5)', paddingRight
                            : 10
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/images/card.png')} resizeMode='contain' style={{ width: 50, height: 40 }} />
                            <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', left: 10, top: 7 }}>Credit/Debit Card</Text>
                        </View>
                        <View>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                                color={COLORS.greenColor}
                            />
                        </View>

                    </View>

                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={{ width: 8, height: 60, borderTopLeftRadius: 8, backgroundColor: 'blue', borderBottomLeftRadius: 8 }}>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '97%', height: 60, borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'rgba(232, 232, 232, 0.5)', paddingRight: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/images/paypal.png')} resizeMode='contain' style={{ width: 50, height: 40 }} />
                            <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', left: 10, top: 7 }}>Paypal</Text>
                        </View>
                        <View>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                                color={COLORS.greenColor}

                            />
                        </View>

                    </View>

                </View>

            </View>



        </SafeAreaView>

    )
}

export default PaymentMethods

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