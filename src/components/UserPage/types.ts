import { User } from "../../commonTypes/user.types";
export interface ProfileSettingsProps {
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
  userInfo: User;
  setUserInfo: (Values: User) => void;
}
export interface UserInfoProps {
  userInfo: User;
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
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
export interface UptadeAvatarResoponseData {
  user: User;
}
