import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView, TextInput, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../../components/CustomButton';
import Done from '../../../assets/images/Done.svg'

const data2 = [
    {
        id: 1,
        name: 'Panadol',
        quantity: '20pcs',
        price: '$8.99',
        profile: require('../../../assets/images/medicine2.png'),
        discount: '$10.00'
    },
    {
        id: 2,
        name: 'Bodrex Herbal',
        quantity: '100ml',
        price: '$6.00',
        profile: require('../../../assets/images/medicine3.png'),
        discount: '$8.00'

    },
]

const MyCart = () => {
    const navigation = useNavigation()
    const [count, setCount] = useState(1);
    const [modalVisible, setModalVisible] = useState(false)

    const handleAdd = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleMinus = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>

                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Entypo name='chevron-thin-left' size={20} color={COLORS.primary} />
                        </TouchableOpacity>
                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 18 }}>My Cart</Text>
                        <View></View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <FlatList
                            data={data2}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ width: '100%', padding: 20, borderRadius: 14, borderWidth: 1, borderColor: '#E8F3F1', marginVertical: 7 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Image source={item.profile} resizeMode='contain' style={{ width: 100, height: 100, flex: 1, right: 16 }} />
                                            <View style={{ width: 200 }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <View>
                                                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold' }}>{item.name}</Text>
                                                        <Text style={{ color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 12 }}>{item.quantity}</Text>
                                                    </View>
                                                    <TouchableOpacity style={{ bottom: 7 }}>
                                                        <MaterialCommunityIcons name='delete-outline' color={COLORS.lightGrey} size={22} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 90 }}>
                                                        <TouchableOpacity onPress={handleMinus}>
                                                            <AntDesign name='minus' color={COLORS.lightGrey} size={24} />
                                                        </TouchableOpacity>
                                                        <Text style={{
                                                            fontFamily: 'Poppins-Bold', fontSize: 15, color: COLORS.primary,
                                                            top: 2
                                                        }}>{count}</Text>
                                                        <TouchableOpacity onPress={handleAdd}>
                                                            <Entypo name='squared-plus' size={24} color={COLORS.greenColor} />
                                                        </TouchableOpacity>

                                                    </View>
                                                    <View>
                                                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 15, top: 2 }}>{item.price}</Text>
                                                    </View>
                                                </View>
                                            </View>

                                        </View>


                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary, fontSize: 16 }}>Payment Detail</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#A1A8B0' }}>Subtotal</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: COLORS.primary }}>$60.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#A1A8B0' }}>Taxes</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: COLORS.primary }}>$01.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary }}>Total</Text>
                            <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary }}>$61.00</Text>
                        </View>
                        <View style={{ width: '100%', height: 1, backgroundColor: '#E8F3F1', marginTop: 5 }}>
                        </View>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary, fontSize: 16, }}>Payment Method</Text>
                        <View style={{ width: '100%', borderRadius: 10, borderWidth: 1, backgroundColor: COLORS.background, borderColor: '#E8F3F1', paddingHorizontal: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <TextInput placeholder='VISA' placeholderTextColor={'#1A1F71'} style={{ fontSize: 16, color: COLORS.primary, fontFamily: 'Poppins-Bold', width: 250 }} />
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#ADADAD', fontSize: 13 }}>Change</Text>
                            </TouchableOpacity>

                        </View>


                    </View>


                </View>
            </ScrollView>
            <View style={{ paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>

                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#ADADAD', fontSize: 13 }}>Total</Text>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.primary }}>$ 61.00</Text>

                </View>
                <CustomButton title={'Checkout'} style={{ width: 200, height: 50 }} onPress={() => setModalVisible(true)} />
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
                            <CustomButton title={'Back to Home'} style={{ top: 110, width: 200, }} onPress={() => navigation.navigate('Home')} />

                        </View>

                    </View>
                </TouchableWithoutFeedback>

            </Modal>
        </SafeAreaView >
    )
}

export default MyCart

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    container: {
        paddingHorizontal: 18,
        paddingTop: 30
    }
})