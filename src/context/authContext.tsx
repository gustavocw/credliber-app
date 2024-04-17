import ApiInstance from '@libs/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from '@services/getUser';
import { SignIn } from '@services/signIn';
import { UploadPhotoInput, uploadPhoto } from '@services/uploadPhoto';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ASYNC_STORAGE_USER = 'credliber_auth_user';
const ASYNC_STORAGE_ACCESS_TOKEN_KEY = 'credliber_auth_access_token';
const ASYNC_STORAGE_LOGIN = 'credliber_auth_user_login';

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  profileImageUrl: string;
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
  isDeleted: boolean;
  createdAt: string;
  lastAccess: string;
}

interface SignInProps {
  cpf?: string;
  email?: string;
  password: string;
}

interface AuthContextProps {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  signIn: (data: SignInProps) => Promise<void>;
  signOut: () => Promise<void>;
  refreshData: () => Promise<void>;
  uploadPhotoReq: (photo: UploadPhotoInput) => Promise<void>;
  isReady: boolean;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const isAuthenticated = !!user && !!accessToken;

  const signIn = useCallback(async (data: SignInProps) => {
    try {
      const result = await SignIn(data);
      setIsLogged(true);
      if (result.accessToken && result.user) {
        setAccessToken(result.accessToken);
        await AsyncStorage.setItem(ASYNC_STORAGE_USER, JSON.stringify(result.user));
        await AsyncStorage.setItem(ASYNC_STORAGE_ACCESS_TOKEN_KEY, result.accessToken);
        ApiInstance.defaults.headers.common['Authorization'] = `Bearer ${result.accessToken}`;
        const userData = await getUser();
        console.log(userData);
        setUser({ ...userData });
      }
    } catch (error) {
      console.error('error::signIn:::', error);
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      setUser(null);
      setAccessToken(null);
      await AsyncStorage.removeItem(ASYNC_STORAGE_ACCESS_TOKEN_KEY);
      await AsyncStorage.removeItem(ASYNC_STORAGE_LOGIN);
      await AsyncStorage.removeItem(ASYNC_STORAGE_USER);
    } catch (error) {
      console.error('error::signOut:::', error);
      throw error;
    }
  }, []);

  const uploadPhotoReq = useCallback(async (photo: UploadPhotoInput) => {
    try {
      uploadPhoto(photo);
    } catch (error) {
      console.error('error::upload:::', error);
      throw error;
    }
  }, []);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const userSaved = await AsyncStorage.getItem(ASYNC_STORAGE_USER);
        const accessTokenSaved = await AsyncStorage.getItem(ASYNC_STORAGE_ACCESS_TOKEN_KEY);

        if (userSaved && accessTokenSaved) {
          setUser(JSON.parse(userSaved));
          setAccessToken(accessTokenSaved);
          ApiInstance.defaults.headers.common['Authorization'] = `Bearer ${accessTokenSaved}`;
        }
      } catch (error) {
        console.log('error::bootstrapAsync:::', error);
        setIsLogged(false);
      } finally {
        setIsReady(true);
      }
    };

    bootstrapAsync();
  }, []);

  const refreshData = async () => {
    try {
      const userSaved = await AsyncStorage.getItem(ASYNC_STORAGE_USER);
      const accessTokenSaved = await AsyncStorage.getItem(ASYNC_STORAGE_ACCESS_TOKEN_KEY);

      if (userSaved && accessTokenSaved) {
        const userData = await getUser();
        setUser({ ...userData });
        await AsyncStorage.setItem(ASYNC_STORAGE_USER, JSON.stringify(userData));
      }
    } catch (error) {
      console.error('error::refreshData:::', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isLogged,
        signIn,
        signOut,
        uploadPhotoReq,
        refreshData,
        setIsLogged,
        isReady,
        accessToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
