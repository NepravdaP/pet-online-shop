import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ModalBox, ModalWrapper } from "../SignIn/styled";
import { Formik } from "formik";
import { ModalSignUPProps } from "./types";
import { useDispatch } from "react-redux";

import { signIn } from "../../redux/actions";
import { SignUpSchema } from "../../Schemas/signValidate";
interface Values {
  username: string;
  email: string;
  password: string;
}
const ModalSignUp: FC<ModalSignUPProps> = ({ onBackdropClick }) => {
  const [errors, setErrors] = useState<string[]>([]);
  const dispatch = useDispatch();
  const signUpHandler = async (values: Values) => {
    try {
      console.log(values);
      const res = await axios.post(
        `http://localhost:5000/api/auth/signup`,
        values
      );
      if (res.data.message != "User created") {
        setErrors([res.data.message]);
        throw new Error("Response error");
      } else {
        localStorage.setItem("token", res.data.token);

        dispatch(signIn());
        onBackdropClick();

        console.log(res);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={onBackdropClick}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <h1 className="sign-header">Sign Up</h1>
        <div className="error-box">
          {errors &&
            errors.map((el) => {
              return (
                <p className="auth-error" key={el}>
                  {el}
                </p>
              );
            })}
        </div>
        <Formik
          initialValues={{ email: "", password: "", username: "" }}
          validationSchema={SignUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              signUpHandler(values);

              setSubmitting(false);
            }, 200);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="signIn-form" onSubmit={handleSubmit}>
              <div className="label-err">
                <label htmlFor="username">Username</label>
                <p className="sup-err ">{errors.username}</p>
              </div>
              <input
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />

              <div className="label-err">
                <label htmlFor="email">Email</label>
                <p className="sup-err ">{errors.email}</p>
              </div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className="label-err">
                <label htmlFor="password">Password</label>
                <p className="sup-err">{errors.password}</p>
              </div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              <button
                className="sign-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </ModalBox>
    </ModalWrapper>,
    document.getElementById("modal-root")!
  );
};

export default ModalSignUp;
