import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../../components/CustomButton';
import { Shadow } from 'react-native-shadow-2';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import Medicine from '../../../assets/images/medicine1.svg'
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../../../redux/theme/theme';


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
    {
        id: 3,
        name: 'Konidin',
        quantity: '20pcs',
        price: '$5.99',
        profile: require('../../../assets/images/medicine4.png'),
        discount: '$10.00'

    },
    {
        id: 4,
        name: 'OBH Combi',
        quantity: '50pcs',
        price: '$5.00',
        profile: require('../../../assets/images/medicine5.png'),
        discount: '$10.00'

    },
    {
        id: 5,
        name: 'Betadine',
        quantity: '300ml',
        price: '$4.00',
        profile: require('../../../assets/images/medicine1.png'),
        discount: '$10.00'

    },
]

const data3 = [
    {
        id: 1,
        name: 'Panadol',
        quantity: '20pcs',
        price: '$15.99',
        profile: require('../../../assets/images/medicine2.png'),
    },
    {
        id: 2,
        name: 'Bodrex Herbal',
        quantity: '100ml',
        price: '$15.99',
        profile: require('../../../assets/images/medicine3.png'),

    },
    {
        id: 3,
        name: 'Konidin',
        quantity: '20pcs',
        price: '$15.99',
        profile: require('../../../assets/images/medicine4.png'),

    },
    {
        id: 4,
        name: 'OBH Combi',
        quantity: '50pcs',
        price: '$15.99',
        profile: require('../../../assets/images/medicine5.png'),

    },
    {
        id: 5,
        name: 'Betadine',
        quantity: '300ml',
        price: '$15.99',
        profile: require('../../../assets/images/medicine1.png'),

    },
]



const Pharmacy = () => {
    const navigation = useNavigation()
    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: currentTheme.background }]}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Entypo name='chevron-thin-left' size={20} color={currentTheme.primary} />
                        </TouchableOpacity>
                        <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 18 }}>Pharmacy</Text>
                        <TouchableOpacity>
                            <Feather name='shopping-cart' size={20} color={currentTheme.primary} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ width: '100%', height: 44, borderWidth: 1, borderColor: currentTheme.searchBorderColor, borderRadius: 22, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, backgroundColor: currentTheme.searchBarColor }}>
                            <TouchableOpacity>
                                <AntDesign name='search1' size={22} color={COLORS.lightGrey} />
                            </TouchableOpacity>
                            <TextInput placeholder='Search drugs, category...' placeholderTextColor={COLORS.lightGrey} style={{ left: 5, width: 300, color: currentTheme.primary, fontFamily: 'Poppins-Regular', top: 2 }} />
                        </View>

                    </View>
                </View>

                <View style={{ marginTop: 30, paddingHorizontal: 18 }}>
                    <View style={{ width: '100%', backgroundColor: currentTheme.lightGreen2, borderRadius: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 14 }}>
                        <View style={{ width: 200 }}>
                            <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Medium', fontSize: 18 }}>
                                Order quickly with
                                Prescription
                            </Text>
                            <CustomButton title={'Upload Prescription'} style={{ width: 170, height: 40, borderRadius: 10 }} textStyle={{ fontSize: 14 }} />
                        </View>
                        <View style={{ alignItems: 'center', width: 140 }}>
                            <Image source={require('../../../assets/images/medicine1.png')} resizeMode='cover' style={{ width: 140, height: 160, right: 20 }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 30, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 0, paddingHorizontal: 24 }}>
                        <Text style={{
                            color: currentTheme.primary, fontFamily: 'Poppins-Medium', fontSize: 16,
                        }}>
                            Popular Product
                        </Text>
                        <TouchableOpacity>
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
                                <View style={{ marginLeft: 10, }}>
                                    <Shadow style={{ borderRadius: 12, marginHorizontal:6 }} startColor={currentTheme.shadow} distance={10} >
                                        <TouchableOpacity onPress={() => navigation.navigate('MedicineDetails')}>
                                            <View style={{
                                                width: 146, height: 185, borderRadius: 14, borderColor: currentTheme.searchBorderColor, borderWidth: 1, paddingHorizontal: 6, margin: 0, padding: 8,
                                                backgroundColor:currentTheme.categories, right:6
                                            }}>
                                                <View style={{ top: 14 }}>
                                                    <Image source={item.profile} resizeMode='cover' style={{ width: 71, height: 80, alignSelf: 'center' }} />
                                                </View>
                                                <View style={{ marginTop: 24, left: 4 }}>
                                                    <Text style={{
                                                        color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 12,
                                                    }}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                                <View style={{ left: 4, bottom: 5 }}>
                                                    <Text style={{
                                                        color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 12
                                                    }}>
                                                        {item.quantity}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', bottom: 4 }}>
                                                    <View>
                                                        <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Bold', left: 4 }}>{item.price}</Text>
                                                    </View>
                                                    <TouchableOpacity>
                                                        <Entypo name='squared-plus' size={20} color={COLORS.greenColor} />
                                                    </TouchableOpacity>
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

                <View style={{ marginTop: 20, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 0, paddingHorizontal: 24 }}>
                        <Text style={{
                            color: currentTheme.primary, fontFamily: 'Poppins-Medium', fontSize: 16,
                        }}>
                            Product on Sale
                        </Text>
                        <TouchableOpacity>
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
                                    <Shadow style={{ borderRadius: 12,marginHorizontal:6 }} startColor={currentTheme.shadow} distance={10} >
                                        <TouchableOpacity onPress={() => navigation.navigate('MedicineDetails')}>
                                            <View style={{
                                                width: 146, height: 185, borderRadius: 14, borderColor: currentTheme.searchBorderColor, borderWidth: 1, paddingHorizontal: 6,  padding: 8, right:6
                                                ,backgroundColor: currentTheme.categories
                                            }}>
                                                <View style={{ top: 14 }}>
                                                    <Image source={item.profile} resizeMode='cover' style={{ width: 71, height: 80, alignSelf: 'center' }} />
                                                </View>
                                                <View style={{ marginTop: 24, left: 4 }}>
                                                    <Text style={{
                                                        color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 12,
                                                    }}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                                <View style={{ left: 4, bottom: 5 }}>
                                                    <Text style={{
                                                        color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 12
                                                    }}>
                                                        {item.quantity}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', bottom: 4 }}>
                                                    <View>
                                                        <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Bold', left: 4 }}>{item.price}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{
                                                            color: COLORS.lightGrey, fontSize: 10, textDecorationLine: 'line-through',
                                                            fontWeight: '600'
                                                        }}>
                                                            {item.discount}
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity>
                                                        <Entypo name='squared-plus' size={20} color={COLORS.greenColor} />
                                                    </TouchableOpacity>
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

        </SafeAreaView>

    )
}

export default Pharmacy

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