import { Button } from '@chakra-ui/react';
import './Menu.css'
import { createBrowserRouter,Navigate, RouterProvider, useNavigate } from "react-router-dom";
import HomePage from '../pages/HomePage';



 function Menu() {
    const navigate = useNavigate();
    const routeChangeHomePage = () =>{ 
        const path = "/"; 
        navigate(path);
    }
    const routerChangeCourses=()=>{
        const path = "/Courses"
        navigate(path);

    }
    const routerChangeLecturers=()=>{
        const path = "/Lecturers"
        navigate(path);

    }
    const routerChangeExams=()=>{
        const path = "/Exams"
        navigate(path);

    }
    const routerChangeContactUs=()=>{
        const path = "/ContactUs"
        navigate(path);

    }
    return (
        <div className='Menu'>
            <Button onClick={routeChangeHomePage}>Home Page</Button>
            <Button onClick={routerChangeCourses}>Courses</Button>
            <Button onClick={routerChangeLecturers}>Lecturers</Button>
            <Button onClick={routerChangeExams}>Exams</Button>
            <Button onClick={routerChangeContactUs}>Contact Us</Button>
        </div>
    );
}
 
 export default Menu
 