import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import Logout from '../../../assets/images/Logout.svg';
import CustomButton from '../../../components/CustomButton'

const data = [
  {
    id: 1,
    name: 'Profile',
    icon: 'user',
    navigationScreen: 'ProfileScreen'
  },
  {
    id: 2,
    name: 'Favorite',
    icon: 'heart',
    navigationScreen: 'Favorite'

  },
  {
    id: 3,
    name: 'Payment Method',
    icon: 'credit-card',
    navigationScreen: 'PaymentMethods'

  },

  {
    id: 4,
    name: 'Settings',
    icon: 'settings',
    navigationScreen: 'Settings'

  },
  {
    id: 5,
    name: 'Privacy Policy',
    icon: 'lock',
    navigationScreen: 'PrivacyPolicy'

  },
  {
    id: 6,
    name: 'Help',
    icon: 'help-circle',
    navigationScreen: 'Help'

  },
  {
    id: 7,
    name: 'Logout',
    icon: 'log-out',
    navigationScreen: 'null'
  },
]

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={[styles.safeArea]}>
      <LinearGradient
        style={styles.gradient}
        colors={['rgba(82, 209, 198, 1)', 'rgba(48, 173, 162, 1)']}
      >
        <View style={styles.container}>
          <View style={{ flex: 1 }}>

            <View style={{ alignSelf: 'flex-end' }}>
              <Image source={require('../../../assets/images/star.png')} resizeMode='cover' style={{ width: 300, height: 300 }} />
            </View>
            <View style={{ bottom: 200, alignSelf: 'center' }}>
              <View style={{ width: 100, height: 100, backgroundColor: COLORS.white, borderRadius: 50, alignSelf: 'center' }}>
                <Image source={require('../../../assets/images/doctor1.png')} resizeMode='cover' style={{ width: 100, height: 100 }} borderRadius={50} />

              </View>
              <View style={{ marginVertical: 10 }}>
                <Text style={{ fontFamily: 'Poppins-Bold', color: COLORS.white, fontSize: 18 }}>Amelia Renata</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 280, alignSelf: 'center', bottom: 170, }}>
              <View>
                <Fontisto name='person' color={COLORS.white} size={26} />
                <Text style={{ color: 'rgba(193, 243, 239, 1)', fontFamily: 'Poppins-Medium', fontSize: 12, top: 2 }}>Age</Text>
                <Text style={{ color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 15, textAlign: 'center' }}>21</Text>
              </View>
              <View style={{ width: 1, height: 50, backgroundColor: 'rgba(193, 243, 239, 1)' }}></View>

              <View>
                <Fontisto name='blood-drop' color={COLORS.white} size={26} style={{ left: 10 }} />
                <Text style={{ color: 'rgba(193, 243, 239, 1)', fontFamily: 'Poppins-Medium', fontSize: 12, top: 2 }}>Blood</Text>
                <Text style={{ color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 15, textAlign: 'center' }}>AB+</Text>
              </View>

              <View style={{ width: 1, height: 50, backgroundColor: 'rgba(193, 243, 239, 1)' }}></View>

              <View>
                <MaterialCommunityIcons name='weight-lifter' color={COLORS.white} size={26} style={{ left: 10 }} />
                <Text style={{ color: 'rgba(193, 243, 239, 1)', fontFamily: 'Poppins-Medium', fontSize: 12, top: 2 }}>Weight</Text>
                <Text style={{ color: COLORS.white, fontFamily: 'Poppins-Medium', fontSize: 15, textAlign: 'center' }}>50</Text>
              </View>

            </View>

          </View>
          <View style={{ backgroundColor: COLORS.white, width: '100%', borderTopRightRadius: 40, borderTopLeftRadius: 40, paddingHorizontal: 24, paddingTop: 30, flex: 1, }}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={{ marginVertical: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                      onPress={() => item.name === 'Logout' ? setModalVisible(true) : navigation.navigate(item.navigationScreen)}
                    >
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 40, height: 40, backgroundColor: COLORS.lightGreen2, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                          <Feather name={item.icon} size={20} color={COLORS.greenColor} />
                        </View>
                        <View style={{ left: 20 }}>
                          <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium' }}>{item.name}</Text>
                        </View>

                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate(item.navigationScreen)}
                      >
                        <AntDesign name='right' size={20} color={COLORS.lightGrey} />
                      </TouchableOpacity>

                    </TouchableOpacity>
                    <View style={{ width: '100%', height: 1, backgroundColor: item.name === 'Logout' ? 'white' : 'rgb(199, 207, 205)', marginHorizontal: 5, marginTop: 14 }}></View>
                  </View>
                )
              }}
              showsVerticalScrollIndicator={false}

            />


          </View>

        </View>
      </LinearGradient>
      <Modal
        animationType='fade'
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >

        <View style={{ height: '100%', position: 'absolute', width: '100%', backgroundColor: COLORS.modalOverlay, alignItems: 'center' }}>
          <View style={{ alignSelf: 'center', width: '89%', backgroundColor: COLORS.white, height: '50%', padding: 30, borderRadius: 30, alignItems: 'center', top: 200 }}>
            <Logout width={100} height={100} style={{}} />
            <View style={{ marginTop: 20 }}>
              <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Bold', fontSize: 20, textAlign: 'center' }}>Are you sure to logout your account?</Text>
            </View>

            <View style={{ marginTop: 14 }}>
              <CustomButton title={'Logout'} style={{ width: 200 }} onPress={() => navigation.navigate('SignIn')} />
              <CustomButton title={'Cancel'} style={{ width: 200, backgroundColor: COLORS.lightGrey, borderColor: 'transparent' }} onPress={() => setModalVisible(false)} />
            </View>


          </View>

        </View>

      </Modal>

    </SafeAreaView>

  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative'
  },
  container: {
    flex: 1,
  },
  gradient: {
    width: '100%',
    height: '100%'
  }
})