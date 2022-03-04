export interface ModalSignUPProps {
  onBackdropClick: () => void;
  setUsername: (value: string) => void;
}
export interface ModalWrapperProps {
  isSignUpVisible: boolean;
  onBackdropClick: () => void;
  setUsername: (value: string) => void;
}
