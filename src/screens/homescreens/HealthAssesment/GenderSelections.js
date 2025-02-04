import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../../components/CustomButton'

const data = [
    {
        id: 1,
        name: 'Male',
        img: require('../../../assets/images/male.png')
    },
    {
        id: 2,
        name: 'Female',
        img: require('../../../assets/images/female.png')
    },
]

const GenderSelections = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(false)

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-thin-left' size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 15, left: 20 }}>Settings</Text>
                    <View style={{ width: 60, height: 24, borderRadius: 10, backgroundColor: COLORS.searchBarColor, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: COLORS.lightGrey, fontFamily: 'Poppins-Bold', fontSize: 12 }}>1 of 4</Text>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', marginTop: 30 }}>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 20, textAlign: 'center' }}>Select your Gender</Text>
                </View>
                <View style={{ flex: 1, marginTop: 30 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ marginHorizontal: 20 }} onPress={()=> setSelected(item.id)}>
                                    <View style={{ width: 150, height: 190, borderRadius: 20, backgroundColor: COLORS.background, borderWidth: 1, borderColor: COLORS.searchBarColor, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={item.img} resizeMode='contain' style={{ width: 200, height: 120, marginTop: 20 }} />
                                        <View style={{ backgroundColor: item.id === selected ? COLORS.greenColor  :  COLORS.searchBarColor, width: '100%', height: 48, borderBottomRightRadius: 18, borderBottomLeftRadius: 18, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: item.id === selected ? COLORS.white : COLORS.primary, fontFamily: 'Poppins-Medium' , fontSize:15}}>{item.name}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            )
                        }}

                    />
                </View>
                <View style={{bottom:30}}>
                    <CustomButton title={'Next'} style={{width:'100%'}} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default GenderSelections

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: COLORS.background,
        flex: 1
    },
    container: {
        paddingHorizontal: 18,
        paddingTop: 50,
        flex: 1
    }
})