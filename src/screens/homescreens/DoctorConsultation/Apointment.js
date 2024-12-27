import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, TextInput, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../services/colors';
import { Shadow } from 'react-native-shadow-2';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DayDate from '../../../components/DayDate';
import ChatButton from '../../../assets/images/Button_Chat.svg'
import CustomButton from '../../../components/CustomButton';
import Calendar from '../../../assets/images/calendar.svg';
import Reason from '../../../assets/images/reason.svg'
import Done from '../../../assets/images/Done.svg'




const Apointment = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-thin-left' size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 18 }}>Appointment</Text>
                    <View>
                    </View>
                </View>
                <View style={{ marginTop: 34 }}>
                    <View style={{
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: '#E8F3F1',
                        paddingVertical: 10,
                        paddingHorizontal: 6
                    }}>
                        <View style={{ width: 115, height: 115, borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', left: 3 }}>
                            <Image source={require('../../../assets/images/doctor1.png')} resizeMode='cover' style={{ width: 115, height: 115 }} borderRadius={10} />
                        </View>

                        <View style={{ left: 26, top: 4 }}>
                            <Text style={{
                                color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 16,
                            }}>
                                Dr. Marcus Horizon
                            </Text>

                            <View style={{}}>
                                <Text style={{
                                    color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 12
                                }}>
                                    Chardiologist
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: 40, backgroundColor: COLORS.lightGreen2, paddingVertical: 2, borderRadius: 5, paddingHorizontal: 3, marginTop: 5 }}>
                                    <FontAwesome name='star' color={COLORS.greenColor} size={12} />
                                    <Text style={{
                                        color: COLORS.greenColor, fontFamily: 'Poppins-Bold', fontSize: 10, left: 5, top: 1
                                    }}>
                                        4.7
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', top: 6 }}>
                                    <Image source={require('../../../assets/images/Location.png')} resizeMode='contain' style={{ width: 12, height: 12 }} />
                                    <Text style={{
                                        color: COLORS.lightGrey, fontFamily: 'Poppins-Medium', fontSize: 12, left: 5,
                                        top: 2
                                    }}>
                                        900m away
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary, fontSize: 16 }}>Date</Text>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#ADADAD', fontSize: 13 }}>Change</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                        <Calendar width={36} height={36} />
                        <View style={{ left: 15 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#555555' }}>Wednesday, Jun 23, 2021 | 10:00 AM</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#E8F3F1', marginTop: 5 }}>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary, fontSize: 16 }}>Reason</Text>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#ADADAD', fontSize: 13 }}>Change</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                        <Reason width={36} height={36} />
                        <View style={{ left: 15 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: COLORS.primary }}>Chest Pain</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#E8F3F1', marginTop: 5 }}>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary, fontSize: 16 }}>Payment Detail</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#A1A8B0' }}>Consultation</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: COLORS.primary }}>$60.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#A1A8B0' }}>Admin Fee</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: COLORS.primary }}>$01.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#A1A8B0' }}>Aditional Discount</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: COLORS.primary }}>-</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary }}>Total</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.greenColor }}>$61.00</Text>
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#E8F3F1', marginTop: 5 }}>
                    </View>
                </View>
                <View style={{ marginTop: 14 }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary, fontSize: 16 }}>Payment Method</Text>
                    <View style={{ width: '100%', borderRadius: 10, borderWidth: 1, backgroundColor: COLORS.background, borderColor: '#E8F3F1', paddingHorizontal: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput placeholder='VISA' placeholderTextColor={'#1A1F71'} style={{ fontSize: 16, color: COLORS.primary, fontFamily: 'Poppins-Bold', width: 250 }} />
                        <TouchableOpacity>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#ADADAD', fontSize: 13 }}>Change</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </View>
            <View style={{ paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>

                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#ADADAD', fontSize: 13 }}>Total</Text>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary }}>$ 61.00</Text>

                </View>
                <CustomButton title={'Booking'} style={{ width: 200 , height:50}} onPress={() => setModalVisible(true)} />

            </View>


            <Modal
                animationType='fade'
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                transparent={true}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>


                    <View style={{ height: '100%', position: 'absolute', width: '100%', backgroundColor: COLORS.modalOverlay, alignItems: 'center' }}>
                        <View style={{ alignSelf: 'center', width: '89%', backgroundColor: COLORS.white, height: '52%', padding: 30, borderRadius: 20, alignItems: 'center', top: 200 }}>
                            <Done width={100} height={100} style={{ top: 30 }} />
                            <View style={{ top: 70 }}>
                                <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 20, textAlign: 'center' }}>Payment Success</Text>
                                <Text style={{ color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 16, textAlign: 'center', top: 6 }}>Your payment has been successful, you can have a consultation session with your trusted doctor</Text>

                            </View>
                            <CustomButton title={'Chat Doctor'} style={{ top: 110, width: 200, }} onPress={() => navigation.navigate('Chat')} />

                        </View>

                    </View>
                </TouchableWithoutFeedback>

            </Modal>
        </SafeAreaView>

    )
}

export default Apointment

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative',
        backgroundColor: COLORS.background,
        paddingTop: 40
    },
    container: {
        paddingHorizontal: 18,
        paddingTop: 10,
        flex: 1

    }
})