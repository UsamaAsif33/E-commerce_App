import {View, Button, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../redux/features/counterSlice';

const CounterScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  console.log("CounterScreen: ", count)
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
        {count}
      </Text>
      <Button title="Add" onPress={() => dispatch(increment())} />
      <Button title="Dec" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default CounterScreen;
