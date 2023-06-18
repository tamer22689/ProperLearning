import "./HomePage.css";
import { Outlet } from "react-router-dom";

import Menu from "../../components/Menu";
import { Box } from "@chakra-ui/react";
import Image from "../../components/Image";

import Layout from "../../shared/Layaut/Layout";
import { Header } from "../../shared/Layaut/components/Header";

const HomePage = () => {
  return (
    <Layout>
        <Header/>
        <div className="image">
         <Image />
        </div>
      <Menu />
      <Box w="full" h="full">
        <Outlet />
      </Box>
    </Layout>
  );
};

export default HomePage;
