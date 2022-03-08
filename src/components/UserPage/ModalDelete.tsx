import { Formik } from "formik";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { ModalBox, ModalWrapper } from "../SignIn/styled";
import { ModalDeleteProps, Values } from "./types";
import { useDispatch } from "react-redux";
import axios from "axios";
import { signOut } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
const ModalDelete: FC<ModalDeleteProps> = ({ toggleDeleteModal, userInfo }) => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const deleteHandler = async (values: Values) => {
    try {
      console.log(values);
      const res = await axios.delete(
        `http://localhost:5000/api/auth/deleteuser`,
        { data: values }
      );
      if (res.data.message === "User successfully deleted") {
        redirect("/");
        localStorage.removeItem("token");
        dispatch(signOut());
        toggleDeleteModal();
      }

      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={toggleDeleteModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
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
