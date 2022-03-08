import jwt_decode from "jwt-decode";

interface DecodedObj {
  exp: number;
  iat: number;
  username: string;
}

const getDecodedToken = () => {
  const localToken: string | null = localStorage.getItem("token");

  const TokenObject: DecodedObj = jwt_decode(localToken ? localToken : "");
  return TokenObject;
};

export default getDecodedToken;
