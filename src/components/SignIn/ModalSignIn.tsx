import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import { ModalSignInProps } from "./types";
import axios from "axios";
import "./style.css";
import { ModalBox, ModalWrapper } from "./styled";
import { Formik } from "formik";
interface Values {
  email: string;
  password: string;
}
const ModalSignIn: FC<ModalSignInProps> = ({ onBackdropClick }) => {
  const [errors, setErrors] = useState<string[]>([]);

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
      }
      onBackdropClick();

      console.log(res);
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
              return <p key={el}>{el}</p>;
            })}
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
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
