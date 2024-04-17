import ApiInstance from '@libs/axios';

import {
  AllTransactions,
  ChartTransaction,
  TransactionQueryParams,
} from './types/transactions.type';

export const getAllTransactions = async ({
  startDate,
  endDate,
  teamIds,
  sellerIds,
  status,
  search,
  limit,
  skip,
  sort,
  customerIds,
}: TransactionQueryParams): Promise<AllTransactions> => {
  const response = await ApiInstance.get<AllTransactions>('/transaction', {
    params: {
      startDate,
      endDate,
      teamIds: teamIds?.join(','),
      sellerIds: sellerIds?.join(','),
      status,
      search,
      limit,
      skip,
      sort,
      customerIds: customerIds?.join(','),
    },
  }).catch((error) => {
    throw error;
  });
  return response.data;
};

export const getChartTransactons = async ({
  sellerIds,
  startDate,
  endDate,
  teamIds,
  status,
  customerIds,
}: TransactionQueryParams): Promise<ChartTransaction> => {
  const response = await ApiInstance.get<ChartTransaction>('/transaction/chart', {
    params: {
      startDate,
      endDate,
      teamIds: teamIds?.join(','),
      sellerIds: sellerIds?.join(','),
      status,
      customerIds: customerIds?.join(','),
    },
  }).catch((error) => {
    throw error;
  });

  return response.data;
};
