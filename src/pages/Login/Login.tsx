import { Button, Input } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

import { userSvc } from "../../services/user/user.svc";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onLogin = async () => {
        const user = await userSvc.login({ username, password });
        const isAdmin = user?.isAdmin

        if (user) {

            if (isAdmin) {
                navigate("/AdminHomePage")
            }
            else {
                navigate("/")
            }
        } else {
            setErrorMessage("error")
        }


    };
    return (
        <div className="form-Container">
            <div className="form">
                <h1>Login</h1>
                <br></br>
                <Input onChange={event => setUsername(event.target.value)} placeholder="username" />
                <Input onChange={event => setPassword(event.target.value)} placeholder="password" />
                <Button onClick={onLogin}>submit</Button>
                <div className="message">{errorMessage}</div>
            </div>
        </div>

    )


}

export default Login;