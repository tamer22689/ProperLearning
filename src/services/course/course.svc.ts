import { courseApi } from "../../rdx/apis/course.api"
import { store } from "../../rdx/store"

class CourseSvc{
  async  getCourses(){
        try{
            const res = await store.dispatch(courseApi.endpoints.getCourses.initiate(undefined)).unwrap()

            return res
        } catch(err){
            console.error(err);
            return undefined
            
        }
    }

    async  getCourseById({id}:{id:string}){
        try{
            const res = await store.dispatch(courseApi.endpoints.getCourseById.initiate(id)).unwrap()

            return res
        } catch(err){
            console.error(err);
            return undefined
            
        }
    }
}
export const courseSvc =new CourseSvc()