import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addUserData} from '../../redux/action';
import {dummyData} from '../../util/dummyData';
import {strings} from '../../util/strings';
import styles from './styles';

const EMAIL_REG = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const initialState = {
  email: 'initialState',
  password: 'initialState',
  emailError: '',
  passwordError: '',
  isCorrectEmail: false,
  isCorrectPassword: false,
};

function LoginScreen({navigation}) {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);

  /* Storing email password and users list to redux state*/

  useEffect(() => {
    const data = {
      username: 'hruday@gmail.com',
      password: 'hruday123',
      employeeList: dummyData.user,
    };
    dispatch(addUserData(data));
    return () => {};
  }, []);

  /* This useEffect are for handling the initial situation */

  useEffect(() => {
    if (state.password !== 'initialState') {
      validatePassword();
    }
    return () => {};
  }, [state.password]);

  useEffect(() => {
    if (state.email !== 'initialState') {
      validateEmail();
    }
    return () => {};
  }, [state.email]);

  const validateEmail = () => {
    let emailError = '';
    let isCorrectEmail = false;
    if (
      state.email === undefined ||
      state.email.trim() === '' ||
      state.email.trim() === 'initialState'
    ) {
      emailError = strings.emptyEmailError;
      isCorrectEmail = false;
    } else if (EMAIL_REG.test(state.email) === false) {
      emailError = strings.invalidEmailError;
      isCorrectEmail = false;
    } else {
      isCorrectEmail = true;
    }
    setState((prevState) => ({
      ...prevState,
      emailError: emailError,
      isCorrectEmail: isCorrectEmail,
    }));
  };

  const validatePassword = () => {
    let passwordError = '';
    let isCorrectPassword = false;
    if (
      state.password === undefined ||
      state.password.trim() === '' ||
      state.password.trim() === 'initialState'
    ) {
      passwordError = strings.passwordError;
      isCorrectPassword = false;
    } else {
      isCorrectPassword = true;
    }
    setState((prevState) => ({
      ...prevState,
      passwordError: passwordError,
      isCorrectPassword: isCorrectPassword,
    }));
  };

  const handleLoginClick = () => {
    Keyboard.dismiss();
    validateEmail();
    validatePassword();
    if (state.isCorrectEmail && state.isCorrectPassword) {
      if (
        state.email === stateData.userData.username &&
        state.password === stateData.userData.password
      ) {
        navigation.navigate('Details');
      } else {
        createAlert();
      }
    }
  };

  const createAlert = () =>
    Alert.alert(
      strings.alertTitle,
      strings.alertMessage,
      [
        {
          text: strings.alertConfirmAction,
          onPress: () => console.log('OK Pressed'),
        },
        ,
      ],
      {cancelable: false},
    );

  const renderLoginButton = () => (
    <TouchableOpacity
      style={styles.loginButton}
      onPress={() => handleLoginClick()}>
      <Text style={styles.loginText}>{strings.loginButtonText}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Image
        style={styles.appLogo}
        source={require('../../assets/loginIcon.png')}
      />
      <View style={styles.inputView}>
        <View style={styles.textInputContainer}>
          <Image
            style={styles.drawableLeft}
            source={require('../../assets/email.png')}
          />
          <TextInput
            style={styles.inputText}
            keyboardType={'email-address'}
            placeholder={strings.emailPlaceHolder}
            onChangeText={(text) => {
              setState((prevState) => ({
                ...prevState,
                email: text,
              }));
            }}
          />
        </View>
        {state.emailError !== '' ? (
          <Text style={styles.errorText}>{state.emailError}</Text>
        ) : (
          <View />
        )}
      </View>
      <View style={styles.inputView}>
        <View style={styles.textInputContainer}>
          <Image
            style={styles.drawableLeft}
            source={require('../../assets/password.png')}
          />
          <TextInput
            style={styles.inputText}
            keyboardType={'default'}
            placeholder={strings.passwordPlaceHolder}
            secureTextEntry={true}
            onChangeText={(text) => {
              setState((prevState) => ({
                ...prevState,
                password: text,
              }));
            }}
          />
        </View>
        {state.passwordError !== '' ? (
          <Text style={styles.errorText}>{state.passwordError}</Text>
        ) : (
          <View />
        )}
      </View>
      {renderLoginButton()}
    </View>
  );
}

export default LoginScreen;
