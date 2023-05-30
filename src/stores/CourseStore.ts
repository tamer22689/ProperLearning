import { makeAutoObservable } from "mobx";

class CourseStore {

    courses: Array<Course> = [
        { id: 'dfsdfsd', title: '', description: '', imageUrl: '', lecturer: '', rating: 0 }
    ];

    constructor() {
        makeAutoObservable(this);
    }

    
}

const courseStore = new CourseStore()
export default courseStore;