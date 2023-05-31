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
    
    async login(username: string, password: string) {
        // const filteredUsers = this.users.filter(user => user.username === username);
        // if(filteredUsers.length !== 1) {
        //     return false;
        // }
        // if(filteredUsers[0].password === password) {
        //     this.setLoggedIn(true);
        //     return true;
        // }
        const requestBody = {
            username: username,
            password: password
        }
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json",
              },
        });
        console.log(response)
        if(response.status !== 200) {
            this.setLoggedIn(false);
            return Promise.resolve(false);
        }
        this.setLoggedIn(true);
        return Promise.resolve(true);
    }

    logout() {
        this.setLoggedIn(false);
    }


}

export default new UserStore();