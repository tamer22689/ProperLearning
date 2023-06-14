import { makeAutoObservable, toJS } from "mobx";
import { User } from "../model/User";
import { ELocalStorage } from "../shared/enums";

class UserStore {
    loggedIn = false;
    users: Array<User> = [];
    currentUser: User | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
    }


    get isLoggedIn() {
        return this.loggedIn;
    }


    setLoggedIn(status: boolean) {
        this.loggedIn = status;
    }


    async addUser(user: User) {

        const response = await fetch("http://localhost:3001/createUser", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response)
        if (response.status !== 200) {
            return false;
        }
        return true;
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
        try {
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
            if (response.status !== 200) {
                this.setLoggedIn(false);
                return Promise.resolve(false);
            }
            this.setLoggedIn(true);

            this.currentUser = await response.json() as User;

            localStorage.setItem(ELocalStorage.USER, JSON.stringify(toJS(this.currentUser)));

            console.log(toJS(this.currentUser));
            return Promise.resolve(true);

        } catch (error) {
            this.setLoggedIn(false);
            console.log(error);
            return false;

        }

    }

    logout() {
        this.setLoggedIn(false);
        this.currentUser = undefined;
        localStorage.removeItem(ELocalStorage.USER);
    }

    setUserLoggedIn(loggedin: boolean) {
        this.setLoggedIn(loggedin)
    }

    setCurrentUser(user: User| undefined) {

        this.currentUser = user
    }


}

export default new UserStore();