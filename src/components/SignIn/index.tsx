import React, { FC, useState } from "react";

import ModalSignIn from "./ModalSignIn";
import { ModalWrapperProps } from "./types";

const SignInWrapper: FC<ModalWrapperProps> = ({
  onBackdropClick,
  isSignInVisible,
  setUsername,
}) => {
  if (!isSignInVisible) {
    return null;
  }
  return (
    <ModalSignIn setUsername={setUsername} onBackdropClick={onBackdropClick} />
  );
};

export default SignInWrapper;
