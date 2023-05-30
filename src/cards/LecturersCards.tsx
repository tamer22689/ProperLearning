import { Card, CardBody, CardFooter, Heading, Stack, Text, Divider, Image, Flex } from '@chakra-ui/react'
import lecturerStore from '../stores/LecturerStore'
function LecturersCards() {
  return (
    <Flex>
      {lecturerStore.lecturers.map(lecturer => (
      <Card key={lecturer.id} maxW='sm'>
      <CardBody>
        <Image height={'200px'}
          src={lecturer.imageUrl}
          alt=''
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{lecturer.name}</Heading>
          <Text>{lecturer.description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
      </CardFooter>
    </Card> 
    ))}
  </Flex>
  )}

export default LecturersCards
