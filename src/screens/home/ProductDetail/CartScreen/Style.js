import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerView: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    margin: wp('3'),
    padding: wp('3'),
    borderRadius: 20,
  },
  dataView: {
    flexDirection: 'row',
    marginTop: hp('1'),
  },
  imgStyle: {
    height: hp('15'),
    width: wp('30'),
    borderRadius: 10,
  },
  textView: {
    marginLeft: wp('3'),
  },
  textStyle: {
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: 16,
    width: wp('35'),
  },
  btnStyle: {
    backgroundColor: COLORS.lightgrey,
    height: hp('5'),
    width: wp('10'),
    borderRadius: 20,
  },
  btnTextStyle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  footer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: wp('4'),
  },
  footerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: 20,
  },
  btn: {
    backgroundColor: COLORS.pink,
    borderRadius: 20,
    padding: wp('2'),
    margin: wp('2'),
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.white,
  },
});
