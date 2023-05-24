import { Button } from "@chakra-ui/react"
import { useState } from "react"

import "./UserInfo.css"

const UserInfo = () => {
    const [username, setUsername] = useState("")

  return (
    <div className="container">
        <div>
            Hello, {username}
        </div>
        <Button>Login</Button>
        <Button>Register</Button>
    </div>
  )
}

export default UserInfo