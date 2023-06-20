import { Course } from "../../model/Course";
import { User } from "../../model/User";
import { userApi } from "../../rdx/apis/user.api";
import { userActions } from "../../rdx/stateSlices/user/user.rdx";

import { store } from "../../rdx/store";
import { ELocalStorage } from "../../shared/enums";
import { ILogin } from "../../shared/interfaces";

class UserSvc {
   async login(login:ILogin){
    try{

        const res = await store.dispatch(userApi.endpoints.login.initiate({
            ...login
        })).unwrap()

        localStorage.setItem(ELocalStorage.USER, JSON.stringify(res));

        this.setRdxCurrentUser(res)

        return res
    }catch(err){
        console.error(err);
        this.setRdxCurrentUser(undefined)
        return undefined
    }
       
    }

    logout(){
       this.setRdxCurrentUser(undefined) ;
       
       localStorage.removeItem(ELocalStorage.USER)
    }

    setRdxCurrentUser(user:User | undefined){
        if(user){
            store.dispatch(userActions.setCurrentUser(user))
            store.dispatch(userActions.setLoggedIn(true))
        }else{
            store.dispatch(userActions.reset())
        }
    }


    async StartCourse(course:Course | undefined , userid:string | undefined){
        console.log(userid , course);
        
        if(userid && course){
            
            console.log(course);

          const res = await  store.dispatch(userApi.endpoints.addCourse.initiate({
            userid,
            course :{courseId:course.id , score:0, exams:[]}
          })).unwrap()


          userSvc.setRdxCurrentUser(res)

          localStorage.setItem(ELocalStorage.USER,JSON.stringify(res))

        }
    }
}

export const userSvc =  new UserSvc()