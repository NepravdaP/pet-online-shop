import React, { FC, useState } from "react";
import blank from "../../assets/img/blank-profile-pic.png";
import ModalChangePassword from "./ModalChangePassword";
import ModalDelete from "./ModalDelete";
import { SettingsWrapper } from "./styled";
import axios from "axios";
import { ProfileSettingsProps } from "./types";
const ProfileSettings: FC<ProfileSettingsProps> = ({
  isDisabled,
  setIsDisabled,
  userInfo,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const changeProfileHandler = () => {
    setIsDisabled(!isDisabled);
  };
  const toggleDeleteModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const toggleChangePassword = () => {
    setIsChangePassword(!isChangePassword);
  };

  const handleFileSelect = async (e: any) => {
    console.log(e.target.files[0]);

    const file = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        `http://localhost:5000/api/auth/update/avatar`,
        formData,
        {
          headers: {
            // username: userInfo.username,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SettingsWrapper>
      <img
        src={userInfo.img ? userInfo.img : blank}
        className="profile-pic"
      ></img>

      <div className="control-panel">
        <label className="upload-btn">
          <input
            type="file"
            className="input-file"
            onChange={(e) => {
              handleFileSelect(e);
            }}
          />
          Upload avatar
        </label>

        {/* <button className="settings-btn">Upload avatar</button> */}
        <button className="settings-btn" onClick={changeProfileHandler}>
          {isDisabled ? "Change" : "Save"} profile info
        </button>
        <button className="settings-btn" onClick={toggleChangePassword}>
          Change password
        </button>
        <button className="settings-btn" onClick={toggleDeleteModal}>
          Delete profile
        </button>
      </div>
      {isChangePassword && (
        <ModalChangePassword
          userInfo={userInfo}
          toggleChangePassword={toggleChangePassword}
        />
      )}
      {isModalVisible && (
        <ModalDelete
          userInfo={userInfo}
          toggleDeleteModal={toggleDeleteModal}
        />
      )}
    </SettingsWrapper>
  );
};

export default ProfileSettings;
