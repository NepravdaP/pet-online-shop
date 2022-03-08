export interface ProfileSettingsProps {
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
  userInfo: User;
}
export interface UserInfoProps {
  userInfo: User;
  isDisabled: boolean;
}
export interface User {
  createdAt: string;
  email: string;
  id: string;
  password: string;
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
}
export interface InputProps {
  isDisabled: boolean;
}
export interface ModalDeleteProps {
  toggleDeleteModal: () => void;
  userInfo: User;
}
export interface Values {
  username: string;
  password: string;
}
