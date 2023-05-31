import "./HomePage.css";
import { Outlet, useNavigate } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import Search from "../components/Search";
import Logo1 from "../assets/images/Logo1.png";
import Menu from "../components/Menu";
import { Box } from "@chakra-ui/react";
import OurCourses from "../components/OurCourses";
import OurLecturers from "../components/OurLecturers";


const HomePage = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/Login";
    navigate(path);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div style={{ marginRight: "10px" }}>
            <img className="image" src={Logo1} alt="" />
          </div>
          <Search />
        </div>
        <div>
          <UserInfo />
        </div>
      </div>
      <Menu />
      <Box w="full" h="full" bg="#ccc">
      </Box>
      <Outlet />
    </>
  );
};

export default HomePage;
