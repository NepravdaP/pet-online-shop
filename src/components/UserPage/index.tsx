import React, { useEffect, useState } from "react";
import ProfileSettings from "./ProfileSettings";
import UserInfo from "./UserInfo";
import "./style.css";
import {
  InfoWrapper,
  RecentVisitedWrapper,
  SettingsWrapper,
  UserInfoWrapper,
  UserPageWrapper,
} from "./styled";
import RecentVisited from "./RecentVisited";
import axios from "axios";

import getDecodedToken from "../../utils/getDecodedToken";
import { User } from "./types";

const UserPage = () => {
  const decodedToken = getDecodedToken();
  const [isDisabled, setIsDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState<User>();
  const getUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/auth/getuser/${decodedToken.username}`
      );
      console.log(decodedToken.username);
      setUserInfo(res.data.user);
      console.log(userInfo);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUser();
  }, [isDisabled]);
  return (
    <UserPageWrapper>
      <SettingsWrapper>
        {userInfo ? (
          <ProfileSettings
            isDisabled={isDisabled}
            userInfo={userInfo}
            setIsDisabled={setIsDisabled}
          />
        ) : (
          <span className="loader info-spiner" />
        )}
      </SettingsWrapper>

      <InfoWrapper>
        <UserInfoWrapper>
          {userInfo ? (
            <UserInfo userInfo={userInfo} isDisabled={isDisabled} />
          ) : (
            <span className="loader info-spiner" />
          )}
        </UserInfoWrapper>
        <RecentVisitedWrapper>
          {userInfo ? (
            <RecentVisited />
          ) : (
            <span className="loader info-spiner" />
          )}
        </RecentVisitedWrapper>
      </InfoWrapper>
    </UserPageWrapper>
  );
};

export default UserPage;
