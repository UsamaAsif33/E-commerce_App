import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllProducts} from '../../redux/features/ProductSlice';
import {navigate} from '../../navigation/rootnavigation';
import {styles} from './Style';
import {clearLoginData} from '../../redux/features/AuthSlice';
import {AntDesign} from '../../assets/vectorIcons';
import {COLORS} from '../../shared/theme';

const Home = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  console.log('All Products: ', products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const logout = () => {
    Alert.alert('Logout', 'Are you sure to Logout', [
      {text: 'Yes', onPress: () => dispatch(clearLoginData())},
      {text: 'No'},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logout}>
        <Text style={styles.homeText}>Home</Text>
        <TouchableOpacity onPress={logout}>
          <AntDesign name="logout" size={25} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products?.products}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => {
                navigate('ProductDetail', {Product: item});
              }}
              style={styles.card}
              key={item.id}>
              <Image style={styles.img} source={{uri: item.thumbnail}} />
              <View style={styles.data}>
                <Text style={styles.dataTextTitle}>{item.title}</Text>
                <Text style={styles.dataText}>Price: ${item.price}</Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Home;
