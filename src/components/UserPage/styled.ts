import styled from "styled-components";
import { InputProps } from "./types";

export const UserPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2% 2%;

  display: flex;
`;

export const SettingsWrapper = styled.div`
  width: 25vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid #fff; */
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid #fff; */
  flex-grow: 1;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(78, 78, 80, 0.8);
  background-color: #6f2232;
  border-radius: 25px;
  margin-bottom: 20px;
`;
export const RecentVisitedWrapper = styled.div`
  display: flex;
  margin-top: auto;
  border: 2px solid rgba(78, 78, 80, 0.8);
  background-color: #6f2232;
  border-radius: 25px;
  flex-grow: 1;
`;
export const InfoInput = styled.input<InputProps>`
  background-color: ${({ isDisabled }) => (isDisabled ? "#6f2232" : "#fff")};
  color: ${({ isDisabled }) => (isDisabled ? "#fff" : "#000")};
  border: 0;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-left: 2%;
  padding-left: 5px;
`;
