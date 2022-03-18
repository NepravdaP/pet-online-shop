import { Formik } from "formik";
import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import { ModalBox, ModalWrapper } from "../SignIn/styled";
import { ModalDeleteProps, Values } from "./types";
import { useDispatch } from "react-redux";
import axios from "axios";
import { signOut } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
const ModalDelete: FC<ModalDeleteProps> = ({ toggleDeleteModal, userInfo }) => {
  const [errors, setErrors] = useState<string[]>([]);
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const deleteHandler = async (values: Values) => {
    try {
      // console.log(values);
      const res = await axios.delete(
        `http://localhost:5000/api/auth/deleteuser`,
        { data: values }
      );
      if (res.data.message === "User successfully deleted") {
        setErrors([res.data.message]);
        setTimeout(() => {
          redirect("/");
          localStorage.removeItem("token");
          dispatch(signOut());
          toggleDeleteModal();
        }, 400);
      } else {
        setErrors([res.data.message]);
      }

      // console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={toggleDeleteModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <h1 className="sign-header">Delete account </h1>
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
          initialValues={{ password: "", username: userInfo.username }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              deleteHandler(values);
              //
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
              <h2 className="delete-heading">
                Type your password below to confirm
              </h2>

              <p className="sup-err">{errors.password}</p>

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
                Delete
              </button>
            </form>
          )}
        </Formik>
      </ModalBox>
    </ModalWrapper>,
    document.getElementById("modal-root")!
  );
};

export default ModalDelete;
