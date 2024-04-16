import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useAuth } from '@context/authContext';
import { useNavigation } from '@react-navigation/native';
import { style } from '@screens/profile/adress/styles/index.styles';
import { Adress, EditUserInput, editUser } from '@services/editUser';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import SaveCancelButton from '../components/SaveCancelButton';

const EditAdressScreen: React.FC = () => {
  const { user, refreshData } = useAuth();
  const navigation = useNavigation<any>();

  const [addressFormData, setAddressFormData] = useState<Partial<Adress>>({
    neighborhood: '',
    complement: '',
    zipCode: '',
    street: '',
    state: '',
    city: '',
    number: '',
  });

  const fetchAddress = async () => {
    if (addressFormData.zipCode?.length === 8) {
      const response = await axios.get(`https://viacep.com.br/ws/${addressFormData.zipCode}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;
      setAddressFormData((prev) => ({
        ...prev,
        street: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf,
      }));
    }
  };

  useEffect(() => {
    if (user && user.address) {
      setAddressFormData({
        neighborhood: user.address.neighborhood,
        complement: user.address.complement,
        zipCode: user.address.zipCode,
        street: user.address.street,
        state: user.address.state,
        city: user.address.city,
        number: user.address.number,
      });
    }
  }, [user]);

  const handleChange = (name: keyof Adress, value: string) => {
    setAddressFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const updatedUserData: Partial<EditUserInput> = {
      address: addressFormData as Adress,
    };
    try {
      await editUser(updatedUserData as EditUserInput);
      await refreshData();
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1, width: 'auto' }} keyboardShouldPersistTaps="handled">
      <View style={style.container}>
        <View style={style.containerHeader}>
          <View style={style.titleContainer}>
            <ButtonBack title="Endereço" subTitle="" />
          </View>
        </View>
        <View style={style.myAdress}>
          <Text style={style.myAdressTitle}>Meu endereço</Text>
          <Text style={style.myAdressDescription}>
            {addressFormData.zipCode} - {addressFormData.neighborhood}, {addressFormData.city} -{' '}
            {addressFormData.state} Nº
            {addressFormData.number} - {addressFormData.complement}
          </Text>
        </View>
        <View style={style.form}>
          <Text style={style.label}>CEP</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="00000-000"
            placeholderTextColor="#9F9F9F"
            style={style.input}
            value={addressFormData.zipCode}
            onChangeText={(text) => handleChange('zipCode', text)}
            onBlur={fetchAddress}
          />
          <Text style={style.label}>Bairro</Text>
          <TextInput
            placeholder="Bairro"
            placeholderTextColor="#9F9F9F"
            style={style.input}
            value={addressFormData.neighborhood}
            onChangeText={(text) => handleChange('neighborhood', text)}
          />

          <View style={style.row}>
            <View style={style.halfInputContainer}>
              <Text style={style.label2}>Número</Text>
              <TextInput
                keyboardType="numeric"
                placeholder="Nº"
                placeholderTextColor="#9F9F9F"
                style={style.halfInput}
                value={addressFormData.number}
                onChangeText={(text) => handleChange('number', text)}
              />
            </View>
            <View style={style.halfInputContainer}>
              <Text style={style.label2}>Complemento</Text>
              <TextInput
                placeholder="Apto, bloco, etc."
                placeholderTextColor="#9F9F9F"
                style={style.halfInput}
                value={addressFormData.complement}
                onChangeText={(text) => handleChange('complement', text)}
              />
            </View>
          </View>

          <View style={style.row}>
            <View style={style.halfInputContainer}>
              <Text style={style.label2}>Cidade</Text>
              <TextInput
                placeholder="Cidade"
                placeholderTextColor="#9F9F9F"
                style={style.halfInput}
                value={addressFormData.city}
                onChangeText={(text) => handleChange('city', text)}
              />
            </View>
            <View style={style.halfInputContainer}>
              <Text style={style.label2}>UF</Text>
              <TextInput
                placeholder="UF"
                placeholderTextColor="#9F9F9F"
                style={style.halfInput}
                value={addressFormData.state}
                onChangeText={(text) => handleChange('state', text)}
              />
            </View>
          </View>

          <Text style={style.label}>Nome da rua</Text>
          <TextInput
            placeholder="Rua"
            placeholderTextColor="#9F9F9F"
            style={style.input}
            value={addressFormData.street}
            onChangeText={(text) => handleChange('street', text)}
          />

          <View style={style.buttonContainer}>
            <SaveCancelButton onSave={handleSave} onCancel={handleCancel} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditAdressScreen;
