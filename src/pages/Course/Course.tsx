import {useCallback, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { Button, Grid, GridItem } from "@chakra-ui/react"
import { courseSvc } from '../../services/course/course.svc'
import { Course as CourseData, CourseSeciton } from '../../model/Course'

import { useSelector } from 'react-redux'

import { userSvc } from '../../services/user/user.svc'

import { RootState } from '../../rdx/store'

import Layout from '../../shared/Layaut/Layout'
import { Header } from '../../shared/Layaut/components/Header'

import styles from './Course.module.css'

export const Course = () => {

  const [course, setCourse] = useState<CourseData>()

  const [sectionContent,setSectionContent] = useState<string>();

  const [courseEnrolled ,setCourseEnrolled] = useState<boolean>(false);

  const {id} = useParams();

  const {currentUser} = useSelector((state:RootState)=> state.rdxCurrentUser)

  useEffect(() => {
      (async()=>{
        if(id){
          const res =await courseSvc.getCourseById({id})

          setSectionContent(res?.content[0].material)

          if(currentUser.courses && res){
            if(currentUser.courses.find(item=> item.courseId === res.id) ){
              setCourseEnrolled(true);
            }
          }

          setCourse(res);
        }
        
      })()
  }, [currentUser.courses, id])

  const onListItemClick = useCallback((section:CourseSeciton)=>{
    setSectionContent(section.material)
  },[]);

  const onCourseStart = useCallback((course:CourseData | undefined)=>{
    console.log(currentUser);
    
    userSvc.StartCourse(course, currentUser?._id);
  },[currentUser])

  return (
    <Layout>

    <Header/>

    <div className={styles.container}>

      <Grid
        h={'80vh'}
        w={'100vw'}
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={2}
        >
        <GridItem rowSpan={2} colSpan={1} bg='tomato' className={styles.list}>
          {course?.content.map(item=>{
            return <div key={item.title} className={styles.section} onClick={()=>onListItemClick(item)}>{item.title}</div>
          })}

        </GridItem>

        <GridItem rowSpan={2} colSpan={2} bg='papayawhip' className={styles.sectionContent} >
          {sectionContent}
        </GridItem>
      </Grid>

    </div>

    <div className="">
      {!courseEnrolled && <Button onClick={()=>onCourseStart(course)}>Enroll</Button>}
    </div>

    </Layout>
  )
}


