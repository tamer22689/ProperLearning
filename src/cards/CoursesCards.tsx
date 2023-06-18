import {useCallback, useEffect, useState} from 'react'
import { Card, CardBody, CardFooter, Heading, Stack, Text, Divider, Image, Flex } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom';

import styles from './CoursesCards.module.css'
import { Course } from '../model/Course';
import { courseSvc } from '../services/course/course.svc';

function CoursesCards() {

  const navigate = useNavigate()

  const [courses,setCourses] =useState<Course[]>([])

  const onCourceClicked = useCallback(
    (courseId:string) => {
      navigate(`/course/${courseId}`)
    },
    [navigate]
  )

  useEffect(() => {
    (async()=>{
    const coursesArray = await courseSvc.getCourses()
    if(coursesArray){
      setCourses(coursesArray);
    }
    })()
  }, [])

  return (
    <Flex wrap={'wrap'} justify={"space-around"} my={5} >
      {courses.map(course => (
      <Card key={course.id} maxW='xs' display={'flex'} onClick={()=>onCourceClicked(course.id)}>
      <CardBody  className={styles.card}>
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