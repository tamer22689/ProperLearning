import { Button, Input } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import UserStore from "../stores/UserStore";
import { toJS } from "mobx";

function Login() {
    const navigate = useNavigate(); 
    const routeChange_home = () =>{ 
        const path = "/"; 
        navigate(path);
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

      const logiSucces=async ()=>{
        // if(username === 'tamer' && password ==='123'){
        //     routeChange_home();

        // }else if (username === '' || password === '') {
        //     setErrorMessage('אנא מלא את כל השדות');
        //   }
        // else{
        //     setErrorMessage('');
        // }
        console.log(toJS(UserStore.users));
        const result = UserStore.login(username, password);
        console.log(result)
        if(await result)
            routeChange_home();
        else {
            // todo: present error message
            setErrorMessage('');
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