import { Card, CardBody, Heading, Stack, Text, Image, Flex } from '@chakra-ui/react'
import LecturersArray from '../data/LecturerArray'
function LecturersCards() {
  return (
    <Flex wrap={'wrap'} justify={"space-around"} my={5}>
      {LecturersArray.lecturers.map(lecturer => (
      <Card key={lecturer.id} maxW='xs' display={'flex'}>
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
    </Card> 
    ))}
  </Flex>
  )}

export default LecturersCards
