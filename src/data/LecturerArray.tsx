import { makeAutoObservable } from "mobx";
import { Lecturer } from "../model/Lecturer";

class LecturerStore {

    lecturers: Array<Lecturer> = [
        {
            "id": "0223547216",
            "name":"Professor John Smith",
            "description": "Advanced Java Programming",
            "imageUrl": "src/assets/images/lecturers/Professor John Smith.jpeg",
        },
        {
            "id": "3368741289",
            "name":"Dr. Emily Brown",
            "description": "C Programming Basics",
            "imageUrl": "src/assets/images/lecturers/Dr. Emily Brown.jpg",
        },
        {
            "id": "0223562387",
            "name":"Dr. Michael Johnson",
            "description": "Python Programming for Beginners",
            "imageUrl": "src/assets/images/lecturers/Dr. Michael Johnson.jpg",
        },
        {
            "id": "5023547621",
            "name":"Mr. David Thompson",
            "description": "PHP Web Development",
            "imageUrl": "src/assets/images/lecturers/Mr. David Thompson.jpeg",
        },
        {
            "id": "0523547612",
            "name":"Ms. Laura Wilson",
            "description": "Angular for Web Development",
            "imageUrl": "src/assets/images/lecturers/Ms. Laura Wilson.png",
        },
        {
            "id": "0753546824",
            "name":"Dr. Mark Thompson",
            "description": "HTML and CSS Fundamentals",
            "imageUrl": "src/assets/images/lecturers/Dr. Mark Thompson.jpeg",
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    
}

const lecturerStore = new LecturerStore()
export default lecturerStore;