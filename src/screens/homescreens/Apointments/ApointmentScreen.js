import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../services/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Upcoming from './Upcoming';
import Completed from './Completed';
import Canceled from './Canceled';


const ApointmentScreen = () => {
  const [upcoming, setUpComing] = useState(true)
  const [completed, setCompleted] = useState(false)
  const [canceled, setCanceled] = useState(false)

  const toggle1 = () => {
    setUpComing(true)
    setCanceled(false)
    setCompleted(false)
  }
  const toggle2 = () => {
    setUpComing(false)
    setCanceled(false)
    setCompleted(true)
  }
  const toggle3 = () => {
    setUpComing(false)
    setCanceled(true)
    setCompleted(false)
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', top: 5 }}>
          <Text style={{ color: COLORS.primary, fontSize: 24, fontFamily: 'Poppins-Bold' }}>Schedule</Text>
          <View style={{ bottom: 2 }}>
            <TouchableOpacity>
              <MaterialCommunityIcons name='bell' size={22} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '100%', height: 50, borderRadius: 14, backgroundColor: COLORS.lightGreen2, alignItems: 'center', justifyContent: 'space-between',  flexDirection: 'row', marginTop:28 }}>
          <TouchableOpacity onPress={toggle1}>
            <View style={{ width: 120, backgroundColor: upcoming ? COLORS.greenColor : 'transparent', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
              <Text style={{ color: upcoming ? COLORS.white : COLORS.primary, fontFamily: 'Poppins-Medium' }}>
                Upcoming
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggle2}>
            <View style={{ width: 120, backgroundColor: completed ? COLORS.greenColor : 'transparent', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
              <Text style={{ color: completed ? COLORS.white : COLORS.primary, fontFamily: 'Poppins-Medium' }}>
                Completed
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggle3}>
            <View style={{ width: 120, backgroundColor: canceled ? COLORS.greenColor : 'transparent', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10 }}>
              <Text style={{ color: canceled ? COLORS.white : COLORS.primary, fontFamily: 'Poppins-Medium' }}>
                Canceled
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          {
            upcoming ? <Upcoming /> : completed ? <Completed /> : <Canceled />
          }

        </View>
      </View>
    </SafeAreaView>
  )
}

export default ApointmentScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'relative'
  },
  container: {
    paddingTop: 40,
    flex: 1,
    paddingHorizontal: 18
  }
})