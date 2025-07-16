// src/components/UserInfo.jsx
import React, { useContext } from "react";
import UserContext from "../UserContext";

function UserInfo() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserInfo;
