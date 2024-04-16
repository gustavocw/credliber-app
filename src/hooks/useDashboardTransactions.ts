import { useTransactions } from '@context/useTransactions';
import { getSimulation } from '@services/getSimulation';
import { DataSimulation } from '@services/types/transactions.type';
import { useEffect, useState } from 'react';

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export const useDashboardTransactions = (chave: any) => {
  const { transactions, formattedDates, loadTransactions } = useTransactions();
  const [dataSimulation, setDataSimulation] = useState<DataSimulation>();
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (chave) {
        try {
          const response = await getSimulation(chave);
          setDataSimulation(response);
          if (response && response.customer && response.customer._id) {
            const queryParams = { customerIds: [response.customer._id] };
            await loadTransactions(queryParams);
          }
        } catch (error) {
          console.error('Erro ao buscar os dados', error);
        }
      }
    }
    fetchData();
  }, [chave]);

  const toggleView = () => setShowInfo(!showInfo);

  const handleMonthClick = (month: string) => {
    setSelectedMonth(month === selectedMonth ? null : month);
  };

  const filterTransactionsByMonth = () => {
    if (!selectedMonth) return transactions;
    const monthIndex = months.indexOf(selectedMonth) + 1;
    return transactions.filter((transaction) => {
      const transactionMonth = new Date(transaction.createdAt).getMonth() + 1;
      return transactionMonth === monthIndex;
    });
  };

  return {
    dataSimulation,
    setDataSimulation,
    selectedMonth,
    setSelectedMonth,
    showInfo,
    toggleView,
    handleMonthClick,
    filterTransactionsByMonth,
    transactions,
    formattedDates,
    months,
  };
};
