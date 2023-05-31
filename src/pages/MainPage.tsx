import { Flex } from "@chakra-ui/react"
import CoursesCards from "../cards/CoursesCards"
import LecturersCards from "../cards/LecturersCards"

const MainPage = () => {
  return (
    <Flex direction={"column"}>
        <CoursesCards />
        <LecturersCards />
    </Flex>
  )
}

export default MainPage