import { Box} from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Logo from "../../components/Logo"
import UserInfo from "../../components/UserInfo"
import Search from "../../components/Search"
import Image from "../../components/Image"
import Menu from "../../components/Menu"
import "../HomePage/HomePage.css";


function AdminHomePage() {
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
          <UserInfo/>
        </div>
      </div>
      <Image />
      <Menu />
      <Box w="full" h="full">
        <Outlet />
      </Box>
    </>



  )
}

export default AdminHomePage
