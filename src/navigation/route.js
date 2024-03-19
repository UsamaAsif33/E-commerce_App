import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Login from '../screens/login/Login';
import {navigationRef} from './rootnavigation';
// import CounterScreen from '../screens/counterScreen/CounterScreen';
import Home from '../screens/home/Home';
import ProductDetail from '../screens/home/ProductDetail/ProductDetail';
import CartScreen from '../screens/home/ProductDetail/CartScreen/CartScreen';

const LoginStack = createNativeStackNavigator();

function LoginScreens() {
  const {userData} = useSelector(state => state.auth);
  console.log('Route User Data: ', userData);
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      {userData ? (
        <LoginStack.Group>
          <LoginStack.Screen name="Home" component={Home} />
          <LoginStack.Screen name="ProductDetail" component={ProductDetail} />
          <LoginStack.Screen name="CartScreen" component={CartScreen} />
        </LoginStack.Group>
      ) : (
        <LoginStack.Screen name="Login" component={Login} />
      )}
    </LoginStack.Navigator>
  );
}

const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <LoginScreens />
    </NavigationContainer>
  );
};

export default Route;
