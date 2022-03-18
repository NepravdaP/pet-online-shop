import { Formik } from "formik";
import React, { FC, useState } from "react";
import { InfoInput, StyledTextArea } from "./styled";
import { UpdateValues, UserInfoProps } from "./types";
import { User } from "../../commonTypes/user.types";
import moment from "moment";
import axios from "axios";
import { UpdateSchema } from "../../Schemas/signValidate";
const UserInfo: FC<UserInfoProps> = ({
  userInfo,
  isDisabled,
  setIsDisabled,
}) => {
  const [errors, setErrors] = useState<string[]>([]);
  const joined = moment(userInfo.createdAt).format("L");
  let descriptionGet = "Write something about you";
  if (userInfo.description) {
    descriptionGet = userInfo.description;
  }

  const updateInfoHandler = async (values: UpdateValues) => {
    // console.log(values);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/uptade/info`,
        values
      );
      if (res.data.message == "Information updated!") {
        setErrors([res.data.message]);
        setTimeout(() => {
          setIsDisabled(!isDisabled);
        }, 600);
      } else {
        // console.log(res.data.message);
        setErrors([res.data.message]);
      }
      // console.log("hey");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Formik
      initialValues={{
        username: userInfo.username,
        description: descriptionGet,
        email: userInfo.email,

        id: userInfo.id,
      }}
      validationSchema={UpdateSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);

          updateInfoHandler(values);
          setSubmitting(false);
        }, 100);
      }}
    >
      {({
        values,

        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,

        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="info-list">
            <ul className="user-info-list">
              <li className="user-info">
                <strong>Username:</strong>
                <InfoInput
                  type="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  isDisabled={isDisabled}
                  disabled={isDisabled}
                />
              </li>
              <li className="user-info">
                <strong>Description:</strong>

                <StyledTextArea
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  isDisabled={isDisabled}
                  disabled={isDisabled}
                />
              </li>
              <li className="user-info">
                <strong>Email:</strong>
                <InfoInput
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  isDisabled={isDisabled}
                  disabled={isDisabled}
                />
              </li>
              <li className="user-info">
                <strong>Joined:</strong>

                <input
                  type="text"
                  disabled={true}
                  value={joined}
                  className="joined"
                />
              </li>
            </ul>
            <div className="btn-error">
              {isDisabled ? null : (
                <button
                  className="update-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Save
                </button>
              )}
              {!isDisabled &&
                errors.map((el) => {
                  return (
                    <p className="auth-error" key={el}>
                      {el}
                    </p>
                  );
                })}
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default UserInfo;
