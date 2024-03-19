import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imgStyle: {
    width: '90%',
    height: '20%',
    borderRadius: 10,
    marginLeft: wp('5'),
    marginTop: hp('2'),
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp('7'),
  },
  dataText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  dataTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    width: wp('60')
  },
  dataTextHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 10,
  },
  dataTextDetail: {
    fontWeight: 'normal',
  },
  addQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: COLORS.lightgrey,
    marginTop: hp('2'),
    height: hp('5'),
    width: wp('15'),
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  quantity: {
    fontSize: 30,
    color: COLORS.black,
    fontWeight: 'bold',
    marginTop: hp('1'),
  },
  cartBtn: {
    backgroundColor: COLORS.pink,
    borderRadius: 20,
    padding: wp('3'),
    margin: wp('2'),
  },
  cartBtnText: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.white,
  },
});
