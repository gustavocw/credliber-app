import ApiInstance from '@libs/axios';

import { EditUserInput, EditUserOutput } from './types/users.type';

export const editUser = async (input: EditUserInput): Promise<EditUserOutput> => {
  const response = await ApiInstance.put<EditUserOutput>('/v1/users/me', input).catch((error) => {
    throw error;
  });
  return response.data;
};
