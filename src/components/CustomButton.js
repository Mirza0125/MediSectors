import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../services/colors'

const CustomButton = (props) => {
  return (
    <View style={{marginVertical:10}}>
        <TouchableOpacity onPress={props.onPress}>
            <View style={{width:270, height:52, borderRadius:30, backgroundColor:COLORS.greenColor, borderWidth:1, borderColor:COLORS.greenColor, alignItems:'center', justifyContent:'center', ...props.style}}>
                <Text style={{color : COLORS.white, fontFamily : 'Poppins-Medium', fontSize:16, textAlign:'center', ...props.textStyle,}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})