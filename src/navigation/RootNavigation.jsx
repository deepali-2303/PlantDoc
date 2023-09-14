import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthNavigation from "./AuthNavigation";
import UserNavigation from "./UserNavigation";

const RootNavigation = () => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <AuthNavigation />;
  } else {
    return <UserNavigation />;
  }
};

export default RootNavigation;
