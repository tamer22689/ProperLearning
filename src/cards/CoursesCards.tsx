import { Card, CardBody, CardFooter, Heading, Stack, Text, ButtonGroup, Button, Divider, Image, Flex } from '@chakra-ui/react'
import courseStore from '../stores/CourseStore'

function CoursesCards() {
  return (
    <Flex>
      {courseStore.courses.map(course => (
      <Card key={course.id} maxW='sm'>
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

export default CoursesCards
