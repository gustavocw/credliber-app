import ApiInstance from '@libs/axios';

import { Comission } from './types/commission.type';

export const getCommission = async (id: string): Promise<Comission> => {
  const response = await ApiInstance.get<Comission>(`commission/${id}`).catch((error) => {
    throw error;
  });
  return response.data;
};
