import ApiInstance from '@libs/axios';

import { GetUserOutput } from './types/users.type';

export const getUser = async (): Promise<GetUserOutput> => {
  const response = await ApiInstance.get<GetUserOutput>('/user/me').catch((error) => {
    throw error;
  });
  return response.data;
};
