import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../services/colors';
import { Shadow } from 'react-native-shadow-2';
import Doctor from '../../../assets/images/Doctor.svg'
import Cardiologist from '../../../assets/images/Cardiologist.svg'
import Syringe from '../../../assets/images/Syringe.svg'
import Psychiatrist from '../../../assets/images/Psychiatrist.svg'
import Dentist from '../../../assets/images/Dentist.svg'
import Lungs from '../../../assets/images/Lungs.svg'
import Covid from '../../../assets/images/Group.svg'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const data = [
    {
        id: 1,
        name: 'General',
        icon: Doctor
    },
    {
        id: 2,
        name: 'Lungs',
        icon: Lungs
    },
    {
        id: 3,
        name: 'Dentist',
        icon: Dentist
    },
    {
        id: 4,
        name: 'Psychiatrist',
        icon: Psychiatrist
    },
    {
        id: 5,
        name: 'Covid-19',
        icon: Covid
    }, {
        id: 6,
        name: 'Surgeon',
        icon: Syringe
    }, {
        id: 7,
        name: 'Cardiologist',
        icon: Cardiologist
    },
]

const data2 = [
    {
        id: 1,
        name: 'Dr. Marcus Horizon',
        category: 'Chardiologist',
        rating: '4.3',
        distance: '800m away',
        profile: require('../../../assets/images/doctor1.png')
    },
    {
        id: 2,
        name: 'Dr. Maria Elena',
        category: 'Psychologist',
        rating: '4.7',
        distance: '1km away',
        profile: require('../../../assets/images/doctor2.png')
    },
    {
        id: 3,
        name: 'Dr. Stefi Jessi',
        category: 'Orthopedist',
        rating: '3.9',
        distance: '1.5km away',
        profile: require('../../../assets/images/doctor3.png')
    },
    {
        id: 4,
        name: 'Dr. Gerty Cori',
        category: 'Orthopedist',
        rating: '4.2',
        distance: '600m away',
        profile: require('../../../assets/images/doctor4.png')
    },


]

const data3 = [
    {
        id: 1,
        name: 'Dr Marcus',  
        profile: require('../../../assets/images/doctor1.png')
    },
    {
        id: 2,
        name: 'Dr Maria',
        profile: require('../../../assets/images/doctor2.png')
    },
    {
        id: 3,
        name: 'Dr Stefi',
        profile: require('../../../assets/images/doctor3.png')
    },
    {
        id: 4,
        name: 'Dr Gerty',
        profile: require('../../../assets/images/doctor4.png')
    },


]
const FindDoctors = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-thin-left' size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 18, right: 5 }}>Find Doctors</Text>
                    <View style={{}}></View>
                </View>
                <View style={{ marginTop: 25 }}>
                    <View style={{ width: '100%', height: 44, borderWidth: 1, borderColor: COLORS.searchBorderColor, borderRadius: 22, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, backgroundColor: COLORS.searchBarColor }}>
                        <TouchableOpacity>
                            <AntDesign name='search1' size={22} color={COLORS.lightGrey} />
                        </TouchableOpacity>
                        <TextInput placeholder='Find a Doctor' placeholderTextColor={COLORS.lightGrey} style={{ left: 5, width: 300, color: COLORS.primary, fontFamily: 'Poppins-Regular', top: 2 }} />
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: COLORS.primary, fontSize: 16, left: 5 }}>Category</Text>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id.toString()} // Ensure key is a string
                        renderItem={({ item }) => {
                            const Icon = item.icon; // Access the icon component dynamically
                            return (
                                <TouchableOpacity style={{ marginHorizontal: 14, marginVertical: 10 }}>
                                    <Shadow style={{}} startColor={'rgba(232, 232, 232, 0.2)'} distance={10} >

                                        <View style={{
                                            width: 65,
                                            height: 55,
                                            backgroundColor: COLORS.white,
                                            borderRadius: 18,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <Icon width={30} height={30} />

                                        </View>

                                    </Shadow>

                                    <View style={{ marginTop: 10 }}>
                                        <Text style={{ fontSize: 12, color: COLORS.lightGrey, textAlign: 'center' }}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>

                            );
                        }}
                        contentContainerStyle={{ paddingVertical: 6 }}
                        numColumns={4}
                    />
                </View>
                <View style={{ marginTop: 25 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: COLORS.primary, fontSize: 16, left: 5 }}>Recommended Doctors</Text>
                    <FlatList
                        horizontal
                        data={data2}
                        keyExtractor={item => item.id.toString()} // Ensure key is a string
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginHorizontal: 5 }}>
                                    <Shadow style={{}} startColor={'rgba(232, 232, 232, 0.2)'} distance={10} containerStyle={{ alignItems: 'center', justifyContent: 'center', marginVertical: 8 }}>
                                        <View style={{
                                            width: 348, height: 134, borderRadius: 14, borderColor: COLORS.searchBorderColor, borderWidth: 1, flexDirection: 'row', paddingHorizontal: 4
                                        }}>
                                            <View style={{ width: 88, height: 88, borderRadius: 44, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', left: 10, }}>
                                                <Image source={item.profile} resizeMode='cover' style={{ width: 88, height: 88 }} borderRadius={44} />
                                            </View>

                                            <View style={{ left: 40, top: 10 }}>
                                                <Text style={{
                                                    color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 16,
                                                }}>
                                                    {item.name}
                                                </Text>
                                                <Text style={{
                                                    color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 12
                                                }}>
                                                    {item.category}.
                                                </Text>
                                                <View style={{ width: 170, height: 1, backgroundColor: COLORS.lightGrey, marginVertical: 10 }}>

                                                </View>

                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 40, backgroundColor: COLORS.lightGreen2, paddingVertical: 2, borderRadius: 5, paddingHorizontal: 3, marginTop: 5 }}>
                                                        <FontAwesome name='star' color={COLORS.greenColor} size={12} />
                                                        <Text style={{
                                                            color: COLORS.greenColor, fontFamily: 'Poppins-Bold', fontSize: 10, left: 5
                                                        }}>
                                                            {item.rating}
                                                        </Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', left: 10 }}>
                                                        <Image source={require('../../../assets/images/Location.png')} resizeMode='contain' style={{ width: 12, height: 12 }} />
                                                        <Text style={{
                                                            color: COLORS.lightGrey, fontFamily: 'Poppins-Medium', fontSize: 12, left: 5,
                                                            top: 2
                                                        }}>
                                                            {item.distance}
                                                        </Text>
                                                    </View>
                                                </View>

                                            </View>


                                        </View>
                                    </Shadow>
                                </View>

                            )
                        }}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingTop: 10, }}

                    />
                </View>

                <View style={{ marginTop: 25 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: COLORS.primary, fontSize: 16, left: 5 }}>Your Recent Doctors</Text>
                    <FlatList
                        horizontal
                        data={data3}
                        keyExtractor={item => item.id.toString()} // Ensure key is a string
                        renderItem={({ item }) => {
                            return (
                                    <View style={{marginHorizontal:12, marginTop:20}}>
                                        <Image source={item.profile} resizeMode='cover' style={{ width: 64, height: 64 }} borderRadius={32} />

                                        <View style={{top: 10 }}>
                                            <Text style={{
                                                color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 14, textAlign:'center'
                                            }}>
                                                {item.name}
                                            </Text>
                                        </View>


                                    </View>

                            )
                        }}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingTop: 10,paddingBottom:5 }}
                    />
                </View>

            </View>
        </SafeAreaView>

    )
}


export default FindDoctors

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingTop: 40
    },
    container: {
        paddingHorizontal: 18,
        paddingTop: 20

    }
})