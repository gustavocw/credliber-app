import ApiInstance from '@libs/axios';

import { SignInInput, SignInOutput } from './types/users.type';

export const SignIn = async (input: SignInInput): Promise<SignInOutput> => {
  const response = await ApiInstance.post<SignInOutput>('/auth/login', input).catch((error) => {
    throw error;
  });
  return response.data;
};
