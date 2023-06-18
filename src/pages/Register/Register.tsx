import { Button, Input } from "@chakra-ui/react"
import "./Register.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserStore from "../../stores/UserStore";
import { toJS } from "mobx";
import { User } from "../../model/User";

const Register = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const navigate = useNavigate();
  const routeChange = () => {
    // todo: check is password === confirmPassword
    console.log(toJS(UserStore.users));
    const newUser: User = {
      firstname, lastname, username, email, password,
      isAdmin: false
    }
    UserStore.addUser(newUser);

    console.log(toJS(UserStore.users));
    navigate('/');
  }
  return (
    <div className="register">
      <h1>Register</h1>
      <br></br>
      <Input onChange={event => setFirstname(event.target.value)} placeholder="first name" />
      <Input onChange={event => setLastname(event.target.value)} placeholder="last name" />
      <Input onChange={event => setUsername(event.target.value)} placeholder="user name" />
      <Input onChange={event => setEmail(event.target.value)} placeholder="email" />
      <Input onChange={event => setPassword(event.target.value)} placeholder="password" />
      <Input onChange={event => setConfirmpassword(event.target.value)} placeholder="confirm password" />
      <Button onClick={routeChange}>submit</Button>
    </div>
  );
}
export default Register
