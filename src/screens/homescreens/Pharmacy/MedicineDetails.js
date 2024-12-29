import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../../components/CustomButton';
import { Shadow } from 'react-native-shadow-2';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import Medicine from '../../../assets/images/medicine1.svg'
import { getLeftStyles } from 'react-native-paper/lib/typescript/components/List/utils';

const MedicineDetails = () => {
    const navigation = useNavigation()
    const [count, setCount] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false); // State to toggle text visibility
    const [selected, setSelected] = useState(null)

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded); // Toggle the state
    };
    const handleAdd = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleMinus = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };

    const shortText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...";
    const fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-thin-left' size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 18 }}>Drug Details</Text>
                    <TouchableOpacity>
                        <Feather name='shopping-cart' size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 10, alignSelf: 'center' }}>
                    <Image source={require('../../../assets/images/medicine4.png')} resizeMode='contain' style={{ width: 250, height: 250 }} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text style={{
                            fontFamily: 'Poppins-Bold',
                            color: COLORS.primary,
                            fontSize: 18
                        }}>OBH Combi</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', fontSize: 16
                            }}>
                                {'75ml'}
                            </Text>
                            <TouchableOpacity>
                                <AntDesign name='heart' color={COLORS.lightGrey} size={22} />
                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <AntDesign name='star' color={COLORS.greenColor} size={16} />
                            <AntDesign name='star' color={COLORS.greenColor} size={16} style={{ left: 3 }} />
                            <AntDesign name='star' color={COLORS.greenColor} size={16} style={{ left: 6 }} />
                            <AntDesign name='star' color={COLORS.greenColor} size={16} style={{ left: 9 }} />
                            <Text style={{ color: COLORS.greenColor, fontFamily: 'Poppins-Bold', fontSize: 16, top: 2, left: 14 }}>4.0</Text>
                        </View>
                        <View>
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
                                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 15, top: 2 }}>$ 15.00</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ marginTop: 35 }}>
                            <View>
                                <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 16, }}>Description</Text>
                                <Text style={{ color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', flexWrap: 'wrap', flexDirection: 'row' }}>
                                    {isExpanded ? fullText : shortText}
                                    <Text onPress={toggleReadMore} style={{ color: COLORS.greenColor, fontFamily: 'Poppins-Regular' }}>
                                        {isExpanded ? ' Read less' : ' Read more'}
                                    </Text>
                                </Text>

                            </View>
                        </View>
                    </View>
                </View>

            </View>

            <View style={{ paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=> navigation.navigate('MyCart')}>
                    <Image source={require('../../../assets/images/cart.png')} resizeMode='contain' style={{ width: 60, height: 50 }} />
                </TouchableOpacity>
                <CustomButton title={'Buy Now'} style={{ width: 300 }} />

            </View>
        </SafeAreaView>

    )
}

export default MedicineDetails

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingTop: 40
    },
    container: {
        paddingHorizontal: 18,
        flex: 1
    }
})