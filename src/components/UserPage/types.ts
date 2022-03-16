export interface ProfileSettingsProps {
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
  userInfo: User;
}
export interface UserInfoProps {
  userInfo: User;
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
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
  description: string | undefined;
  img: string;
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
export interface ChangePasswordProps {
  toggleChangePassword: () => void;
  userInfo: User;
}
export interface PasswordValues {
  oldPassword: string;
  newPassword: string;
}
export interface UpdateValues {
  username: string;
  email: string;
  description: string;
}
