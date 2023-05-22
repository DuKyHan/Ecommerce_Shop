import { typeOf } from 'react-is';

export interface UserInfo {
  email: string;
  username: string;
  gender: string;
  numberphone: string;
}

export const setUserInfor = (UserInfo: UserInfo) => {
  // console.log(UserInfo);
  // console.log(JSON.stringify(UserInfo));
  localStorage.setItem('UserInfor', JSON.stringify(UserInfo));
};
export const getUserInfo = (): any => {
  const raw = localStorage.getItem('UserInfor');
  if (raw == null) {
    return '';
  }
  // console.log(raw);
  // console.log(JSON.parse(raw));
  const data = JSON.parse(raw);
  const data2 = JSON.parse(data);
  console.log(typeof data2);
  return data2;
};
