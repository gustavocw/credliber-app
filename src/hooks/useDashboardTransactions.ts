import { useTransactions } from '@context/useTransactions';
import { getSimulation } from '@services/getSimulation';
import { DataSimulation } from '@services/types/transactions.type';
import { useEffect, useState } from 'react';

export const useDashboardTransactions = (chave: any) => {
  const { chartData, transactions, formattedDates, loadTransactions } = useTransactions();
  const [dataSimulation, setDataSimulation] = useState<DataSimulation>();
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [months, setMonths] = useState<string[]>([]);
  const monthNames = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  useEffect(() => {
    async function fetchData() {
      if (chave) {
        try {
          const response = await getSimulation(chave);
          setDataSimulation(response);
          if (response && response.customer && response.customer._id) {
            const queryParams = { customerIds: [response.customer._id] };
            await loadTransactions(queryParams);
            await updateMonthsBasedOnChartData();
          }
        } catch (error) {
          console.error('Erro ao buscar os dados', error);
        }
      }
    }
    fetchData();
  }, [months, selectedMonth]);

  useEffect(() => {
    console.log('teste');
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

  useEffect(() => {
    async function fetchData() {
      if (transactions) {
        try {
          await updateMonthsBasedOnChartData();
        } catch (error) {
          console.error('Erro ao buscar os dados', error);
        }
      }
    }
    fetchData();
  }, [chave]);

  const updateMonthsBasedOnChartData = async () => {
    const monthIndices = chartData.map((item) => parseInt(item.date.split('-')[0], 10) - 1);
    const uniqueMonths = Array.from(new Set(monthIndices));
    const updatedMonths = uniqueMonths.map((monthIndex) => monthNames[monthIndex]);
    setMonths(updatedMonths);
  };

  const handleMonthClick = (month: string) => {
    setSelectedMonth(month === selectedMonth ? null : month);
  };

  const toggleView = () => setShowInfo(!showInfo);

  const filterTransactionsByMonth = () => {
    if (!selectedMonth) return transactions;
    const monthIndex = monthNames.indexOf(selectedMonth);
    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.createdAt);
      return transactionDate.getMonth() === monthIndex;
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
