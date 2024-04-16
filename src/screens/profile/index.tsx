import CopyRightIcon from '@assets/icons/dash/copyRightIcon';
import EditIcon from '@assets/icons/dash/editIcon';
import ExitIcon from '@assets/icons/dash/exitIcon';
import LockIcon from '@assets/icons/dash/lockIcon';
import MapPinIcon from '@assets/icons/dash/mapPinIcon';
import ProfileIcon from '@assets/icons/dash/profileIcon';
import { useAuth } from '@context/authContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { styles } from '@screens/profile/styles/index.styles';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

type ProfileScreenParam = StackNavigationProp<RootStackParamList>;
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
  return 'Data inválida';
};
const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenParam>();
  const { signOut, user, uploadPhotoReq } = useAuth();

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const photoUri = result.assets[0].uri;
      try {
        const response = await fetch(photoUri);
        const blob = await response.blob();
        await uploadPhotoReq({ file: blob });
        console.log('Image uploaded successfully');
      } catch (error) {
        console.error('Error uploading image: ', error);
      }
    }
  };

  const joinedDate = user && user.createdAt ? formatDate(user.createdAt) : '';
  const handleSignOut = () => {
    signOut();
    navigation.navigate('Initial');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
          <ExitIcon style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerPhoto}>
        <TouchableOpacity style={styles.profileImageContainer} onPress={openImagePicker}>
          <Image
            style={styles.profileImage}
            source={require('@assets/icons/dash/userGeneric.png')}
          />
          <View style={styles.editIconContainer}>
            <EditIcon style={styles.editIcon} />
          </View>
        </TouchableOpacity>
        <View style={styles.names}>
          <Text style={styles.userName}>{user?.name}</Text>
          <Text style={styles.userJoined}>Ingressou em {joinedDate}</Text>
          <Text style={styles.userTeam}>Equipe exemplo, (Nome do gestor)</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PersonalDataScreen')}
          style={styles.button}>
          <ProfileIcon />
          <Text style={styles.buttonText}>Editar dados pessoais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditAdressScreen')}
          style={styles.button}>
          <MapPinIcon />
          <Text style={styles.buttonText}>Endereço</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SecurityScreen')}
          style={styles.button}>
          <LockIcon />
          <Text style={styles.buttonText}>Segurança e dados bancários</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSignOut()}
          style={[styles.button, styles.logoutButton]}>
          <Text style={styles.logoutButtonText}> Sair da minha conta credliber</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.conditions}>
        <CopyRightIcon />
        <Text style={styles.conditionsText}>Termos e condições</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
