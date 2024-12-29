import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../services/colors'
import { useSelector } from 'react-redux'
const { width, height } = Dimensions.get('window')
import { darkTheme, lightTheme } from '../redux/theme/theme'

const SocialField = (props) => {

      const theme = useSelector(state => state.theme.theme)
      const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <TouchableOpacity style={{
      width: width * 0.9,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: currentTheme.inputFieldBorder,
      backgroundColor: currentTheme.socialField,
      borderRadius: 30,
      paddingHorizontal: 20,
      height: 60,
      marginVertical: 10
    }}>
      <Image source={props.img} style={{ width: 24, height: 24 }} resizeMode='contain' />
      <Text style={{ color: currentTheme.primary, fontFamily: 'Poppins-Bold', left: 70 }}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default SocialField

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.inputFieldBorder,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 60,
    marginVertical: 10
  }
})