import React, {useState} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
// import {Formik} from 'formik';
// import * as Yup from 'yup';

import styles from './Style';
import {imagesPaths} from '../../assets/images';
import {Entypo, FontAwesome} from '../../assets/vectorIcons';
import {login} from '../../redux/features/AuthSlice';
// import { combineSlices } from '@reduxjs/toolkit';
// import actions from '../../redux/actions';

// const LoginSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(4, 'Too Short!')
//     .max(20, 'Too Long!')
//     .required('Please Enter your Username or Email'),
//   email: Yup.string().email('Invalid email').required('Required'),
//   password: Yup.string()
//     .min(8)
//     .required('Please Enter Your Passwrod')
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
//       'Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
//     ),
// });

const Login = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const onLogin = () => {
    const params = {
      username: name,
      password: pass,
    };
    console.log('Params: ', params);
    dispatch(login(params));
  };

  return (
    <View style={styles.container}>
      <Image style={styles.bg_img} source={imagesPaths.bg} />
      {/* <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          console.log('hello');
        }}> 
        {({
          values,
          errors,
          handleSubmit,
          touched,
          handleChange,
          handleBlur,
        }) => ( */}
      <View style={styles.inputCard}>
        <TextInput
          value={name}
          placeholder="Username"
          style={styles.inputField}
          // onChangeText={handleChange('name')}
          // onBlur={handleBlur('name')}
          // value={values.name}
          onChangeText={setName}
        />
        {/* {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )} */}

        <TextInput
          style={styles.inputField}
          secureTextEntry
          placeholder="Password"
          // onChangeText={handleChange('password')}
          // onBlur={handleBlur('password')}
          // value={values.password}
          onChangeText={setPass}
          value={pass}
        />
        {/* {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )} */}

        <TouchableOpacity onPress={onLogin} style={styles.btn}>
          <Text style={styles.btn_Text}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forget}>
          <Text style={styles.forget_text}>Forget password?</Text>
        </TouchableOpacity>

        <View style={styles.sign_Ins}>
          <TouchableOpacity style={styles.fb}>
            <Entypo name="facebook-with-circle" size={25} color="blue" />
            <Text style={styles.sign_Ins_Text}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.google}>
            <FontAwesome name="google-plus-circle" size={25} color="red" />
            <Text style={styles.sign_Ins_Text}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sign_Up}>
          <Text style={styles.account_Text}>Dont have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.sign_Up_Text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* )}
      </Formik> */}
    </View>
  );
};

export default Login;
