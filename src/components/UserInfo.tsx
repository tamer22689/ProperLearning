import { Button, HStack } from "@chakra-ui/react";
//import { useState } from "react"

import "./UserInfo.css";
import { useNavigate } from "react-router-dom";
import UserStore from "../stores/UserStore";
import { observer } from "mobx-react";

const UserInfo = observer(() => {
  //const [username, setUsername] = useState("")
  const navigate = useNavigate();
  const routeChange_Register = () => {
    const path = "/Register";
    navigate(path);
  };
  const routeChange_Login = () => {
    const path = "/Login";
    navigate(path);
  };

  function handleLogout() {
    UserStore.logout()
  }

  return (
    <div className="container">
      {UserStore.isLoggedIn ? (
        <HStack>
          <div>Hello,{UserStore.currentUser?.username}</div>
          <Button onClick={handleLogout}>Logout</Button>
        </HStack>
      ) : (
        <>
          <Button onClick={routeChange_Login}>Login</Button>
          <Button onClick={routeChange_Register}>Register</Button>
        </>
      )}
    </div>
  );
});

export default UserInfo;
