import ApiInstance from '@libs/axios';

import { SignUpInput, SignUpOutput } from './types/users.type';

export const SignUp = async (input: SignUpInput): Promise<SignUpOutput> => {
  const response = await ApiInstance.post<SignUpOutput>('/v1/users', input).catch((error) => {
    throw error;
  });

  return response.data;
};
