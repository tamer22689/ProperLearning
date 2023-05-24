import "./HomePage.css"
import { Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import Search from "../components/Search";
import Logo1 from '../assets/images/Logo1.png'

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
            <div style={{ marginRight: "10px"}}>
              <img className="image" src={Logo1} alt=""/>
            </div>
            <Search/>
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