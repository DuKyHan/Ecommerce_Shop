import { createContext } from 'react';
import { setUserInfor, getUserInfo } from '../data';

export const UserInfoContext = createContext({
  setUserInfor: setUserInfor,
  getUserInfo: getUserInfo,
});
