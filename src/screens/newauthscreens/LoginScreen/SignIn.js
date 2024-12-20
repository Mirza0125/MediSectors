import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { COLORS } from '../../../services/colors'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../../components/InputField'
import PasswordInput from '../../../components/PasswordInput'
import CustomButton from '../../../components/CustomButton'
import SocialField from '../../../components/SocialField'

const {width, height} = Dimensions.get('window')

const SignIn = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
            <View style={{ flexDirection: 'row', marginTop: 50 , paddingHorizontal:20}}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image source={require('../../../assets/images/back.png')} resizeMode='contain' style={{ width: 18, height: 18 }} />
                </TouchableOpacity>
                <View style={{left:140}}>
                    <Text style={{ color: COLORS.primary, fontFamily: 'Inter_18pt-Bold', fontSize: 16 }} >Login</Text>
                </View>
            </View>
            <View style={styles.container}>
                <InputField />
                <PasswordInput />
                <View style={{alignSelf:'flex-end'}}>
                    <TouchableOpacity>
                    <Text style={{color:COLORS.greenColor, fontFamily:'Inter_18pt-Medium'}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:28}}>

                <CustomButton title={'Login'} style={{width:width*0.9}} />
                <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center', marginTop:14}}>
                    <Text style={{color:COLORS.lightGrey, fontFamily:'Inter_18pt-Regular', top:1}}>
                    Don’t have an account?
                    </Text>
                    <TouchableOpacity>
                        <Text style={{color:COLORS.greenColor, fontFamily:'Inter_18pt-Regular', left:4}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center', marginTop:38}}>
                    <View style={{width:160, height:0.5, backgroundColor:COLORS.lightGrey}}></View>
                    <Text style={{color:COLORS.lightGrey, marginHorizontal:10}}>OR</Text>
                    <View style={{width:160, height:0.5, backgroundColor:COLORS.lightGrey}}></View>
                </View>

                <View style={{marginTop:25}}>
                    <SocialField text={'Sign in with Google'} img={require('../../../assets/images/Google.png')} />
                    <SocialField text={'Sign in with Apple'} img={require('../../../assets/images/Vector.png')} />
                    <SocialField text={'Sign in with Facebook'} img={require('../../../assets/images/Facebook.png')} />

                </View>

            </View>
        </SafeAreaView>

    )
}

export default SignIn

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
        position: 'relative'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingTop: 18
    }
})