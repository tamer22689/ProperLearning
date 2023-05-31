import { Card, CardBody, Heading, Stack, Text, Image, Flex } from '@chakra-ui/react'
import lecturerStore from '../stores/LecturerStore'
function LecturersCards() {
  return (
    <Flex position={'relative'} top={'40px'}>
      {lecturerStore.lecturers.map(lecturer => (
      <Card key={lecturer.id} maxW='sm' display={'flex'}>
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
