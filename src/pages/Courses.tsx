import { Flex } from "@chakra-ui/react";
import courseStore from "../stores/CourseStore";

const Courses = () => {
  return (
    <Flex>
      {courseStore.courses.map(course => (
        <CourseCard course={course} />
      ))}
    </Flex>
  );
};

export default Courses;
