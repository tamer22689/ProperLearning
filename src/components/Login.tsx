import { Button, Input } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
        const path = "/"; 
        navigate(path);
    }
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

      const logiSucces=()=>{
        if(username === 'tamer' && password==='123'){
            routeChange();

        }else if (username === '' || password === '') {
            setErrorMessage('אנא מלא את כל השדות');
          }
        else{
            setErrorMessage('');
        }

      };
      
    
    return (
        <>
            <h1>Login</h1>
            <br></br>
            <Input onChange={event => setUsername(event.target.value)} placeholder="username" />
            <div className="user">{username}</div>
            <Input onChange={event => setPassword(event.target.value)} placeholder="password" />
            <div className="password">{password}</div>
            <Button onClick={logiSucces}>submit</Button>
            <div>{errorMessage}</div>
            
        </>
    )
}

export default Login;