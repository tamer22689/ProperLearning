import { Button } from '@chakra-ui/react'
import './App.css'
import { useNavigate } from 'react-router-dom';

function App(){

  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    const path = "/Login"; 
    navigate(path);
  }

  return (
    <>
      <h1>Hello </h1>
      <Button onClick={routeChange}>Login</Button>
    </>
  )
}

export default App