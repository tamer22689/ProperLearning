import {useCallback, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { Grid, GridItem } from "@chakra-ui/react"
import { courseSvc } from '../../services/course/course.svc'
import { Course as CourseData, CourseSeciton } from '../../model/Course'

import styles from './Course.module.css'
import Layout from '../../shared/Layaut/Layout'
import { Header } from '../../shared/Layaut/components/Header'

export const Course = () => {

  const [course, setCourse] = useState<CourseData>()

  const [sectionContent,setSectionContent] = useState<string>()

  const {id} = useParams()

  useEffect(() => {
      (async()=>{
        if(id){
          const res =await courseSvc.getCourseById({id})

          setSectionContent(res?.content[0].material)

          setCourse(res);
        }
        
      })()
  }, [id])

  const onListItemClick = useCallback((section:CourseSeciton)=>{
    setSectionContent(section.material)
  },[]);

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
            return <div className={styles.section} onClick={()=>onListItemClick(item)}>{item.title}</div>
          })}

        </GridItem>

        <GridItem rowSpan={2} colSpan={2} bg='papayawhip' className={styles.sectionContent} >
          {sectionContent}
        </GridItem>
      </Grid>

    </div>
    </Layout>
  )
}


