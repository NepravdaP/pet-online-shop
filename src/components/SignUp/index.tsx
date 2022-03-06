import React, { FC } from "react";
import ModalSignUp from "./ModalSignUp";

import { ModalWrapperProps } from "./types";

const SignUpWrapper: FC<ModalWrapperProps> = ({
  onBackdropClick,
  isSignUpVisible,
}) => {
  if (!isSignUpVisible) {
    return null;
  }
  return <ModalSignUp onBackdropClick={onBackdropClick} />;
};

export default SignUpWrapper;
