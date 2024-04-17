import { GetUserOutput } from './users.type';

export interface AllTransactions {
  transactions: Transaction[];
  total: number;
  skip: number;
  limit: number;
  sort: string;
}

export interface TransactionCounts {
  completed: number;
  pending: number;
  refused: number;
}

export interface Transaction {
  _id: string;
  customer: Person;
  seller: Seller;
  team: Team;
  value: number;
  commission: number;
  status: TransactionStatus;
  contract: number;
  createdAt: string;
  reason?: string;
}

export interface Person {
  _id: string;
  name: string;
  cpf: string;
}

export interface Seller extends Person {
  profileImageUrl: string;
}

export interface Team {
  _id: string;
  name: string;
}

export interface DataSimulation {
  customer: GetUserOutput;
  value: number;
}

type TransactionStatus = 'COMPLETED' | 'PENDING' | 'REFUSED';

export interface TransactionQueryParams {
  startDate?: string;
  endDate?: string;
  teamIds?: string[];
  sellerIds?: string[];
  status?: 'completed' | 'pending' | 'refused';
  search?: string;
  limit?: number;
  skip?: number;
  sort?: string;
  customerIds?: string[];
}

export interface TransactionChartParams {
  startDate?: string;
  endDate?: string;
  teamIds?: string[];
  sellerIds?: string[];
  status?: 'completed' | 'pending' | 'refused';
  customerIds?: string[];
}

export interface ChartTransaction {
  data: TransactionData[];
}

export interface TransactionData {
  date: string;
  total: number;
  count: number;
}
