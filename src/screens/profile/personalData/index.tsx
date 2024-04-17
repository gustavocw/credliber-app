import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useAuth } from '@context/authContext';
import { useNavigation } from '@react-navigation/native';
import { style } from '@screens/profile/personalData/styles/index.styles';
import { EditUserInput, editUser } from '@services/editUser';
import { useState, useEffect } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import SaveCancelButton from '../components/SaveCancelButton';

const PersonalDataScreen = () => {
  const { user, refreshData } = useAuth();
  const navigation = useNavigation();
  const [formData, setFormData] = useState<Partial<EditUserInput>>({});

  useEffect(() => {
    setFormData({
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      birthDate: user?.birthDate,
    });
  }, [user]);

  const handleChange = (name: keyof EditUserInput, value: string) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const handleSave = () => {
    if (formData) {
      editUser(formData as EditUserInput)
        .then((response: any) => {
          refreshData();
          handleCancel();
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  };

  const handleCancel = () => {
    setFormData({});
    navigation.goBack();
  };

  return (
    <>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={style.container}>
          <View style={style.containerHeader}>
            <View style={style.titleContainer}>
              <ButtonBack title="Editar dados pessoais" subTitle="" />
            </View>
          </View>
          <View style={style.form}>
            <Text style={style.label}>Nome Completo</Text>
            <View style={style.containerInput}>
              <TextInput
                value={formData.name}
                onChangeText={(text) => handleChange('name', text)}
                placeholder="Nome Completo"
                style={style.inputArea}
                autoFocus
              />
            </View>
            <Text style={style.label}>Data de nascimento</Text>
            <View style={style.containerInput}>
              <TextInput
                value={formData.birthDate ? formatDate(formData.birthDate) : ''}
                onChangeText={(text) => handleChange('birthDate', text)}
                placeholder="DD/MM/AAAA"
                style={style.inputArea}
                keyboardType="numeric"
              />
            </View>
            <Text style={style.label}>CPF</Text>
            <View style={style.containerInput}>
              <TextInput
                editable={!user?.name}
                placeholder="***.***.***-**"
                style={style.inputArea}
                keyboardType="numeric"
              />
            </View>
            <Text style={style.label}>RG</Text>
            <View style={style.containerInput}>
              <TextInput
                editable={!user?.name}
                placeholder="***.***-**"
                style={style.inputArea}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <View style={style.buttonContainer}>
          <SaveCancelButton onSave={handleSave} onCancel={handleCancel} />
        </View>
      </ScrollView>
    </>
  );
};

export default PersonalDataScreen;
