import { Button } from '@chakra-ui/react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const ResponsiveAppBar = () => {
    const navigate = useNavigate();

    function routeTo(to: string) {
        navigate(to);
    }
    return (
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',minWidth:'150px'}}>
            <Button onClick={() => routeTo("/")} sx={{ minWidth: 200,cursor:'pointer'}}>Home Page</Button>
            <Button onClick={() => routeTo("Courses")} sx={{ minWidth: 200,cursor:'pointer' }}>Courses</Button>
            <Button onClick={() => routeTo("Lecturers")} sx={{ minWidth: 200,cursor:'pointer' }}>Lecturers</Button>
            <Button onClick={() => routeTo("Exams")} sx={{ minWidth: 200,cursor:'pointer' }}>Exams</Button>
            <Button onClick={() => routeTo("ContactUs")} sx={{ minWidth: 200,cursor:'pointer' }}>Contact Us</Button>
        </Box>
    );
}

export default ResponsiveAppBar