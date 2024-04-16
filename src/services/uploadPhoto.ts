import ApiInstance from '@libs/axios';
import { AxiosResponse } from 'axios';

export interface UploadPhotoInput {
  file: Blob;
}

export interface UploadPhotoOutput {
  path: string;
}

export const uploadPhoto = async (photo: UploadPhotoInput): Promise<UploadPhotoOutput> => {
  const formData = new FormData();
  formData.append('file', photo.file);

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  let response: AxiosResponse<UploadPhotoOutput>;
  try {
    response = await ApiInstance.patch<UploadPhotoOutput>(
      '/v1/users/me/upload-profile-photo',
      formData,
      config
    );
  } catch (error) {
    throw error;
  }

  console.log(response.data);
  return response.data;
};
