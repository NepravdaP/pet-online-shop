import React, { FC } from "react";
import { InfoInput, UserInfoWrapper } from "./styled";
import { User, UserInfoProps } from "./types";

const UserInfo: FC<UserInfoProps> = ({ userInfo, isDisabled }) => {
  return (
    <ul className="user-info-list">
      <li className="user-info">
        <strong>Username:</strong>
        <InfoInput
          type="text"
          defaultValue={userInfo.username}
          disabled={isDisabled}
          isDisabled={isDisabled}
        />
      </li>
      <li className="user-info">
        <strong>Description:</strong>
        <InfoInput
          type="text"
          defaultValue="Write something about you"
          disabled={isDisabled}
          isDisabled={isDisabled}
        />
      </li>
      <li className="user-info">
        <strong>Email:</strong>
        <InfoInput
          type="text"
          defaultValue={userInfo.email}
          disabled={isDisabled}
          isDisabled={isDisabled}
        />
      </li>
      <li className="user-info">
        <strong>Joined:</strong>
        <InfoInput
          type="text"
          defaultValue={userInfo.createdAt}
          disabled={isDisabled}
          isDisabled={isDisabled}
        />
      </li>
    </ul>
  );
};

export default UserInfo;
