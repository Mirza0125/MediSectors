import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/colors'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../../components/CustomButton'

const { width, height } = Dimensions.get('window')

const Profile = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[styles.safeArea]}>
            <LinearGradient
                style={styles.gradient}
                colors={['rgba(82, 209, 198, 1)', 'rgba(48, 173, 162, 1)']}
            >
                <View style={styles.container}>
                    <View style={{height:200}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity style={{ left: 18 }} onPress={()=>navigation.goBack()}>
                                <Entypo name='chevron-thin-left' size={20} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={{ color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 18 }}>Edit Profile</Text>
                            <View>

                            </View>

                        </View>

                        <View style={{ alignSelf: 'flex-end', bottom: 80 }}>
                            <Image source={require('../../../assets/images/star.png')} resizeMode='cover' style={{ width: 250, height: 250 }} />
                        </View>
                        <View style={{ alignSelf: 'center', bottom: 220 }}>
                            <View style={{ width: 100, height: 100, backgroundColor: COLORS.white, borderRadius: 50, alignSelf: 'center' }}>
                                <Image source={require('../../../assets/images/doctor1.png')} resizeMode='cover' style={{ width: 100, height: 100 }} borderRadius={50} />

                            </View>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 18, backgroundColor: COLORS.white, height:700, borderTopRightRadius:30, borderTopLeftRadius:30, paddingTop:40 }}>
                        <View>
                            <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 16, left: 10 }}>Full Name</Text>
                            <View style={{
                                width: width * 0.9,
                                borderWidth: 1,
                                borderColor: COLORS.inputFieldBorder,
                                backgroundColor: COLORS.inputField,
                                borderRadius: 25,
                                paddingHorizontal: 16,
                                height: 55,
                                marginTop: 5
                            }}>
                                <TextInput placeholder={'Sana Asghar'} placeholderTextColor={COLORS.lightGrey} style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 16 }} />
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 16, left: 10 }}>Phone Number</Text>
                            <View style={{
                                width: width * 0.9,
                                borderWidth: 1,
                                borderColor: COLORS.inputFieldBorder,
                                backgroundColor: COLORS.inputField,
                                borderRadius: 25,
                                paddingHorizontal: 16,
                                height: 55,
                                marginTop: 5
                            }}>
                                <TextInput placeholder={'+92 3098769480'} placeholderTextColor={COLORS.lightGrey} style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 16 }} />
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 16, left: 10 }}>Email</Text>
                            <View style={{
                                width: width * 0.9,
                                borderWidth: 1,
                                borderColor: COLORS.inputFieldBorder,
                                backgroundColor: COLORS.inputField,
                                borderRadius: 25,
                                paddingHorizontal: 16,
                                height: 55,
                                marginTop: 5
                            }}>
                                <TextInput placeholder={'sanafahad6658@gmail.com'} placeholderTextColor={COLORS.lightGrey} style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 16 }} />
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 16, left: 10 }}>Date of Birth</Text>
                            <View style={{
                                width: width * 0.9,
                                borderWidth: 1,
                                borderColor: COLORS.inputFieldBorder,
                                backgroundColor: COLORS.inputField,
                                borderRadius: 25,
                                paddingHorizontal: 16,
                                height: 55,
                                marginTop: 5
                            }}>
                                <TextInput placeholder={'DD/MM/YYYY'} placeholderTextColor={COLORS.lightGrey} style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 16 }} />
                            </View>
                        </View>
                        <View style={{ alignSelf: "center", marginTop: 26 }}>
                        <CustomButton title={'Update Profile'} style={{ width: 200 }} />
                    </View>
                    </View>
                    
                </View>

            </LinearGradient>


        </SafeAreaView>

    )
}

export default Profile

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
        height: '100%',

    }
})