import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
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

const data = [
    {
        id: 1,
        time: '09:00 AM',
        disabled: true,
    },
    {
        id: 2,
        time: '10:00 AM',
        disabled: false,
    },
    {
        id: 3,
        time: '11:00 AM',
        disabled: true,
    },
    {
        id: 4,
        time: '01:00 PM',
        disabled: true,
    },
    {
        id: 5,
        time: '02:00 PM',
        disabled: false,
    },
    {
        id: 6,
        time: '03:00 PM',
        disabled: false,
    },
    {
        id: 7,
        time: '04:00 PM',
        disabled: false,
    },
    {
        id: 8,
        time: '07:00 PM',
        disabled: false,
    },
    {
        id: 9,
        time: '08:00 PM',
        disabled: true,
    },
]


const DoctorDetail = () => {
    const navigation = useNavigation()
    const [isExpanded, setIsExpanded] = useState(false); // State to toggle text visibility
    const [selected, setSelected] = useState(null)
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded); // Toggle the state
    };

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const date = new Date();
    const todayDay = date.getDay();
    const todayDate = date.getDate();

    const isToday = dateToCheck => dateToCheck === todayDate;
    const startIndex = todayDay === 0 ? 6 : todayDay - 1;

    const shortText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...";
    const fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-thin-left' size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium', fontSize: 18 }}>Doctor Detail</Text>
                    <TouchableOpacity>
                        <Entypo name='dots-three-vertical' size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 34 }}>
                    <View style={{
                        flexDirection: 'row'
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
                <View style={{ marginTop: 25 }}>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 16 }}>About</Text>
                    <Text style={{ color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', flexWrap: 'wrap', flexDirection: 'row' }}>
                        {isExpanded ? fullText : shortText}
                        <Text onPress={toggleReadMore} style={{ color: COLORS.greenColor, fontFamily: 'Poppins-Regular' }}>
                            {isExpanded ? ' Read less' : ' Read more'}
                        </Text>
                    </Text>

                </View>
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 32,
                        }}>
                        {days.map((day, index) => {
                            const dynamicDate = new Date(date);
                            dynamicDate.setDate(todayDate - startIndex + index);

                            return (
                                <DayDate
                                    key={day}
                                    day={day}
                                    date1={dynamicDate.getDate()}
                                    isToday={dynamicDate.getDate() === todayDate}
                                    selected={COLORS.greenColor}
                                    container={COLORS.background}
                                />
                            );
                        })}
                    </View>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#E8F3F1', marginVertical: 30 }}>
                </View>
                <View>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity disabled={item.disabled} onPress={() => setSelected(item.id)}>
                                    <View style={{
                                        width: 103, height: 37, borderRadius: 12, borderWidth: 1, borderColor: item.disabled ? '#DEECE9' : selected === item.id
                                            ? COLORS.greenColor : '#B3D3CE', backgroundColor: selected === item.id ? COLORS.greenColor : COLORS.background, alignItems: 'center', justifyContent: 'center', margin: 8
                                    }}>
                                        <Text
                                            style={{
                                                color: item.disabled
                                                    ? '#DEECE9'
                                                    : selected === item.id
                                                        ? COLORS.white
                                                        : COLORS.lightGrey,
                                                fontFamily: 'Poppins-Medium'
                                            }}
                                        >
                                            {item.time}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        numColumns={3}


                    />

                </View>

            </View>
            <View style={{ paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <ChatButton width={48} height={48} />
                </TouchableOpacity>
                <CustomButton title={'Book Apointment'} style={{ width: 290 }} onPress={() => navigation.navigate('Apointment')} />

            </View>
        </SafeAreaView>

    )
}

export default DoctorDetail

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