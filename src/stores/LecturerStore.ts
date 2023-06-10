import { makeAutoObservable} from "mobx";
import { Lecturer } from "../model/Lecturer";

class LecturerStore{
    lecturers:Array<Lecturer>=[];
    currentLecturer:Lecturer|undefined=undefined;

    constructor() {
        makeAutoObservable(this);
    }

    async addLecturer(lecturer: Lecturer) {

        const response = await fetch("http://localhost:3001/addLecturer", {
            method: "POST",
            body: JSON.stringify(lecturer),
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
export default new LecturerStore();