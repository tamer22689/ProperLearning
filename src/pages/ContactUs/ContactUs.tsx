import { useState } from "react";
import './ContactUs.css'

const ContactUs = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [descreption, setDescreption] = useState('');
  const [Message, setMessage] = useState('');

  const onSubmit =()=>{
    if(descreption){
      setMessage('Ok')
    }else{
      setMessage('Error')
    }
  }

  return (
    <div className="form-Container">
      <div className="form">
        <input onChange={event => setUsername(event.target.value)} placeholder="username" />
        <input onChange={event => setEmail(event.target.value)} placeholder="email" />
        <input onChange={event => setDescreption(event.target.value)} placeholder="descreption" />
        <button onClick={onSubmit}>submit</button>
        <div className="Message">{Message}</div>
      </div>
    </div>
  );
};

export default ContactUs;
