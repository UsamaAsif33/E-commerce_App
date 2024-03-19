import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logout: {
    margin: wp('5'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  card: {
    height: hp('36'),
    backgroundColor: COLORS.lightgrey,
    padding: wp('3'),
    margin: wp('3'),
    borderRadius: 20,
  },
  img: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp('2'),
  },
  dataText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  dataTextTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    width: wp('60')
  }
});
