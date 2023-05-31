import { Button, Flex } from "@chakra-ui/react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  function routeTo(to: string) {
    navigate(to);
  }

  return (
    <Flex justify={"space-around"} position={'relative'} top={'20px'}>
      <Button onClick={() => routeTo("/")}>Home Page</Button>
      <Button onClick={() => routeTo("/Courses")}>Courses</Button>
      <Button onClick={() => routeTo("/Lecturers")}>Lecturers</Button>
      <Button onClick={() => routeTo("/Exams")}>Exams</Button>
      <Button onClick={() => routeTo("/ContactUs")}>Contact Us</Button>
    </Flex>
  );
}

export default Menu;
