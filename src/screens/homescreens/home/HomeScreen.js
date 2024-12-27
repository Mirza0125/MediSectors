import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../../components/CustomButton';
import { Shadow } from 'react-native-shadow-2';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const data = [
    {
        id: 1,
        name: 'Doctor',
        icon: require('../../../assets/images/Doctor.png'),
        navigationScreen: 'FindDoctor',
    },
    {
        id: 2,
        name: 'Pharmacy',
        icon: require('../../../assets/images/Pharmacy.png'),
        navigationScreen: 'FindDoctor',

    },
    {
        id: 3,
        name: 'Hospital',
        icon: require('../../../assets/images/Hospital.png'),
        navigationScreen: 'FindDoctor',

    },
    {
        id: 4,
        name: 'Ambulance',
        icon: require('../../../assets/images/Ambulance.png'),
        navigationScreen: 'FindDoctor',

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
    {
        id: 5,
        name: 'Dr. Diandra',
        category: 'Orthopedist',
        rating: '3.2',
        distance: '900m away',
        profile: require('../../../assets/images/doctor5.png')
    },
    {
        id: 6,
        name: 'Dr. Marcus Horizon',
        category: 'Orthopedist',
        rating: '3.6',
        distance: '500m away',
        profile: require('../../../assets/images/doctor1.png')
    },
    {
        id: 7,
        name: 'Dr. Stefi Jessi',
        category: 'Orthopedist',
        rating: '3.9',
        distance: '2km away',
        profile: require('../../../assets/images/doctor2.png')
    },

]

const data3 = [
    {
        id: 1,
        title: 'Comparing the AstraZeneca and Sinovac COVID-19 Vaccines',
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/Article1.png')
    },
    {
        id: 2,
        title: 'The 25 Healthiest Fruits You Can Eat, According to a Nutritionist',
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/article2.png')
    },
    {
        id: 3,
        title: 'Traditional Herbal Medicine Treatments for COVID-19',
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/article3.png')
    },
    {
        id: 4,
        title: `Beauty Tips For Face: 10 Dos and Don'ts for Naturally Beautiful Skin`,
        time: '6 min read',
        date: 'Jun 12, 2021',
        profile: require('../../../assets/images/article4.png')
    },


]


const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ width: 200 }}>
                            <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 22 }}>
                                Find your desire healt solution
                            </Text>
                        </View>
                        <View style={{ bottom: 2 }}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name='bell' size={22} color={COLORS.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ width: '100%', height: 44, borderWidth: 1, borderColor: COLORS.searchBorderColor, borderRadius: 22, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, backgroundColor: COLORS.searchBarColor }}>
                            <TouchableOpacity>
                                <AntDesign name='search1' size={22} color={COLORS.lightGrey} />
                            </TouchableOpacity>
                            <TextInput placeholder='Search doctor, drugs, articles...' placeholderTextColor={COLORS.lightGrey} style={{ left: 5, width: 300, color: COLORS.primary, fontFamily: 'Poppins-Regular', top: 2 }} />
                        </View>

                    </View>
                    <View style={{}}>
                        <View style={{ marginTop: 30 }}>
                            <FlatList
                                data={data}
                                keyExtractor={item => item.id.toString()} // Ensure key is a string
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity style={{ marginHorizontal: 13 }} onPress={() => navigation.navigate(item.navigationScreen)}>
                                            <Shadow style={{}} startColor={'rgba(218, 218, 218, 0.2)'} distance={10} >

                                                <View style={{
                                                    width: 65,
                                                    height: 55,
                                                    backgroundColor: COLORS.white,
                                                    borderRadius: 18,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}>
                                                    <Image source={item.icon} style={{ width: 32, height: 32 }} resizeMode='cover' />
                                                </View>
                                            </Shadow>

                                            <View style={{ marginTop: 10 }}>
                                                <Text style={{ textAlign: 'center', color: COLORS.lightGrey }}>{item.name}</Text>
                                            </View>
                                        </TouchableOpacity>

                                    );
                                }}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingVertical: 6 }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 20, paddingHorizontal: 24 }}>
                    <View style={{ width: '100%', padding: 25, backgroundColor: COLORS.lightGreen2, borderRadius: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: 200 }}>
                            <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 20 }}>
                                Early protection for
                                your family health
                            </Text>
                            <CustomButton title={'Learn more'} style={{ width: 150, height: 40, marginTop: 10 }} />
                        </View>
                        <View>
                            <View style={{ width: 120, height: 120, borderRadius: 60, borderWidth: 26, borderColor: COLORS.white }}>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ marginTop: 20, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 0, paddingHorizontal: 24 }}>
                        <Text style={{
                            color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 16,
                        }}>
                            Top Doctor
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('TopDoctors')}>
                            <Text style={{
                                color: COLORS.greenColor, fontFamily: 'Poppins-Medium', fontSize: 14,
                            }}>
                                See All
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <FlatList
                        data={data2}
                        keyExtractor={item => item.id.toString()} // Ensure key is a string
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginLeft: 10, }}>
                                    <Shadow style={{ borderRadius: 12, }} startColor={'rgba(218, 218, 218, 0.2)'} distance={10} >
                                        <TouchableOpacity onPress={() => navigation.navigate('DoctorDetails')}>

                                            <View style={{
                                                width: 138, height: 185, borderRadius: 14, borderColor: COLORS.searchBorderColor, borderWidth: 1, paddingHorizontal: 6, margin: 0, padding: 8,
                                            }}>
                                                <View style={{ width: 72, height: 72, borderRadius: 36, backgroundColor: COLORS.searchBarColor, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10 }}>
                                                    <Image source={item.profile} resizeMode='cover' style={{ width: 71, height: 71 }} borderRadius={40} />
                                                </View>
                                                <View style={{ marginTop: 16, left: 2 }}>
                                                    <Text style={{
                                                        color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 12,
                                                    }}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                                <View style={{ marginTop: 3, left: 2 }}>
                                                    <Text style={{
                                                        color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 12
                                                    }}>
                                                        {item.category}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, left: 2 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 40, backgroundColor: COLORS.lightGreen2, paddingVertical: 2, borderRadius: 5, paddingHorizontal: 3 }}>
                                                        <FontAwesome name='star' color={COLORS.greenColor} size={12} />
                                                        <Text style={{
                                                            color: COLORS.greenColor, fontFamily: 'Poppins-Bold', fontSize: 10, left: 3, top: 1
                                                        }}>
                                                            {item.rating}
                                                        </Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', left: 2 }}>
                                                        <Image source={require('../../../assets/images/Location.png')} resizeMode='contain' style={{ width: 10, height: 10 }} />
                                                        <Text style={{
                                                            color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 9, left: 2, top: 2
                                                        }}>
                                                            {item.distance}
                                                        </Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </TouchableOpacity>

                                    </Shadow>
                                </View>

                            )
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 10 }}
                    />

                </View>

                <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 24 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{
                            color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 16,
                        }}>
                            Health article
                        </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Articles')}>
                            <Text style={{
                                color: COLORS.greenColor, fontFamily: 'Poppins-Medium', fontSize: 14,
                            }}>
                                See All
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <FlatList
                        data={data3}
                        keyExtractor={item => item.id.toString()} // Ensure key is a string
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Shadow style={{}} startColor={'rgba(218, 218, 218, 0.2)'} distance={10} containerStyle={{ alignItems: 'center', justifyContent: 'center', marginVertical: 8 }}>

                                        <View style={{
                                            width: 354, height: 80, borderRadius: 14, borderColor: COLORS.searchBorderColor, borderWidth: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 4
                                        }}>
                                            <View style={{ width: 70, height: 70, borderRadius: 24, backgroundColor: COLORS.searchBarColor, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                                                <Image source={item.profile} resizeMode='cover' style={{ width: 70, height: 70 }} borderRadius={10} />
                                            </View>

                                            <View style={{ width: 220, left: 10 }}>
                                                <Text style={{
                                                    color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 12,
                                                }}>
                                                    {item.title}
                                                </Text>

                                                <View style={{ marginTop: 3, flexDirection: 'row' }}>
                                                    <Text style={{
                                                        color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 12
                                                    }}>
                                                        {item.date}.
                                                    </Text>
                                                    <Text style={{
                                                        color: COLORS.greenColor, fontFamily: 'Poppins-Regular', fontSize: 12, left: 3
                                                    }}>
                                                        {item.time}
                                                    </Text>
                                                </View>

                                            </View>
                                            <View style={{}}>
                                                <Image source={require('../../../assets/images/Bookmark.png')} resizeMode='contain' style={{ width: 20, height: 22, bottom: 13, left: 20 }} />

                                            </View>

                                        </View>
                                    </Shadow>
                                </View>

                            )
                        }}

                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingTop: 40
    },
    container: {
        paddingHorizontal: 18,
    }
})