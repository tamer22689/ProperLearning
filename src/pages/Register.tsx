import { Button, Input } from "@chakra-ui/react"
import "./Register.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserStore from "../stores/UserStore";
import { toJS } from "mobx";

const Register = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
        // todo: check is password === confirmPassword
        console.log(toJS(UserStore.users));
        const newUser: User = {
          username, password, fname: firstname, lname: lastname, 
        }
        UserStore.addUser(newUser);

        console.log(toJS(UserStore.users));
        navigate('/');
    }
  return (
    <>
    <h1>Register</h1>
            <br></br>
            <Input onChange={event => setFirstname(event.target.value)} placeholder="first name"/>
            <div className="first name">{firstname}</div>
            <Input onChange={event => setLastname(event.target.value)} placeholder="last name"/>
            <div className="last name">{lastname}</div>
            <Input onChange={event => setUsername(event.target.value)} placeholder="user name"/>
            <div className="user name">{username}</div>
            <Input onChange={event => setEmail(event.target.value)} placeholder="email"/>
            <div className="email">{email}</div>
            <Input onChange={event => setPassword(event.target.value)} placeholder="password"/>
            <div className="password">{password}</div>
            <Input onChange={event => setConfirmpassword(event.target.value)} placeholder="confirm password"/>
            <div className="confirm password">{confirmpassword}</div>
            <Button onClick={routeChange}>submit</Button>
    </>
  );
}
export default Register
