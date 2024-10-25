import { useContext } from 'react';
import { AppContext } from '../providers';

export const useAppContext = () => {
  const appContextValues = useContext(AppContext);

  return appContextValues;
};
