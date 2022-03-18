import React, { FC, useState } from "react";
import blank from "../../assets/img/blank-profile-pic.png";
import ModalChangePassword from "./ModalChangePassword";
import ModalDelete from "./ModalDelete";
import { SettingsWrapper } from "./styled";
import axios from "axios";
import { ProfileSettingsProps, UptadeAvatarResoponseData } from "./types";
import { User } from "../../commonTypes/user.types";

const ProfileSettings: FC<ProfileSettingsProps> = ({
  isDisabled,
  setIsDisabled,
  userInfo,
  setUserInfo,
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
      formData.append("id", userInfo.id);
      const res = await axios.post<UptadeAvatarResoponseData>(
        `http://localhost:5000/api/auth/update/avatar`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUserInfo({ ...userInfo, avatar: res.data.user.avatar });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SettingsWrapper>
      <img
        src={userInfo.avatar ? userInfo.avatar : blank}
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
