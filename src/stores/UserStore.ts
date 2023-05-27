import { makeAutoObservable } from "mobx";

class UserStore {
    loggedIn = false;
    users: Array<User> = [];

    constructor() {
        makeAutoObservable(this);
    }
    

    get isLoggedIn() {
        return this.loggedIn;
    }
    

    setLoggedIn(status: boolean) {
        this.loggedIn = status;
    }
    

    addUser(user: User) {
        console.log(user);
        this.users.push(user);
    }
    
    login(username: string, password: string) {
        const filteredUsers = this.users.filter(user => user.username === username);
        if(filteredUsers.length !== 1) {
            return false;
        }
        if(filteredUsers[0].password === password) {
            this.setLoggedIn(true);
            return true;
        }
    }


}

export default new UserStore();