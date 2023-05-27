import { Button } from '@chakra-ui/react';
import './Menu.css'

 function Menu() {
    return (
        <div className='Menu'>
            <Button>Home Page</Button>
            <Button>Courses</Button>
            <Button>Lecturers</Button>
            <Button>Exams</Button>
            <Button>About</Button>
        </div>
    );
}
 
 export default Menu
 