import { RegisterDados } from '@services/types/users.type';
import React, { createContext, useContext, useState } from 'react';
interface RegisterContextType {
  dados: RegisterDados;
  setDados: (
    novosDados: Partial<RegisterDados> | ((prevState: RegisterDados) => Partial<RegisterDados>)
  ) => void;
}

const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) throw new Error('useRegister deve ser usado dentro de um RegisterProvider');
  return context;
};

export const RegisterProvider = ({ children }: { children: React.ReactNode }) => {
  const [dados, setDados] = useState<RegisterDados>({
    name: '',
    cpf: '',
    rg: '',
    email: '',
    phone: '',
    birthDate: '',
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
      payDay: 0,
    },
    password: '',
  });

  const atualizarDados = (
    novosDados: Partial<RegisterDados> | ((prevState: RegisterDados) => Partial<RegisterDados>)
  ) => {
    setDados((prevState) => ({
      ...prevState,
      ...(typeof novosDados === 'function' ? novosDados(prevState) : novosDados),
    }));
  };

  return (
    <RegisterContext.Provider value={{ dados, setDados: atualizarDados }}>
      {children}
    </RegisterContext.Provider>
  );
};
