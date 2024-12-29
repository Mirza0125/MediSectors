import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import { COLORS } from '../services/colors';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../redux/theme/theme';

const VerificationFields = ({ changetext, keyProp }) => {
  let otpInput = useRef(null);

  const theme = useSelector(state => state.theme.theme)
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <View style={{ alignSelf: 'center' }}>
      <OTPTextInput
        key={keyProp}
        handleTextChange={changetext}
        ref={e => (otpInput = e)}
        textInputStyle={{
          color: currentTheme.primary,
          backgroundColor: currentTheme.verificationFields,
          borderWidth: 3,
          borderRadius: 10
        }}
        tintColor={currentTheme.greenColor}
        offTintColor={'transparent'}
        containerStyle={{ width: 300 }}
        autoFocus={true}
      />
    </View>
  )
}

export default VerificationFields

const styles = StyleSheet.create({})