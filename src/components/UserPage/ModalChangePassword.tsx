import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import { ModalBox, ModalWrapper } from "../SignIn/styled";
import axios from "axios";
import { ChangePasswordProps, PasswordValues } from "./types";
import { Formik } from "formik";
import { ChangePasswordSchema } from "../../Schemas/signValidate";
const ModalChangePassword: FC<ChangePasswordProps> = ({
  userInfo,
  toggleChangePassword,
}) => {
  const [errors, setErrors] = useState<string[]>([]);

  const changePasswordHandler = async (values: PasswordValues) => {
    // console.log(values);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/uptade/password`,
        values
      );
      if (res.data.message == "Password changed") {
        setErrors([res.data.message]);
        setTimeout(() => {
          toggleChangePassword();
        }, 400);
      } else {
        // console.log(res.data.message);
        setErrors([res.data.message]);
      }
      // console.log("hey");
    } catch (e) {
      console.log(e);
    }
  };
  return ReactDOM.createPortal(
    <ModalWrapper onClick={toggleChangePassword}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <h1 className="sign-header">Password change</h1>
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
          initialValues={{
            oldPassword: "",
            newPassword: "",
            username: userInfo.username,
          }}
          validationSchema={ChangePasswordSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              changePasswordHandler(values);
              setSubmitting(false);
            }, 200);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="signIn-form" onSubmit={handleSubmit}>
              <div className="label-err">
                <label htmlFor="oldPassword">Type old password</label>
              </div>
              <input
                type="password"
                name="oldPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.oldPassword}
              />

              <div className="label-err">
                <label htmlFor="newPassword">Type new password</label>
                <p className="sup-err ">{errors.newPassword}</p>
              </div>
              <input
                type="password"
                name="newPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPassword}
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

export default ModalChangePassword;
