import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';

import {addToCart, removeToCart} from '../../../redux/features/CartSlice';
import {navigate} from '../../../navigation/rootnavigation';
import {styles} from './Style';

const ProductDetail = ({route}) => {
  const [currentItem, setCurrentItem] = useState({});
  const {Product} = route.params;
  console.log(Product);
  const dispatch = useDispatch();
  const {cartData, totalAmount} = useSelector(state => state.cartItems);
  console.log('Cart Data and Total Amount: ', cartData, totalAmount);

  useEffect(() => {
    const itemChecking = () => {
      const itemAvailable = cartData?.find(value => value.id === Product.id);
      if (itemAvailable) {
        setCurrentItem(itemAvailable);
      } else {
        setCurrentItem({});
      }
    };
    itemChecking();
  }, [cartData]);
  return (
    <View style={styles.container}>
      <Header />
      <Image style={styles.imgStyle} source={{uri: Product.thumbnail}} />
      <View style={styles.data}>
        <Text style={styles.dataTextTitle}>{Product.title}</Text>
        <Text style={styles.dataText}>Price: ${Product.price}</Text>
      </View>
      <View style={{margin: 10}}>
        <Text style={styles.dataText}>
          Category:{' '}
          <Text style={styles.dataTextDetail}>{Product.category}</Text>
        </Text>
        <Text
          style={styles.dataTextHeading}>
          Brand: <Text style={styles.dataTextDetail}>{Product.brand}</Text>
        </Text>
        <Text
          style={styles.dataTextHeading}>
          Description:{' '}
          <Text style={styles.dataTextDetail}>{Product.description}</Text>
        </Text>
        <Text
          style={styles.dataTextHeading}>
          Rating: <Text style={styles.dataTextDetail}>{Product.rating}</Text>
        </Text>
        <Text
          style={styles.dataTextHeading}>
          Stock: <Text style={styles.dataTextDetail}>{Product.stock}</Text>
        </Text>
        <View>
          {currentItem.quantity > 0 ? (
            <View
              style={styles.addQuantity}>
              <Pressable
                style={styles.button}
                onPress={() => dispatch(removeToCart(Product.id))}>
                <Text
                  style={styles.buttonText}>
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={styles.quantity}>
                  {currentItem.quantity}
                </Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => dispatch(addToCart(Product))}>
                <Text
                  style={styles.buttonText}>
                  +
                </Text>
              </Pressable>
            </View>
          ) : (
            <Pressable
              onPress={() => dispatch(addToCart(Product))}
              style={styles.cartBtn}>
              <Text style={styles.cartBtnText}>
                Add to Cart
              </Text>
            </Pressable>
          )}
        </View>

        <TouchableOpacity
          onPress={() => navigate('CartScreen')}
          style={styles.cartBtn}>
          <Text style={styles.cartBtnText}>
            View Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
