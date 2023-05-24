import { Button, Input } from "@chakra-ui/react"
import "./Register.css"
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
        const path = "/"; 
        navigate(path);
    }
  return (
    <>
    <h1>Register</h1>
            <br></br>
            <Input placeholder="first name"/>
            <Input placeholder="last name"/>
            <Input placeholder="user name"/>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Button onClick={routeChange}>submit</Button>
    </>
  );
}
export default Register
