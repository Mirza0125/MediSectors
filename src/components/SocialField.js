import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../services/colors'

const {width, height} = Dimensions.get('window')
const SocialField = (props) => {

  return (
    <View style={styles.container}>
        <Image source={props.img} style={{width:24, height:24}} resizeMode='contain' />
        <Text style={{color:COLORS.primary, fontFamily:'Inter_18pt-Bold', left:70}}>{props.text}</Text>
    </View>
  )
}

export default SocialField

const styles = StyleSheet.create({
    container : {
        width : width *0.9,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:COLORS.inputFieldBorder,
        backgroundColor : COLORS.white,
        borderRadius:24,
        paddingHorizontal:20,
        height : 60,
        marginVertical:10
    }
})