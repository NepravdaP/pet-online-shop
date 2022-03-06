import React, { FC, useState } from "react";

import ModalSignIn from "./ModalSignIn";
import { ModalWrapperProps } from "./types";

const SignInWrapper: FC<ModalWrapperProps> = ({
  onBackdropClick,
  isSignInVisible,
}) => {
  if (!isSignInVisible) {
    return null;
  }
  return <ModalSignIn onBackdropClick={onBackdropClick} />;
};

export default SignInWrapper;
