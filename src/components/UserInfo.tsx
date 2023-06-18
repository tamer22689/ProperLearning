import { Button, HStack } from "@chakra-ui/react";
//import { useState } from "react"

import "./UserInfo.css";
import { useNavigate } from "react-router-dom";

import { useSelector} from 'react-redux'

import Layout from "../shared/Layaut/Layout";
import { RootState } from "../rdx/store";
import { userSvc } from "../services/user/user.svc";

const UserInfo = () => {

  const {currentUser,loggedIn} = useSelector((state: RootState)=>state.rdxCurrentUser)

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
    userSvc.logout()
}
  

  return (

    <div className="container">
      {loggedIn ? (
        <HStack>
          <div>Hello,{currentUser?.username}</div>
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
};

export default UserInfo;
