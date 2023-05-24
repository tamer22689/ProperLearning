import "./HomePage.css"
import { Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import UserInfo from "../components/UserInfo";

const HomePage = () => {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      const path = "/Login"; 
      navigate(path);
    }
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
            <div style={{ marginRight: "10px"}}>logo</div>
            <div>search</div>
        </div>
        <div>
            <UserInfo />
        </div>        
      </div>
      {/* <Button onClick={routeChange}>Login</Button> */}
    </>
  )
}

export default HomePage