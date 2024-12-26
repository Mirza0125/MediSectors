import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../services/colors';
import { Shadow } from 'react-native-shadow-2';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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

const TopDoctors = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-thin-left' size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 18 }}>Top Doctors</Text>
                    <TouchableOpacity>
                        <Entypo name='dots-three-vertical' size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={data2}
                        keyExtractor={item => item.id.toString()} // Ensure key is a string
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Shadow style={{}} startColor={'rgba(218, 218, 218, 0.2)'} distance={10} containerStyle={{ alignItems: 'center', justifyContent: 'center', marginVertical: 8 }}>

                                        <View style={{
                                            width: 354, height: 125, borderRadius: 14, borderColor: COLORS.searchBorderColor, borderWidth: 1, flexDirection: 'row', paddingHorizontal: 4
                                        }}>
                                            <View style={{ width: 110, height: 110, borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', left: 3 }}>
                                                <Image source={item.profile} resizeMode='cover' style={{ width: 110, height: 110 }} borderRadius={10} />
                                            </View>

                                            <View style={{ left: 20, top: 10 }}>
                                                <Text style={{
                                                    color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 16,
                                                }}>
                                                    {item.name}
                                                </Text>

                                                <View style={{}}>
                                                    <Text style={{
                                                        color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 12
                                                    }}>
                                                        {item.category}.
                                                    </Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 40, backgroundColor: COLORS.lightGreen2, paddingVertical: 2, borderRadius: 5, paddingHorizontal: 3 , marginTop:5}}>
                                                        <FontAwesome name='star' color={COLORS.greenColor} size={12} />
                                                        <Text style={{
                                                            color: COLORS.greenColor, fontFamily: 'Poppins-Bold', fontSize: 10, left: 5
                                                        }}>
                                                            {item.rating}
                                                        </Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                        <Image source={require('../../../assets/images/Location.png')} resizeMode='contain' style={{ width: 12, height: 12 }} />
                                                        <Text style={{
                                                            color: COLORS.lightGrey, fontFamily: 'Poppins-Medium', fontSize: 12, left: 5,
                                                            top:2
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

                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 5, paddingBottom:70 }}
                    />
                </View>
            </View>
        </SafeAreaView>

    )
}

export default TopDoctors

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingTop: 40
    },
    container: {
        paddingHorizontal: 24,
        paddingTop: 10

    }
})