import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../shared/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bg_img: {
    height: '30%',
    width: '100%',
  },
  inputCard: {
    marginTop: hp('5'),
    resizeMode: 'cover',
  },
  inputField: {
    padding: wp('3'),
    margin: wp('3'),
    backgroundColor: COLORS.lightgrey,
    borderRadius: 25,
    fontSize: 18,
  },
  btn: {
    padding: wp('3'),
    margin: wp('3'),
    backgroundColor: COLORS.pink,
    borderRadius: 25,
  },
  btn_Text: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '600',
  },
  forget: {
    marginTop: hp('1'),
    borderRadius: 25,
  },
  forget_text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.blue,
  },
  sign_Ins: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('5'),
  },
  fb: {
    flexDirection: 'row',
  },
  google: {
    flexDirection: 'row',
    marginLeft: wp('10'),
  },
  sign_Ins_Text: {
    fontSize: 18,
    color: COLORS.blue,
    marginLeft: 15,
  },
  sign_Up: {
    marginTop: hp('5'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  account_Text: {
    fontSize: 18,
    color: COLORS.blue,
  },
  sign_Up_Text: {
    fontSize: 18,
    color: COLORS.blue,
    fontWeight: 'bold',
    marginLeft: wp('3'),
  },
  errorText: {
    color: COLORS.red,
    fontSize: 16,
    marginLeft: wp('5'),
    fontWeight: 'bold',
  },
});

export default styles;
