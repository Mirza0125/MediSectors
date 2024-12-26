import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import { COLORS } from '../services/colors';

const {width, height} = Dimensions.get('window');

export default function DayDate({day, date1, isToday,selected, container, textStyle}) {
  return (
    <View
      style={{
        width: width * 0.1,
        height: height * 0.068,
        backgroundColor: isToday ? selected : container,
        borderRadius: 15,
        alignItems: 'center',
        borderWidth:1,
        borderColor : isToday ? selected : '#E8F3F1'
      }}>
      <Text
        style={{
          color: isToday ? COLORS.white : '#A1A8B0',
          marginTop: height * 0.01,
          fontFamily: 'Poppins-Regular',
          fontSize:10,
          ...textStyle
        }}>
        {day}
      </Text>
      <Text style={{color: isToday ? COLORS.white  : COLORS.primary, fontFamily: 'Poppins-Medium',...textStyle, fontSize:14}}>
        {date1}
      </Text>
    </View>
  );
}
