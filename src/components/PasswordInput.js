import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../services/colors'
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '../redux/theme/theme';

const { width, height } = Dimensions.get('window')

const PasswordInput = (props) => {
    const [visible, setVisible] = useState(false);
    const theme = useSelector(state => state.theme.theme)
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
    const togglePasswordVisibility = () => {
        setVisible(!visible);
    };

    return (
        <View style={{
            width: width * 0.9,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: currentTheme.inputFieldBorder,
            backgroundColor: currentTheme.inputField,
            borderRadius: 24,
            paddingHorizontal: 20,
            height: 55,
            marginVertical: 5,
            justifyContent: 'space-between',
            marginVertical:10

        }}>
            <Feather name='lock' size={24} color={currentTheme.lightGrey} />
            <TextInput placeholder={props.placeholder} placeholderTextColor={currentTheme.lightGrey} style={{ width: 250, color: currentTheme.primary, fontFamily: 'Poppins-Regular', left: 0 }} secureTextEntry={!visible} />
            <TouchableOpacity
                onPress={togglePasswordVisibility}>
                <Feather name={visible ? 'eye' : 'eye-off'} size={24} color={currentTheme.lightGrey} />
            </TouchableOpacity>
        </View>
    )
}

export default PasswordInput

const styles = StyleSheet.create({
    container: {

    }
})