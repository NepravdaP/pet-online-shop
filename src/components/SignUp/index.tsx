import React, { FC, useState } from "react";
import ModalSignUp from "./ModalSignUp";

import { ModalWrapperProps } from "./types";

const SignUpWrapper: FC<ModalWrapperProps> = ({
  onBackdropClick,
  isSignUpVisible,
  setUsername,
}) => {
  if (!isSignUpVisible) {
    return null;
  }
  return (
    <ModalSignUp setUsername={setUsername} onBackdropClick={onBackdropClick} />
  );
};

export default SignUpWrapper;
