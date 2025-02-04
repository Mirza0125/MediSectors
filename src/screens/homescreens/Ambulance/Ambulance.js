import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/colors'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
// import MapView from 'react-native-maps';

const Ambulance = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-thin-left' size={20} color={COLORS.primary} />
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 18 }}>Ambulance</Text>
                    <View>
                    </View>
                </View>
                {/* <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                /> */}
            </View>
        </SafeAreaView >
    )
}

export default Ambulance

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
        position: 'relative'
    },
})