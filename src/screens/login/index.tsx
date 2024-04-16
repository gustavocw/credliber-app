import RightArrow from '@assets/icons/dash/arrowRight';
import EyeOff from '@assets/icons/dash/eyeOff';
import EyeOn from '@assets/icons/dash/eyeOn';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useAuth } from '@context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { SignInInput } from '@services/types/users.type';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Yup from 'yup';

import styles from './styles/index.styles';
type LoginScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;
const ASYNC_STORAGE_USER = 'credliber_auth_user';
const ASYNC_STORAGE_LOGIN = 'credliber_auth_user_login';

const validationSchema = Yup.object().shape({
  cpf: Yup.string()
    .required('CPF é obrigatório')
    .matches(/^\d{11}$/, 'CPF inválido'),
  password: Yup.string().required('Senha é obrigatória'),
});

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { signIn } = useAuth();
  const [userName, setUserName] = useState('');
  const [userCpf, setUserCpf] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const userJson = await AsyncStorage.getItem(ASYNC_STORAGE_USER);
      const storedCpf = await AsyncStorage.getItem(ASYNC_STORAGE_LOGIN);
      if (userJson) {
        const user = JSON.parse(userJson);
        setUserName(user.name);
      }
      if (storedCpf) {
        setUserCpf(storedCpf);
        console.log(storedCpf, userName);
      }
    };
    fetchUser();
  }, []);

  const { handleChange, handleSubmit, values, errors, touched, handleBlur, setFieldValue } =
    useFormik({
      initialValues: { cpf: userCpf || '', password: '' },
      validationSchema,
      onSubmit: async (values: SignInInput) => {
        try {
          await signIn(values);
          await AsyncStorage.setItem(ASYNC_STORAGE_LOGIN, values.cpf || '');
          navigation.navigate('Dashboard');
        } catch (error) {
          console.error(error);
        }
      },
      enableReinitialize: true,
    });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.header}>
            <ButtonBack title="" subTitle="" />
          </View>
          <View style={styles.content}>
            <View style={styles.swiperContainer}>
              <Swiper style={styles.wrapper} showsButtons={false} autoplay={false}>
                <View style={styles.slide}>
                  <Image source={require('@assets/images/slide1.jpeg')} style={styles.slide} />
                </View>
                <View style={styles.slide}>
                  <Image source={require('@assets/images/slide2.jpeg')} style={styles.slide} />
                </View>
                <View style={styles.slide}>
                  <Image source={require('@assets/images/slide3.jpeg')} style={styles.slide} />
                </View>
              </Swiper>
            </View>
            <View style={styles.contentInput}>
              <View style={styles.content}>
                {userName ? (
                  <>
                    <View style={styles.welcomeBackContainer}>
                      <Text style={styles.welcomeBackText}>Bem-vindo </Text>
                      <TouchableOpacity
                        onPress={async () => {
                          await AsyncStorage.removeItem(ASYNC_STORAGE_USER);
                          setUserName('');
                          setFieldValue('cpf', '', false);
                        }}
                        style={styles.switchAccountContainer}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.switchAccountText}>Entrar com outra conta</Text>
                          <RightArrow />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.containerName}>
                      <Text style={styles.userNameText}>{userName}</Text>
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.containerName}>
                      <Text style={styles.label}>CPF</Text>
                      {touched.cpf && errors.cpf && (
                        <Text style={styles.errorText}>{errors.cpf}</Text>
                      )}
                    </View>
                    <TextInput
                      keyboardType="numeric"
                      placeholder="000.000.000-00"
                      placeholderTextColor="#9F9F9F"
                      style={styles.input}
                      onChangeText={handleChange('cpf')}
                      onBlur={handleBlur('cpf')}
                      value={values.cpf}
                      editable={!userCpf}
                    />
                  </>
                )}
              </View>
              <View style={styles.errorContainer}>
                <Text style={styles.label}>Senha</Text>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  placeholder="Sua senha"
                  placeholderTextColor="#9F9F9F"
                  secureTextEntry={!passwordVisible}
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  style={{
                    position: 'absolute',
                    right: 10,
                    height: '100%',
                    justifyContent: 'center',
                  }}>
                  {passwordVisible ? (
                    <EyeOn size={24} color="black" />
                  ) : (
                    <EyeOff size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.accessButton} onPress={() => handleSubmit()}>
              <Text style={styles.accessButtonText}>Acessar minha conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
