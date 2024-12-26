import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../services/colors';
const { width, height } = Dimensions.get('window');
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../redux/theme/theme';

const OnBoardingModal = (props) => {
    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
    return (
        <LinearGradient
            colors={[currentTheme.gradient1, currentTheme.gradient2]}
            style={styles.gradient}
        >
            <View>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 24, color: currentTheme.primary, marginTop: 15 }}>
                    {props.text}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 40 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: 6, width: 24, backgroundColor: props.one ? currentTheme.greenColor : currentTheme.lightGreen, borderRadius: 6 }}></View>
                        <View style={{ height: 6, width: 24, backgroundColor: props.two ? currentTheme.greenColor : currentTheme.lightGreen, borderRadius: 6, left: 4 }}></View>
                        <View style={{ height: 6, width: 24, backgroundColor: props.three ? currentTheme.greenColor : currentTheme.lightGreen, borderRadius: 6, left: 8 }}></View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={props.onPress}>
                            <View style={{ width: 56, height: 56, borderRadius: 30, backgroundColor: currentTheme.greenColor, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../assets/images/OnBoarding/arrow-right.png')} resizeMode='cover' style={{ width: 30, height: 30 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </LinearGradient>
    )
}

export default OnBoardingModal

const styles = StyleSheet.create({
    gradient: {
        width: width * 0.9,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignSelf: 'center',
        padding: 30

    }
})