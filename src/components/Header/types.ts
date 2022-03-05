export interface HeaderProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  isSignInVisible: boolean;
  setIsSignInVisible: (value: boolean) => void;
  isSignUpVisible: boolean;
  setIsSignUpVisible: (value: boolean) => void;
  toggleSignIn: () => void;
  toggleSignUp: () => void;
  setUsername: (value: string) => void;
  username: string;
}
export interface MobileHeaderProps {
  toggleSignIn: () => void;
  toggleSignUp: () => void;
  setUsername: (value: string) => void;
  isSignInVisible: boolean;
  isSignUpVisible: boolean;
  username: string;
}
