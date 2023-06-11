import { Button, Input } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import UserStore from "../stores/UserStore";

function Login() {
    const navigate = useNavigate(); 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

      const logiSucces=async ()=>{
        const user = await UserStore.login(username, password);
        const isAdmim = await UserStore.currentUser?.isAdmin
        if(user){
            if(isAdmim){
                navigate("/AdminHomePage")
            }
            else{
                navigate("/")
            }
        }else{
            setErrorMessage("error")
        }
        

      };
    return (
        <>
            <h1>Login</h1>
            <br></br>
            <Input onChange={event => setUsername(event.target.value)} placeholder="username" />
            <Input onChange={event => setPassword(event.target.value)} placeholder="password" />
            <Button onClick={logiSucces}>submit</Button>
            <div>{errorMessage}</div>
        </>
    )
}

export default Login;