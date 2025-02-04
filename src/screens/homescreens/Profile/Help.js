import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../../components/CustomButton'
import Logout from '../../../assets/images/Logout.svg'

const { width, height } = Dimensions.get('window')

const data = [
    {
        id: 1,
        name: 'Website',
        icon: 'web',
    },
    {
        id: 2,
        name: 'Whatsapp',
        icon: 'whatsapp',

    },
    {
        id: 3,
        name: 'Facebook',
        icon: 'facebook',

    },
    {
        id: 4,
        name: 'Instagram',
        icon: 'instagram',

    },
]

const Help = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false)
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
                            <Text style={{ color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 18 }}>Help Center</Text>
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
                <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 18 }}>Contact Us</Text>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginVertical: 12 }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                                    // onPress={() => item.name === 'Delete Account' ? setModalVisible(true) : navigation.navigate(item.navigationScreen)}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 40, height: 40, backgroundColor: COLORS.lightGreen2, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                                            <MaterialCommunityIcons name={item.icon} size={20} color={COLORS.greenColor} />
                                        </View>
                                        <View style={{ left: 20 }}>
                                            <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium' }}>{item.name}</Text>
                                        </View>

                                    </View>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate(item.navigationScreen)}
                                    >
                                        <AntDesign name='right' size={20} color={COLORS.lightGrey} />
                                    </TouchableOpacity>

                                </TouchableOpacity>
                            </View>
                        )
                    }}

                />


            </View>


            <Modal
                animationType='fade'
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                transparent={true}
            >

                <View style={{ height: '100%', position: 'absolute', width: '100%', backgroundColor: COLORS.modalOverlay, alignItems: 'center' }}>
                    <View style={{ alignSelf: 'center', width: '89%', backgroundColor: COLORS.white, height: '50%', padding: 30, borderRadius: 30, alignItems: 'center', top: 200 }}>
                        <Logout width={100} height={100} style={{}} />
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 20, textAlign: 'center' }}>Are you sure to delete your account?</Text>
                        </View>

                        <View style={{ marginTop: 14 }}>
                            <CustomButton title={'Yes'} style={{ width: 200 }} onPress={() => navigation.navigate('SignUp')} />
                            <CustomButton title={'No'} style={{ width: 200, backgroundColor: COLORS.lightGrey, borderColor: 'transparent' }} onPress={() => setModalVisible(false)} />
                        </View>


                    </View>

                </View>

            </Modal>
        </SafeAreaView>

    )
}

export default Help

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