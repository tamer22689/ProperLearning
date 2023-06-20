
export interface User {
    isAdmin: boolean;
    id: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    email: string
    courses: Array<UserCourse>
}

export interface UserCourse {
    courseId: string;
    score: number;
    exams: UserExam[]
}

export interface UserExam {
    examid: string;
    score: number;
}

