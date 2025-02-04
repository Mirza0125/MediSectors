import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../../services/colors'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import ToggleSwitch from 'toggle-switch-react-native'
import { useSSR } from 'react-i18next'


const { width, height } = Dimensions.get('window')



const Notifications = () => {
    const navigation = useNavigation();
    const [isOn, setIsOn] = useState(false)
    const [isOn2, setIsOn2] = useState(false)


    const toggle1 = ()=> {
        setIsOn(!isOn)
    }

    const toggle2 = ()=> {
        setIsOn2(!isOn2)
    }
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
                            <Text style={{ color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 18 }}>Notifications Settings</Text>
                            <View>

                            </View>

                        </View>

                        <View style={{ alignSelf: 'flex-end', bottom: 60 }}>
                            <Image source={require('../../../../assets/images/star.png')} resizeMode='cover' style={{ width: 100, height: 100 }} />
                        </View>

                    </View>



                </View>

            </LinearGradient>
            <View style={{ paddingHorizontal: 20, paddingTop: 24 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 14 }}>Email Notifications</Text>

                    <ToggleSwitch
                        isOn={isOn}
                        onColor={'rgba(48, 173, 162, 1)'}
                        offColor={COLORS.lightGrey}
                        size="medium"
                        onToggle={toggle1}
                    />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' , marginTop:20}}>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 14 }}>Phone Notifications</Text>

                    <ToggleSwitch
                        isOn={isOn2}
                        onColor={'rgba(48, 173, 162, 1)'}
                        offColor={COLORS.lightGrey}
                        size="medium"
                        onToggle={toggle2}
                    />

                </View>

            </View>


        </SafeAreaView>

    )
}

export default Notifications

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