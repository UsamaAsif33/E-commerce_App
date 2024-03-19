import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import counterSlice from './features/counterSlice';
import AuthSlice from './features/AuthSlice';
import {persistStore, persistReducer} from 'redux-persist';
import ProductSlice from './features/ProductSlice';
import CartSlice from './features/CartSlice';

const reducers = combineReducers({
  counter: counterSlice,
  auth: AuthSlice,
  products: ProductSlice,
  cartItems: CartSlice,
});

const persistConfig = {
  key: 'roor',
  storage: AsyncStorage,
  whiteList: ['auth,', 'counter'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false, immutableCheck: false}),
});

const persistor = persistStore(store);
export {store, persistor};
