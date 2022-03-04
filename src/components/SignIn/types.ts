export interface ModalSignInProps {
  onBackdropClick: () => void;
  setUsername: (value: string) => void;
}
export interface ModalWrapperProps {
  isSignInVisible: boolean;
  onBackdropClick: () => void;
  setUsername: (value: string) => void;
}
