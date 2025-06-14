import { getCommission } from '@services/comissionServices';
import { getAllTransactions, getChartTransactons } from '@services/transactionsServices';
import { Comission } from '@services/types/commission.type';
import {
  Transaction,
  TransactionChartParams,
  TransactionQueryParams,
  TransactionCounts,
  TransactionData,
} from '@services/types/transactions.type';
import { ClientData } from '@services/types/users.type';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { createContext, useContext, useState } from 'react';

import { useAuth } from './authContext';

interface TransactionsContextData {
  dataClient: ClientData;
  setDataClient: (
    newData: Partial<ClientData> | ((prevState: ClientData) => Partial<ClientData>)
  ) => void;
  transactions: Transaction[];
  chartData: TransactionData[];
  commission: Comission | undefined;
  formattedDates: string[];
  transactionCounts: TransactionCounts;
  loadTransactions: (queryParams?: TransactionQueryParams) => Promise<void>;
  loadChartTransactions: (queryParams?: TransactionChartParams) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export const TransactionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [chartData, setChartData] = useState<TransactionData[]>([]);
  const [commission, setCommission] = useState<Comission>();
  const [formattedDates, setFormattedDates] = useState<string[]>([]);
  const [transactionCounts, setTransactionCounts] = useState<TransactionCounts>({
    completed: 0,
    pending: 0,
    refused: 0,
  });
  const [dataClient, setDataClient] = useState<ClientData>({
    name: '',
    cpf: '',
    rg: '',
    email: '',
    phone: '',
    birthDate: '',
    edit1: '',
    edit2: '',
    edit3: '',
    address: {
      zipCode: '',
      state: '',
      city: '',
      neighborhood: '',
      street: '',
      number: '',
      complement: '',
    },
    bankAccount: {
      bank: '',
      agency: '',
      account: '',
      accountType: '',
      pixKey: '',
      pixType: '',
      payDay: 0,
    },
    password: '',
  });

  const updateDataClient = (
    newDatas: Partial<ClientData> | ((prevState: ClientData) => Partial<ClientData>)
  ) => {
    setDataClient((prevState) => ({
      ...prevState,
      ...(typeof newDatas === 'function' ? newDatas(prevState) : newDatas),
    }));
  };

  const { user } = useAuth();

  const loadChartTransactions = async (queryParams?: TransactionChartParams) => {
    const allChart = await getChartTransactons({
      customerIds: queryParams?.customerIds,
    });
    setChartData(allChart.data);
    console.log(allChart);
  };

  const loadTransactions = async (queryParams?: TransactionQueryParams) => {
    try {
      const allTransactions = await getAllTransactions({
        customerIds: queryParams?.customerIds,
      });
      setTransactions(allTransactions.transactions);

      const uniqueDates = new Set(
        allTransactions.transactions.map((transaction) =>
          format(parseISO(transaction.createdAt), 'MMM dd', {
            locale: ptBR,
          }).toUpperCase()
        )
      );
      setFormattedDates([...uniqueDates]);

      const counts = { completed: 0, pending: 0, refused: 0 };
      allTransactions.transactions.forEach((transaction) => {
        if (transaction.status === 'COMPLETED') counts.completed += 1;
        else if (transaction.status === 'PENDING') counts.pending += 1;
        else if (transaction.status === 'REFUSED') counts.refused += 1;
      });
      setTransactionCounts(counts);

      if (user && user._id) {
        const commission = await getCommission(user._id);
        setCommission(commission);
      }
    } catch (error) {
      console.error('Failed to load transactions:', error);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        chartData,
        dataClient,
        setDataClient: updateDataClient,
        commission,
        transactions,
        formattedDates,
        transactionCounts,
        loadTransactions,
        loadChartTransactions,
      }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionsContext);
