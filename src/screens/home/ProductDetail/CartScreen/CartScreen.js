import {
  View,
  Text,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../../../components/Header/Header';
import {
  addToCart,
  clearCart,
  removeToCart,
} from '../../../../redux/features/CartSlice';
import {navigate} from '../../../../navigation/rootnavigation';
import {styles} from './Style';

const CartScreen = () => {
  const {cartData, totalAmount} = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    Alert.alert('Order Success', 'Your Order Placed Successfully', [
      {text: 'OK', onPress: () => navigate('Home')},
    ]);
    dispatch(clearCart());
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Header />
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <View style={styles.card} key={item.id}>
                <View style={styles.dataView}>
                  <Image
                    style={styles.imgStyle}
                    source={{uri: item.thumbnail}}
                  />
                  <View style={styles.textView}>
                    <Text style={styles.textStyle}>{item.title}</Text>
                    <Text style={styles.textStyle}>${item.price}</Text>
                  </View>
                </View>
                <View>
                  <Pressable
                    onPress={() => dispatch(removeToCart(item.id))}
                    style={styles.btnStyle}>
                    <Text style={styles.btnTextStyle}>-</Text>
                  </Pressable>
                  <Pressable>
                    <Text style={styles.btnTextStyle}>{item.quantity}</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => dispatch(addToCart(item))}
                    style={styles.btnStyle}>
                    <Text style={styles.btnTextStyle}>+</Text>
                  </Pressable>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Total Amount: ${totalAmount}</Text>
        <TouchableOpacity onPress={handleCheckout} style={styles.btn}>
          <Text style={styles.btnText}>Proceed To Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
