import { makeAutoObservable, toJS } from "mobx";
import { Course } from "../model/Course";
class CourseStore {

    courses: Array<Course> = [
        {
            "id": "0995748",
            "title": "Advanced Java Programming",
            "description": "Take your Java programming skills to the next level with advanced topics such as multithreading, networking, and database connectivity.",
            "imageUrl": "src/assets/images/courses/Java-1.png",
            "lecturer": "Professor John Smith",
            "rating": 4.5
        },
        {
            "id": "0995768",
            "title": "C Programming Basics",
            "description": "Get started with the fundamentals of C programming language, including syntax, variables, control structures, and functions.",
            "imageUrl": "src/assets/images/courses/C-2.png",
            "lecturer": "Dr. Emily Brown",
            "rating": 4.2
        },
        {
            "id": "0995887",
            "title": "Python Programming for Beginners",
            "description": "Learn the basics of Python programming language, including variables, data types, control flow, and functions.",
            "imageUrl": "src/assets/images/courses/Python-1.png",
            "lecturer": "Dr. Michael Johnson",
            "rating": 4.7
        },
        {
            "id": "0997894",
            "title": "PHP Web Development",
            "description": "Explore the world of PHP web development and learn how to build dynamic and interactive websites using PHP and MySQL.",
            "imageUrl": "src/assets/images/courses/Php-1.png",
            "lecturer": "Mr. David Thompson",
            "rating": 4.3
        },
        {
            "id": "0927991",
            "title": "Angular for Web Development",
            "description": "Discover the power of Angular framework and learn how to build modern and scalable web applications.",
            "imageUrl": "src/assets/images/courses/Angular-1.png",
            "lecturer": "Ms. Laura Wilson",
            "rating": 4.6
        },
        {
            "id": "0971364",
            "title": "HTML and CSS Fundamentals",
            "description": "Master the basics of HTML and CSS to create well-structured and visually appealing web pages.",
            "imageUrl": "src/assets/images/courses/Html-2.png",
            "lecturer": "Dr. Mark Thompson",
            "rating": 4.4
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    
}

const courseStore = new CourseStore()
export default courseStore;