import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Modal } from 'react-native'
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

const { width, height } = Dimensions.get('window')


const PrivacyPolicy = () => {
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
                            <Text style={{ color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 18 }}>Privacy Policy</Text>
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
                <View>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 16 }}>last update: 14/08/2024</Text>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Regular', fontSize: 14, textAlign: 'justify', marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a scelerisque neque, sed accumsan metus.</Text>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Regular', fontSize: 14, textAlign: 'justify', marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a scelerisque neque, sed accumsan metus.</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: COLORS.greenColor, fontFamily: 'Poppins-Bold', fontSize: 16 }}>Terms & Conditions</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 12, marginTop: 10 }}>1.  </Text>
                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Regular', fontSize: 12, marginTop: 10 }}>Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi.</Text>
                    </View>
                    <View style={{ flexDirection: 'row',marginTop:5 }}>
                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 12, }}>2.  </Text>
                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Regular', fontSize: 12, }}>Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi.</Text>
                    </View>
                    <View style={{ flexDirection: 'row',marginTop:5 }}>
                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 12, }}>3.  </Text>
                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Regular', fontSize: 12,  }}>Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi.</Text>
                    </View>
                    <View style={{ flexDirection: 'row',marginTop:5 }}>
                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 12,}}>4.  </Text>
                        <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Regular', fontSize: 12, }}>Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi.</Text>
                    </View>

                </View>


            </View>
        </SafeAreaView>

    )
}

export default PrivacyPolicy

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