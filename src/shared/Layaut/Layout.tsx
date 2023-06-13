import React, { useEffect } from 'react'
import { ELocalStorage } from '../enums';
import UserStore from '../../stores/UserStore';
import { User } from '../../model/User';

type Props = React.PropsWithChildren;

const Layout = ({ children }: Props) => {

    useEffect(() => {
        (() => {
            if (localStorage.getItem(ELocalStorage.USER)) {


                const user = JSON.parse(localStorage.getItem(ELocalStorage.USER) || '') as User;
                console.log('user in layout ', user);

                if (user) {
                    UserStore.setCurrentUser(user)
                    UserStore.setLoggedIn(true);
                } else {
                    UserStore.setCurrentUser(undefined)
                    UserStore.setLoggedIn(false)
                }
            }

        })()

    }, [])

    return (
        <div>
            <main>{children}</main>
        </div>
    )
}

export default Layout
