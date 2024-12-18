import {StyleSheet, Dimensions} from 'react-native';
import {FONTS} from '../services/fonts';
import {COLORS} from '../services/colors';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
const windowWidth = Dimensions.get('screen').width;

const CommonStyle = StyleSheet.create({
  title: {
    fontSize: scale(15),
    fontFamily: FONTS.BalooBhai2Medium,
    color: COLORS.black,
  },
  title1: {
    fontSize: scale(16),
    fontFamily: FONTS.BalooBhai2SemiBold,
    color: COLORS.black,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  viewAll: {
    fontSize: scale(12),
    fontFamily: FONTS.BalooBhai2SemiBold,
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 12,
    height: 56,
  },
  buttonTextStyle: {
    fontFamily: FONTS.BalooBhai2Regular,
    color: COLORS.black,
    fontSize: scale(14),
    textAlign: 'left',
  },
  rowTextStyle: {
    fontFamily: FONTS.BalooBhai2Regular,
    color: COLORS.black,
    fontSize: scale(14),
  },
  rowStyle: {
    backgroundColor: COLORS.white,
  },
  dropdownStyle: {
    borderRadius: 12,
  },
  formGroup: {
    marginBottom: 15,
  },
  formLabel: {
    fontFamily: FONTS.BalooBhai2Medium,
    color: COLORS.black,
    fontSize: scale(14),
    marginBottom: verticalScale(2),
  },
});

const modalStyle = StyleSheet.create({
  mainmodal: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    margin: 0,
    backgroundColor: ' rgba(0,0,0,0.1)',
  },
  modalbox: {
    borderRadius: 14,
    width: windowWidth - 40,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingVertical: verticalScale(25),
  },
  modalheading: {
    fontFamily: FONTS.BalooBhai2SemiBold,
    fontSize: scale(16),
    color: '#54595E',
    marginVertical: verticalScale(7),
  },
  modalsubheading: {
    fontFamily: FONTS.BalooBhai2Regular,
    fontSize: scale(14),
    textAlign: 'center',
    color: 'rgba(84, 89, 94, 0.60)',
  },
  modalBtn: {
    height: verticalScale(45),
    backgroundColor: COLORS.light_white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtnText: {
    fontFamily: FONTS.MontserratMedium,
    fontSize: scale(14),
    color: COLORS.black,
    textTransform: 'uppercase',
  },
  dimg: {
    width: 65,
    height: 65,
  },
  btnFlex: {
    flexDirection: 'row',
    gap: 15,
  },
});

export {modalStyle, CommonStyle};
