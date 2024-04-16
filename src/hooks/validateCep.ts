import axios from 'axios';
import { useState } from 'react';

export const useFetchAddress = () => {
  const [address, setAddress] = useState({
    neighborhood: '',
    city: '',
    state: '',
    street: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAddress = async (cep: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;

      setAddress({
        street: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf,
      });
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { address, fetchAddress, isLoading, error };
};
