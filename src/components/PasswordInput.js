import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../services/colors'

const { width, height } = Dimensions.get('window')

const PasswordInput = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/Password.png')} style={{ width: 24, height: 24 }} resizeMode='contain' />
            <TextInput placeholder='Enter your Password' placeholderTextColor={COLORS.lightGrey} style={{ width: 250, color: COLORS.primary, fontFamily: 'Inter_18pt-Regular', left: 16 }} secureTextEntry={true} />
            <TouchableOpacity>
                <Image source={require('../assets/images/EyeOff.png')} style={{ width: 24, height: 24, left:26 }} resizeMode='contain' />
            </TouchableOpacity>

        </View>
    )
}

export default PasswordInput

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.inputFieldBorder,
        backgroundColor: COLORS.inputField,
        borderRadius: 24,
        paddingHorizontal: 20,
        height: 60,
        marginVertical: 5
    }
})