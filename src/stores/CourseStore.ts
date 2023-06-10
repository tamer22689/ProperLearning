import { makeAutoObservable} from "mobx";
import { Course } from "../model/Course";

class CourseStore{
    courses:Array<Course>=[];
    currentCourse:Course|undefined=undefined;

    constructor() {
        makeAutoObservable(this);
    }

    async addCourse(course: Course) {

        const response = await fetch("http://localhost:3001/addCourse", {
            method: "POST",
            body: JSON.stringify(course),
            headers: {
                "Content-Type": "application/json",
              },
        });
        console.log(response)
        if(response.status !== 200) {
            return false;
        }
        return true;
    }


}
export default new CourseStore();