import { Button } from "@chakra-ui/react"
//import { useState } from "react"

import "./UserInfo.css"
import { useNavigate } from "react-router-dom"

const UserInfo = () => {
    //const [username, setUsername] = useState("")
    const navigate = useNavigate(); 
    const routeChange_Register = () =>{ 
        const path = "/Register"; 
        navigate(path);
    }
    const routeChange_Login = () =>{ 
      const path = "/Login"; 
      navigate(path);
  }

  return (
    <div className="container">
        <div>
            Hello,tamer
        </div>
        <Button onClick={routeChange_Login}>Login</Button>
        <Button onClick={routeChange_Register}>Register</Button>
    </div>
  )
}

export default UserInfo