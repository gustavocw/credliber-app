export interface EditUserInput {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  address: Adress;
  bankAccount: BankAccount;
}

export interface Adress {
  zipCode: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
}

export interface EditUserOutput {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  address: {
    zipCode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
  };
  bankAccount: {
    bank: string;
    agency: string;
    account: string;
    accountType: string;
    pixKey: string;
    payDay: number;
  };
}

export interface GetUserOutput {
  _id: string;
  name: string;
  cpf?: string;
  rg?: Rg;
  email: string;
  profileImageUrl: string;
  phone: string;
  birthDate: string;
  address: {
    zipCode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
  };
  bankAccount: {
    bank: string;
    agency: string;
    account: string;
    accountType: string;
    pixKey: string;
  };
  isActive: boolean;
  createdAt: string;
  isDeleted: boolean;
  lastAccess: string;
}

export interface SignUpInput {
  name: string;
  cpf: string;
  rg?: Rg;
  email: string;
  phone: string;
  birthDate: string;
  address: {
    zipCode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
  };
  bankAccount: {
    bank: string;
    agency: string;
    account: string;
    accountType: string;
    pixKey: string;
  };
  password: string;
}

export interface SignUpOutput {
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  address: {
    zipCode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
  };
  bankAccount: {
    bank: string;
    agency: string;
    account: string;
    accountType: string;
    pixKey: string;
  };
  isActive: boolean;
}

export interface SignInInput {
  cpf?: string;
  email?: string;
  password: string;
}

export interface SignInOutput {
  accessToken: string;
  user: {
    id: string;
    name: string;
    profileImageUrl: string;
  };
}

export interface Address {
  zipCode: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
}

export interface BankAccount {
  bank: string;
  agency: string;
  account: string;
  accountType: string;
  pixKey: string;
  payDay: number;
  pixType: string;
}

export interface RegisterDados {
  name: string;
  cpf: string;
  rg?: Rg;
  email: string;
  phone: string;
  birthDate: string;
  address: Address;
  bankAccount: BankAccount;
  password: string;
}

export interface Rg {
  number: number;
  uf: string;
  org: string;
  date: string;
}

export interface ClientData {
  name: string;
  cpf: string;
  rg?: Rg;
  email: string;
  phone: string;
  birthDate: string;
  address: Address;
  bankAccount: BankAccount;
  password: string;
  edit1: string;
  edit2: string;
  edit3: string;
}
