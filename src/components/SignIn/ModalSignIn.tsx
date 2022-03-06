import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import { ModalSignInProps } from "./types";
import axios from "axios";
import "./style.css";
import { ModalBox, ModalWrapper } from "./styled";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { signIn } from "../../redux/actions";
import { SignInSchema } from "../../Schemas/signValidate";
interface Values {
  email: string;
  password: string;
}
const ModalSignIn: FC<ModalSignInProps> = ({ onBackdropClick }) => {
  const [errors, setErrors] = useState<string[]>([]);
  const dispatch = useDispatch();

  const signInHandler = async (values: Values) => {
    try {
      console.log(values);
      const res = await axios.post(
        `http://localhost:5000/api/auth/signin`,
        values
      );
      if (res.data.message) {
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
        <h1 className="sign-header">Sign In</h1>
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
          initialValues={{ email: "", password: "" }}
          // validate={(values) => {
          //   const errors = { email: "" };
          //   if (!values.email) {
          //     errors.email = "Required";
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = "Invalid email address";
          //   }
          //   return errors;
          // }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              signInHandler(values);
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

export default ModalSignIn;
