import "./HomePage.css";
import { Outlet } from "react-router-dom";
import UserInfo from "../../components/UserInfo";
import Search from "../../components/Search";
import Menu from "../../components/Menu";
import { Box } from "@chakra-ui/react";
import Image from "../../components/Image";
import Logo from "../../components/Logo";

const HomePage = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div style={{ marginRight: "10px" }}>
            <Logo />
          </div>
          <Search />
        </div>
        <div>
          <UserInfo />
        </div>
      </div>
      <Image />
      <Menu />
      <Box w="full" h="full">
        <Outlet />
      </Box>
    </>
  );
};

export default HomePage;
