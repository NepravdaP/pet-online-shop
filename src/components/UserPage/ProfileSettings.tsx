import React, { FC, useState } from "react";
import blank from "../../assets/img/blank-profile-pic.png";
import ModalDelete from "./ModalDelete";
import { SettingsWrapper } from "./styled";
import { ProfileSettingsProps } from "./types";
const ProfileSettings: FC<ProfileSettingsProps> = ({
  isDisabled,
  setIsDisabled,
  userInfo,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeProfileHandler = () => {
    setIsDisabled(!isDisabled);
  };
  const toggleDeleteModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SettingsWrapper>
      <img src={blank} className="profile-pic"></img>

      <div className="control-panel">
        <button className="settings-btn">Upload avatar</button>
        <button className="settings-btn" onClick={changeProfileHandler}>
          {isDisabled ? "Change" : "Save"} profile info
        </button>
        <button className="settings-btn">Change password</button>
        <button className="settings-btn" onClick={toggleDeleteModal}>
          Delete profile
        </button>
      </div>
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
