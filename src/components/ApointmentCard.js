import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../services/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../redux/theme/theme'

const ApointmentCard = ({ name, category, profile, buttonTitle, status, upcomig, completed, rateStatus }) => {
    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
    return (
        <View style={{ width: '100%', borderWidth: 1, borderColor: 'rgba(235, 235, 235, 1)', borderRadius: 14, paddingVertical: 12, paddingHorizontal: 16, marginVertical: 10 , backgroundColor : currentTheme.categories}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{
                        color: currentTheme.primary, fontFamily: 'Poppins-Bold', fontSize: 16
                    }}>
                        {name}
                    </Text>
                    <Text style={{ color: COLORS.lightGrey, fontFamily: 'Poppins-Regular', }}>
                        {category}
                    </Text>
                </View>
                <Image source={profile} resizeMode='cover' borderRadius={30} style={{ width: 50, height: 50 }} />
            </View>
            <View style={{ marginTop: 16 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 name='calendar-alt' size={18} color={'rgb(201, 201, 201)'} />
                        <Text style={{ color: 'rgb(201, 201, 201)', fontFamily: 'Poppins-Medium', top: 2, marginLeft: 4 }}>26/06/2022</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 14 }}>
                        <Feather name='clock' size={18} color={'rgb(201, 201, 201)'} />
                        <Text style={{ color: 'rgb(201, 201, 201)', fontFamily: 'Poppins-Medium', top: 2, marginLeft: 4 }}>10:30 AM</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(123, 235, 120, 1)' }}></View>
                        <Text style={{ color: 'rgb(201, 201, 201)', fontFamily: 'Poppins-Medium', top: 2, marginLeft: 4 }}>{status}</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                {
                    upcomig ? <>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                            <TouchableOpacity>
                                <View style={{ width: 150, height: 46, backgroundColor: currentTheme.navBar, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'rgba(85, 85, 85, 1)', fontFamily: 'Poppins-Medium' }}>Cancel</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: 150, height: 46, backgroundColor: COLORS.greenColor, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Poppins-Medium' }}>{buttonTitle}</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </>
                        :
                        completed ?
                            <>
                                <View style={{ alignSelf: 'center', marginTop: 6 }}>
                                    <TouchableOpacity disabled={rateStatus}>
                                        <View style={{ width: 300, height: 46, backgroundColor: rateStatus ? currentTheme.navBar : COLORS.greenColor, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: rateStatus ? currentTheme.primary : COLORS.white, fontFamily: 'Poppins-Medium' }}>{
                                                rateStatus ? 'Rated' : 'Rate Doctor'
                                            }</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </>
                            :
                            <>

                                <View style={{ alignSelf: 'center', marginTop: 6 }}>
                                    <TouchableOpacity>
                                        <View style={{ width: 300, height: 46, backgroundColor: COLORS.greenColor, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Poppins-Medium' }}>Reschedule</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </>
                }



            </View>

        </View>
    )
}

export default ApointmentCard

const styles = StyleSheet.create({})