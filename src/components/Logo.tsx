import { Image } from "@chakra-ui/react";
import Logo1 from "../assets/images/Logo1.png";

function Logo() {
  return (
    <div>
          <Image
            borderRadius='full'
            boxSize='50px'
            src={Logo1}
            alt='logo'
          />
    </div>
  )
}

export default Logo
