import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../services/colors'

const {width, height} = Dimensions.get('window')
const InputField = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/Email.png')} style={{width:24, height:24}} resizeMode='contain' />
        <TextInput placeholder='Enter your email' placeholderTextColor={COLORS.lightGrey} style={{width:290, color : COLORS.primary, fontFamily:'Inter_18pt-Regular', left:16}} />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    container : {
        width : width *0.9,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:COLORS.inputFieldBorder,
        backgroundColor : COLORS.inputField,
        borderRadius:24,
        paddingHorizontal:20,
        height : 60,
        marginVertical:10
    }
})