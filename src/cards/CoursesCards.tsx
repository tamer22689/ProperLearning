import { Card, CardBody, CardFooter, Heading, Stack, Text, Divider, Image, Flex } from '@chakra-ui/react'
import CourseArray from '../data/CourseArray';

function CoursesCards() {
  return (
    <Flex wrap={'wrap'} justify={"space-around"} my={5}>
      {CourseArray.courses.map(course => (
      <Card key={course.id} maxW='xs' display={'flex'}>
      <CardBody>
        <Image height={'200px'}
          src={course.imageUrl}
          alt=''
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{course.title}</Heading>
          <Text>{course.description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
      <Text color='blue.600' fontSize='2xl'>Rating: {course.rating}</Text>
      </CardFooter>
    </Card> 
    ))}
  </Flex>
  )
}

export default CoursesCards;