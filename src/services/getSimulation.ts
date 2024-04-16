import ApiInstance from '@libs/axios';

import { DataSimulation } from './types/transactions.type';

export const getSimulation = async (input: string): Promise<DataSimulation> => {
  const response = await ApiInstance.get<DataSimulation>(`/transaction/${input}`).catch((error) => {
    throw error;
  });
  return response.data;
};
